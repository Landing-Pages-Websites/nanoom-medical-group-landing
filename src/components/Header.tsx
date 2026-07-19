"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PHONE, PHONE_HREF, BRAND } from "@/lib/content";
import { Icon } from "@/components/icons";

export function Header(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,162,74,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between py-3.5 md:py-4">
        <Link
          href="#hero"
          className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md"
          aria-label={`${BRAND.name} home`}
        >
          <span className="font-display text-[1.35rem] md:text-[1.5rem] font-semibold tracking-[-0.01em] text-[var(--color-primary)]">
            Nanoom
          </span>
          <span className="text-[0.6rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Medical Group
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={PHONE_HREF}
            aria-label={`Call ${PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] transition-colors rounded-full px-4 md:px-5 py-2 md:py-2.5 font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
          >
            <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
            <span>{PHONE}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors rounded-full px-4 md:px-6 py-2 md:py-2.5 font-semibold text-sm shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
          >
            <span>{BRAND.primaryCta}</span>
            <Icon name="arrow-right" className="w-3.5 h-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
