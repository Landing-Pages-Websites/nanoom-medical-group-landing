"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { PHONE, PHONE_HREF, HERO, BRAND } from "@/lib/content";

export function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-32 pb-14 md:pb-20 overflow-hidden"
    >
      {/* Warm, on-brand photography washed into an ivory backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nanoom/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/94 to-[var(--color-bg)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
        <div
          className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(15,92,85,0.12), transparent 62%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <Reveal className="lg:col-span-6 order-1">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 className="mt-4 font-display font-semibold text-[var(--color-ink)] leading-[1.05] tracking-[-0.02em] text-[clamp(2.4rem,5vw,4rem)]">
            {HERO.headline}{" "}
            <span className="text-[var(--color-primary)]">
              {HERO.headlineAccent}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
            {HERO.subhead}
          </p>

          {/* Form sits directly below the headline on mobile (above the fold) */}
          <div className="mt-7 lg:hidden">
            <FormCard idPrefix="hero-m" />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
              <Icon name="calendar" className="w-4 h-4" strokeWidth={2} />
              {BRAND.established} · {BRAND.languages}
            </span>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="inline-flex items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full px-4 py-2 bg-white/80 hover:bg-[var(--color-primary-soft)] font-semibold text-sm transition-colors"
            >
              <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
              {PHONE}
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {HERO.chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white/70 px-3.5 py-1.5 text-sm font-medium text-[var(--color-ink-soft)]"
              >
                <Icon
                  name="check"
                  className="w-3.5 h-3.5 text-[var(--color-primary)]"
                  strokeWidth={2.6}
                />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Desktop form card */}
        <Reveal className="hidden lg:block lg:col-span-6 order-2" delay={120}>
          <FormCard idPrefix="hero" />
        </Reveal>
      </div>
    </section>
  );
}
