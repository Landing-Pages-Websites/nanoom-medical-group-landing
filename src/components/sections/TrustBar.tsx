import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { TRUST_BAR } from "@/lib/content";

export function TrustBar(): React.ReactElement {
  return (
    <section
      id="trust-bar"
      aria-label="Why patients trust Nanoom Medical Group"
      className="relative bg-[var(--color-secondary)] text-white"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-8 md:py-10">
        <Reveal>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:divide-[var(--color-accent)]/35">
            {TRUST_BAR.map((item) => (
              <li
                key={item.stat}
                className="flex items-center gap-3.5 pt-8 first:pt-0 lg:pt-0 lg:px-7 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="flex-shrink-0 inline-flex w-11 h-11 rounded-xl items-center justify-center bg-white/10 text-[var(--color-accent)]">
                  <Icon name={item.icon} className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-tight">
                    {item.stat}
                  </span>
                  <span className="block text-sm text-white/70 leading-snug mt-0.5">
                    {item.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
