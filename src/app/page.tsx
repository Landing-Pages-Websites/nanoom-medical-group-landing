import type { Metadata } from "next";
import { VaughanLanding } from "@/components/VaughanLanding";
import { FUNCTIONAL_MEDICINE } from "@/lib/content";

// Root renders the Functional Medicine page (default ad group) so `/` is never blank.
export const metadata: Metadata = {
  title: FUNCTIONAL_MEDICINE.metaTitle,
  description: FUNCTIONAL_MEDICINE.metaDescription,
};

export default function HomePage(): React.ReactElement {
  return <VaughanLanding content={FUNCTIONAL_MEDICINE} />;
}
