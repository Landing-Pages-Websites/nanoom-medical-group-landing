"use client";

import { PHONE, PHONE_HREF, BRAND } from "@/lib/content";
import { Icon } from "@/components/icons";

interface DualCTAProps {
  align?: "start" | "center";
  primaryLabel?: string;
  primaryHref?: string;
  /** Use when the CTA sits on a dark (deep-teal) background. */
  onDark?: boolean;
}

export function DualCTA({
  align = "center",
  primaryLabel = BRAND.primaryCta,
  primaryHref = "#contact",
  onDark = false,
}: DualCTAProps): React.ReactElement {
  const justify = align === "start" ? "justify-start" : "justify-center";

  const phoneClasses = onDark
    ? "border border-white/45 text-white hover:bg-white/10 hover:border-white"
    : "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]";

  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center ${justify} gap-3 mt-8`}
    >
      <a
        href={primaryHref}
        className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors rounded-full px-7 py-3.5 font-semibold text-base shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      >
        {primaryLabel}
        <Icon name="arrow-right" className="w-4 h-4" strokeWidth={2.4} />
      </a>
      <a
        href={PHONE_HREF}
        aria-label={`Call ${PHONE}`}
        className={`inline-flex items-center justify-center gap-2 ${phoneClasses} transition-colors rounded-full px-6 py-3.5 font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2`}
      >
        <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
        Call {PHONE}
      </a>
    </div>
  );
}
