"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { GLP1Section } from "@/components/sections/GLP1Section";
import { ConciergeSection } from "@/components/sections/ConciergeSection";
import { WhyNanoom } from "@/components/sections/WhyNanoom";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { BRAND, PHONE, PHONE_HREF, TRACKING } from "@/lib/content";
import { Icon } from "@/components/icons";

export function NanoomLanding(): React.ReactElement {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
    pixelId: TRACKING.pixelId || undefined,
  });

  return (
    <main className="bg-[var(--color-bg)] overflow-x-hidden">
      <QueryParamPersistence />
      <Header />

      <Hero />
      <TrustBar />
      <GLP1Section />
      <ConciergeSection />
      <WhyNanoom />
      <HowItWorks />
      <Faq />
      <FinalCta />

      <footer className="bg-[var(--color-secondary-deep)] text-white py-10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-white">
                {BRAND.name}
              </span>
              <span className="text-xs text-white/60 mt-1">
                {BRAND.meaning}
              </span>
            </div>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-[var(--color-accent)] transition-colors font-semibold"
            >
              <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
              {PHONE}
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between border-t border-white/10 pt-6">
            <p className="text-white/70 text-sm">
              © 2026 {BRAND.name}. {BRAND.locations}.
            </p>
            <p className="text-white/55 text-xs max-w-2xl md:text-right leading-relaxed">
              Information on this page is educational and is not a substitute for
              medical advice. Care is physician-supervised and personalized to
              each patient. No insurance required.
            </p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </main>
  );
}
