import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Briefcase,
  Baby,
  Sparkles,
  Trash2,
  Droplets,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { RichServiceLayout } from "@/components/site/RichServiceLayout";
import heroImg from "@/assets/service-janitorial.jpg";
import baImg from "@/assets/work-storefront-ba.jpg";

const slug = "janitorial-interior-cleaning";
const title = "Janitorial & Interior Cleaning";
const intro =
  "Reliable scheduled janitorial and interior cleaning for offices, medical and dental practices, daycares, fitness studios, and facilities across Northeast Ohio, same crew, same standard, every visit.";

const FAQS = [
  {
    q: "How much does commercial janitorial service cost?",
    a: "Most small offices in Northeast Ohio run $150–$400 per visit depending on square footage, frequency, and scope. Daily service brings the per-visit price down significantly. Every quote is free and customized to your facility.",
  },
  {
    q: "Do you bring your own cleaning supplies and equipment?",
    a: "Yes, all standard supplies, vacuums, mops, and equipment are included. We can also use your preferred green-certified or facility-specific products on request.",
  },
  {
    q: "Do you offer after-hours and weekend cleaning?",
    a: "Yes. Most commercial accounts prefer evening, overnight, or early-morning service to avoid business disruption. We can also clean on weekends for facilities that operate 7 days.",
  },
  {
    q: "Are your janitorial staff background-checked and insured?",
    a: "Every team member is background-checked, trained, and covered under our general liability and workers' comp policies. Certificates of insurance are provided immediately on request.",
  },
  {
    q: "Can you handle medical, dental, or daycare facilities?",
    a: "Yes. We follow CDC and OSHA touch-point disinfection protocols and use EPA List N disinfectants when required. Medical, dental, and childcare cleaning is one of our specialties.",
  },
  {
    q: "What's your minimum frequency?",
    a: "We service accounts as often as nightly and as light as monthly. Most offices land on a 1–3x/week schedule. We'll recommend the right cadence based on traffic and use.",
  },
  {
    q: "Do you handle floor stripping, waxing, and carpet care?",
    a: "Yes, periodic floor care is offered as an add-on or a separate scheduled service. This includes VCT strip & wax, hard-floor burnishing, and commercial carpet extraction.",
  },
  {
    q: "How do you handle quality control?",
    a: "Each account has a written scope of work, a checklist completed every visit, and a single account manager you can call directly. We do walk-through inspections monthly for larger accounts.",
  },
];

export const Route = createFileRoute("/services/janitorial-interior-cleaning")({
  head: () => ({
    ...buildSeo({
      title: `${title} for Offices & Facilities, Northeast Ohio`,
      description: intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(title, intro, slug)), jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: () => (
    <RichServiceLayout
      heroEyebrow="Janitorial • Recurring Interior Care"
      heroTitle="Dependable janitorial and interior cleaning for offices, facilities, and specialty spaces."
      heroDescription={intro}
      heroImage={heroImg}
      serviceTitle={title}
      highlights={[
        "Daily, weekly, or monthly plans",
        "Background-checked, insured crew",
        "After-hours & weekend service",
        "CDC-aligned disinfection",
        "Office, medical & retail experience",
        "Touch-point sanitization included",
        "Green Seal-certified products",
        "Customizable scope & checklists",
      ]}
      tiersEyebrow="Janitorial Programs"
      tiersHeading="A scheduled cleaning plan that fits how your space is used."
      tiersIntro="From small office suites to multi-floor facilities and specialty environments, we structure each janitorial program around your schedule, traffic, and compliance needs."
      tiers={[
        {
          icon: Briefcase,
          eyebrow: "Office & Professional",
          title: "Office & professional suites",
          body: "Recurring cleaning for offices, law firms, finance, real estate, and professional service businesses.",
          items: [
            "Desks, conference rooms & lobbies",
            "Restrooms & breakrooms",
            "Trash & recycling removal",
            "Touch-point disinfection",
          ],
        },
        {
          icon: Building2,
          eyebrow: "Facility & Retail",
          title: "Facilities, retail & studios",
          body: "Higher-traffic interior cleaning for retail, fitness studios, salons, and multi-tenant facilities.",
          items: [
            "Sales floor & dressing rooms",
            "Locker rooms & showers",
            "Floor care & spot mopping",
            "Window & glass touch-ups",
          ],
        },
        {
          icon: Baby,
          eyebrow: "Specialty & Compliance",
          title: "Daycare, medical & dental",
          body: "Compliance-focused cleaning for childcare, medical, dental, and other regulated environments.",
          items: [
            "Toy & high-touch sanitation",
            "Operatory & exam-room cleaning",
            "EPA List N disinfectants",
            "Color-coded microfiber program",
          ],
        },
      ]}
      featuresEyebrow="What's Included Every Visit"
      featuresHeading="A complete interior care program, written down, repeated, audited."
      featuresIntro="Every account gets a written scope of work and a per-visit checklist so you know exactly what was completed and when. Add periodic services like floor care or carpet extraction whenever you need them."
      features={[
        {
          icon: Sparkles,
          title: "General office cleaning",
          body: "The core scope that keeps offices feeling fresh and presentable every morning.",
          items: ["Desks & surfaces", "Vacuum & mop floors", "Empty trash & recycling", "Spot-clean glass & doors"],
        },
        {
          icon: Droplets,
          title: "Restroom sanitation",
          body: "Detail-driven restroom service, the area clients and employees notice first.",
          items: ["Toilets, urinals & sinks", "Mirrors & fixtures", "Restock paper & soap", "Floor disinfection"],
        },
        {
          icon: Trash2,
          title: "Breakroom & kitchen",
          body: "A clean breakroom shows employees you care about the day-to-day.",
          items: ["Counters, sinks & appliances", "Microwave & fridge wipe-down", "Coffee station detail", "Floor mop & restock"],
        },
        {
          icon: ShieldCheck,
          title: "Touch-point disinfection",
          body: "Targeted disinfection of the surfaces shown to spread illness fastest in shared spaces.",
          items: ["Door handles & knobs", "Light switches & buttons", "Shared keyboards & phones", "Faucets & flush valves"],
        },
        {
          icon: ClipboardCheck,
          title: "Floor & carpet care",
          body: "Periodic deep services that extend the life of your floors and improve indoor air quality.",
          items: ["VCT strip & wax", "Hard-floor burnishing", "Carpet extraction", "Spot & traffic-lane treatment"],
        },
        {
          icon: Building2,
          title: "Common area & lobby",
          body: "First-impression spaces that need consistent attention from open to close.",
          items: ["Entry mats & glass", "Reception furniture", "Elevator interiors", "Stairwells & corridors"],
        },
      ]}
      resultEyebrow="The Result"
      resultHeading="A facility your team is proud to walk into every morning."
      resultBody="Consistent interior cleaning improves employee retention, reduces sick days, and sets the standard your customers feel the moment they walk in. We make it boring, in the best possible way."
      resultImage={baImg}
      resultImageAlt="Before and after interior storefront cleaning by LumiView Services"
      audienceEyebrow="Who We Serve"
      audienceHeading="Janitorial programs built for the way your facility runs."
      audiences={[
        {
          to: "/industries/commercial",
          eyebrow: "Commercial",
          title: "Offices, retail & professional",
          body: "Daily and weekly plans for office suites, retail stores, and professional service businesses.",
        },
        {
          to: "/industries/daycare",
          eyebrow: "Childcare",
          title: "Daycare & Childcare Facility",
          body: "Detail-focused, compliance-aware cleaning for licensed daycare and early-learning facilities.",
        },
        {
          to: "/industries/property-managers",
          eyebrow: "Managed Properties",
          title: "Property managers & multi-tenant",
          body: "Common-area and tenant-suite janitorial across managed buildings and multi-tenant spaces.",
        },
      ]}
      processEyebrow="Onboarding Process"
      processHeading="From walk-through to first clean in under a week."
      process={[
        {
          step: "01",
          title: "Walk-through & scope",
          body: "We tour the facility, document touch-points and traffic patterns, and build a written scope of work tailored to your space.",
        },
        {
          step: "02",
          title: "Schedule & onboarding",
          body: "Pick the cadence (nightly, weekly, monthly), confirm access and alarm protocols, and meet your account manager.",
        },
        {
          step: "03",
          title: "Service & quality control",
          body: "Same crew every visit, per-visit checklist, monthly walk-through inspections, and a single point of contact you can call directly.",
        },
      ]}
      serviceAreaHeading="Janitorial coverage across Avon and Northeast Ohio."
      serviceAreaBody="We service offices, facilities, daycares, and multi-tenant buildings throughout Lorain and Cuyahoga counties. Free walk-through and quote inside 24 hours."
      faqs={FAQS}
      faqTitle="Janitorial & interior cleaning questions"
      ctaTitle="Ready to upgrade your cleaning vendor?"
      ctaBody="Free walk-through, written scope of work, and a clear monthly price. Most facilities switch to LumiView inside a week."
    />
  ),
});
