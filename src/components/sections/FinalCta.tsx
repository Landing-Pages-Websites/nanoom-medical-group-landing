import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { PHONE, PHONE_HREF } from "@/lib/content";
import type { PageContent } from "@/lib/content";

interface FinalCtaProps {
  content: PageContent;
}

export function FinalCta({ content }: FinalCtaProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[var(--color-primary-soft)] to-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Take the first step</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.1] text-[var(--color-ink)]">
              Ready for answers instead of another shrug?
            </h2>
            <div className="hr-accent mt-6 w-24" />
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Book your free health assessment and find out whether a root-cause,
              1-on-1 approach is right for you. No insurance required, no pressure —
              just a real conversation about how you feel and what&apos;s driving it.
            </p>
            <p className="mt-8 text-sm font-semibold text-[var(--color-muted)]">
              Prefer to talk first?
            </p>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="mt-2 inline-flex items-center gap-3 font-display text-3xl md:text-4xl font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Icon name="phone" className="w-7 h-7" strokeWidth={2.2} />
              {PHONE}
            </a>
          </Reveal>

          <Reveal delay={120}>
            <FormCard idPrefix="final" routeSlug={content.slug} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
