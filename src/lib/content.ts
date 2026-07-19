// Site-wide content + config for Vaughan Vitality & Wellness landing pages.
// Single source of truth for copy, phone, tracking IDs, and per-route content.
// Copy is grounded in vaughanvitality.com — see content-sources.json.

import type { IconName } from "@/components/icons";

// CTM tracking number displayed sitewide — routes to the office line 714-434-9355.
export const PHONE = "(714) 434-9355";
export const PHONE_HREF = "tel:+17144349355";

export const BRAND = {
  name: "Vaughan Vitality & Wellness",
  shortName: "Vaughan Vitality",
  location: "Costa Mesa & Orange County",
  doctor: {
    name: "Dr. Kristi Vaughan",
    credentials: "DC, BCN, IFMCP",
    specialty: "Functional Medicine Practitioner",
  },
  primaryCta: "Schedule Your Free Health Assessment",
  callCta: "Call (714) 434-9355",
} as const;

// ─── Tracking (Vaughan Vitality production IDs) ────────────────────────────
export const TRACKING = {
  siteKey: "dh363zhqo7vdxcrv",
  siteId: "cf26cd40-0c1c-4582-81f6-a1f500a7f956",
  gtmId: "GTM-5JZ2Z45",
  pixelId: "3295158327190318",
} as const;

// Mega submission API expects snake_case keys downstream.
export const FORM = {
  customerId: "26aa14d2-0621-4f73-9a9a-2ce04ebcaf2f",
  siteId: "cf26cd40-0c1c-4582-81f6-a1f500a7f956",
  sourceProvider: "vaughan-vitality-landing",
} as const;

// ─── Trust / proof ─────────────────────────────────────────────────────────
export const RATING = {
  stars: "4.8",
  google: "39 Google reviews",
  yelp: "4.8 on Yelp",
  summary: "4.8 · 39 Google reviews · 4.8 on Yelp",
} as const;

// ─── Pain validation (shared — the emotional hook) ──────────────────────────
export const PAIN = {
  eyebrow: "You're not imagining it",
  title: "“Your labs are normal… but you still feel terrible.”",
  intro:
    "You've been to the appointments. You've heard “everything looks fine” more times than you can count. But you know your body — and something is still wrong. That gap between how you feel and what your labs say is exactly where root-cause functional medicine begins.",
  points: [
    "Exhausted no matter how much you sleep",
    "Brain fog that makes simple tasks feel hard",
    "Weight that won't budge despite doing everything right",
    "Bloating, discomfort, and gut issues written off as “stress”",
    "Handed another prescription instead of an answer",
    "Told it's “just your age” or “all in your head”",
  ],
  closer:
    "If any of that sounds familiar, you deserve a practitioner who looks deeper — and actually listens.",
} as const;

// ─── How it works (shared — the mechanism) ──────────────────────────────────
export const ROADMAP = {
  eyebrow: "The Vaughan Vitality Roadmap",
  title: "A root-cause approach, built entirely around you",
  intro:
    "Functional medicine uses a science-based approach and diagnostic testing to focus on the underlying factors driving your symptoms — not just the label you were handed. Here's how your care unfolds.",
  steps: [
    {
      icon: "clipboard" as IconName,
      title: "Free Health Assessment",
      body: "A relaxed, no-pressure conversation about your history, symptoms, and goals — so we understand the whole picture before anything else.",
    },
    {
      icon: "microscope" as IconName,
      title: "Comprehensive root-cause testing",
      body: "Science-based diagnostics — blood work, food sensitivity, heavy-metal, mold, and adrenal & hormone testing — to reveal what standard panels overlook.",
    },
    {
      icon: "clipboard-check" as IconName,
      title: "Your personalized plan",
      body: "Dr. Vaughan designs an individualized plan around your labs, your body, and your life — never a copy-paste protocol.",
    },
    {
      icon: "user-heart" as IconName,
      title: "1-on-1 guidance & support",
      body: "Ongoing, individualized coaching and retesting, so you understand your body and stay on track long term.",
    },
  ],
} as const;

// ─── Meet Dr. Vaughan (shared) ───────────────────────────────────────────────
export const DOCTOR_BIO = {
  eyebrow: "Meet your practitioner",
  title: "Meet Dr. Kristi Vaughan",
  role: "DC, BCN, IFMCP · Functional Medicine Practitioner",
  paragraphs: [
    "Dr. Kristi Vaughan is a functional medicine practitioner in Costa Mesa serving all of Orange County. She completed her doctoral training at Southern California University of Health Sciences, specializing in functional medicine, nutrition, and chiropractic — and holds certification through the Institute for Functional Medicine (IFMCP).",
    "Her approach is personal because her story is. Dr. Vaughan navigated her own root-cause health journey — heavy-metal and mold toxicity and subclinical thyroid dysfunction — the kind of “your labs are normal” experience so many of her patients know all too well. It's why she looks at the big picture instead of a single number.",
    "Today she helps patients with thyroid, autoimmune, gut, hormonal, cognitive, and environmental-toxicity concerns get to the root of what's driving their symptoms — one individualized plan at a time.",
  ],
  quote:
    "Get to the root cause — then build the plan around the person, not the diagnosis.",
  image: "/images/vv/dr-vaughan.jpg",
} as const;

// ─── Credentials & authority (shared) ────────────────────────────────────────
export const CREDENTIALS = {
  eyebrow: "Credentials & authority",
  title: "Care backed by real credentials",
  intro:
    "Dr. Vaughan's work is recognized by her peers and grounded in advanced functional-medicine training.",
  badges: [
    { label: "Doctor of Chiropractic (DC)", icon: "shield" as IconName },
    { label: "Board Certified in Nutrition (BCN)", icon: "check" as IconName },
    {
      label: "IFM Certified Practitioner (IFMCP)",
      icon: "microscope" as IconName,
    },
    { label: "Author of “Thyroid Track”", icon: "book" as IconName },
  ],
  awards: [
    "2023 Women in Medicine — Top Functional Medicine Practitioner",
    "2020 Top Doctor Award",
    "2016 Award of Excellence in Holistic Medicine",
  ],
  book: {
    title: "Author of “Thyroid Track”",
    body: "Dr. Vaughan literally wrote the book on tracking and understanding thyroid health — a resource born from the same root-cause approach she brings to every patient.",
    image: "/images/vv/book.png",
  },
  awardsImage: "/images/vv/awards.jpg",
} as const;

// ─── Testimonials (shared — real, from vaughanvitality.com/testimonials) ─────
export const TESTIMONIALS = [
  {
    name: "Christopher S.",
    context: "Chronic pain & feeling dismissed",
    quote:
      "Dr. Vaughan is the first of 7 doctors that actually showed compassion and ultimate care for my symptoms. She spent an extra hour with me and is proactive at helping me get to a better state of living. I love the holistic approach.",
  },
  {
    name: "Morgan H.",
    context: "Hypothyroidism & hormone imbalance",
    quote:
      "I wanted to find the root cause of my hormone imbalance instead of just taking a prescribed synthetic hormone. She's helped me improve everything from my TSH levels to my energy and sleep. If anyone wants to dig deeper into root causes, Dr. Vaughan is absolutely the one.",
  },
  {
    name: "Cara C.",
    context: "Chronic health issues",
    quote:
      "I've dealt with a number of chronic health issues since high school and I'm very particular about who I partner with. Each week I'm feeling healthier and healthier. She has a strong, science- and data-based approach, is an excellent listener, and treats the whole person.",
  },
  {
    name: "Antonietta S.",
    context: "Graves' disease (autoimmune)",
    quote:
      "I was diagnosed with Graves' disease just over a year ago. A few months after starting with Dr. Vaughan, my Graves is stable and I've learned my triggers. Although I was skeptical, it's been great to get off the roller coaster.",
  },
  {
    name: "Phil J.",
    context: "Digestive issues",
    quote:
      "I had various digestive issues — gas, indigestion, difficulty eating certain foods. After one visit and following her suggestions, I've been symptom-free these past few months. I whole-heartedly believe in the methods Dr. Vaughan uses.",
  },
  {
    name: "Kelly R.",
    context: "Whole-person care",
    quote:
      "Because she works on the physical and mental body, she is able to help on many levels. Her ability to diagnose and treat is almost magical. I am very fortunate to have found her.",
  },
] as const;

// ─── FAQ (shared) ────────────────────────────────────────────────────────────
export const FAQ = [
  {
    q: "What is the Free Health Assessment?",
    a: "It's a no-pressure conversation with our team to understand your history, symptoms, and goals, and to see whether a root-cause functional-medicine approach is the right fit for you. There's no obligation — it's simply the first step to getting real answers.",
  },
  {
    q: "Do you accept insurance?",
    a: "No. Our practice does not accept insurance. Functional medicine involves advanced testing and personalized, one-on-one time that insurance doesn't cover, so care is paid out of pocket. This lets Dr. Vaughan focus fully on you rather than on billing codes.",
  },
  {
    q: "How is this different from my regular doctor?",
    a: "Conventional appointments are often short and focused on managing symptoms. Functional medicine uses in-depth diagnostic testing to look for the underlying factors driving your symptoms, then builds an individualized plan around your body — with the time and attention to actually follow through.",
  },
  {
    q: "What conditions does Dr. Vaughan work with?",
    a: "Dr. Vaughan works with patients navigating thyroid and autoimmune conditions, gut and digestive issues, hormone imbalance, cognitive concerns like brain fog, chronic fatigue, and environmental toxicities such as mold and heavy metals.",
  },
  {
    q: "What kind of testing is involved?",
    a: "Depending on your case, testing may include blood work, food allergy and sensitivity testing, heavy-metal testing, mold testing, and adrenal and hormone panels — chosen to reveal what standard labs often miss.",
  },
  {
    q: "Where are you located?",
    a: "Vaughan Vitality & Wellness is located in Costa Mesa and serves patients throughout Orange County. Call (714) 434-9355 or book your free health assessment online to get started.",
  },
] as const;

// ─── Per-page (ad-group) content ─────────────────────────────────────────────
export interface Condition {
  title: string;
  body: string;
  icon: IconName;
}

export interface PageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubhead: string;
  heroImage: string;
  heroImageAlt: string;
  heroChips: string[];
  conditionsEyebrow: string;
  conditionsTitle: string;
  conditionsIntro: string;
  conditions: Condition[];
}

export const FUNCTIONAL_MEDICINE: PageContent = {
  slug: "functional-medicine",
  metaTitle:
    "Functional Medicine in Costa Mesa & Orange County | Vaughan Vitality",
  metaDescription:
    "Told your labs are normal but you still feel terrible? Dr. Kristi Vaughan uses a root-cause functional-medicine approach. Book your free health assessment.",
  eyebrow: "Functional Medicine · Costa Mesa & Orange County",
  heroHeadline: "Your labs are “normal.”",
  heroHeadlineAccent: "So why do you still feel terrible?",
  heroSubhead:
    "If you're exhausted, foggy, and not yourself — but keep being told nothing's wrong — there's usually a reason conventional medicine keeps missing it. Dr. Kristi Vaughan finds the root cause and builds a plan around you.",
  heroImage: "/images/vv/yoga-beach.jpg",
  heroImageAlt: "Woman practicing yoga on the beach at sunrise",
  heroChips: [
    "Root-cause approach",
    "1-on-1 with Dr. Vaughan",
    "Advanced functional testing",
  ],
  conditionsEyebrow: "What we help with",
  conditionsTitle: "When “normal” labs don't match how you feel",
  conditionsIntro:
    "Dr. Vaughan works with the persistent, hard-to-explain symptoms that conventional medicine often overlooks — tracing them back to their root cause.",
  conditions: [
    {
      title: "Chronic fatigue & low energy",
      body: "Wiped out despite “normal” bloodwork and enough sleep.",
      icon: "zap",
    },
    {
      title: "Brain fog & cognitive decline",
      body: "Trouble focusing, forgetfulness, and mental cloudiness.",
      icon: "brain",
    },
    {
      title: "Thyroid imbalance",
      body: "Fatigue, weight changes, and mood shifts tied to thyroid function.",
      icon: "activity",
    },
    {
      title: "Digestive & gut issues",
      body: "Bloating, discomfort, and irregularity dismissed as stress.",
      icon: "waves",
    },
    {
      title: "Autoimmune & inflammation",
      body: "A body that seems to be working against itself.",
      icon: "shield",
    },
    {
      title: "Hormone imbalance",
      body: "Energy, mood, sleep, and weight that feel out of sync.",
      icon: "scale",
    },
    {
      title: "Environmental toxicity",
      body: "Mysterious symptoms linked to mold or heavy-metal exposure.",
      icon: "wind",
    },
    {
      title: "Chronic illness & Long COVID",
      body: "Lingering, complex symptoms that never fully resolve.",
      icon: "heart",
    },
  ],
};

export const GUT_HEALTH: PageContent = {
  slug: "gut-health",
  metaTitle: "Gut Health Functional Medicine | Costa Mesa & Orange County",
  metaDescription:
    "Bloating, fatigue, and brain fog with no answers? Dr. Kristi Vaughan tests for SIBO, leaky gut, and H. pylori and builds a root-cause plan. Free health assessment.",
  eyebrow: "Gut Health · Functional Medicine in Orange County",
  heroHeadline: "Bloated, exhausted, and foggy —",
  heroHeadlineAccent: "and no one can tell you why?",
  heroSubhead:
    "Bloating, fatigue, and brain fog are rarely “just stress.” They often trace back to what's happening in your gut. Dr. Kristi Vaughan tests for the real drivers — SIBO, leaky gut, H. pylori, food sensitivities — and addresses them at the root.",
  heroImage: "/images/vv/digestion.jpg",
  heroImageAlt: "Person holding hands over their stomach and midsection",
  heroChips: [
    "Advanced gut testing",
    "1-on-1 with Dr. Vaughan",
    "Root-cause plan",
  ],
  conditionsEyebrow: "What we help with",
  conditionsTitle: "When your gut is at the root of it",
  conditionsIntro:
    "So many whole-body symptoms start in the digestive system. Dr. Vaughan looks for the real drivers behind them — not just the discomfort.",
  conditions: [
    {
      title: "Bloating & gas",
      body: "Uncomfortable, unpredictable bloating after meals.",
      icon: "waves",
    },
    {
      title: "Chronic fatigue",
      body: "Low energy that tracks back to poor gut function.",
      icon: "zap",
    },
    {
      title: "Brain fog",
      body: "The gut-brain connection behind foggy, scattered thinking.",
      icon: "brain",
    },
    {
      title: "SIBO",
      body: "Small intestinal bacterial overgrowth driving digestive chaos.",
      icon: "bug",
    },
    {
      title: "Leaky gut",
      body: "Intestinal permeability fueling inflammation and sensitivities.",
      icon: "shield",
    },
    {
      title: "H. pylori & gut infections",
      body: "Hidden infections behind reflux, pain, and nausea.",
      icon: "bug",
    },
    {
      title: "Food sensitivities",
      body: "Trigger foods quietly inflaming your system.",
      icon: "flame",
    },
    {
      title: "IBS-type symptoms",
      body: "Irregularity and discomfort with no clear diagnosis.",
      icon: "activity",
    },
  ],
};

export const AUTOIMMUNE: PageContent = {
  slug: "autoimmune",
  metaTitle: "Autoimmune & Thyroid Functional Medicine | Orange County",
  metaDescription:
    "Hashimoto's, lupus, thyroid, or hormonal imbalance? Dr. Kristi Vaughan finds the triggers behind the inflammation and builds a root-cause plan. Free health assessment.",
  eyebrow: "Autoimmune & Thyroid · Functional Medicine",
  heroHeadline: "You're doing everything right —",
  heroHeadlineAccent: "so why is your body still attacking itself?",
  heroSubhead:
    "Hashimoto's, lupus, thyroid, and hormonal imbalances rarely travel alone — and rarely respond to a single prescription. Dr. Kristi Vaughan looks for the triggers driving the inflammation and builds an individualized, root-cause plan.",
  heroImage: "/images/vv/autoimmune-family.jpg",
  heroImageAlt: "Happy family spending time together outdoors",
  heroChips: [
    "Root-cause approach",
    "1-on-1 with Dr. Vaughan",
    "Autoimmune & thyroid focus",
  ],
  conditionsEyebrow: "What we help with",
  conditionsTitle: "When your immune system needs answers, not just labels",
  conditionsIntro:
    "Autoimmune and thyroid conditions are complex. Dr. Vaughan works to understand the triggers behind them and support your body as a whole.",
  conditions: [
    {
      title: "Hashimoto's thyroiditis",
      body: "The autoimmune side of hypothyroidism, addressed at the root.",
      icon: "activity",
    },
    {
      title: "Graves' & thyroid disease",
      body: "Thyroid dysfunction driving energy, weight, and mood swings.",
      icon: "activity",
    },
    {
      title: "Lupus & autoimmune conditions",
      body: "Whole-person support for complex autoimmune concerns.",
      icon: "shield",
    },
    {
      title: "Hormonal imbalance",
      body: "Hormones that feel perpetually out of sync.",
      icon: "scale",
    },
    {
      title: "Chronic inflammation",
      body: "Persistent inflammation fueling flares and fatigue.",
      icon: "flame",
    },
    {
      title: "Food & environmental triggers",
      body: "Foods, mold, and toxins that quietly provoke your system.",
      icon: "wind",
    },
    {
      title: "Gut-immune dysfunction",
      body: "The gut connection behind so many autoimmune conditions.",
      icon: "waves",
    },
    {
      title: "Fatigue & flare-ups",
      body: "The exhaustion and unpredictable flares that come with it.",
      icon: "zap",
    },
  ],
};

export const PAGES: Record<string, PageContent> = {
  "functional-medicine": FUNCTIONAL_MEDICINE,
  "gut-health": GUT_HEALTH,
  autoimmune: AUTOIMMUNE,
};
