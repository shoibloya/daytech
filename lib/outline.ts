/* -------------------------------------------------------------------------- */
/*  Outline model                                                             */
/* -------------------------------------------------------------------------- */

export type Keyword = {
  keyword: string
  intent:
    | "Transactional"
    | "Informational"
    | "Navigational"
    | "Commercial"
}

export interface Outline {
  slug: string
  date: string
  seoTitle: string
  seoDescription: string
  articleTitle: string
  gapHeading: string
  gapBody: string
  fillGapHeading: string
  fillGapBody: string
  keywords: Keyword[]
}

/* -------------------------------------------------------------------------- */
/*  DayTech gift-series outlines                                              */
/* -------------------------------------------------------------------------- */

export const outlines: Outline[] = [
  /* ───────────── 1. Tech-Gadget Employee Gifts (replaces cybersecurity) ─────────── */
  {
    slug: "blog-one-outline",
    date: "May 21, 2025",
    seoTitle:
      "SEO Keyword Plan: Tech Gadget Corporate Gifts for Employees in Singapore",
    seoDescription:
      "A guide for HR and IT teams looking to delight staff with practical, modern tech gifts that boost engagement and productivity.",
    articleTitle:
      "Top Tech Gadget Gifts for Your Employees (Singapore Edition)",
    gapHeading: "Content Gap",
    gapBody:
      "Most lists of employee tech gifts are generic or US-centric, focusing on flashy gadgets without explaining their workplace value. Singapore-based buyers find little local sourcing advice or context on how gifts like wireless chargers or USB hubs support productivity or hybrid-work readiness. Few resources connect gifting choices to company culture or employee engagement goals.",
    fillGapHeading: "How to Fill the Gap",
    fillGapBody:
      "DayTech Gifts can publish an engaging listicle—“Top Tech Gadget Gifts for Your Employees (Singapore Edition)”—that introduces 8-10 practical, locally available tech items (e.g. wireless chargers, Bluetooth trackers, USB-C hubs). Each idea should explain its productivity or well-being benefit and suggest moments for distribution (work-from-home stipend, project milestone). Local pricing ranges, sourcing tips, and customisation options will make the piece immediately actionable and position DayTech as the go-to partner for tech-forward corporate gifting.",
    keywords: [
      { keyword: "tech gadget corporate gifts Singapore", intent: "Informational" },
      { keyword: "employee tech swag Singapore", intent: "Informational" },
      { keyword: "wireless charger corporate gift Singapore", intent: "Transactional" },
      { keyword: "USB hub employee gift Singapore", intent: "Transactional" },
      { keyword: "DayTech tech gadget gifts", intent: "Transactional" },
      { keyword: "best tech corporate gifts SG", intent: "Informational" },
    ],
  },

  /* ──────────────────── 2. Employee Onboarding Gift Kits ────────────────── */
  {
    slug: "blog-two-outline",
    date: "May 28, 2025",
    seoTitle: "SEO Keyword Plan: Employee Onboarding Gift Kits in Singapore",
    seoDescription:
      "A guide for HR professionals and office managers curating impactful welcome packages for new hires, with local sourcing and engagement in mind.",
    articleTitle:
      "Ultimate Guide to Employee Onboarding Kits in Singapore (What to Include and Why)",
    gapHeading: "Content Gap",
    gapBody:
      "Existing onboarding-kit articles are often overseas-focused or generic product pitches; few consider Singapore’s cultural nuances, hybrid-work realities, or scale challenges faced by large enterprises.",
    fillGapHeading: "How to Fill the Gap",
    fillGapBody:
      "DayTech Gifts can publish a strategic guide emphasising first-impression impact, curated categories (essentials, tech accessories, local touches), and operational tips for scaling and personalising kits—reinforcing DayTech’s one-stop capability for sourcing, customising, and fulfilment.",
    keywords: [
      { keyword: "employee onboarding gift kits Singapore", intent: "Transactional" },
      { keyword: "new hire welcome kit ideas SG", intent: "Informational" },
      { keyword: "customized onboarding packages Singapore", intent: "Informational" },
      { keyword: "corporate welcome gift sets for employees", intent: "Transactional" },
      { keyword: "DayTech employee welcome kits", intent: "Transactional" },
      { keyword: "onboarding gift ideas for remote employees", intent: "Informational" },
    ],
  },

  /* ───────────────── 3. Bulk Corporate Gifts for Large Orders ───────────── */
  {
    slug: "blog-three-outline",
    date: "June 4, 2025",
    seoTitle:
      "SEO Keyword Plan: Bulk Corporate Gifts Supplier in Singapore for Large Orders",
    seoDescription:
      "A guide for procurement teams at large enterprises sourcing high-volume corporate gifts, with tips on vetting vendors and ensuring consistent quality.",
    articleTitle:
      "Bulk Corporate Gifting in Singapore: A Practical Guide for Large Enterprises",
    gapHeading: "Content Gap",
    gapBody:
      "Search results focus on product catalogues and overlook procurement pain points: MOQs, lead times, scalable branding, QA, and logistics coordination across multiple locations.",
    fillGapHeading: "How to Fill the Gap",
    fillGapBody:
      "DayTech’s guide should offer a supplier-evaluation checklist, branding-at-scale advice, logistics planning, and showcase DayTech’s in-house fulfilment strengths—transforming a catalogue query into a strategic procurement resource.",
    keywords: [
      { keyword: "bulk corporate gifts supplier Singapore", intent: "Transactional" },
      { keyword: "large quantity corporate gifts SG", intent: "Transactional" },
      { keyword: "corporate gifting bulk order Singapore", intent: "Informational" },
      { keyword: "DayTech bulk corporate gift orders", intent: "Transactional" },
      { keyword: "best vendor for large corporate gifts SG", intent: "Informational" },
      { keyword: "how to manage high-volume corporate gifts", intent: "Informational" },
    ],
  },

  /* ──────────────── 4. Premium Gifts for VIP Clients ────────────────────── */
  {
    slug: "blog-four-outline",
    date: "June 11, 2025",
    seoTitle:
      "SEO Keyword Plan: Premium Corporate Gifts for VIP Clients in Singapore",
    seoDescription:
      "A guide for marketing and BD teams seeking luxurious, high-impact gifts to impress and retain top-tier clients and C-suite decision-makers.",
    articleTitle:
      "Elevating Business Relations with VIP Corporate Gifts in Singapore",
    gapHeading: "Content Gap",
    gapBody:
      "Premium-gift search results are dominated by static catalogues; few explain gifting strategy, exclusivity, subtle branding, or matching gifts to client profiles.",
    fillGapHeading: "How to Fill the Gap",
    fillGapBody:
      "DayTech can publish a premium-focused article outlining executive tech gadgets, leather goods, bespoke sets, and minimalist branded items, plus decision tips for matching gifts to VIP profiles—positioning DayTech as the trusted high-end gifting partner.",
    keywords: [
      { keyword: "premium corporate gifts Singapore", intent: "Transactional" },
      { keyword: "VIP client gift ideas SG", intent: "Informational" },
      { keyword: "luxury corporate gifting Singapore", intent: "Informational" },
      { keyword: "executive gifts for C-suite clients", intent: "Informational" },
      { keyword: "DayTech premium business gift sets", intent: "Transactional" },
      { keyword: "high-end branded corporate gifts", intent: "Informational" },
    ],
  },
];
