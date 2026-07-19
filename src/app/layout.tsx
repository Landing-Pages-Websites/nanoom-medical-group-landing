import type { Metadata } from "next";
import { Work_Sans, Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-active",
  display: "swap",
});

const body = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-active",
  display: "swap",
});

// === MEGA TAG CONFIG === (Vaughan Vitality production IDs)
const SITE_KEY = "dh363zhqo7vdxcrv";
const SITE_ID = "cf26cd40-0c1c-4582-81f6-a1f500a7f956";
const PIXEL_ID = "3295158327190318";
const GTM_ID = "GTM-5JZ2Z45";

export const metadata: Metadata = {
  title:
    "Functional Medicine in Costa Mesa & Orange County | Vaughan Vitality & Wellness",
  description:
    "Told your labs are normal but you still feel terrible? Dr. Kristi Vaughan, DC, BCN, IFMCP, uses a root-cause, 1-on-1 functional-medicine approach to find what conventional medicine missed. Book your free health assessment.",
  metadataBase: new URL("https://book.vaughanvitality.com"),
  openGraph: {
    title: "Vaughan Vitality & Wellness — Root-Cause Functional Medicine",
    description:
      "A personalized, root-cause approach to thyroid, gut, autoimmune, and chronic symptoms — with Dr. Kristi Vaughan in Costa Mesa & Orange County.",
    images: ["/images/vv/dr-vaughan.jpg"],
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
  const megaTagConfig = `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"${GTM_ID}",pixelId:"${PIXEL_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`;

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
        {/* CallTrackingMetrics — universal Mega account */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
