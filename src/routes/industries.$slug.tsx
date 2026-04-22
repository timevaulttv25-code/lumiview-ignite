import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { FaqSection } from "@/components/site/FaqSection";
import { INDUSTRIES, SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";
import residentialImg from "@/assets/industry-residential.jpg";
import commercialImg from "@/assets/industry-commercial.jpg";
import pmImg from "@/assets/industry-property-managers.jpg";
import constructionImg from "@/assets/industry-construction.jpg";
import daycareImg from "@/assets/industry-daycare.jpg";

const IMG: Record<string, string> = {
  residential: residentialImg,
  commercial: commercialImg,
  "property-managers": pmImg,
  construction: constructionImg,
  daycare: daycareImg,
};

const DETAILS: Record<
  string,
  {
    intro: string;
    services: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  residential: {
    intro:
      "From quarterly window cleaning to seasonal exterior refreshes and short-term rental turnovers, we help homeowners and rental owners protect the look and value of their largest investment.",
    services: [
      "Interior & exterior window cleaning",
      "House siding & roof soft-wash",
      "Driveway, patio & deck pressure washing",
      "Move-in / move-out deep cleaning",
      "Airbnb & Vrbo turnover cleaning",
      "Recurring weekly or monthly housekeeping",
    ],
    faqs: [
      {
        q: "Do I need to be home during service?",
        a: "No — most of our residential clients aren't. We're fully insured, background-checked and can work from a lockbox or coordinated entry.",
      },
      {
        q: "Are your products pet- and child-safe?",
        a: "Yes. We default to low-VOC, family-safe solutions and can switch to fragrance-free or eco-certified products on request.",
      },
    ],
  },
  commercial: {
    intro:
      "Storefronts, offices, restaurants and retail plazas depend on first impressions. We deliver consistent, scheduled care that keeps your brand presentation sharp.",
    services: [
      "Storefront window cleaning (weekly / biweekly)",
      "Office & facility janitorial",
      "Sidewalk & entryway pressure washing",
      "Retail plaza exterior maintenance",
      "Restroom sanitation & restocking",
      "After-hours and overnight service",
    ],
    faqs: [
      {
        q: "Can you service us before or after business hours?",
        a: "Yes — most commercial accounts prefer evening, early-morning, or weekend service so there's no disruption to staff or customers.",
      },
      {
        q: "Are you insured for commercial work?",
        a: "Yes. We carry $2M general liability and full workers' comp, and we provide certificates of insurance with your business listed as additional insured on request.",
      },
    ],
  },
  "property-managers": {
    intro:
      "One point of contact, one invoice, one consistent standard across your entire portfolio — common areas, exteriors, turnover units and short-term rentals.",
    services: [
      "Make-ready & turnover cleaning",
      "Common-area & hallway janitorial",
      "Exterior building & sidewalk pressure wash",
      "Storefront & lobby window cleaning",
      "Multi-property scheduling & reporting",
      "Consolidated portfolio invoicing",
    ],
    faqs: [
      {
        q: "How quickly can you turn a vacated unit?",
        a: "Standard make-ready turns are scheduled within 24–72 hours of vacancy. Same-day emergency turns are available for active accounts.",
      },
      {
        q: "Do you provide reporting per property?",
        a: "Yes — every visit is logged with date, crew, scope and (on request) before/after photos, broken out per door.",
      },
    ],
  },
  construction: {
    intro:
      "Post-construction window cleaning, debris removal and final-detail cleaning so newly built or renovated properties show — and sell — at their absolute best.",
    services: [
      "Rough, post-construction & final cleans",
      "Sticker, paint & adhesive removal from glass",
      "Dust & fine-particulate detail wipe-down",
      "Floor stripping, polishing & finishing",
      "Window cleaning (interior & exterior)",
      "Punch-list & touch-up support",
    ],
    faqs: [
      {
        q: "Can you handle a multi-phase clean?",
        a: "Yes — we routinely run rough, post-trade and final-detail phases, coordinating directly with your superintendent or project manager.",
      },
      {
        q: "Do you do high or specialty glass?",
        a: "Yes — including skylights, atriums, storefront glass and post-construction adhesive and overspray removal.",
      },
    ],
  },
  daycare: {
    intro:
      "Detail-focused interior and exterior cleaning for childcare environments where cleanliness, safety and presentation directly affect the trust of every parent through the door.",
    services: [
      "Daily / nightly classroom cleaning",
      "Touch-point sanitation & disinfection",
      "Child-safe, low-VOC product options",
      "Restroom & diaper-area sanitation",
      "Floor care (vinyl, carpet, mats)",
      "Window & entry-glass cleaning",
    ],
    faqs: [
      {
        q: "Are your products safe for children?",
        a: "Yes. We use EPA-registered, low-VOC, fragrance-free disinfectants and follow CDC childcare facility cleaning protocols.",
      },
      {
        q: "Do you service evenings or weekends?",
        a: "Yes — almost all daycare accounts run after closing or on weekends so the facility is fully reset before the next morning's drop-off.",
      },
    ],
  },
};

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const ind = INDUSTRIES.find((i) => i.slug === params.slug);
    if (!ind) throw notFound();
    return { ind, details: DETAILS[params.slug], image: IMG[params.slug] };
  },
  head: ({ loaderData }) =>
    loaderData
      ? buildSeo({
          title: `${loaderData.ind.title} Cleaning Services — Northeast Ohio`,
          description: loaderData.details?.intro ?? "",
          path: `/industries/${loaderData.ind.slug}`,
          image: `${SITE.url}${loaderData.image}`,
        })
      : {},
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-prose py-32 text-center">
        <Link to="/industries" className="text-accent">
          All industries →
        </Link>
      </div>
    </SiteShell>
  ),
  component: IndustryDetail,
});

function IndustryDetail() {
  const { ind, details, image } = Route.useLoaderData();
  return (
    <SiteShell>
      <PageHero
        eyebrow="Industry"
        title={ind.title}
        description={details.intro}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: ind.title },
        ]}
        image={image}
      />
      <section className="container-prose grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <div className="eyebrow">What we deliver</div>
          <h2 className="mt-3 font-serif text-3xl font-medium">
            Tailored to {ind.title.toLowerCase()}.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every service is delivered by an insured, background-checked crew operating from the
            same rigorous LumiView playbook — adapted to the unique demands of your space.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {details.services.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium">{s}</span>
            </li>
          ))}
        </ul>
      </section>
      <FaqSection items={details.faqs} title={`${ind.title} — common questions`} />
      <CTABand title={`Cleaning services built for ${ind.title.toLowerCase()}.`} />
    </SiteShell>
  );
}
