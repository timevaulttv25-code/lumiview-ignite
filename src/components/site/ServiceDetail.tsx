import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { FaqSection } from "@/components/site/FaqSection";
import windowImg from "@/assets/service-window-cleaning.jpg";
import pressureImg from "@/assets/service-pressure-washing.jpg";
import janitorialImg from "@/assets/service-janitorial.jpg";
import propertyImg from "@/assets/service-property-care.jpg";
import airbnbImg from "@/assets/service-airbnb-turnover.jpg";
import pmImg from "@/assets/service-property-management.jpg";

export const SERVICE_IMG: Record<string, string> = {
  "window-cleaning": windowImg,
  "pressure-washing": pressureImg,
  "janitorial-interior-cleaning": janitorialImg,
  "property-care": propertyImg,
  "airbnb-vrbo-turnover": airbnbImg,
  "property-management-cleaning": pmImg,
};

export type ServiceDetailContent = {
  slug: string;
  title: string;
  intro: string;
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  "window-cleaning": {
    slug: "window-cleaning",
    title: "Window Cleaning",
    intro:
      "Crystal-clear, streak-free interior and exterior window cleaning for homes, storefronts and commercial buildings. We use purified water and professional squeegee technique, no soap residue, no spotting.",
    includes: [
      "Interior & exterior glass",
      "Frame & sill wipe-down",
      "Screen cleaning available",
      "Hard-water stain treatment",
      "Skylights & high windows",
      "Storefront recurring plans",
    ],
    faqs: [
      {
        q: "How often should windows be cleaned?",
        a: "Most homes benefit from twice yearly (spring and fall). Storefronts often run weekly or biweekly to maintain a polished appearance.",
      },
      {
        q: "Do you clean both sides?",
        a: "Yes, interior and exterior are included unless you request otherwise.",
      },
    ],
  },
  "pressure-washing": {
    slug: "pressure-washing",
    title: "Pressure Washing & Exterior Cleaning",
    intro:
      "Soft-wash and pressure-wash exterior cleaning that lifts grime, algae and oxidation from siding, walkways, driveways, patios and decks, without damaging the surface beneath.",
    includes: [
      "House siding (vinyl, brick, fiber cement)",
      "Driveways & sidewalks",
      "Patios & decks",
      "Fences & retaining walls",
      "Roof soft-wash",
      "Rust & oil-stain treatment",
    ],
    faqs: [
      {
        q: "Will pressure washing damage my siding?",
        a: "Not when done correctly. We use soft-wash methods (low pressure + cleaning solution) on siding and reserve high pressure only for hard surfaces like concrete.",
      },
      {
        q: "How long does it take?",
        a: "An average single-family home takes 2–4 hours depending on size and surface mix.",
      },
    ],
  },
  "janitorial-interior-cleaning": {
    slug: "janitorial-interior-cleaning",
    title: "Janitorial & Interior Cleaning",
    intro:
      "Reliable scheduled janitorial and interior cleaning for offices, facilities, daycares and residences. Same crew, same schedule, dependable result every visit.",
    includes: [
      "Daily, weekly or monthly plans",
      "Restroom sanitation",
      "Floor care (vacuum, mop, polish)",
      "Kitchen & breakroom cleaning",
      "Trash removal & recycling",
      "Touch-point disinfection",
    ],
    faqs: [
      {
        q: "Do you bring your own supplies?",
        a: "Yes, all standard supplies and equipment are included. We can also use your preferred products on request.",
      },
      {
        q: "Do you offer after-hours service?",
        a: "Yes. Most commercial accounts prefer evening or early-morning service to avoid business disruption.",
      },
    ],
  },
  "property-care": {
    slug: "property-care",
    title: "Property Care & Facility Support",
    intro:
      "Single point of contact for ongoing exterior and interior property upkeep, ideal for property managers, multi-unit buildings and facility portfolios.",
    includes: [
      "Coordinated multi-property scheduling",
      "Quarterly exterior refresh",
      "Common-area janitorial",
      "Seasonal pressure washing",
      "Turnover & make-ready cleaning",
      "One invoice across the portfolio",
    ],
    faqs: [
      {
        q: "Can you handle multiple properties on one account?",
        a: "Absolutely, that's exactly what this service is built for. Consolidated scheduling, reporting, and billing.",
      },
      {
        q: "Do you provide certificates of insurance?",
        a: "Yes, immediately on request, with your management company listed as additional insured if needed.",
      },
    ],
  },
  "airbnb-vrbo-turnover": {
    slug: "airbnb-vrbo-turnover",
    title: "Airbnb & Vrbo Turnover Cleaning",
    intro:
      "Hotel-grade turnover cleaning for short-term rentals on Airbnb, Vrbo, Booking.com and direct-booking platforms. Same-day turnovers, fresh linens, restocked essentials and photo confirmation, so every guest walks into a 5-star experience.",
    includes: [
      "Same-day check-out / check-in turnovers",
      "Fresh linen & towel service",
      "Bed-making to hotel standard",
      "Toiletry & consumable restocking",
      "Damage & low-inventory reporting",
      "Photo confirmation after every clean",
    ],
    faqs: [
      {
        q: "How fast is your turnover window?",
        a: "Standard Airbnb / Vrbo turnovers are completed inside the 11am check-out to 4pm check-in window. Tight back-to-back bookings are accommodated when scheduled in advance.",
      },
      {
        q: "Do you provide linens?",
        a: "Yes, we offer optional hotel-grade linen and towel service with laundering, or we can launder your existing inventory on-site.",
      },
      {
        q: "What if a guest leaves damage?",
        a: "We document and photograph any damage, missing items or low supplies and notify you immediately so you can file with the platform.",
      },
    ],
  },
  "property-management-cleaning": {
    slug: "property-management-cleaning",
    title: "Property Management Cleaning",
    intro:
      "Recurring cleaning, turnover support and exterior care for residential rental portfolios, multi-unit apartment buildings, commercial offices, retail plazas and storefronts. One vetted, insured vendor across every door, with consolidated scheduling, reporting and billing.",
    includes: [
      "Move-in / move-out turnover cleaning",
      "Common-area & hallway janitorial",
      "Storefront & plaza window cleaning",
      "Parking lot & sidewalk pressure washing",
      "Make-ready cleans for new tenants",
      "Single invoice across the portfolio",
    ],
    faqs: [
      {
        q: "Do you work with property managers and landlords?",
        a: "Yes, managed residential portfolios, commercial buildings, and retail plaza ownership groups are a core part of what we do. We can serve a single building or hundreds of units.",
      },
      {
        q: "Can you handle emergency turnovers?",
        a: "Yes. We maintain reserve crew capacity for same-week make-ready cleans and unexpected vacancies.",
      },
      {
        q: "How is billing handled?",
        a: "Most management clients prefer a single consolidated monthly invoice with line-item detail per property. Net-30 terms are available on approval.",
      },
    ],
  },
};

export function ServiceDetailPage({ slug }: { slug: string }) {
  const details = SERVICE_DETAILS[slug];
  const image = SERVICE_IMG[slug];

  if (!details) {
    return (
      <SiteShell>
        <div className="container-prose py-32 text-center">
          <h1 className="font-serif text-4xl">Service not found</h1>
          <Link to="/services" className="mt-6 inline-block text-accent">
            View all services →
          </Link>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Service"
        title={details.title}
        description={details.intro}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: details.title },
        ]}
        image={image}
      />
      <section className="container-prose grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <div className="eyebrow">What's included</div>
          <h2 className="mt-3 font-serif text-3xl font-medium">Every visit, every time.</h2>
          <p className="mt-4 text-muted-foreground">
            Insured, background-checked crews. Same-day quotes. Predictable pricing. Workmanship
            you can plan a month around.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {details.includes.map((i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium">{i}</span>
            </li>
          ))}
        </ul>
      </section>
      <FaqSection items={details.faqs} title={`${details.title} questions`} />
      <CTABand title={`Ready for ${details.title.toLowerCase()}?`} />
    </SiteShell>
  );
}
