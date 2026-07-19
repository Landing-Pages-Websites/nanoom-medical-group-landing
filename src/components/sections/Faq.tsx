"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { FAQ } from "@/lib/content";

export function Faq(): React.ReactElement {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">Questions & answers</p>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12] text-[var(--color-ink)]">
            What you might be wondering
          </h2>
          <div className="hr-accent mt-6 w-24 mx-auto" />
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={`rounded-2xl border bg-white transition-colors ${
                    isOpen
                      ? "border-[var(--color-primary)] shadow-soft"
                      : "border-[var(--color-border)]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={btnId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-2xl"
                    >
                      <span className="font-display text-lg md:text-xl leading-snug text-[var(--color-ink)]">
                        {item.q}
                      </span>
                      <Icon
                        name="plus"
                        className={`flex-shrink-0 w-5 h-5 mt-1 text-[var(--color-primary)] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="px-5 md:px-6 pb-6 text-[var(--color-ink-soft)] leading-relaxed"
                  >
                    {item.a}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
