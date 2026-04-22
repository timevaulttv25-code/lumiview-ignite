import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  Building2,
  Layers,
  Droplets,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { RichServiceLayout } from "@/components/site/RichServiceLayout";
import heroImg from "@/assets/service-pressure-washing.jpg";
import beforeImg from "@/assets/ba/pressure-wash-before.jpg";
import afterImg from "@/assets/ba/pressure-wash-after.jpg";

const slug = "pressure-washing";
const title = "Pressure Washing & Exterior Cleaning";
const intro =
  "Soft-wash and pressure-wash exterior cleaning that lifts grime, algae, mildew, oxidation, and oil from siding, driveways, walkways, patios, decks, fences, and roofs, without damaging the surface beneath.";

const FAQS = [
  {
    q: "How much does pressure washing cost in Northeast Ohio?",
    a: "Most single-family driveways start around $179, full-house soft-wash siding starts around $349, and patio or deck cleaning starts around $199. Final pricing depends on square footage, surface type, and condition. Every quote is free and returned inside 24 hours.",
  },
  {
    q: "Will pressure washing damage my siding or roof?",
    a: "No, when done correctly. We use low-pressure soft-wash with a cleaning solution on siding, roofs, and painted surfaces, and reserve high pressure only for hard surfaces like concrete and pavers. This is the same method recommended by most siding and shingle manufacturers.",
  },
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses high-pressure water and is ideal for concrete, brick, and stone. Soft washing uses low pressure plus a biodegradable cleaning solution that kills algae, mildew, and mold at the root, safe for siding, roofs, fences, and painted wood.",
  },
  {
    q: "How often should I pressure wash my house?",
    a: "Most Northeast Ohio homes benefit from a full exterior soft-wash once a year, typically in spring or early summer. Driveways and patios usually need attention every 12–18 months, and roofs every 2–3 years if algae streaks appear.",
  },
  {
    q: "Can you remove rust, oil, and battery stains from concrete?",
    a: "Yes. We carry rust removers and degreasers for oil drips, battery leaks, fertilizer stains, and tire marks. Severely set-in stains may lighten rather than disappear completely, we'll tell you upfront before we start.",
  },
  {
    q: "Do you offer roof soft-washing?",
    a: "Yes. We treat the black streaks and green growth on shingle, metal, and tile roofs with a no-pressure algaecide application, in line with ARMA (asphalt roofing) industry guidance.",
  },
  {
    q: "Do you bring your own water?",
    a: "We connect to your outdoor spigot for most jobs. For commercial properties or large lots without water access, we can bring water on request.",
  },
  {
    q: "Are you insured for exterior work?",
    a: "Yes, fully insured with general liability and workers' comp. Certificates available on request, with property managers added as additional insured if needed.",
  },
];

export const Route = createFileRoute("/services/pressure-washing")({
  head: () => ({
    ...buildSeo({
      title: `${title} in Avon & Northeast Ohio`,
      description: intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(title, intro, slug)), jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: () => (
    <RichServiceLayout
      heroEyebrow="Pressure Washing • Soft-Wash Specialists"
      heroTitle="Pressure washing & soft-wash exterior cleaning for homes, businesses, and managed properties."
      heroDescription={intro}
      heroImage={heroImg}
      serviceTitle={title}
      highlights={[
        "Soft-wash safe for siding & roofs",
        "Driveway & patio specialists",
        `${SITE.rating.value}★ on Google`,
        "Free 24-hour quotes",
        "Eco-safe biodegradable detergents",
        "Hot-water surface cleaning",
        "Concrete oil-stain removal",
        "Fully insured + bonded crews",
      ]}
      tiersEyebrow="Pressure Washing Services"
      tiersHeading="The right method for every exterior surface."
      tiersIntro="From soft-wash siding and roof treatments to high-pressure concrete restoration, we match the technique to the surface, protecting your property while delivering visible results."
      tiers={[
        {
          icon: Home,
          eyebrow: "Residential",
          title: "Home exterior cleaning",
          body: "Restore curb appeal with a full exterior refresh, siding, walkways, driveways, patios, decks, and fences.",
          items: [
            "Vinyl, brick, fiber-cement & stucco siding",
            "Driveways, walkways & sidewalks",
            "Patios, decks & pool surrounds",
            "Fences, retaining walls & garage doors",
          ],
        },
        {
          icon: Building2,
          eyebrow: "Commercial",
          title: "Storefront & facility washing",
          body: "Keep storefronts, dumpster pads, drive-thrus, and parking lots looking professional with scheduled exterior cleaning.",
          items: [
            "Sidewalks & storefront entries",
            "Parking lots & drive-thru lanes",
            "Gum & oil-stain removal",
            "Recurring quarterly or seasonal plans",
          ],
        },
        {
          icon: Sparkles,
          eyebrow: "Specialty",
          title: "Roof & deep restoration",
          body: "For surfaces that need more than a maintenance wash, algae-streaked roofs, oxidized siding, and rust-stained concrete.",
          items: [
            "Roof soft-wash (algae & black streaks)",
            "Oxidation removal on vinyl & aluminum",
            "Rust, oil & battery-stain treatment",
            "Graffiti & paint over-spray removal",
          ],
        },
      ]}
      featuresEyebrow="Complete Exterior Cleaning Features"
      featuresHeading="Every surface, the right method, one trusted crew."
      featuresIntro="Our crews carry the equipment, chemistry, and training to safely clean every common exterior surface in Northeast Ohio, and we'll bundle the full scope into one visit so you only schedule once."
      features={[
        {
          icon: Droplets,
          title: "House soft-washing",
          body: "Low-pressure cleaning with a biodegradable solution that kills algae and mildew at the root.",
          items: [
            "Vinyl & aluminum siding",
            "Brick & stone facades",
            "Fiber-cement & stucco",
            "Soffits, gutters & fascia",
          ],
        },
        {
          icon: Layers,
          title: "Concrete & flatwork",
          body: "Surface-cleaner equipment delivers an even, stripe-free finish on driveways and walkways.",
          items: ["Driveways & garage pads", "Sidewalks & curbs", "Pool decks", "Stamped & decorative concrete"],
        },
        {
          icon: ShieldCheck,
          title: "Roof soft-wash",
          body: "ARMA-aligned, no-pressure algaecide treatment for shingle, metal, and tile roofs.",
          items: ["Black-streak removal", "Moss & lichen treatment", "Gutter & valley flush", "5-year shingle-safe results"],
        },
        {
          icon: Wrench,
          title: "Deck, fence & wood",
          body: "Pressure tuned for wood, opens the grain for staining without splintering.",
          items: ["Pressure-treated decks", "Cedar fences", "Pergolas & gazebos", "Pre-stain prep washing"],
        },
        {
          icon: Truck,
          title: "Commercial & fleet",
          body: "Recurring exterior maintenance for properties that depend on a polished first impression.",
          items: ["Storefront & plaza sidewalks", "Dumpster pads & drive-thrus", "Parking lots", "Gum & gas-pump cleaning"],
        },
        {
          icon: Sparkles,
          title: "Stain & restoration work",
          body: "When standard washing isn't enough, targeted treatments for set-in stains and oxidation.",
          items: [
            "Rust, oil & battery stains",
            "Vinyl & aluminum oxidation",
            "Graffiti & sticker removal",
            "Pre-paint surface prep",
          ],
        },
      ]}
      resultEyebrow="The Result"
      resultHeading="Driveways, siding, and patios that look years younger in a single visit."
      resultBody="Pressure washing is one of the highest-ROI things you can do for a property, appraisers, realtors, and property managers consistently rank it among the top exterior improvements for resale value and tenant impression."
      resultBeforeImage={beforeImg}
      resultAfterImage={afterImg}
      resultImageAlt="Before and after driveway pressure washing by LumiView Services"
      audienceEyebrow="Who We Serve"
      audienceHeading="Pressure washing built around how each property is used."
      audiences={[
        {
          to: "/industries/residential",
          eyebrow: "Residential",
          title: "Homeowners & estates",
          body: "Annual full-property washing, spring refresh packages, and pre-listing exterior detailing for homes across Northeast Ohio.",
        },
        {
          to: "/industries/commercial",
          eyebrow: "Commercial",
          title: "Storefronts, plazas & offices",
          body: "Recurring sidewalk and entryway cleaning that keeps customer-facing properties polished week after week.",
        },
        {
          to: "/industries/property-managers",
          eyebrow: "Managed Properties",
          title: "Property managers & HOAs",
          body: "Scheduled exterior plans across rental portfolios, multi-unit buildings, and HOA common areas.",
        },
      ]}
      processEyebrow="Our Process"
      processHeading="From quote to clean exterior in three steps."
      process={[
        {
          step: "01",
          title: "Walk the property",
          body: "Tell us what you want cleaned. We confirm surfaces, square footage, water access, and any sensitive areas like landscaping or staining.",
        },
        {
          step: "02",
          title: "Match method to surface",
          body: "Soft-wash for siding and roofs, surface-cleaner for concrete, low-pressure for wood, every surface gets the right approach.",
        },
        {
          step: "03",
          title: "Clean & protect",
          body: "We rinse landscaping, protect outlets and fixtures, and leave the property cleaner than we found it. Photos sent on completion.",
        },
      ]}
      serviceAreaHeading="Pressure washing across Avon and Northeast Ohio."
      serviceAreaBody="We service driveways, siding, decks, patios, and commercial exteriors throughout Lorain and Cuyahoga counties. Free 24-hour quotes."
      faqs={FAQS}
      faqTitle="Pressure washing questions"
      ctaTitle="Ready for a cleaner exterior?"
      ctaBody="Free estimates, soft-wash certified, fully insured. Tell us about your property and we'll send a clear quote inside 24 hours."
    />
  ),
});
