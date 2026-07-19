"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { PHONE, PHONE_HREF, RATING, type PageContent } from "@/lib/content";

interface HeroProps {
  content: PageContent;
}

export function Hero({ content }: HeroProps): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-28 pb-14 md:pb-20 overflow-hidden"
    >
      {/* Real photography, washed to a calm light backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={content.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/72" />
        <div className="absolute inset-0 bg-[var(--color-primary-soft)]/40" />
        <div
          className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(79,184,154,0.18), transparent 62%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1180px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <Reveal className="lg:col-span-6 order-1">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="mt-4 font-display font-bold text-[var(--color-ink)] leading-[1.08] tracking-[-0.02em] text-[clamp(2.1rem,4.6vw,3.25rem)]">
            {content.heroHeadline}{" "}
            <span className="text-[var(--color-primary)]">
              {content.heroHeadlineAccent}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {content.heroSubhead}
          </p>

          {/* Form sits directly below the headline on mobile (above the fold) */}
          <div className="mt-7 lg:hidden">
            <FormCard idPrefix="hero-m" routeSlug={content.slug} />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex text-[var(--color-accent)]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="w-4 h-4" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[var(--color-ink)]">
                {RATING.stars} · {RATING.google}
              </span>
            </div>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-semibold text-sm hover:text-[var(--color-primary)] transition-colors"
            >
              <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
              {PHONE}
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {content.heroChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white/70 px-3.5 py-1.5 text-sm font-medium text-[var(--color-ink-soft)]"
              >
                <Icon
                  name="check"
                  className="w-3.5 h-3.5 text-[var(--color-accent)]"
                  strokeWidth={2.6}
                />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Desktop form card */}
        <Reveal className="hidden lg:block lg:col-span-6 order-2" delay={120}>
          <FormCard idPrefix="hero" routeSlug={content.slug} />
        </Reveal>
      </div>
    </section>
  );
}
