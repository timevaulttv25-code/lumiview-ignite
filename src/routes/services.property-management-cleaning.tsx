import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Building,
  Store,
  KeyRound,
  ClipboardList,
  ShieldCheck,
  Receipt,
  Phone,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { RichServiceLayout } from "@/components/site/RichServiceLayout";
import heroImg from "@/assets/service-property-management.jpg";
import baImg from "@/assets/work-storefront-ba.jpg";

const slug = "property-management-cleaning";
const title = "Property Management Cleaning";
const intro =
  "Recurring cleaning, turnover support, and exterior care for residential rental portfolios, multi-unit apartment buildings, commercial offices, retail plazas, and storefronts. One vetted, insured vendor across every door — with consolidated scheduling, reporting, and billing.";

const FAQS = [
  {
    q: "Do you work directly with property managers and landlords?",
    a: "Yes — managed residential portfolios, multi-unit apartment buildings, commercial office buildings, and retail plaza ownership groups are a core part of what we do. We can serve a single building or hundreds of units under one account.",
  },
  {
    q: "Can you handle emergency turnovers and same-week make-readies?",
    a: "Yes. We maintain reserve crew capacity specifically for property management clients — same-week make-ready cleans for unexpected vacancies, post-eviction deep cleans, and rush turnovers between leases.",
  },
  {
    q: "How is billing handled across a portfolio?",
    a: "Most management clients prefer a single consolidated monthly invoice with line-item detail per property. Net-30 terms are available on approval. We can also bill per-property if your accounting system requires it.",
  },
  {
    q: "Do you integrate with property management software?",
    a: "Yes — we work routinely with AppFolio, Buildium, Yardi, Propertyware, and Rent Manager. Work orders can be received via email, your platform's vendor portal, or directly with your assigned account manager.",
  },
  {
    q: "Can you provide certificates of insurance with our company as additional insured?",
    a: "Yes. COIs are issued same-day on request, with your management company, ownership entity, or HOA listed as additional insured at no extra cost.",
  },
  {
    q: "Do you do common-area cleaning for apartment buildings?",
    a: "Yes — hallways, lobbies, mailrooms, laundry rooms, fitness rooms, elevators, and stairwells on the schedule each property needs (typically 1–3x/week for apartment buildings).",
  },
  {
    q: "What does a make-ready / move-out cleaning include?",
    a: "A full top-to-bottom deep clean designed to deliver a turn-key unit: appliances inside and out, cabinets, baseboards, blinds, windows, tubs, toilets, vents, light fixtures, and floors — photo-documented on completion.",
  },
  {
    q: "Can you also handle the exterior — parking lot, sidewalks, dumpster pads?",
    a: "Yes. Property management cleaning is bundled with our pressure washing and exterior services so one vendor handles parking lots, sidewalks, dumpster pad pressure washing, and storefront windows on the same schedule.",
  },
];

export const Route = createFileRoute("/services/property-management-cleaning")({
  head: () => ({
    ...buildSeo({
      title: `${title} — Rentals, Buildings & Plazas in Northeast Ohio`,
      description: intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(title, intro, slug)), jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: () => (
    <RichServiceLayout
      heroEyebrow="Property Management • Multi-Door Specialists"
      heroTitle="One trusted cleaning vendor across every rental, building, and plaza you manage."
      heroDescription={intro}
      heroImage={heroImg}
      serviceTitle={title}
      highlights={[
        "Make-ready & turnover specialists",
        "AppFolio / Buildium / Yardi friendly",
        "Reserve crews for emergencies",
        "Consolidated monthly billing",
        "24–72 hour vacancy turns",
        "Common-area & hallway programs",
        "Per-property work orders & photos",
        "COI per property on request",
      ]}
      tiersEyebrow="Property Management Programs"
      tiersHeading="Cleaning programs built for the doors you actually manage."
      tiersIntro="Single-family rentals, large apartment buildings, commercial office space, and retail plazas all need different cleaning rhythms — we structure each program around the asset class you operate."
      tiers={[
        {
          icon: KeyRound,
          eyebrow: "Residential Rentals",
          title: "Single-family & small-plex rentals",
          body: "On-demand and scheduled cleaning for SFR portfolios and small multi-unit properties.",
          items: [
            "Move-out / move-in turnover",
            "Make-ready deep cleans",
            "Post-eviction sanitation",
            "Photo-documented completion",
          ],
        },
        {
          icon: Building,
          eyebrow: "Apartment Buildings",
          title: "Multi-unit apartment buildings",
          body: "Recurring common-area service plus on-demand unit turnovers for mid-size and large buildings.",
          items: [
            "Hallway & stairwell cleaning",
            "Lobby, mailroom & laundry",
            "Elevator interiors",
            "Unit turnovers as vacancies arise",
          ],
        },
        {
          icon: Store,
          eyebrow: "Commercial & Retail",
          title: "Office buildings & retail plazas",
          body: "Janitorial plus exterior care for commercial and retail-plaza ownership groups.",
          items: [
            "Tenant suite janitorial",
            "Common-area & restroom service",
            "Storefront window cleaning",
            "Sidewalk & parking-lot pressure washing",
          ],
        },
      ]}
      featuresEyebrow="Property Management Cleaning Toolkit"
      featuresHeading="Every service your property managers actually call about — under one vendor."
      featuresIntro="Stop juggling separate vendors for janitorial, turnovers, window cleaning, and pressure washing. Property management cleaning bundles every common request into one calendar, one account manager, and one invoice."
      features={[
        {
          icon: KeyRound,
          title: "Make-ready turnover cleaning",
          body: "Top-to-bottom deep clean designed to deliver a leasable, photo-ready unit.",
          items: [
            "Appliances inside & out",
            "Cabinets, drawers & baseboards",
            "Tubs, toilets, vents & fixtures",
            "Photo-documented completion",
          ],
        },
        {
          icon: Building2,
          title: "Common-area janitorial",
          body: "Hallways, lobbies, elevators, mailrooms — the spaces every tenant judges your building by.",
          items: ["Hallway & stairwell vacuum/mop", "Lobby & entry-glass detail", "Elevator interior cleaning", "Laundry & fitness-room sanitation"],
        },
        {
          icon: Store,
          title: "Storefront & plaza service",
          body: "Recurring exterior service that keeps retail tenants happy and customers walking in.",
          items: ["Storefront window cleaning", "Sidewalk pressure washing", "Gum & graffiti removal", "Trash enclosure & dumpster pad"],
        },
        {
          icon: ClipboardList,
          title: "Inspection & reporting",
          body: "Per-visit checklists and photo documentation that satisfies owners, lenders, and HOA boards.",
          items: ["Per-visit checklist", "Photo confirmation", "Monthly portfolio report", "Quarterly walk-through reviews"],
        },
        {
          icon: Receipt,
          title: "Consolidated billing",
          body: "One invoice across the portfolio with line-item detail per property and per service.",
          items: ["Single monthly invoice", "Per-property cost detail", "Net-30 terms on approval", "Owner statement support"],
        },
        {
          icon: ShieldCheck,
          title: "Vendor compliance",
          body: "The vendor paperwork your accounting and risk teams actually want — handled.",
          items: [
            "COI with additional insured",
            "W-9 & vendor onboarding",
            "Background-checked crews",
            "Workers' comp coverage",
          ],
        },
      ]}
      resultEyebrow="The Result"
      resultHeading="Faster turnovers, happier tenants, fewer vendor headaches."
      resultBody="Property managers who consolidate cleaning with LumiView typically reduce vacancy days by 1–3 days per turn and eliminate 4–6 separate vendor invoices each month. Less coordination, faster leasing, cleaner buildings."
      resultImage={baImg}
      resultImageAlt="Before and after property management cleaning by LumiView Services"
      audienceEyebrow="Who We Serve"
      audienceHeading="Property management cleaning across every asset class."
      audiences={[
        {
          to: "/industries/property-managers",
          eyebrow: "Property Managers",
          title: "Residential property managers",
          body: "AppFolio, Buildium, and Yardi-friendly turnovers, make-readies, and recurring service across your portfolio.",
        },
        {
          to: "/industries/commercial",
          eyebrow: "Commercial Owners",
          title: "Office & retail plaza owners",
          body: "Janitorial plus exterior care for office buildings, retail plazas, and mixed-use properties.",
        },
        {
          to: "/industries/residential",
          eyebrow: "Landlords",
          title: "Independent landlords",
          body: "Reliable turnover cleaning between tenants for landlords managing 1–10 SFR or small-plex doors.",
        },
      ]}
      processEyebrow="Onboarding Process"
      processHeading="Live on your portfolio inside 7–10 business days."
      process={[
        {
          step: "01",
          title: "Portfolio review",
          body: "We tour a representative sample, document scope per asset class, and build per-door pricing for turnovers, common-area, and exterior service.",
        },
        {
          step: "02",
          title: "Vendor onboarding",
          body: "COI issued with additional insured, W-9 delivered, account manager assigned, and integration with your property management platform set up.",
        },
        {
          step: "03",
          title: "Turn, clean, report",
          body: "Work orders flow in, turnovers and recurring service run on schedule, monthly report and consolidated invoice delivered the first week of each month.",
        },
      ]}
      serviceAreaHeading="Property management cleaning across Northeast Ohio."
      serviceAreaBody="We support residential rental portfolios, apartment buildings, office buildings, and retail plazas throughout Lorain and Cuyahoga counties."
      faqs={FAQS}
      faqTitle="Property management cleaning questions"
      ctaTitle="Ready to consolidate your cleaning vendors?"
      ctaBody="One COI, one account manager, one monthly invoice across your entire portfolio. Most management companies onboard inside 10 business days."
    />
  ),
});
