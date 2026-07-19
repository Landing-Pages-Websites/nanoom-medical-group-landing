import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-active",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-active",
  display: "swap",
});

// === MEGA TAG CONFIG === (Nanoom Medical Group production IDs)
const SITE_KEY = "sahnwl1jh6m444sr";
const SITE_ID = "cb96a42c-b6ac-42cf-9755-09b9c9e9feb5";
const GTM_ID = "GTM-MBQWGFNL";
// This customer has NO Meta Pixel — the tag config omits pixelId entirely.

export const metadata: Metadata = {
  title:
    "Nanoom Medical Group | Telehealth Weight Loss & Concierge Medicine in LA",
  description:
    "Physician-supervised, personalized care since 2009. Convenient telehealth weight-loss support and a dedicated concierge physician you can actually reach — no insurance required. Trilingual care in English, Korean & Spanish. See if you qualify.",
  metadataBase: new URL("https://nanoommedical.com"),
  openGraph: {
    title: "Nanoom Medical Group — Personalized, Physician-Supervised Care",
    description:
      "Two focused offers, one trusted practice: medically supervised weight loss through telehealth, and concierge membership medicine with a dedicated physician. Serving Los Angeles since 2009.",
    images: ["/images/nanoom/hero.jpg"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: false, follow: false }, // LP — don't index until ads cutover
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const megaTagConfig = `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"${GTM_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`;

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          id="mega-tag-config"
          dangerouslySetInnerHTML={{ __html: megaTagConfig }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        {children}
        {/* CallTrackingMetrics — universal Mega account (never remove) */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
