// Site-wide content + config for the Nanoom Medical Group landing page.
// Single source of truth for copy, phone, tracking IDs, and section content.
// Copy is grounded in verified facts (see content-sources.json) — no invented
// stats, no medication names, no outcome guarantees (healthcare-compliant).

import type { IconName } from "@/components/icons";

// CTM tracking number displayed sitewide.
export const PHONE = "(213) 598-3168";
export const PHONE_HREF = "tel:+12135983168";

export const BRAND = {
  name: "Nanoom Medical Group",
  shortName: "Nanoom",
  established: "Since 2009",
  locations: "Los Angeles · Koreatown & Norwalk",
  languages: "English · Korean · Spanish",
  primaryCta: "See If You Qualify",
  callCta: "Call (213) 598-3168",
  meaning:
    "Nanoom (나눔) means the spirit of sharing — care rooted in community.",
} as const;

// ─── Tracking (Nanoom Medical Group production IDs) ─────────────────────────
// No Meta Pixel for this customer — pixelId is intentionally empty.
export const TRACKING = {
  siteKey: "sahnwl1jh6m444sr",
  siteId: "cb96a42c-b6ac-42cf-9755-09b9c9e9feb5",
  gtmId: "GTM-MBQWGFNL",
  pixelId: "",
} as const;

// Mega submission API — keys are sent camelCase and mapped downstream.
export const FORM = {
  customerId: "5bb3954d-3b35-4679-a474-15dd71c92593",
  siteId: "cb96a42c-b6ac-42cf-9755-09b9c9e9feb5",
  sourceProvider: "nanoom-medical-group-landing",
} as const;

// ─── Lead-form service options (drive branching qualification) ──────────────
export const SERVICE_CONCIERGE = "Concierge Medicine";
export const SERVICE_GLP1 = "GLP-1 / Medically Supervised Weight Loss";

export const CONCIERGE_GOALS = [
  { value: "Personalized one-on-one care", qualified: true },
  { value: "Same-day or priority access", qualified: true },
  { value: "A dedicated physician who knows me", qualified: true },
  { value: "A standard appointment", qualified: false },
] as const;

export const WEIGHTLOSS_INTENTS = [
  { value: "Yes, I am actively looking", qualified: true },
  { value: "No, just exploring", qualified: false },
] as const;

// ─── Hero ───────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Personalized care · Since 2009",
  headline: "Physician-Supervised Weight Loss &",
  headlineAccent: "Concierge Medicine",
  subhead:
    "For over 15 years, Nanoom Medical Group has cared for our community with a personal touch. Choose the path that fits you: medically supervised weight loss made simple through telehealth, or a dedicated concierge physician you can actually reach — no insurance required.",
  chips: [
    "Physician-supervised",
    "Trilingual — English · Korean · Spanish",
    "No insurance required",
  ],
} as const;

// ─── Trust bar ───────────────────────────────────────────────────────────────
export const TRUST_BAR = [
  { stat: "Since 2009", label: "15+ years caring for our community", icon: "calendar" as IconName },
  { stat: "Trilingual", label: "English · Korean · Spanish", icon: "globe" as IconName },
  { stat: "Physician-supervised", label: "Board-certified physicians", icon: "stethoscope" as IconName },
  { stat: "Two LA locations", label: "Koreatown & Norwalk", icon: "map-pin" as IconName },
] as const;

// ─── Section 1: GLP-1 / Medically Supervised Weight Loss (telehealth) ───────
export const GLP1 = {
  eyebrow: "Medically Supervised Weight Loss",
  title: "A weight-loss program built around you — from home",
  lead:
    "Losing weight is hard enough without trips across town for every check-in. Our medically supervised program brings physician oversight to you through telehealth, so your care fits into real life. You start with a consultation to explore your options and see if the program is a good fit. From there, a physician guides a personalized plan and stays involved with convenient virtual follow-ups — the accountability of a supervised program, with the ease of connecting from wherever you are.",
  benefits: [
    {
      icon: "stethoscope" as IconName,
      title: "Physician-supervised throughout",
      body: "Your plan is overseen by a physician from your first consultation forward — personalized to you, never one-size-fits-all.",
    },
    {
      icon: "video" as IconName,
      title: "Convenient telehealth visits",
      body: "Connect from home on your schedule. No commute, no waiting room — just consistent, supported care.",
    },
    {
      icon: "user-heart" as IconName,
      title: "A partner in your progress",
      body: "Regular virtual check-ins keep you supported and accountable, with a care team that knows your history.",
    },
  ],
  image: "/images/nanoom/glp1.jpg",
  imageAlt:
    "A person at a sunlit kitchen table taking a telehealth video call on their phone, a glass of water and notepad nearby",
  cta: "See If You Qualify",
} as const;

// ─── Section 2: Concierge Medicine (membership) ──────────────────────────────
export const CONCIERGE = {
  eyebrow: "Concierge Membership Medicine",
  title: "A dedicated physician who truly knows you",
  lead:
    "Healthcare feels different when your doctor has the time to listen. With our concierge membership, you get a dedicated physician and a direct line to the care you need — with same-day and priority access when something comes up. Because it's a straightforward annual membership, there's no insurance to navigate and no rushed, hurried visits. It's the kind of attentive, relationship-based care that lets you and your physician focus on what matters most: your health, on your terms.",
  benefits: [
    {
      icon: "user-round" as IconName,
      title: "Your own dedicated physician",
      body: "One trusted physician who knows your history and treats you as a whole person, not a chart.",
    },
    {
      icon: "clock" as IconName,
      title: "Same-day & priority access",
      body: "Reach your care team when it matters, with priority scheduling and unhurried appointments.",
    },
    {
      icon: "key" as IconName,
      title: "Simple annual membership",
      body: "A transparent membership model — no insurance required, no surprise billing to work around.",
    },
  ],
  image: "/images/nanoom/concierge.jpg",
  imageAlt:
    "A physician in a white coat seated across a desk in a warm, plant-filled office, mid-conversation with a patient",
  cta: "Request Concierge Details",
} as const;

// ─── Why Nanoom (differentiators / about) ───────────────────────────────────
export const WHY_NANOOM = {
  eyebrow: "Why Nanoom",
  title: "Established care, delivered with a personal touch",
  lead:
    "Nanoom Medical Group has served the Los Angeles community since 2009. Our name — Nanoom (나눔) — means the spirit of sharing, and it shapes how we practice: personal, attentive care rooted in the community we belong to.",
  points: [
    {
      icon: "calendar" as IconName,
      title: "15+ years of trusted care",
      body: "In practice since 2009, with deep roots across the Los Angeles area and two locations in Koreatown and Norwalk.",
    },
    {
      icon: "globe" as IconName,
      title: "Trilingual, community-rooted",
      body: "Care and communication in English, Korean, and Spanish — so you're understood, not just treated.",
    },
    {
      icon: "stethoscope" as IconName,
      title: "Physician-supervised, personalized",
      body: "Board-certified physicians guide every plan around you — never a copy-paste protocol.",
    },
    {
      icon: "heart" as IconName,
      title: "The spirit of sharing",
      body: "We treat patients like neighbors, with the time and attention relationships are built on.",
    },
  ],
} as const;

// ─── How it works (simple 3-step) ────────────────────────────────────────────
export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  title: "Getting started is simple",
  intro:
    "Whichever path you choose, the first step is the same — a short request, then a real conversation about your options.",
  steps: [
    {
      icon: "clipboard" as IconName,
      title: "Request",
      body: "Tell us which service you're interested in and share a few details. It takes about a minute — no obligation.",
    },
    {
      icon: "video" as IconName,
      title: "Consult",
      body: "Connect with our team to explore your options and see whether the program is the right fit for you.",
    },
    {
      icon: "check-circle" as IconName,
      title: "Get started",
      body: "Move forward with a personalized, physician-supervised plan and ongoing support that fits your life.",
    },
  ],
} as const;

// ─── FAQ (compliant Q&A — no outcome claims) ─────────────────────────────────
export const FAQ = [
  {
    q: "What services does Nanoom Medical Group offer?",
    a: "We focus on two paths of care. The first is a medically supervised weight-loss program made convenient through telehealth. The second is concierge membership medicine — a dedicated physician with same-day and priority access. Both are physician-supervised and personalized to you.",
  },
  {
    q: "Do I need insurance?",
    a: "No. Both our concierge membership and our weight-loss program are offered without insurance. Concierge care is a straightforward annual membership, so there's no insurance to navigate and no surprise billing to work around.",
  },
  {
    q: "How does the telehealth weight-loss program work?",
    a: "You start with a consultation to explore your options and see if the program is a good fit. A physician then guides a personalized plan and stays involved through convenient virtual follow-ups you can join from home — the support of a supervised program without the commute.",
  },
  {
    q: "What is concierge medicine?",
    a: "Concierge medicine is a membership model that gives you a dedicated physician, more time at each visit, and same-day or priority access when you need it. It's relationship-based care designed around you rather than a rushed schedule.",
  },
  {
    q: "Do you offer care in languages other than English?",
    a: "Yes. Nanoom provides care and communication in English, Korean, and Spanish, so you and your physician can connect clearly and comfortably.",
  },
  {
    q: "Where are you located?",
    a: "Nanoom Medical Group has served the Los Angeles community since 2009, with locations in Koreatown and Norwalk. The weight-loss program is offered through telehealth, so you can take part from wherever you are. Call (213) 598-3168 to get started.",
  },
] as const;

// ─── Final CTA ───────────────────────────────────────────────────────────────
export const FINAL_CTA = {
  eyebrow: "Take the next step",
  title: "Ready to explore your options?",
  body: "Tell us which service you're interested in and our team will reach out to help you take the next step. Whether it's convenient, physician-supervised weight loss or a dedicated concierge physician, there's no pressure — just a real conversation about what fits your life.",
  phonePrompt: "Prefer to talk first?",
} as const;
