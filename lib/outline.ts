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

  /* ───────────── 2. Bulk Trade Show Giveaways (replaces onboarding kits) ─────────── */
  {
    slug: "blog-two-outline",
    date: "May 28, 2025",
    seoTitle: "SEO Keyword Plan: Bulk Trade Show Giveaways Singapore",
    seoDescription:
      "A guide for event marketing teams and exhibitors sourcing cost-effective, brand-aligned trade show giveaways in bulk across Singapore.",
    articleTitle:
      "Bulk Trade Show Giveaways in Singapore: Ideas, Logistics & Branding Tips",
    gapHeading: "Content Gap",
    gapBody:
      "Current search results prioritise e-commerce or logistics solutions (e.g. Boxaroo’s event merchandise service) but offer little educational guidance. Few resources discuss which swag works best for trade events or how to package items for branding impact. Users must browse individual product listings without a consolidated advisory overview.",
    fillGapHeading: "How to Fill the Gap",
    fillGapBody:
      "DayTech Gifts can publish a detailed “trade show swag 101” focused on bulk orders, describing trending freebies (eco-friendly swag, tech gadgets, custom apparel) and advising on design, packaging, quantity planning, lead times, and alignment with marketing goals. Emphasising DayTech’s customisation strengths will satisfy search intent and position the brand as a trusted partner.",
    keywords: [
      { keyword: "bulk trade show giveaways Singapore", intent: "Transactional" },
      { keyword: "custom trade show swag Singapore", intent: "Transactional" },
      { keyword: "eco-friendly promotional items Singapore", intent: "Informational" },
      { keyword: "bulk event merchandise Singapore", intent: "Transactional" },
      { keyword: "custom logo giveaways Singapore", intent: "Transactional" },
      { keyword: "trade show swag ideas Singapore", intent: "Informational" },
      { keyword: "conference giveaways Singapore", intent: "Informational" },
      { keyword: "branded merchandise Singapore", intent: "Informational" },
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

  /* ─── 4. Pop-Up Booth Guide (replaces premium VIP corporate gifts) ──────── */
  {
    slug: "blog-four-outline",
    date: "June 11, 2025",
    seoTitle:
      "SEO Keyword Plan: Guide to Setting Up a Successful Pop-Up Booth at Singapore Expos",
    seoDescription:
      "A comprehensive guide for small businesses creating engaging, regulation-compliant pop-up booths at Singapore expos.",
    articleTitle:
      "How to Set Up a Successful Pop-Up Booth at Singapore Expos: Design, Compliance & Engagement",
    gapHeading: "Content Gap",
    gapBody:
      "While general booth-setup advice exists, resources rarely address Singapore-specific regulations, cultural preferences, and logistical nuances that small vendors face.",
    fillGapHeading: "How to Fill the Gap",
    fillGapBody:
      "DayTech’s blog can offer a hyper-local, practical roadmap—covering booth design, product display, customer engagement tactics, budgeting, and compliance with Singapore event regulations—to help vendors maximise attention and sales at expos such as Comic-Con or niche trade shows.",
    keywords: [
      { keyword: "pop-up booth Singapore expo", intent: "Informational" },
      { keyword: "Singapore expo booth setup", intent: "Informational" },
      { keyword: "small business pop-up booth Singapore", intent: "Informational" },
      { keyword: "expo booth design Singapore", intent: "Informational" },
      { keyword: "event booth regulations Singapore", intent: "Informational" },
      { keyword: "trade show booth tips Singapore", intent: "Informational" },
    ],
  },
];
