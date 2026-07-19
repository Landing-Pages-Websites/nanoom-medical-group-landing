import { ServiceSection } from "@/components/sections/ServiceSection";
import { CONCIERGE } from "@/lib/content";

export function ConciergeSection(): React.ReactElement {
  return (
    <ServiceSection
      id="concierge-medicine"
      eyebrow={CONCIERGE.eyebrow}
      title={CONCIERGE.title}
      lead={CONCIERGE.lead}
      benefits={CONCIERGE.benefits}
      image={CONCIERGE.image}
      imageAlt={CONCIERGE.imageAlt}
      cta={CONCIERGE.cta}
      imageSide="left"
      tone="surface"
    />
  );
}
