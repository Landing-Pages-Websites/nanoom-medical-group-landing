import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { PAIN } from "@/lib/content";

export function PainValidation(): React.ReactElement {
  return (
    <section id="pain-validation" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{PAIN.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12] text-[var(--color-ink)]">
              {PAIN.title}
            </h2>
            <div className="hr-accent mt-6 w-24" />
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {PAIN.intro}
            </p>
            <p className="mt-5 text-lg leading-relaxed font-semibold text-[var(--color-secondary)]">
              {PAIN.closer}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <ul className="grid sm:grid-cols-2 gap-3">
              {PAIN.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 card-lift"
                >
                  <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-[var(--color-primary-soft)] flex items-center justify-center">
                    <Icon
                      name="check"
                      className="w-4 h-4 text-[var(--color-primary)]"
                      strokeWidth={2.6}
                    />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[var(--color-ink)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
