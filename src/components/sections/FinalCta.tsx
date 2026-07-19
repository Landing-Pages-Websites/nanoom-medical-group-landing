import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { PHONE, PHONE_HREF, FINAL_CTA, BRAND } from "@/lib/content";

export function FinalCta(): React.ReactElement {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-[var(--color-secondary)] text-white overflow-hidden"
    >
      <div
        className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(200,162,74,0.14), transparent 62%)",
        }}
      />
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              {FINAL_CTA.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-white">
              {FINAL_CTA.title}
            </h2>
            <div className="mt-6 w-24 h-[3px] rounded bg-[var(--color-accent)]" />
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-white/80">
              {FINAL_CTA.body}
            </p>
            <p className="mt-8 text-sm font-semibold text-white/60">
              {FINAL_CTA.phonePrompt}
            </p>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="mt-2 inline-flex items-center gap-3 font-display text-3xl md:text-4xl font-semibold text-white hover:text-[var(--color-accent)] transition-colors"
            >
              <Icon name="phone" className="w-7 h-7" strokeWidth={2} />
              {PHONE}
            </a>
            <p className="mt-6 text-sm text-white/55">
              {BRAND.established} · {BRAND.locations}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <FormCard idPrefix="final" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
