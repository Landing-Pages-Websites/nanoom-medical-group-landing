import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import type { PageContent } from "@/lib/content";

interface ConditionsProps {
  content: PageContent;
}

export function Conditions({ content }: ConditionsProps): React.ReactElement {
  return (
    <section id="conditions" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow">{content.conditionsEyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12] text-[var(--color-ink)]">
              {content.conditionsTitle}
            </h2>
            <div className="hr-accent mt-6 w-24" />
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {content.conditionsIntro}
            </p>
            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft ring-1 ring-[var(--color-border)]">
              <Image
                src={content.heroImage}
                alt={content.heroImageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <ul className="grid sm:grid-cols-2 gap-4">
              {content.conditions.map((c) => (
                <li
                  key={c.title}
                  className="group relative rounded-2xl border border-[var(--color-border)] bg-white p-6 card-lift border-l-2 border-l-transparent hover:border-l-[var(--color-accent)]"
                >
                  <span className="inline-flex w-11 h-11 rounded-xl bg-[var(--color-accent-soft)] items-center justify-center text-[var(--color-accent)]">
                    <Icon name={c.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-[var(--color-ink)]">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
