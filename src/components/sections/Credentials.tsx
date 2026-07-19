import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { CREDENTIALS } from "@/lib/content";

export function Credentials(): React.ReactElement {
  return (
    <section
      id="credentials"
      className="relative py-20 md:py-28 bg-[var(--color-secondary)] text-white overflow-hidden"
    >
      <div
        className="absolute -top-32 -right-32 w-[38rem] h-[38rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,184,154,0.22), transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-[var(--color-accent)]">
              {CREDENTIALS.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12] text-white">
              {CREDENTIALS.title}
            </h2>
            <div className="mt-6 w-24 h-[3px] rounded-full bg-[var(--color-accent)]" />
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              {CREDENTIALS.intro}
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {CREDENTIALS.badges.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3"
                >
                  <span className="flex-shrink-0 text-[var(--color-accent)]">
                    <Icon name={b.icon} className="w-5 h-5" />
                  </span>
                  <span className="text-[15px] font-semibold text-white">
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
                Recognized by her peers
              </p>
              <ul className="mt-3 space-y-2">
                {CREDENTIALS.awards.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-white/85">
                    <Icon
                      name="check"
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--color-accent)]"
                      strokeWidth={2.4}
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="rounded-3xl bg-white/[0.06] border border-white/15 p-6 md:p-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                <Image
                  src={CREDENTIALS.book.image}
                  alt="Thyroid Track, authored by Dr. Kristi Vaughan"
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex-shrink-0 text-[var(--color-accent)]">
                  <Icon name="book" className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-display text-lg text-white">
                    {CREDENTIALS.book.title}
                  </p>
                  <p className="text-sm text-white/75 leading-relaxed mt-1">
                    {CREDENTIALS.book.body}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
