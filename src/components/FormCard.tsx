"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { PHONE, BRAND } from "@/lib/content";
import { Icon } from "@/components/icons";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    MegaTag?: { trackEvent?: (event: string, data: Record<string, unknown>) => void };
  }
}

// RFC-5322-lite — the lead API server-validates as well.
const EMAIL_RE = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
// NANP: area code + exchange each start 2-9 and may not be N11.
const NANP_RE = /^[2-9](?!11)\d{2}[2-9](?!11)\d{2}\d{4}$/;

type FieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "investOutOfPocket"
  | "englishCare";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  healthConcerns: string;
  investOutOfPocket: "yes" | "no" | "";
  englishCare: "yes" | "no" | "";
}

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  healthConcerns: "",
  investOutOfPocket: "",
  englishCare: "",
};

type FieldErrors = Partial<Record<FieldKey, string>>;

const REQUIRED_ORDER: FieldKey[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "investOutOfPocket",
  "englishCare",
];

function validateField(key: FieldKey, value: string): string | undefined {
  switch (key) {
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
    case "investOutOfPocket":
      return value ? undefined : "Please select Yes or No.";
    case "englishCare":
      return value ? undefined : "Please select Yes or No.";
  }
}

function validateAll(data: FormState): FieldErrors {
  const errors: FieldErrors = {};
  REQUIRED_ORDER.forEach((k) => {
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

const QUESTIONS = {
  investOutOfPocket:
    "Are you open to investing in your health out of pocket? Our practice does not accept insurance.",
  englishCare: "Are you comfortable receiving care and communicating in English?",
} as const;

interface FormCardProps {
  idPrefix?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  /** Per-route URL slug stored on the lead for downstream attribution. */
  routeSlug?: string;
}

export function FormCard({
  idPrefix = "form",
  eyebrow = "Free Health Assessment",
  heading = "Schedule Your Free Health Assessment",
  subheading = "No insurance needed. No pressure. Just real answers from Dr. Vaughan's team.",
  routeSlug,
}: FormCardProps): React.ReactElement {
  const { submit } = useMegaLeadForm();

  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inFlightRef = useRef(false);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});

  const update = <K extends keyof FormState>(k: K, v: FormState[K]): void => {
    setData((d) => ({ ...d, [k]: v }));
    if (k === "healthConcerns") return;
    const key = k as FieldKey;
    setErrors((prev) => {
      if (!prev[key]) return prev;
      if (validateField(key, String(v))) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
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

  const fireTracking = (qualified: boolean): void => {
    if (typeof window === "undefined") return;
    const fields = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: data.phone.replace(/\D/g, ""),
      healthConcerns: data.healthConcerns.trim(),
      investOutOfPocket: data.investOutOfPocket,
      englishCare: data.englishCare,
      qualified,
      form_route: routeFor(),
    };
    // Hard-rule dataLayer push — every field as its own key.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submission", ...fields });
    // Only a QUALIFIED lead fires the conversion event.
    if (qualified) {
      window.dataLayer.push({ event: "form_submit", ...fields });
      window.MegaTag?.trackEvent?.("form_submit", fields);
    }
  };

  const focusFirstInvalid = (allErrors: FieldErrors): void => {
    const firstBad = REQUIRED_ORDER.find((k) => allErrors[k]);
    if (!firstBad) return;
    const el = fieldRefs.current[firstBad];
    try {
      (el as HTMLInputElement)?.focus({ preventScroll: false });
    } catch {
      el?.focus();
    }
  };

  const handleValidateAndSubmit = async (): Promise<void> => {
    if (inFlightRef.current || submitting || submitted) return;
    const allErrors = validateAll(data);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched(Object.fromEntries(REQUIRED_ORDER.map((k) => [k, true])));
      focusFirstInvalid(allErrors);
      return;
    }
    inFlightRef.current = true;
    setSubmitting(true);
    const qualified =
      data.investOutOfPocket === "yes" && data.englishCare === "yes";
    try {
      await submit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.replace(/\D/g, ""),
        healthConcerns: data.healthConcerns.trim(),
        investOutOfPocket: data.investOutOfPocket,
        englishCare: data.englishCare,
        qualified,
        route_slug: routeFor(),
      });
      fireTracking(qualified);
      setSubmitted(true);
    } catch {
      // The network POST can fail, but the lead is still captured server-side
      // by the optimizer's own listener. Fire our tracking and show the
      // thank-you so the visitor is never stranded on a dead form.
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
              name="check"
              className="w-7 h-7 text-[var(--color-success)]"
              strokeWidth={2.4}
            />
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-ink)]">
            Thank you — we've got it.
          </h3>
          <p className="text-[var(--color-ink-soft)] text-base leading-relaxed">
            Our team will reach out shortly to schedule your free health assessment
            with Dr. Vaughan. We can&apos;t wait to help you get real answers.
          </p>
          <p className="text-[var(--color-muted)] text-sm">
            Prefer to talk now? Call{" "}
            <a
              href="tel:+17144349355"
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void handleValidateAndSubmit();
      }}
      noValidate
      aria-label="Free Health Assessment request"
      className="bg-white border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-soft space-y-4"
    >
      <div className="space-y-1">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="font-display text-[1.6rem] md:text-[1.75rem] leading-tight text-[var(--color-ink)]">
          {heading}
        </h3>
        <p className="text-sm text-[var(--color-ink-soft)]">{subheading}</p>
      </div>

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

      <div>
        <label
          htmlFor={`${idPrefix}-healthConcerns`}
          className="block text-sm font-medium text-[var(--color-ink)] mb-1.5"
        >
          What&apos;s going on with your health?{" "}
          <span className="text-[var(--color-muted)] font-normal">(optional)</span>
        </label>
        <textarea
          id={`${idPrefix}-healthConcerns`}
          name="healthConcerns"
          rows={2}
          placeholder="Symptoms, conditions, or what you're hoping to solve…"
          value={data.healthConcerns}
          onChange={(e) => update("healthConcerns", e.target.value)}
          className={`${inputBase} resize-none`}
          disabled={submitting}
        />
      </div>

      {REQUIRED_ORDER.filter(
        (k) => k === "investOutOfPocket" || k === "englishCare",
      ).map((key) => (
        <fieldset
          key={key}
          className="space-y-2"
          aria-invalid={showErr(key) || undefined}
          aria-describedby={showErr(key) ? errId(key) : undefined}
        >
          <legend className="text-sm text-[var(--color-ink)] font-medium leading-snug">
            {QUESTIONS[key as "investOutOfPocket" | "englishCare"]}
          </legend>
          <div
            ref={(el) => {
              fieldRefs.current[key] = el;
            }}
            tabIndex={-1}
            className="grid grid-cols-2 gap-2"
          >
            {(["yes", "no"] as const).map((v) => (
              <label key={v} className="cursor-pointer">
                <input
                  type="radio"
                  name={`${idPrefix}-${key}`}
                  value={v}
                  checked={data[key] === v}
                  onChange={() => {
                    update(key, v);
                    markTouched(key, v);
                  }}
                  className="sr-only peer"
                  disabled={submitting}
                />
                <div className="border border-[var(--color-border)] text-[var(--color-ink-soft)] rounded-[10px] py-2.5 text-center font-semibold text-sm transition-all hover:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)] peer-checked:border-[var(--color-primary)] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-accent)] peer-focus-visible:ring-offset-1">
                  {v === "yes" ? "Yes" : "No"}
                </div>
              </label>
            ))}
          </div>
          {showErr(key) && (
            <p id={errId(key)} role="alert" className="lp-field-error">
              {errors[key]}
            </p>
          )}
        </fieldset>
      ))}

      <button
        type="submit"
        disabled={submitting || submitted}
        className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full px-6 py-3.5 font-semibold text-base shadow-cta transition-colors disabled:opacity-55 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      >
        {submitting ? "Submitting…" : BRAND.primaryCta}
        {!submitting && (
          <Icon name="arrow-right" className="w-4 h-4" strokeWidth={2.4} />
        )}
      </button>

      <p className="text-xs text-center leading-relaxed text-[var(--color-muted)]">
        By submitting, you agree to be contacted about your assessment. We respect
        your privacy and never sell your information.
      </p>
    </form>
  );
}
