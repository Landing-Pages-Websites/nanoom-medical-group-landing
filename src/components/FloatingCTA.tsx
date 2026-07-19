"use client";

import { useEffect, useState } from "react";
import { PHONE, PHONE_HREF, BRAND } from "@/lib/content";
import { Icon } from "@/components/icons";

interface FloatingCTAProps {
  label?: string;
  href?: string;
}

export function FloatingCTA({
  label = BRAND.primaryCta,
  href = "#contact",
}: FloatingCTAProps = {}): React.ReactElement {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tab = show ? undefined : -1;

  return (
    <div
      aria-hidden={!show}
      className={`fixed z-50 inset-x-0 bottom-0 transition-all duration-500 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Mobile: full-width tap-to-call + request bar */}
      <div className="sm:hidden grid grid-cols-2 gap-px bg-[var(--color-border)] shadow-[0_-8px_24px_-12px_rgba(11,58,54,0.35)]">
        <a
          href={PHONE_HREF}
          aria-label={`Call ${PHONE}`}
          tabIndex={tab}
          className="flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] py-3.5 font-semibold text-sm"
        >
          <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
          Call now
        </a>
        <a
          href={href}
          tabIndex={tab}
          className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-3.5 font-semibold text-sm"
        >
          {BRAND.primaryCta}
          <Icon name="arrow-right" className="w-4 h-4" strokeWidth={2.4} />
        </a>
      </div>

      {/* Desktop: pill in the corner */}
      <a
        href={href}
        tabIndex={tab}
        className="hidden sm:inline-flex items-center gap-2 fixed right-6 bottom-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full pl-6 pr-5 py-3.5 font-semibold text-base shadow-cta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      >
        {label}
        <Icon name="arrow-right" className="w-4 h-4" strokeWidth={2.4} />
      </a>
    </div>
  );
}
