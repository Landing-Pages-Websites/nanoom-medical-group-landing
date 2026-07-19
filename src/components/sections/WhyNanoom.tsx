import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { WHY_NANOOM, BRAND } from "@/lib/content";

export function WhyNanoom(): React.ReactElement {
  return (
    <section
      id="why-nanoom"
      className="relative py-20 md:py-28 bg-[var(--color-surface-alt)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{WHY_NANOOM.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-[var(--color-ink)]">
              {WHY_NANOOM.title}
            </h2>
            <div className="hr-accent mt-6 w-24" />
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
              {WHY_NANOOM.lead}
            </p>
            <figure className="mt-8 border-l-2 border-[var(--color-accent)] pl-5">
              <blockquote className="font-display text-xl md:text-2xl italic leading-snug text-[var(--color-primary)]">
                “{BRAND.meaning}”
              </blockquote>
            </figure>
            <div className="hidden lg:block">
              <DualCTA align="start" />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <ul className="grid sm:grid-cols-2 gap-4">
              {WHY_NANOOM.points.map((p) => (
                <li
                  key={p.title}
                  className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 card-lift"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-[var(--color-accent-soft)] items-center justify-center text-[var(--color-primary)]">
                    <Icon name={p.icon} className="w-6 h-6" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <DualCTA align="start" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
