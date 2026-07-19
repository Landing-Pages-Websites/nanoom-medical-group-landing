import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { TESTIMONIALS, RATING } from "@/lib/content";

export function SuccessStories(): React.ReactElement {
  return (
    <section
      id="success-stories"
      className="relative py-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Patient stories</p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12] text-[var(--color-ink)]">
            Real people who finally felt heard
          </h2>
          <div className="hr-accent mt-6 w-24 mx-auto" />
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex text-[var(--color-accent)]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="w-4 h-4" />
              ))}
            </div>
            <span className="text-sm font-semibold text-[var(--color-ink)]">
              {RATING.summary}
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="h-full flex flex-col rounded-2xl border border-[var(--color-border)] bg-white p-7 card-lift">
                <div className="flex text-[var(--color-accent)]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" className="w-4 h-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--color-ink)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-display font-bold flex items-center justify-center">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">
                      {t.name}
                    </p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {t.context}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
