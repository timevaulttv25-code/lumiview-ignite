import { createFileRoute } from "@tanstack/react-router";
import { Building2, Repeat, ClipboardList, KeyRound, Sun, Droplets, FileText, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, faqJsonLd } from "@/lib/seo";
import { RichIndustryLayout } from "@/components/site/RichIndustryLayout";
import heroImg from "@/assets/industry-property-managers.jpg";
import resultImg from "@/assets/work-storefront-ba.jpg";

const slug = "property-managers";
const industryTitle = "Property Managers";
const intro =
  "One point of contact, one invoice, one consistent standard across your entire portfolio. Make-ready turns, common-area janitorial, exterior wash, storefront windows and short-term rental turnovers — all under one trusted vendor.";

const TIERS = [
  {
    icon: KeyRound,
    eyebrow: "Make-Ready",
    title: "Turnover & make-ready cleaning",
    body: "Predictable 24–72 hour turn windows for vacated units so you can list, show and lease without delay.",
    items: ["24–72 hour turn windows", "Same-day emergency turns", "Punch-list completion", "Photo confirmation per unit"],
  },
  {
    icon: Building2,
    eyebrow: "Common Areas",
    title: "Hallway, lobby & common-area janitorial",
    body: "Daily, weekly or biweekly cleaning for hallways, lobbies, elevators, mailrooms and amenity spaces.",
    items: ["Lobby & hallway detail", "Elevator & stair cleaning", "Mailroom & amenity space", "Trash room sanitation"],
  },
  {
    icon: ClipboardList,
    eyebrow: "Portfolio",
    title: "Multi-property scheduling & reporting",
    body: "Coordinated service across every door in the portfolio — one schedule, one report, one invoice.",
    items: ["Per-property reporting", "Consolidated invoicing", "Same-team continuity", "Dedicated account manager"],
  },
];

const FEATURES = [
  {
    icon: KeyRound,
    title: "Make-ready & turnover",
    body: "Standardized turnover scope so every unit lists at the same level — regardless of who's cleaning it.",
    items: ["Full-unit deep clean", "Appliance interior detail", "Carpet vacuum & spot treat", "Punch-list & touch-up"],
  },
  {
    icon: Sun,
    title: "Common-area window cleaning",
    body: "Lobby, entry and storefront glass kept on a recurring weekly or monthly cadence.",
    items: ["Lobby & entry glass", "Storefront windows", "Interior partition glass", "Mirror & display detail"],
  },
  {
    icon: Droplets,
    title: "Exterior & sidewalk pressure wash",
    body: "Building exterior, sidewalks, dumpster pads and parking-lot entries on a scheduled or as-needed basis.",
    items: ["Building soft-wash", "Sidewalk pressure wash", "Dumpster pad cleaning", "Entryway & ramp wash"],
  },
  {
    icon: FileText,
    title: "Per-property reporting",
    body: "Every visit is logged with date, crew, scope and (on request) before/after photos — broken out per door.",
    items: ["Date & crew logged", "Scope confirmation", "Before/after photos on request", "Issue & damage flags"],
  },
  {
    icon: Phone,
    title: "Single point of contact",
    body: "One account manager handles every property, every request, every issue — no chasing crews or vendors.",
    items: ["Dedicated account manager", "Text & email response", "Same-day urgent dispatch", "Quarterly portfolio review"],
  },
  {
    icon: ShieldCheck,
    title: "Insured & COI per property",
    body: "$2M general liability with certificates of insurance issued per managed property as required.",
    items: ["$2M general liability", "Full workers' comp", "COI per property on request", "Additional-insured listing"],
  },
];

const PROCESS = [
  { step: "01", title: "Portfolio walk-through", body: "We walk a sample of the portfolio, confirm standard scope, turn windows and reporting requirements." },
  { step: "02", title: "Standardized scope of work", body: "We document a unified scope so every property and every unit is cleaned to the same standard." },
  { step: "03", title: "Onboarding & ongoing service", body: "Account manager is assigned, schedule is built, and recurring service begins with monthly portfolio review." },
];

const FAQS = [
  { q: "How quickly can you turn a vacated unit?", a: "Standard make-ready turns are scheduled within 24–72 hours of vacancy. Same-day emergency turns are available for active accounts." },
  { q: "Do you provide reporting per property?", a: "Yes — every visit is logged with date, crew, scope and (on request) before/after photos, broken out per door for easy reconciliation." },
  { q: "Can we get one consolidated invoice for the portfolio?", a: "Yes. We bill consolidated by portfolio with per-property line items, or per-property if your accounting requires it. Net-30 terms available for established accounts." },
  { q: "Do you provide certificates of insurance per property?", a: "Yes — we issue COIs per managed property with your management company listed as additional insured. Most COI requests are completed within 24 hours." },
  { q: "Will the same crew clean my properties every time?", a: "Yes. Same-team continuity is core to how we work — your maintenance team and tenants see the same faces, and standards stay consistent." },
  { q: "How is pricing structured for property management accounts?", a: "Recurring services are priced per visit or per unit with portfolio discounts. Make-ready turns are typically priced per square foot. Clear written proposal after a walkthrough." },
];

export const Route = createFileRoute("/industries/property-managers")({
  head: () => ({
    ...buildSeo({
      title: `${industryTitle} — Portfolio Cleaning Across Northeast Ohio`,
      description: intro,
      path: `/industries/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: PropertyManagersIndustryPage,
});

function PropertyManagersIndustryPage() {
  return (
    <RichIndustryLayout
      heroEyebrow="Industry • Property Managers"
      heroTitle="One vendor, one standard, one invoice — across every door."
      heroDescription={intro}
      heroImage={heroImg}
      industryTitle={industryTitle}
      highlights={[
        "24–72 hour make-ready turns",
        "Per-property reporting & photos",
        "COI per property on request",
        "Dedicated account manager",
        "Single consolidated invoice",
        "Multi-unit & portfolio scheduling",
        "AppFolio / Buildium / Yardi friendly",
        "Reserve crews for emergencies",
      ]}
      tiersEyebrow="Portfolio Services"
      tiersHeading="The full cleaning stack a property manager actually needs."
      tiersIntro="Make-ready turns, common-area janitorial and recurring exterior care — coordinated across multifamily, mixed-use and commercial portfolios."
      tiers={TIERS}
      featuresEyebrow="What's Included"
      featuresHeading="Built for portfolios — not one-off jobs."
      featuresIntro="Standardized scope, predictable scheduling, photo-documented quality control and reporting that drops straight into your management software."
      features={FEATURES}
      resultEyebrow="The Result"
      resultHeading="Faster turns, fewer tenant complaints, less time chasing vendors."
      resultBody="With one trusted vendor across the portfolio, you stop coordinating five different cleaners — and start getting consistent results, predictable invoicing and units that lease faster."
      resultImage={resultImg}
      resultImageAlt="Common-area cleaning portfolio support by LumiView"
      relatedEyebrow="Popular Services"
      relatedHeading="Services property managers book most."
      related={[
        { to: "/services/property-management-cleaning", eyebrow: "Property Mgmt Cleaning", title: "Recurring portfolio support", body: "Recurring cleaning, turnover and exterior care for managed portfolios." },
        { to: "/services/janitorial-interior-cleaning", eyebrow: "Janitorial", title: "Common-area janitorial", body: "Hallways, lobbies, elevators, mailrooms and amenity space cleaning." },
        { to: "/services/window-cleaning", eyebrow: "Window Cleaning", title: "Lobby & storefront glass", body: "Recurring window service for lobbies, storefronts and entry glass." },
      ]}
      processEyebrow="Our Process"
      processHeading="From portfolio walkthrough to monthly review."
      process={PROCESS}
      serviceAreaHeading="Serving property managers across Northeast Ohio."
      serviceAreaBody="We service multifamily, mixed-use, commercial and HOA portfolios across Avon, Westlake, Lakewood, Rocky River and surrounding communities."
      faqs={FAQS}
      faqTitle="Property management — common questions"
      ctaTitle="One trusted cleaning partner for the entire portfolio."
      ctaBody="Free portfolio walkthroughs. COI per property. Dedicated account manager. Tell us about your portfolio and we'll follow up with a clear proposal."
    />
  );
}
