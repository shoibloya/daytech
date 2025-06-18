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
  /* ──────── 19. Digital Gift Bundles for Events ──────── */
{
  slug: "digital-gift-bundles-singapore-outline",
  date: "June 18, 2025",
  seoTitle: "SEO Keyword Plan: Digital Gift Bundles for Virtual Events in Singapore",
  seoDescription:
    "A local-first guide for Singapore event planners building digital gift bundles with Grab vouchers, e-gifts, and optional physical items for virtual events.",
  articleTitle:
    "How to Create Digital Gift Bundles for Virtual Events in Singapore: Smart Localised Options for Remote Delight",
  gapHeading: "Content Gap",
  gapBody: `Existing resources suggest e-vouchers or snack boxes but miss key localisation needs for Singapore:

- Platform relevance: Grab vouchers vs. Uber Eats
- Bulk redemption: Group discount options aren't addressed
- Legal/tax issues: No mention of PDPA or taxable treatment of e-gifts

Most top-ranking sites (e.g., pcnametag.com, bizzabo.com, snackmagic.com) are US-based, leaving SG planners to improvise.`,
  fillGapHeading: "How to Fill the Gap",
  fillGapBody: `Offer a guide to building digital-first event gift bundles that:

- Combine instant e-gifts (e.g. Grab, FoodPanda, Lazada) with optional physical items (e.g. custom mugs, plants, care packs)
- Include a PDPA-compliant data-collection flow for remote gift claiming
- Provide tips on tax-deductibility, local fulfilment vendors, and ways to reuse leftover credits for future events
- Showcase a DayTech bundle-builder tool for Singapore planners with template sets and automated logistics tracking`,
  keywords: [
    { keyword: "digital gift bundles for virtual events singapore", intent: "Transactional" },
  ],
},

/* ──────── 20. Hybrid Event Gift Packs Singapore ──────── */
{
  slug: "hybrid-event-gift-packs-singapore-outline",
  date: "June 25, 2025",
  seoTitle: "SEO Keyword Plan: Hybrid Event Attendee Gift Pack Ideas in Singapore",
  seoDescription:
    "Gift pack ideas for hybrid events in Singapore, including halal snacks, SG-compliant shipping, and mix-and-match modules for in-person and remote guests.",
  articleTitle:
    "Hybrid Event Gift Packs in Singapore: Local-Friendly Ideas for Both Onsite and Virtual Attendees",
  gapHeading: "Content Gap",
  gapBody: `Most available content is US-centric. Singapore-specific concerns are rarely addressed:

- Local courier costs, SY45 postal size constraints
- Halal snack or wellness item availability
- Customs and packaging climate constraints (e.g. chocolate in July)

Key vendor sites (e.g. pcnametag.com, snackmagic.com, shangri-la.com) offer little regional guidance.`,
  fillGapHeading: "How to Fill the Gap",
  fillGapBody: `Provide practical hybrid gift pack options that:

- Mix tech, F&B, and wellbeing items for both remote and in-person guests
- Respect Singapore’s shipping, food, and customs constraints
- Highlight DayTech’s cold-chain logistics partners for chocolate/wellness items
- Feature modular kits that comply with SY45 postal guidelines and allow planners to mix modules (e.g. hydration, snacks, aromatherapy)`,
  keywords: [
    { keyword: "hybrid event attendee gift pack ideas singapore", intent: "Transactional" },
  ],
},

/* ──────── 21. Marathon Race Pack Water Bottles ──────── */
{
  slug: "marathon-race-pack-water-bottles-outline",
  date: "July 2, 2025",
  seoTitle: "SEO Keyword Plan: Marathon Race Pack Custom Water Bottles in Singapore",
  seoDescription:
    "Help race organizers in Singapore select lightweight, fast-turnaround, sponsor-friendly custom water bottles for marathon packs.",
  articleTitle:
    "Custom Water Bottles for Marathon Race Packs in Singapore: Selection Tips, Sponsorship Ideas and Fulfilment Planning",
  gapHeading: "Content Gap",
  gapBody: `Most search results focus on general “water bottle giveaways” or US trade shows.

Missing:
- Nozzle-type comparisons (sports cap vs. flip-top)
- Sponsorship placement mock-ups
- Courier issues handling thousands of units within short windows

Tradeshowdisplays.com.sg and similar directories dominate without real insights.`,
  fillGapHeading: "How to Fill the Gap",
  fillGapBody: `Create a planner-centric guide that:

- Compares bottle types (squeezable vs. insulated, nozzle types)
- Shows branding options with logo placement previews
- Includes production-to-delivery timelines with DayTech fulfilment partners
- Explains bulk shipping tips, customs issues, and contingency planning for Singapore marathons`,
  keywords: [
    { keyword: "marathon race pack custom water bottles Singapore", intent: "Transactional" },
  ],
},

/* ──────── 22. Tech Giveaways for Comic-Con ──────── */
{
  slug: "comic-con-tech-giveaways-singapore-outline",
  date: "July 9, 2025",
  seoTitle: "SEO Keyword Plan: Custom Tech Giveaways for Comic-Con Vendors in Singapore",
  seoDescription:
    "A creative guide to SG Comic-Con tech giveaways — from Bluetooth swag to crowd-puller tools — tailored to cosplay, gaming and anime booth goals.",
  articleTitle:
    "Best Tech Giveaways for Comic-Con Exhibitors in Singapore: Budget-Friendly Booth Ideas That Fans Love",
  gapHeading: "Content Gap",
  gapBody: `Google shows generic “trade show swag” lists or catalog sites.

Missing:
- Specific alignment with Singapore Comic Con (SGCC) attendee interests
- Booth outcome mapping (engagement vs. lead gen)
- Real local case studies and cost tiers

Even SGCC’s site outlines only high-level booth setup ideas, not targeted giveaway guidance.`,
  fillGapHeading: "How to Fill the Gap",
  fillGapBody: `Publish a Comic-Con-specific guide that:

- Suggests tech swag mapped to booth goals (crowd-pullers: mini-fans, scanners; lead capture: Bluetooth tags, QR devices)
- Offers budget tiers (under $5, $5–$15, premium)
- Includes past examples from Singapore Comic Con vendors
- Positions DayTech as a booth-planning partner with sample kits and case studies`,
  keywords: [
    { keyword: "custom tech giveaways for Comic-Con vendors Singapore", intent: "Transactional" },
  ],
},

 
];
