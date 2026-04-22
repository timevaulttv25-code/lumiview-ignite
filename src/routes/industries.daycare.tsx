import { createFileRoute } from "@tanstack/react-router";
import { Baby, ShieldCheck, Sparkles, Droplets, Heart, Clock, Sun, Wind, ClipboardCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, faqJsonLd } from "@/lib/seo";
import { RichIndustryLayout } from "@/components/site/RichIndustryLayout";
import heroImg from "@/assets/industry-daycare.jpg";
import resultImg from "@/assets/work-storefront-ba.jpg";

const slug = "daycare";
const industryTitle = "Daycare & Childcare";
const intro =
  "Detail-focused cleaning and disinfection for daycare and childcare facilities across Northeast Ohio. EPA-registered, low-VOC, fragrance-free products, CDC childcare protocols and after-hours service so the facility is fully reset before the next morning's drop-off.";

const TIERS = [
  {
    icon: Baby,
    eyebrow: "Daily / Nightly",
    title: "Classroom & playroom cleaning",
    body: "Nightly classroom resets — floors, surfaces, toys, mats, restrooms and diaper areas — done before the building reopens.",
    items: ["Classroom floor & surface", "Toy & mat sanitation", "Restroom & diaper area", "Trash & recycle removal"],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Touch-Point Sanitation",
    title: "High-touch disinfection",
    body: "Daily disinfection of doorknobs, light switches, faucets, table edges, cubbies and every surface tiny hands actually touch.",
    items: ["Doorknobs & switches", "Faucets & sink edges", "Cubbies & coat hooks", "Table & chair surfaces"],
  },
  {
    icon: Sparkles,
    eyebrow: "Periodic Deep Clean",
    title: "Weekly & monthly deep cleans",
    body: "Floor stripping, mat deep clean, vent and fixture detail, window glass and full-facility resets on a scheduled cadence.",
    items: ["Floor strip & finish", "Carpet & mat deep clean", "Vent & fixture detail", "Window & entry glass"],
  },
];

const FEATURES = [
  {
    icon: Heart,
    title: "Child-safe products by default",
    body: "EPA-registered, low-VOC, fragrance-free disinfectants chosen specifically for facilities with infants and toddlers.",
    items: ["EPA-registered disinfectants", "Low-VOC, fragrance-free", "No harsh chemical residue", "Eco-certified options"],
  },
  {
    icon: ClipboardCheck,
    title: "CDC childcare protocols",
    body: "Cleaning sequence and dwell times follow CDC guidance for childcare facility cleaning and disinfection.",
    items: ["Clean → disinfect sequence", "Required dwell times", "Color-coded cloth system", "Cross-contamination prevention"],
  },
  {
    icon: Droplets,
    title: "Restroom & diaper-area sanitation",
    body: "The two highest-stakes areas in any childcare facility — done with extra protocol and extra documentation.",
    items: ["Diaper-changing station detail", "Toilet & potty-chair sanitation", "Sink, soap & paper restock", "Floor disinfection"],
  },
  {
    icon: Wind,
    title: "Floor care (vinyl, carpet, mats)",
    body: "The floor is where babies crawl and toddlers sit — it gets specialty attention every visit.",
    items: ["Vinyl strip & finish", "Carpet vacuum & spot treat", "Play-mat deep clean", "Tile & grout detail"],
  },
  {
    icon: Sun,
    title: "Window & entry-glass cleaning",
    body: "Clean entry glass is the first thing every parent sees at drop-off — and the easiest tell of how the facility is run.",
    items: ["Front-door & entry glass", "Lobby & office windows", "Classroom interior glass", "Streak-free finish"],
  },
  {
    icon: Clock,
    title: "After-hours & weekend service",
    body: "Almost all daycare accounts run after closing or on weekends — facility is fully reset before the next morning.",
    items: ["Evening & overnight crews", "Weekend deep cleans", "Holiday reset service", "Alarm & key handling"],
  },
];

const PROCESS = [
  { step: "01", title: "Walk-through & protocol review", body: "We walk the facility, review your existing cleaning protocols, licensing requirements and parent-facing standards." },
  { step: "02", title: "Custom protocol & schedule", body: "We document a CDC-aligned protocol customized to your facility, then schedule nightly, weekly and monthly tasks." },
  { step: "03", title: "Service & quality checks", body: "Same crew nightly, with weekly quality checks and monthly walk-throughs with the facility director." },
];

const FAQS = [
  { q: "Are your products safe for children?", a: "Yes. We use EPA-registered, low-VOC, fragrance-free disinfectants and follow CDC childcare facility cleaning protocols. Cleaning happens after children leave, with full dwell time before doors reopen." },
  { q: "Do you service evenings or weekends?", a: "Yes — almost all daycare accounts run after closing or on weekends so the facility is fully reset before the next morning's drop-off. Holiday and emergency resets available." },
  { q: "Do you follow CDC childcare cleaning protocols?", a: "Yes. Our cleaning sequence (clean first, then disinfect), required dwell times, color-coded cloth system and cross-contamination prevention all follow CDC guidance for childcare facilities." },
  { q: "How much does daycare cleaning cost in Northeast Ohio?", a: "Most daycare accounts run $0.12–$0.22 per sq ft per visit depending on frequency, square footage and disinfection scope. Free walkthroughs and proposals — typically returned within 48 hours." },
  { q: "Can you handle illness outbreak deep cleans?", a: "Yes. We provide emergency deep-clean and electrostatic disinfection service for outbreak response (norovirus, hand-foot-mouth, etc.) on same-day notice for active accounts." },
  { q: "Will the same crew clean every night?", a: "Yes. Same-team continuity is critical for childcare facilities — your director sees the same faces, standards stay consistent, and the crew learns your facility's specific protocols." },
];

export const Route = createFileRoute("/industries/daycare")({
  head: () => ({
    ...buildSeo({
      title: `${industryTitle} Facility Cleaning — Northeast Ohio`,
      description: intro,
      path: `/industries/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: DaycareIndustryPage,
});

function DaycareIndustryPage() {
  return (
    <RichIndustryLayout
      heroEyebrow="Industry • Daycare & Childcare"
      heroTitle="Cleaning that earns the trust of every parent through the door."
      heroDescription={intro}
      heroImage={heroImg}
      industryTitle={industryTitle}
      highlights={[
        "EPA-registered, child-safe products",
        "CDC childcare protocols",
        "After-hours & weekend service",
        "Outbreak deep-clean response",
      ]}
      tiersEyebrow="Childcare Services"
      tiersHeading="A cleaning program designed for facilities with the youngest stakes."
      tiersIntro="Daily classroom resets, high-touch disinfection and periodic deep cleans — coordinated to keep your licensing inspector and your parents equally confident."
      tiers={TIERS}
      featuresEyebrow="What's Included"
      featuresHeading="Built for childcare — not adapted from office cleaning."
      featuresIntro="Childcare cleaning has different rules. Different products, different sequence, different dwell times, different documentation. We built our protocol around exactly that."
      features={FEATURES}
      resultEyebrow="The Result"
      resultHeading="A facility that looks, smells and feels safe — every morning."
      resultBody="Parents make daycare decisions in the first 30 seconds at the door. A spotless entry, a clean smell, gleaming windows and a director who can speak confidently about the cleaning protocol — that's what wins enrollment and keeps it."
      resultImage={resultImg}
      resultImageAlt="Daycare entry and lobby cleaning by LumiView"
      relatedEyebrow="Popular Services"
      relatedHeading="Services childcare facilities book most."
      related={[
        { to: "/services/janitorial-interior-cleaning", eyebrow: "Janitorial", title: "Daily classroom cleaning", body: "Nightly classroom, restroom, diaper-area and common-space cleaning." },
        { to: "/services/window-cleaning", eyebrow: "Window Cleaning", title: "Entry & classroom glass", body: "Front-door, lobby and classroom interior glass on a recurring cadence." },
        { to: "/services/pressure-washing", eyebrow: "Pressure Washing", title: "Playground & exterior", body: "Sidewalk, entry and outdoor play-area exterior cleaning." },
      ]}
      processEyebrow="Our Process"
      processHeading="From walkthrough to nightly service in two weeks."
      process={PROCESS}
      serviceAreaHeading="Serving daycare facilities across Northeast Ohio."
      serviceAreaBody="We service licensed daycare and preschool facilities across Avon, Westlake, Lakewood, Rocky River and surrounding communities — with COIs and protocol documentation ready for licensing inspections."
      faqs={FAQS}
      faqTitle="Daycare cleaning — common questions"
      ctaTitle="A cleaning partner your director and your parents can both trust."
      ctaBody="Free walkthroughs. Custom CDC-aligned protocols. After-hours service. Tell us about your facility and we'll follow up with a clear written proposal."
    />
  );
}
