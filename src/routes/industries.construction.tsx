import { createFileRoute } from "@tanstack/react-router";
import { HardHat, Sparkles, Sun, Layers, Hammer, Brush, ShieldCheck, ClipboardCheck, Wind } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, faqJsonLd } from "@/lib/seo";
import { RichIndustryLayout } from "@/components/site/RichIndustryLayout";
import heroImg from "@/assets/industry-construction.jpg";
import resultImg from "@/assets/work-windows-ba.jpg";

const slug = "construction";
const industryTitle = "Builders & New Construction";
const intro =
  "Post-construction cleaning for builders, GCs and renovation contractors across Northeast Ohio. Rough, post-trade and final-detail phases, sticker and adhesive removal, fine-particulate dust wipe-down, floor finishing and punch-list support so the property shows at its absolute best.";

const TIERS = [
  {
    icon: Hammer,
    eyebrow: "Rough Clean",
    title: "Rough post-construction clean",
    body: "Heavy debris removal, gross dust knockdown and trade trash-out so the next phase can move in cleanly.",
    items: ["Debris & trash haul-out", "Gross dust removal", "Sweep & vacuum all surfaces", "Sticker & label removal start"],
  },
  {
    icon: Brush,
    eyebrow: "Post-Trade",
    title: "Post-trade detail clean",
    body: "Mid-project cleaning between trade phases so quality control stays high and final isn't a marathon.",
    items: ["Trade-by-trade detail", "Surface protection prep", "Drywall dust knockdown", "Daily site presentation"],
  },
  {
    icon: Sparkles,
    eyebrow: "Final Detail",
    title: "Final & punch-list clean",
    body: "Move-in-ready finish, every glass surface, fixture, edge and floor brought to handover standard.",
    items: ["Final-detail wipe-down", "Glass adhesive & overspray", "Fixture & cabinet detail", "Punch-list & touch-up"],
  },
];

const FEATURES = [
  {
    icon: Sun,
    title: "Window cleaning (interior & exterior)",
    body: "Construction-grade window cleaning including paint, stucco, mortar and adhesive removal from glass.",
    items: ["Interior & exterior glass", "Paint & overspray removal", "Sticker & label removal", "Skylights & high glass"],
  },
  {
    icon: Wind,
    title: "Fine-particulate dust wipe-down",
    body: "Top-to-bottom detail wipe of every horizontal surface, drywall dust is the silent killer of a final walkthrough.",
    items: ["Trim, ledges & ceilings", "HVAC vent & register detail", "Cabinet interior wipe-down", "Light fixture detail"],
  },
  {
    icon: Layers,
    title: "Floor stripping, polish & finish",
    body: "Hard-floor strip and finish, carpet vacuum and spot treat, and final shine on every floor surface.",
    items: ["Hard floor strip & wax", "Tile & grout detail", "Carpet vacuum & spot treat", "Floor protection management"],
  },
  {
    icon: HardHat,
    title: "Multi-phase coordination",
    body: "We coordinate directly with your superintendent or PM across rough, post-trade and final phases.",
    items: ["Direct super coordination", "Phase scheduling", "Site-safety compliance", "Daily progress reporting"],
  },
  {
    icon: ClipboardCheck,
    title: "Punch-list & touch-up support",
    body: "Final walkthrough support so every flagged item is closed out before client handover.",
    items: ["Walkthrough attendance", "Punch-list closeout", "Touch-up coordination", "Pre-handover detail"],
  },
  {
    icon: ShieldCheck,
    title: "$2M insured + OSHA-aware",
    body: "Fully insured, site-safety aware crews who know how to work alongside active trades.",
    items: ["$2M general liability", "Full workers' comp", "OSHA-aware site practices", "Additional-insured listing"],
  },
];

const PROCESS = [
  { step: "01", title: "Project walk & scope", body: "Walk the project with the super or PM, confirm phases, square footage, glass count and finish standards." },
  { step: "02", title: "Phase scheduling", body: "Lock in rough, post-trade and final-detail dates around the construction schedule with built-in flex." },
  { step: "03", title: "Execution & handover support", body: "Crews execute phase-by-phase with progress reporting, then attend the punch-list walkthrough for closeout." },
];

const FAQS = [
  { q: "Can you handle a multi-phase clean?", a: "Yes, we routinely run rough, post-trade and final-detail phases, coordinating directly with your superintendent or project manager. Phase scheduling has built-in flex for inevitable construction delays." },
  { q: "Do you do high or specialty glass?", a: "Yes, including skylights, atriums, storefront glass and post-construction adhesive, paint, stucco and overspray removal. We carry the right poles, ladders and razors for the job." },
  { q: "How much does post-construction cleaning cost?", a: "Final-detail cleans typically run $0.20–$0.50 per sq ft depending on finish level, glass count and adhesive load. Multi-phase projects are quoted per phase. Free walkthroughs and proposals." },
  { q: "Can you start before the project is finished?", a: "Yes, most multi-phase projects benefit from rough and post-trade cleans during the build, then a final-detail clean before handover. This keeps quality control high and shortens the final clean." },
  { q: "Are you OSHA-aware on active jobsites?", a: "Yes. Our crews are trained to work alongside active trades safely, follow site-specific safety plans and check in with the super on arrival each day." },
  { q: "Do you attend the final punch-list walkthrough?", a: "Yes, on request we attend the walkthrough so any flagged cleaning items can be closed out same-day before client handover." },
];

export const Route = createFileRoute("/industries/construction")({
  head: () => ({
    ...buildSeo({
      title: `${industryTitle}, Post-Construction Cleaning in Northeast Ohio`,
      description: intro,
      path: `/industries/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: ConstructionIndustryPage,
});

function ConstructionIndustryPage() {
  return (
    <RichIndustryLayout
      heroEyebrow="Industry • Builders & Construction"
      heroTitle="Post-construction cleaning that gets the property ready to show, sell or hand over."
      heroDescription={intro}
      heroImage={heroImg}
      industryTitle={industryTitle}
      highlights={[
        "Rough, post-trade & final phases",
        "$2M insured + OSHA-aware",
        "Direct super coordination",
        "Punch-list walkthrough support",
        "Mortar, paint & sticker removal",
        "Final-phase window detailing",
        "Site-clean & debris removal",
        "Weekend & evening crews available",
      ]}
      tiersEyebrow="Construction Services"
      tiersHeading="Three phases, one cleaning partner, no surprises at handover."
      tiersIntro="Most builders we work with run rough, post-trade and final-detail phases. We staff each phase with the right crew size and equipment for the job."
      tiers={TIERS}
      featuresEyebrow="What's Included"
      featuresHeading="Everything new construction needs to pass a walkthrough."
      featuresIntro="From skylight overspray to baseboard dust to cabinet interiors, every detail that determines whether a property looks finished or just built."
      features={FEATURES}
      resultEyebrow="The Result"
      resultHeading="A property that shows the way the renderings promised."
      resultBody="Buyers, tenants and inspectors notice clean glass, dust-free trim and polished floors before they notice anything else. A proper post-construction clean is the final 1% that protects the other 99% of the build."
      resultImage={resultImg}
      resultImageAlt="Before and after post-construction window cleaning by LumiView"
      relatedEyebrow="Popular Services"
      relatedHeading="Services builders book most."
      related={[
        { to: "/services/window-cleaning", eyebrow: "Window Cleaning", title: "Construction window detail", body: "Paint, stucco and adhesive removal plus interior and exterior glass." },
        { to: "/services/janitorial-interior-cleaning", eyebrow: "Interior Cleaning", title: "Final-detail interior", body: "Top-to-bottom dust wipe, cabinet interiors, fixture and floor detail." },
        { to: "/services/pressure-washing", eyebrow: "Pressure Washing", title: "Exterior & site clean", body: "Driveway, walkway, sidewalk and exterior pressure washing post-build." },
      ]}
      processEyebrow="Our Process"
      processHeading="Coordinated phase scheduling around your build."
      process={PROCESS}
      serviceAreaHeading="Serving builders & GCs across Northeast Ohio."
      serviceAreaBody="We work with custom-home builders, multifamily developers and commercial GCs across Avon, Westlake, Lakewood, Rocky River and surrounding communities."
      faqs={FAQS}
      faqTitle="Post-construction cleaning, common questions"
      ctaTitle="A cleaning partner that knows how a jobsite actually runs."
      ctaBody="Free walkthroughs. Phase scheduling. OSHA-aware crews. Tell us about the project and we'll follow up with a clear written proposal."
    />
  );
}
