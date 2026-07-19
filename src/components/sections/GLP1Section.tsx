import { ServiceSection } from "@/components/sections/ServiceSection";
import { GLP1 } from "@/lib/content";

export function GLP1Section(): React.ReactElement {
  return (
    <ServiceSection
      id="glp-1-weight-loss"
      eyebrow={GLP1.eyebrow}
      title={GLP1.title}
      lead={GLP1.lead}
      benefits={GLP1.benefits}
      image={GLP1.image}
      imageAlt={GLP1.imageAlt}
      cta={GLP1.cta}
      imageSide="right"
      tone="ivory"
    />
  );
}
