import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

interface Benefit {
  icon: IconName;
  title: string;
  body: string;
}

interface ServiceSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  benefits: readonly Benefit[];
  image: string;
  imageAlt: string;
  cta: string;
  /** Which side the image sits on at desktop, for editorial rhythm. */
  imageSide?: "left" | "right";
  /** Alternating surface treatment between the two service sections. */
  tone?: "ivory" | "surface";
}

export function ServiceSection({
  id,
  eyebrow,
  title,
  lead,
  benefits,
  image,
  imageAlt,
  cta,
  imageSide = "right",
  tone = "ivory",
}: ServiceSectionProps): React.ReactElement {
  const bg = tone === "surface" ? "bg-white" : "bg-[var(--color-bg)]";
  const imageFirst = imageSide === "left";

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 md:py-28 ${bg}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <Reveal
          className={`${imageFirst ? "lg:order-1" : "lg:order-2"}`}
          delay={80}
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft ring-1 ring-[var(--color-border)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className={`${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-[var(--color-ink)]">
            {title}
          </h2>
          <div className="hr-accent mt-6 w-24" />
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--color-ink-soft)]">
            {lead}
          </p>

          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="flex-shrink-0 inline-flex w-11 h-11 rounded-xl items-center justify-center bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  <Icon name={b.icon} className="w-5 h-5" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block font-display text-lg text-[var(--color-ink)]">
                    {b.title}
                  </span>
                  <span className="block mt-1 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                    {b.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <DualCTA align="start" primaryLabel={cta} />
        </Reveal>
      </div>
    </section>
  );
}
