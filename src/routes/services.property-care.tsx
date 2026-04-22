import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Calendar,
  ClipboardList,
  ShieldCheck,
  Wrench,
  Sparkles,
  Layers,
  Phone,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { RichServiceLayout } from "@/components/site/RichServiceLayout";
import heroImg from "@/assets/service-property-care.jpg";
import baImg from "@/assets/work-siding-ba.jpg";

const slug = "property-care";
const title = "Property Care & Facility Support";
const intro =
  "A single, vetted vendor for ongoing exterior and interior property upkeep, built for property managers, facility teams, HOAs, and multi-property owners who need predictable scheduling, consolidated billing, and dependable communication across every door.";

const FAQS = [
  {
    q: "What is a property care plan?",
    a: "A property care plan bundles recurring services, janitorial, window cleaning, pressure washing, seasonal exterior refresh, turnover cleaning, into one schedule, one account manager, and one monthly invoice across all of your properties.",
  },
  {
    q: "Can you handle multiple properties under one account?",
    a: "Yes, that's exactly what this service is built for. We currently support property managers and owners with portfolios ranging from 3 to 100+ doors across Northeast Ohio.",
  },
  {
    q: "Do you provide certificates of insurance and add additional insured?",
    a: "Yes. COIs are provided immediately on request, and we'll add your management company, ownership entity, or HOA as additional insured at no extra cost.",
  },
  {
    q: "How is billing handled across multiple properties?",
    a: "Most portfolio clients use a single consolidated monthly invoice with line-item detail per property. Net-30 terms are available on approval.",
  },
  {
    q: "Can you respond to emergency requests like make-readies or weather damage?",
    a: "Yes. Property care clients get reserve-crew capacity for same-week make-readies, post-storm exterior cleanup, and unexpected vacancies. Emergency response is built into the plan.",
  },
  {
    q: "Do you have a single point of contact for our portfolio?",
    a: "Every property care client gets a dedicated account manager who knows your portfolio, schedule, and standards, and who you can call or text directly during business hours.",
  },
  {
    q: "Can you coordinate with our maintenance and leasing teams?",
    a: "Yes. We integrate with most property management platforms (AppFolio, Buildium, Yardi, Propertyware) and can coordinate scheduling around make-ready turnovers, inspections, and showings.",
  },
  {
    q: "What's the typical onboarding timeline?",
    a: "Most portfolios are fully onboarded inside 7–10 business days, including walk-throughs, scope confirmation, COI delivery, and first-visit scheduling.",
  },
];

export const Route = createFileRoute("/services/property-care")({
  head: () => ({
    ...buildSeo({
      title: `${title} for Portfolios, Northeast Ohio`,
      description: intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(title, intro, slug)), jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: () => (
    <RichServiceLayout
      heroEyebrow="Property Care • One Vendor, Every Property"
      heroTitle="One trusted partner for the ongoing care of every property in your portfolio."
      heroDescription={intro}
      heroImage={heroImg}
      serviceTitle={title}
      highlights={[
        "One account manager",
        "One consolidated invoice",
        "Reserve crews for emergencies",
        "COI with additional insured",
        "Multi-property scheduling",
        "Per-site reporting & photos",
        "Net-15 / net-30 billing terms",
        "24-hour response on incidents",
      ]}
      tiersEyebrow="Property Care Plans"
      tiersHeading="Built for portfolios, scaled to your door count."
      tiersIntro="Choose a plan that matches your portfolio size and complexity. Each tier bundles recurring service, on-call response, and consolidated reporting."
      tiers={[
        {
          icon: Layers,
          eyebrow: "Essential",
          title: "Essential care",
          body: "For owners and managers with a handful of properties who want one vendor for the basics.",
          items: [
            "Quarterly exterior refresh",
            "Common-area janitorial",
            "Move-in / move-out turnover",
            "Single monthly invoice",
          ],
        },
        {
          icon: Building2,
          eyebrow: "Portfolio",
          title: "Portfolio care",
          body: "For managers running multi-unit buildings, mixed-use, or 10+ door residential portfolios.",
          items: [
            "Monthly common-area service",
            "Scheduled exterior wash",
            "Make-ready turnover queue",
            "Dedicated account manager",
          ],
        },
        {
          icon: ShieldCheck,
          eyebrow: "Enterprise",
          title: "Enterprise care",
          body: "For larger portfolios, HOAs, and commercial owners that need full-service facility support.",
          items: [
            "Weekly recurring service",
            "Reserve crew on standby",
            "Quarterly walk-through reports",
            "Custom integrations & reporting",
          ],
        },
      ]}
      featuresEyebrow="Everything Included in Property Care"
      featuresHeading="The full facility-support toolkit, coordinated by one team."
      featuresIntro="Every property care client picks the services they want bundled. Add or remove anything, exterior, interior, turnover, seasonal, and we'll keep it on one calendar and one invoice."
      features={[
        {
          icon: Calendar,
          title: "Coordinated scheduling",
          body: "One calendar across every property in your portfolio, no more juggling multiple vendors.",
          items: ["Recurring service calendar", "Make-ready turnover queue", "Seasonal exterior plans", "Holiday & weekend coverage"],
        },
        {
          icon: Sparkles,
          title: "Common-area janitorial",
          body: "Hallways, lobbies, elevators, mailrooms, and laundry rooms cleaned on the schedule that fits each property.",
          items: ["Hallway & stairwell cleaning", "Lobby & mailroom detail", "Laundry room sanitation", "Elevator interior care"],
        },
        {
          icon: Wrench,
          title: "Exterior refresh",
          body: "Seasonal pressure washing, window cleaning, and exterior detailing that keeps curb appeal year-round.",
          items: ["Pressure washing & soft-wash", "Window cleaning routes", "Gutter clear-out", "Trash enclosure & dumpster pad"],
        },
        {
          icon: ClipboardList,
          title: "Turnover & make-ready",
          body: "Reliable turnover cleaning for vacancies, coordinated with your leasing and maintenance teams.",
          items: ["Move-out deep clean", "Move-in make-ready", "Damage & inventory reporting", "Photo confirmation"],
        },
        {
          icon: ShieldCheck,
          title: "Compliance & reporting",
          body: "The paperwork side of multi-property service, handled.",
          items: [
            "COI with additional insured",
            "W-9 & vendor onboarding",
            "Monthly service reports",
            "Per-property line-item billing",
          ],
        },
        {
          icon: Phone,
          title: "Account management",
          body: "A real person who knows your portfolio, not a ticket queue.",
          items: ["Dedicated account manager", "Direct phone & text access", "Quarterly review meetings", "Reserve crew for emergencies"],
        },
      ]}
      resultEyebrow="The Result"
      resultHeading="Less vendor management. Cleaner properties. Predictable spend."
      resultBody="Property managers tell us the biggest win isn't the cleaning, it's the time they get back. One call, one invoice, one accountable partner across every property they manage."
      resultImage={baImg}
      resultImageAlt="Before and after property exterior care by LumiView Services"
      audienceEyebrow="Who We Serve"
      audienceHeading="Portfolio-grade care for the operators who run Northeast Ohio."
      audiences={[
        {
          to: "/industries/property-managers",
          eyebrow: "Property Managers",
          title: "Residential property managers",
          body: "Single-family, multi-family, and small-plex portfolios that need a reliable vendor across every door.",
        },
        {
          to: "/industries/commercial",
          eyebrow: "Commercial Owners",
          title: "Commercial owners & HOAs",
          body: "Office buildings, retail plazas, and HOA common areas needing recurring exterior and interior care.",
        },
        {
          to: "/industries/construction",
          eyebrow: "New Construction",
          title: "Builders & developers",
          body: "Post-construction cleaning, model-home maintenance, and turnover support for new developments.",
        },
      ]}
      processEyebrow="Onboarding Process"
      processHeading="From first call to fully covered portfolio in under two weeks."
      process={[
        {
          step: "01",
          title: "Portfolio walk-through",
          body: "We tour a representative sample of your properties, document scope per door, and build a tailored care plan with transparent per-property pricing.",
        },
        {
          step: "02",
          title: "Onboard & integrate",
          body: "COIs delivered, account manager assigned, calendar built, and integrations connected to your property management platform.",
        },
        {
          step: "03",
          title: "Run, report, refine",
          body: "Recurring service runs on schedule, monthly reports show what was done, and quarterly reviews fine-tune the plan as your portfolio grows.",
        },
      ]}
      serviceAreaHeading="Property care across Avon and Northeast Ohio."
      serviceAreaBody="We support residential, commercial, and HOA portfolios throughout Lorain and Cuyahoga counties. Free walk-through and proposal inside 48 hours."
      faqs={FAQS}
      faqTitle="Property care questions"
      ctaTitle="Ready to consolidate your property vendors?"
      ctaBody="One account manager. One monthly invoice. One reliable partner across every property. Let's walk your portfolio."
    />
  ),
});
