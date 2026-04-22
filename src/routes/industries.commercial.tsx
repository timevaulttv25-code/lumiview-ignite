import { createFileRoute } from "@tanstack/react-router";
import { Building2, Store, Briefcase, Sparkles, Clock, ShieldCheck, Sun, Droplets, Repeat } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, faqJsonLd } from "@/lib/seo";
import { RichIndustryLayout } from "@/components/site/RichIndustryLayout";
import heroImg from "@/assets/industry-commercial.jpg";
import resultImg from "@/assets/work-storefront-ba.jpg";

const slug = "commercial";
const industryTitle = "Commercial Properties";
const intro =
  "Commercial cleaning for storefronts, offices, restaurants and retail plazas across Northeast Ohio. Recurring routes, after-hours service, $2M insured — built to keep your brand presentation sharp without disrupting your operation.";

const TIERS = [
  {
    icon: Store,
    eyebrow: "Storefronts & Retail",
    title: "Storefront window & exterior care",
    body: "Weekly or biweekly storefront routes that keep entry glass, sidewalks and façade looking customer-ready.",
    items: ["Storefront windows (weekly / biweekly)", "Sidewalk & entryway pressure wash", "Awning & signage cleaning", "Cobweb & dust removal"],
  },
  {
    icon: Briefcase,
    eyebrow: "Offices",
    title: "Office janitorial & interior",
    body: "Detail-driven nightly or weekly cleaning for office space — desks, restrooms, kitchens, glass and floors.",
    items: ["Workstation & lobby cleaning", "Restroom sanitation", "Breakroom & kitchen detail", "Trash, recycle & restock"],
  },
  {
    icon: Building2,
    eyebrow: "Restaurants & Plazas",
    title: "Plaza, restaurant & multi-tenant",
    body: "Coordinated exterior and common-area service across multi-tenant retail and food-service properties.",
    items: ["Plaza sidewalk pressure wash", "Restaurant interior detail", "Common-area janitorial", "Multi-tenant scheduling"],
  },
];

const FEATURES = [
  {
    icon: Clock,
    title: "After-hours & overnight service",
    body: "Most commercial accounts run evening, early-morning or weekend so there's zero disruption to staff and customers.",
    items: ["Evening & overnight crews", "Weekend service available", "Alarm & key handling protocols", "Discreet, uniformed teams"],
  },
  {
    icon: Sun,
    title: "Storefront glass routes",
    body: "Recurring weekly or biweekly window service that keeps entry glass spotless year-round.",
    items: ["Weekly / biweekly cadence", "Interior & exterior glass", "Doors, sidelights & vestibules", "Streak-free purified water"],
  },
  {
    icon: Droplets,
    title: "Sidewalk & exterior pressure wash",
    body: "Surface-safe cleaning for entry sidewalks, dumpster pads, drive-thrus and rear service areas.",
    items: ["Sidewalk gum & stain removal", "Dumpster pad cleaning", "Drive-thru lane wash", "Building exterior soft-wash"],
  },
  {
    icon: Sparkles,
    title: "Restroom & breakroom detail",
    body: "High-touch sanitation with restocking — the areas customers and staff judge fastest.",
    items: ["Restroom deep sanitation", "Soap, paper & supply restock", "Touch-point disinfection", "Breakroom & kitchen detail"],
  },
  {
    icon: ShieldCheck,
    title: "$2M insured + COI on request",
    body: "Full general liability, workers' comp and certificates of insurance with your business listed as additional insured.",
    items: ["$2M general liability", "Full workers' comp", "COI within 24 hours", "Additional-insured listing"],
  },
  {
    icon: Repeat,
    title: "One vendor, one invoice",
    body: "Window cleaning, janitorial, pressure washing and exterior detail consolidated into one trusted vendor.",
    items: ["Single point of contact", "Consolidated invoicing", "Predictable scheduling", "Same-team continuity"],
  },
];

const PROCESS = [
  { step: "01", title: "Walkthrough & scope", body: "We walk the property, confirm scope, frequency, access and after-hours requirements." },
  { step: "02", title: "Proposal & COI", body: "Clear written proposal with pricing, frequency and certificate of insurance — usually within 48 hours." },
  { step: "03", title: "Recurring service", body: "Same crew, same cadence, with on-call support for special events or emergencies." },
];

const FAQS = [
  { q: "Can you service us before or after business hours?", a: "Yes — most commercial accounts prefer evening, early-morning or weekend service so there's no disruption to staff or customers. We handle alarm codes and keys per your protocol." },
  { q: "Are you insured for commercial work?", a: "Yes. We carry $2M general liability and full workers' comp, and we provide certificates of insurance with your business listed as additional insured on request — typically within 24 hours." },
  { q: "How much does commercial cleaning cost in Northeast Ohio?", a: "Office janitorial typically runs $0.10–$0.20 per sq ft per visit depending on frequency and scope. Storefront window routes start around $35–$75 per visit. We provide a clear written proposal after a walkthrough." },
  { q: "Do you do recurring storefront window cleaning routes?", a: "Yes — weekly and biweekly storefront routes are a core part of what we do across Avon, Westlake, Rocky River, Lakewood and surrounding communities." },
  { q: "Can you handle multi-tenant retail plazas?", a: "Yes. We coordinate exterior and common-area service across multi-tenant retail, plaza and food-service properties with consolidated billing per property or per tenant." },
  { q: "Will the same crew clean every visit?", a: "Yes — same-crew continuity is part of how we work. Your team gets to know our team, and standards stay consistent visit after visit." },
];

export const Route = createFileRoute("/industries/commercial")({
  head: () => ({
    ...buildSeo({
      title: `${industryTitle} Cleaning Services — Northeast Ohio`,
      description: intro,
      path: `/industries/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: CommercialIndustryPage,
});

function CommercialIndustryPage() {
  return (
    <RichIndustryLayout
      heroEyebrow="Industry • Commercial"
      heroTitle="Commercial cleaning that protects your brand presentation."
      heroDescription={intro}
      heroImage={heroImg}
      industryTitle={industryTitle}
      highlights={[
        "After-hours & weekend service",
        "$2M insured + COI on request",
        "Recurring weekly routes",
        "Single point of contact",
      ]}
      tiersEyebrow="Commercial Services"
      tiersHeading="Built for the way your business actually operates."
      tiersIntro="Storefronts, offices, restaurants and multi-tenant plazas — each gets a service plan tuned to its hours, traffic and presentation standards."
      tiers={TIERS}
      featuresEyebrow="What's Included"
      featuresHeading="Everything a commercial property needs from one vendor."
      featuresIntro="Combine window cleaning, janitorial, pressure washing and exterior detail into a single recurring program with one invoice and one point of contact."
      features={FEATURES}
      resultEyebrow="The Result"
      resultHeading="Sharper first impressions, fewer customer complaints, zero disruption."
      resultBody="Customers form an opinion of your business in the first six seconds at the door. Spotless glass, swept entryways and clean restrooms keep that opinion working in your favor — without ever interrupting your operation."
      resultImage={resultImg}
      resultImageAlt="Before and after commercial storefront cleaning by LumiView"
      relatedEyebrow="Popular Services"
      relatedHeading="Commercial services businesses book most."
      related={[
        { to: "/services/window-cleaning", eyebrow: "Window Cleaning", title: "Storefront & office glass", body: "Weekly or biweekly storefront routes plus interior office glass." },
        { to: "/services/janitorial-interior-cleaning", eyebrow: "Janitorial", title: "Office & facility janitorial", body: "Nightly or weekly interior cleaning with restocking and detail focus." },
        { to: "/services/pressure-washing", eyebrow: "Pressure Washing", title: "Sidewalks & exteriors", body: "Sidewalk, dumpster pad, drive-thru and building exterior cleaning." },
      ]}
      processEyebrow="Our Process"
      processHeading="From walkthrough to recurring service in a week."
      process={PROCESS}
      serviceAreaHeading="Serving businesses across Northeast Ohio."
      serviceAreaBody="Commercial proposals are scoped after a quick walkthrough so pricing reflects your actual property — no guesswork, no surprise add-ons."
      faqs={FAQS}
      faqTitle="Commercial cleaning — common questions"
      ctaTitle="One trusted vendor for every cleaning need on the property."
      ctaBody="Free walkthroughs. COI within 24 hours. After-hours service. Tell us about your property and we'll follow up with a clear written proposal."
    />
  );
}
