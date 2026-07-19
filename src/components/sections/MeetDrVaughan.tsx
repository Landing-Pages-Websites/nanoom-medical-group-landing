import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { DOCTOR_BIO } from "@/lib/content";

export function MeetDrVaughan(): React.ReactElement {
  return (
    <section
      id="meet-dr-vaughan"
      className="relative py-20 md:py-28 bg-[var(--color-surface-alt)]"
    >
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft ring-1 ring-[var(--color-border)]">
              <Image
                src={DOCTOR_BIO.image}
                alt={`${DOCTOR_BIO.title}, ${DOCTOR_BIO.role}`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="hidden md:block absolute -bottom-6 -right-6 max-w-[17rem] bg-white p-5 rounded-2xl shadow-soft border border-[var(--color-border)]">
                <Icon
                  name="quote"
                  className="w-7 h-7 text-[var(--color-accent)] mb-2"
                />
                <p className="font-display text-[16px] leading-snug text-[var(--color-ink)]">
                  {DOCTOR_BIO.quote}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <p className="eyebrow">{DOCTOR_BIO.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12] text-[var(--color-ink)]">
              {DOCTOR_BIO.title}
            </h2>
            <p className="mt-2 text-[var(--color-primary)] font-semibold">
              {DOCTOR_BIO.role}
            </p>
            <div className="hr-accent mt-6 w-24" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {DOCTOR_BIO.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <DualCTA align="start" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
