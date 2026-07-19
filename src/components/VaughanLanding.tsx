"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { PainValidation } from "@/components/sections/PainValidation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Conditions } from "@/components/sections/Conditions";
import { MeetDrVaughan } from "@/components/sections/MeetDrVaughan";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Credentials } from "@/components/sections/Credentials";
import { FinalCta } from "@/components/sections/FinalCta";
import { Faq } from "@/components/sections/Faq";
import { BRAND, PHONE, PHONE_HREF, TRACKING, type PageContent } from "@/lib/content";
import { Icon } from "@/components/icons";

interface VaughanLandingProps {
  content: PageContent;
}

export function VaughanLanding({ content }: VaughanLandingProps): React.ReactElement {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
    pixelId: TRACKING.pixelId,
  });

  return (
    <main className="bg-[var(--color-bg)] overflow-x-hidden">
      <QueryParamPersistence />
      <Header />

      <Hero content={content} />
      <PainValidation />
      <HowItWorks />
      <Conditions content={content} />
      <MeetDrVaughan />
      <SuccessStories />
      <Credentials />
      <FinalCta content={content} />
      <Faq />

      <footer className="bg-[var(--color-secondary-deep)] text-white py-10">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p className="font-display text-lg">{BRAND.name}</p>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-semibold"
            >
              <Icon name="phone" className="w-4 h-4" strokeWidth={2.2} />
              {PHONE}
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between border-t border-white/10 pt-6">
            <p className="text-white/70 text-sm">
              © 2026 {BRAND.name}. Serving {BRAND.location}.
            </p>
            <p className="text-white/55 text-xs max-w-2xl md:text-right leading-relaxed">
              Information on this page is educational and is not a substitute for
              medical advice. Individual results vary. Our practice does not accept
              insurance.
            </p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </main>
  );
}
