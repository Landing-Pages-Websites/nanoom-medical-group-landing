import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { HOW_IT_WORKS } from "@/lib/content";

export function HowItWorks(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{HOW_IT_WORKS.eyebrow}</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-[var(--color-ink)]">
            {HOW_IT_WORKS.title}
          </h2>
          <div className="hr-accent mt-6 w-24" />
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
            {HOW_IT_WORKS.intro}
          </p>
        </Reveal>

        <ol className="mt-14 grid md:grid-cols-3 gap-5">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <li className="relative h-full rounded-2xl border border-[var(--color-border)] bg-white p-8 card-lift">
                <span className="absolute top-7 right-7 font-display text-5xl font-semibold text-[var(--color-accent-soft)]">
                  {`0${i + 1}`}
                </span>
                <span className="inline-flex w-12 h-12 rounded-xl bg-[var(--color-primary-soft)] items-center justify-center text-[var(--color-primary)]">
                  <Icon name={step.icon} className="w-6 h-6" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-xl text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={160}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
