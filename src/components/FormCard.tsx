"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  PHONE,
  PHONE_HREF,
  BRAND,
  SERVICE_CONCIERGE,
  SERVICE_GLP1,
  CONCIERGE_GOALS,
  WEIGHTLOSS_INTENTS,
} from "@/lib/content";
import { Icon } from "@/components/icons";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    MegaTag?: {
      trackEvent?: (event: string, data: Record<string, unknown>) => void;
    };
  }
}

// RFC-5322-lite — the lead API server-validates as well.
const EMAIL_RE = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
// NANP: area code + exchange each start 2-9 and may not be N11.
const NANP_RE = /^[2-9](?!11)\d{2}[2-9](?!11)\d{2}\d{4}$/;

type FieldKey =
  | "serviceInterest"
  | "conciergeGoal"
  | "weightlossIntent"
  | "firstName"
  | "lastName"
  | "email"
  | "phone";

interface FormState {
  serviceInterest: string;
  conciergeGoal: string;
  weightlossIntent: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const INITIAL: FormState = {
  serviceInterest: "",
  conciergeGoal: "",
  weightlossIntent: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

type FieldErrors = Partial<Record<FieldKey, string>>;

// DOM order — used to focus the first invalid field.
const FOCUS_ORDER: FieldKey[] = [
  "serviceInterest",
  "conciergeGoal",
  "weightlossIntent",
  "firstName",
  "lastName",
  "email",
  "phone",
];

function requiredKeys(data: FormState): FieldKey[] {
  const keys: FieldKey[] = ["serviceInterest"];
  if (data.serviceInterest === SERVICE_CONCIERGE) keys.push("conciergeGoal");
  else if (data.serviceInterest === SERVICE_GLP1) keys.push("weightlossIntent");
  keys.push("firstName", "lastName", "email", "phone");
  return keys;
}

function validateField(key: FieldKey, value: string): string | undefined {
  switch (key) {
    case "serviceInterest":
      return value ? undefined : "Please choose the service you're interested in.";
    case "conciergeGoal":
      return value ? undefined : "Please select an option.";
    case "weightlossIntent":
      return value ? undefined : "Please select an option.";
    case "firstName":
      return value.trim() ? undefined : "First name is required.";
    case "lastName":
      return value.trim() ? undefined : "Last name is required.";
    case "email": {
      const v = value.trim();
      if (!v) return "Email address is required.";
      return EMAIL_RE.test(v) ? undefined : "Please enter a valid email address.";
    }
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Phone number is required.";
      if (digits.length !== 10) return "Please enter a valid 10-digit phone number.";
      return NANP_RE.test(digits) ? undefined : "Please enter a valid US phone number.";
    }
  }
}

function validateAll(data: FormState): FieldErrors {
  const errors: FieldErrors = {};
  requiredKeys(data).forEach((k) => {
    const err = validateField(k, data[k]);
    if (err) errors[k] = err;
  });
  return errors;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (!digits) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isQualified(data: FormState): boolean {
  if (data.serviceInterest === SERVICE_CONCIERGE) {
    return CONCIERGE_GOALS.some(
      (g) => g.value === data.conciergeGoal && g.qualified,
    );
  }
  if (data.serviceInterest === SERVICE_GLP1) {
    return WEIGHTLOSS_INTENTS.some(
      (w) => w.value === data.weightlossIntent && w.qualified,
    );
  }
  return false;
}

interface FormCardProps {
  idPrefix?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  /** URL slug stored on the lead for downstream attribution. */
  routeSlug?: string;
}

export function FormCard({
  idPrefix = "form",
  eyebrow = "Request your consultation",
  heading = "See if you qualify",
  subheading = "Choose your service and share a few details — no insurance needed, no pressure.",
  routeSlug,
}: FormCardProps): React.ReactElement {
  const { submit } = useMegaLeadForm();

  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inFlightRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});

  const clearError = (key: FieldKey, value: string): void => {
    setErrors((prev) => {
      if (!prev[key] || validateField(key, value)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const update = <K extends keyof FormState>(k: K, v: FormState[K]): void => {
    setData((d) => ({ ...d, [k]: v }));
    clearError(k as FieldKey, String(v));
  };

  const selectService = (service: string): void => {
    // Switching services resets the other branch's answer + errors.
    setData((d) => ({
      ...d,
      serviceInterest: service,
      conciergeGoal: service === SERVICE_CONCIERGE ? d.conciergeGoal : "",
      weightlossIntent: service === SERVICE_GLP1 ? d.weightlossIntent : "",
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.serviceInterest;
      delete next.conciergeGoal;
      delete next.weightlossIntent;
      return next;
    });
    setTouched((t) => ({ ...t, serviceInterest: true }));
  };

  const markTouched = (k: FieldKey, currentValue: string): void => {
    setTouched((t) => ({ ...t, [k]: true }));
    const err = validateField(k, currentValue);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[k] = err;
      else delete next[k];
      return next;
    });
  };

  const routeFor = (): string =>
    routeSlug || (typeof window !== "undefined" ? window.location.pathname : "/");

  const collectFields = (qualified: boolean): Record<string, unknown> => ({
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim(),
    phone: data.phone.replace(/\D/g, ""),
    serviceInterest: data.serviceInterest,
    conciergeGoal: data.conciergeGoal,
    weightlossIntent: data.weightlossIntent,
    qualified,
    form_route: routeFor(),
  });

  const fireTracking = (qualified: boolean): void => {
    if (typeof window === "undefined") return;
    const fields = collectFields(qualified);
    // Hard-rule dataLayer push — every field as its own key, on EVERY submit.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submission", ...fields });
    // Only a QUALIFIED lead fires the Google conversion event.
    if (qualified) {
      window.dataLayer.push({ event: "form_submit", ...fields });
      window.MegaTag?.trackEvent?.("form_submit", fields);
    }
  };

  const focusFirstInvalid = (allErrors: FieldErrors): void => {
    const firstBad = FOCUS_ORDER.find((k) => allErrors[k]);
    if (!firstBad) return;
    const el = fieldRefs.current[firstBad];
    try {
      (el as HTMLInputElement)?.focus({ preventScroll: false });
    } catch {
      el?.focus();
    }
  };

  const handleSubmitClick = (): void => {
    if (inFlightRef.current || submitting || submitted) return;
    const allErrors = validateAll(data);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched(Object.fromEntries(requiredKeys(data).map((k) => [k, true])));
      focusFirstInvalid(allErrors);
      return;
    }
    formRef.current?.requestSubmit();
  };

  const handleSubmit = async (): Promise<void> => {
    if (inFlightRef.current || submitting || submitted) return;
    inFlightRef.current = true;
    setSubmitting(true);
    const qualified = isQualified(data);
    try {
      await submit(collectFields(qualified));
      fireTracking(qualified);
      setSubmitted(true);
    } catch {
      // The network POST can fail, but the lead is still captured server-side
      // by the optimizer's own listener. Fire tracking and show the thank-you
      // so the visitor is never stranded on a dead form.
      fireTracking(qualified);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const showErr = (k: FieldKey): boolean => Boolean(touched[k] && errors[k]);
  const errId = (k: FieldKey): string => `${idPrefix}-${k}-error`;
  const inputBase =
    "w-full bg-white border border-[var(--color-border)] rounded-[10px] px-4 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-accent)]/45 focus:outline-none transition-colors";
  const inputCls = (k: FieldKey): string =>
    `${inputBase} ${showErr(k) ? "lp-input-error" : ""}`;

  if (submitted) {
    return (
      <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10 shadow-soft">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--color-accent-soft)]">
            <Icon
              name="check-circle"
              className="w-7 h-7 text-[var(--color-primary)]"
              strokeWidth={2.2}
            />
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-ink)]">
            Thank you — we&apos;ve got it.
          </h3>
          <p className="text-[var(--color-ink-soft)] text-base leading-relaxed">
            Our team will reach out shortly to help you take the next step with
            Nanoom Medical Group. We look forward to caring for you.
          </p>
          <p className="text-[var(--color-muted)] text-sm">
            Prefer to talk now? Call{" "}
            <a
              href={PHONE_HREF}
              className="font-semibold text-[var(--color-primary)] whitespace-nowrap"
            >
              {PHONE}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const services = [
    { value: SERVICE_GLP1, label: "Weight Loss", sub: "GLP-1 telehealth" },
    { value: SERVICE_CONCIERGE, label: "Concierge", sub: "Membership medicine" },
  ];

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit();
      }}
      noValidate
      aria-label="Consultation request"
      className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-soft space-y-5"
    >
      <div className="space-y-1">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="font-display text-[1.6rem] md:text-[1.75rem] leading-tight text-[var(--color-ink)]">
          {heading}
        </h3>
        <p className="text-sm text-[var(--color-ink-soft)]">{subheading}</p>
      </div>

      {/* Primary control — service select, first & above the fold */}
      <fieldset
        className="space-y-2"
        aria-invalid={showErr("serviceInterest") || undefined}
        aria-describedby={
          showErr("serviceInterest") ? errId("serviceInterest") : undefined
        }
      >
        <legend className="text-sm font-semibold text-[var(--color-ink)] mb-1">
          Which service are you interested in?
        </legend>
        <div
          ref={(el) => {
            fieldRefs.current.serviceInterest = el;
          }}
          tabIndex={-1}
          className="grid grid-cols-2 gap-2.5"
        >
          {services.map((s) => (
            <label key={s.value} className="cursor-pointer">
              <input
                type="radio"
                name={`${idPrefix}-serviceInterest`}
                value={s.value}
                checked={data.serviceInterest === s.value}
                onChange={() => selectService(s.value)}
                className="sr-only peer"
                disabled={submitting}
              />
              <div className="h-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-left transition-all hover:border-[var(--color-primary)] peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary-soft)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-accent)] peer-focus-visible:ring-offset-1">
                <span className="block font-semibold text-[15px] text-[var(--color-ink)]">
                  {s.label}
                </span>
                <span className="block text-xs text-[var(--color-muted)] mt-0.5">
                  {s.sub}
                </span>
              </div>
            </label>
          ))}
        </div>
        {showErr("serviceInterest") && (
          <p id={errId("serviceInterest")} role="alert" className="lp-field-error">
            {errors.serviceInterest}
          </p>
        )}
      </fieldset>

      {/* Conditional Q2 — branches on the selected service */}
      {data.serviceInterest === SERVICE_CONCIERGE && (
        <div>
          <label
            htmlFor={`${idPrefix}-conciergeGoal`}
            className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5"
          >
            What are you looking for in a doctor?
          </label>
          <select
            ref={(el) => {
              fieldRefs.current.conciergeGoal = el;
            }}
            id={`${idPrefix}-conciergeGoal`}
            name="conciergeGoal"
            value={data.conciergeGoal}
            onChange={(e) => update("conciergeGoal", e.target.value)}
            onBlur={(e) => markTouched("conciergeGoal", e.target.value)}
            className={inputCls("conciergeGoal")}
            aria-invalid={showErr("conciergeGoal") || undefined}
            aria-describedby={
              showErr("conciergeGoal") ? errId("conciergeGoal") : undefined
            }
            disabled={submitting}
          >
            <option value="">Select what matters most…</option>
            {CONCIERGE_GOALS.map((g) => (
              <option key={g.value} value={g.value}>
                {g.value}
              </option>
            ))}
          </select>
          {showErr("conciergeGoal") && (
            <p id={errId("conciergeGoal")} role="alert" className="lp-field-error">
              {errors.conciergeGoal}
            </p>
          )}
        </div>
      )}

      {data.serviceInterest === SERVICE_GLP1 && (
        <div>
          <label
            htmlFor={`${idPrefix}-weightlossIntent`}
            className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5"
          >
            Are you currently looking for a medically supervised weight-loss
            program?
          </label>
          <select
            ref={(el) => {
              fieldRefs.current.weightlossIntent = el;
            }}
            id={`${idPrefix}-weightlossIntent`}
            name="weightlossIntent"
            value={data.weightlossIntent}
            onChange={(e) => update("weightlossIntent", e.target.value)}
            onBlur={(e) => markTouched("weightlossIntent", e.target.value)}
            className={inputCls("weightlossIntent")}
            aria-invalid={showErr("weightlossIntent") || undefined}
            aria-describedby={
              showErr("weightlossIntent") ? errId("weightlossIntent") : undefined
            }
            disabled={submitting}
          >
            <option value="">Select an option…</option>
            {WEIGHTLOSS_INTENTS.map((w) => (
              <option key={w.value} value={w.value}>
                {w.value}
              </option>
            ))}
          </select>
          {showErr("weightlossIntent") && (
            <p
              id={errId("weightlossIntent")}
              role="alert"
              className="lp-field-error"
            >
              {errors.weightlossIntent}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${idPrefix}-firstName`} className="sr-only">
            First name
          </label>
          <input
            ref={(el) => {
              fieldRefs.current.firstName = el;
            }}
            id={`${idPrefix}-firstName`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            onBlur={(e) => markTouched("firstName", e.target.value)}
            className={inputCls("firstName")}
            aria-invalid={showErr("firstName") || undefined}
            aria-describedby={showErr("firstName") ? errId("firstName") : undefined}
            disabled={submitting}
          />
          {showErr("firstName") && (
            <p id={errId("firstName")} role="alert" className="lp-field-error">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-lastName`} className="sr-only">
            Last name
          </label>
          <input
            ref={(el) => {
              fieldRefs.current.lastName = el;
            }}
            id={`${idPrefix}-lastName`}
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            onBlur={(e) => markTouched("lastName", e.target.value)}
            className={inputCls("lastName")}
            aria-invalid={showErr("lastName") || undefined}
            aria-describedby={showErr("lastName") ? errId("lastName") : undefined}
            disabled={submitting}
          />
          {showErr("lastName") && (
            <p id={errId("lastName")} role="alert" className="lp-field-error">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="sr-only">
          Email address
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.email = el;
          }}
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={(e) => markTouched("email", e.target.value)}
          className={inputCls("email")}
          aria-invalid={showErr("email") || undefined}
          aria-describedby={showErr("email") ? errId("email") : undefined}
          disabled={submitting}
        />
        {showErr("email") && (
          <p id={errId("email")} role="alert" className="lp-field-error">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className="sr-only">
          Phone number
        </label>
        <input
          ref={(el) => {
            fieldRefs.current.phone = el;
          }}
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          autoComplete="tel"
          placeholder="Phone number"
          value={data.phone}
          onChange={(e) => update("phone", formatPhone(e.target.value))}
          onBlur={(e) => markTouched("phone", e.target.value)}
          className={inputCls("phone")}
          aria-invalid={showErr("phone") || undefined}
          aria-describedby={showErr("phone") ? errId("phone") : undefined}
          disabled={submitting}
        />
        {showErr("phone") && (
          <p id={errId("phone")} role="alert" className="lp-field-error">
            {errors.phone}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmitClick}
        disabled={submitting || submitted}
        className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full px-6 py-3.5 font-semibold text-base shadow-cta transition-colors disabled:opacity-55 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      >
        {submitting ? "Submitting…" : BRAND.primaryCta}
        {!submitting && (
          <Icon name="arrow-right" className="w-4 h-4" strokeWidth={2.4} />
        )}
      </button>

      <p className="text-xs text-center leading-relaxed text-[var(--color-muted)]">
        By submitting, you agree to be contacted about your inquiry. We respect
        your privacy and never sell your information.
      </p>
    </form>
  );
}
