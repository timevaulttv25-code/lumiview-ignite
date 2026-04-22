import { createFileRoute } from "@tanstack/react-router";
import { Home, Sparkles, Repeat, Droplets, Shield, Sun, Star, KeyRound, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, faqJsonLd } from "@/lib/seo";
import { RichIndustryLayout } from "@/components/site/RichIndustryLayout";
import heroImg from "@/assets/industry-residential.jpg";
import resultImg from "@/assets/work-windows-ba.jpg";

const slug = "residential";
const industryTitle = "Residential Properties";
const intro =
  "Trusted residential cleaning across Avon and Northeast Ohio, window cleaning, soft-wash exteriors, pressure washing, deep cleans and short-term rental turnovers. Insured, background-checked crews and a finish that protects the value of your home.";

const TIERS = [
  {
    icon: Home,
    eyebrow: "Single-Family Homes",
    title: "Whole-home exterior & interior care",
    body: "Seasonal exterior refreshes plus interior detail cleaning so your home looks cared-for inside and out.",
    items: ["Interior & exterior windows", "Soft-wash siding & roof", "Driveway & walkway pressure wash", "Deep interior cleaning"],
  },
  {
    icon: KeyRound,
    eyebrow: "Short-Term Rentals",
    title: "Airbnb & Vrbo turnovers",
    body: "Hotel-grade turnovers between guests with linen service, restocking and photo confirmation, built to protect your 5-star reviews.",
    items: ["Same-day turnover windows", "Linen swap & restock", "Photo confirmation per reset", "Damage & supply reports"],
  },
  {
    icon: Repeat,
    eyebrow: "Recurring Care",
    title: "Weekly, biweekly & monthly housekeeping",
    body: "A consistent crew, a consistent standard, and a schedule you can plan a week around, no scrambling for last-minute help.",
    items: ["Recurring housekeeping", "Quarterly window cleaning", "Seasonal exterior wash", "Move-in / move-out cleans"],
  },
];

const FEATURES = [
  {
    icon: Sun,
    title: "Window cleaning",
    body: "Streak-free interior and exterior glass for brighter rooms and a cleaner curb appearance.",
    items: ["Interior & exterior glass", "Screen, track & frame detail", "Hard-water stain treatment", "Skylights & high glass"],
  },
  {
    icon: Droplets,
    title: "Pressure washing & soft wash",
    body: "Surface-safe cleaning that lifts grime from siding, roofs, walkways, driveways and patios.",
    items: ["House siding soft-wash", "Roof algae & moss soft-wash", "Driveway & walkway wash", "Patio, deck & fence wash"],
  },
  {
    icon: Sparkles,
    title: "Deep & seasonal cleaning",
    body: "A reset for the whole home, kitchens, bathrooms, baseboards, fans, fixtures and detail-level dusting.",
    items: ["Top-to-bottom deep clean", "Kitchen & bath sanitation", "Baseboard & fixture detail", "Move-in / move-out resets"],
  },
  {
    icon: KeyRound,
    title: "Vacation rental turnover",
    body: "Built specifically for Airbnb, Vrbo and Booking.com hosts, predictable resets between every guest.",
    items: ["Linen & towel swap", "Consumables restocking", "Photo confirmation", "Tight check-in / check-out windows"],
  },
  {
    icon: Shield,
    title: "Family-safe products",
    body: "Low-VOC, pet- and child-friendly products by default, with fragrance-free or eco-certified options on request.",
    items: ["Pet- & kid-safe formulas", "Low-VOC defaults", "Fragrance-free option", "EPA-registered disinfectants"],
  },
  {
    icon: Calendar,
    title: "Easy scheduling & access",
    body: "Lockbox, code or coordinated entry, most clients aren't home during service and never have to be.",
    items: ["Lockbox / code entry", "Background-checked crews", "Same-crew continuity", "Text-based confirmations"],
  },
];

const PROCESS = [
  { step: "01", title: "Tell us about your home", body: "A few details on size, services needed and timing, most quotes come back within 24 hours." },
  { step: "02", title: "Confirm scope & access", body: "We finalize the cleaning checklist, products, frequency and how we'll get in the door." },
  { step: "03", title: "Service & confirmation", body: "Insured, background-checked crew completes the work and confirms with photos when relevant." },
];

const FAQS = [
  { q: "Do I need to be home during service?", a: "No, most of our residential clients aren't. We're fully insured, background-checked and can work from a lockbox, smart lock or coordinated entry." },
  { q: "Are your products pet- and child-safe?", a: "Yes. We default to low-VOC, family-safe solutions and can switch to fragrance-free or eco-certified products on request." },
  { q: "How much does residential cleaning cost in Northeast Ohio?", a: "Most recurring house cleans range from $150–$350 per visit depending on square footage, frequency and scope. Window cleaning and pressure washing are quoted separately. Free estimates inside 24 hours." },
  { q: "Do you handle short-term rental turnovers?", a: "Yes, Airbnb, Vrbo and Booking.com turnovers are a core part of what we do. We work inside tight check-in / check-out windows with photo confirmation and supply restocking." },
  { q: "Are you insured and background-checked?", a: "Yes. We carry $2M general liability, full workers' comp, and every team member is background-checked before entering a client home." },
  { q: "Can I get a one-time deep clean instead of recurring?", a: "Absolutely. Many clients start with a one-time deep clean or move-in / move-out clean and decide later whether to add recurring service." },
];

export const Route = createFileRoute("/industries/residential")({
  head: () => ({
    ...buildSeo({
      title: `${industryTitle} Cleaning Services, Northeast Ohio`,
      description: intro,
      path: `/industries/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: ResidentialIndustryPage,
});

function ResidentialIndustryPage() {
  return (
    <RichIndustryLayout
      heroEyebrow="Industry • Residential"
      heroTitle="Cleaning & property care for homes across Northeast Ohio."
      heroDescription={intro}
      heroImage={heroImg}
      industryTitle={industryTitle}
      highlights={[
        "Insured & background-checked",
        "Pet- & child-safe products",
        `${SITE.rating.value}★ on Google`,
        "24-hour quote response",
        "No-mess, no-trace cleanup",
        "Friendly, uniformed crews",
        "Recurring discount programs",
        "Free written estimates",
      ]}
      tiersEyebrow="Residential Services"
      tiersHeading="One trusted team for every part of your home."
      tiersIntro="Single-family homes, lakeside properties, vacation rentals and recurring housekeeping, all delivered by the same insured LumiView crews."
      tiers={TIERS}
      featuresEyebrow="What's Included"
      featuresHeading="Detail-driven home cleaning, inside and out."
      featuresIntro="From streak-free glass to soft-washed siding to deep interior resets, we combine the right services into a single, predictable visit."
      features={FEATURES}
      resultEyebrow="The Result"
      resultHeading="A home that looks brighter, feels cleaner, and protects its value."
      resultBody="Regular professional cleaning protects siding, glass and surfaces from long-term damage, and turns your home into one you actually look forward to walking into."
      resultImage={resultImg}
      resultImageAlt="Before and after residential window cleaning by LumiView"
      relatedEyebrow="Popular Services"
      relatedHeading="Residential services homeowners book most."
      related={[
        { to: "/services/window-cleaning", eyebrow: "Window Cleaning", title: "Interior & exterior glass", body: "Streak-free, purified-water cleaning for every window in the home." },
        { to: "/services/pressure-washing", eyebrow: "Pressure Washing", title: "Driveways, siding & patios", body: "Soft-wash and pressure-wash exterior cleaning that's safe for the surface." },
        { to: "/services/airbnb-vrbo-turnover", eyebrow: "Short-Term Rentals", title: "Airbnb & Vrbo turnovers", body: "Hotel-grade turnovers between guests with linen service and photo confirmation." },
      ]}
      processEyebrow="Our Process"
      processHeading="A simple path from inquiry to clean home."
      process={PROCESS}
      serviceAreaHeading="Serving Avon and surrounding Northeast Ohio."
      serviceAreaBody="Residential service quotes are based on home size, scope and frequency. Call us or request one online, we respond inside 24 hours."
      faqs={FAQS}
      faqTitle="Residential cleaning, common questions"
      ctaTitle="Cleaning services built around your home."
      ctaBody="Free estimates. 24-hour response. Insured & background-checked. Tell us about your home and we'll follow up with clear next steps."
    />
  );
}
