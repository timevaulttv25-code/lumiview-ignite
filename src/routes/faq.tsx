import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { FaqSection } from "@/components/site/FaqSection";
import { buildSeo, faqJsonLd, jsonLdScript } from "@/lib/seo";

const FAQS = [
  {
    q: "What areas does LumiView serve?",
    a: "We serve Avon, Avon Lake, Westlake, Lakewood, Rocky River, North Olmsted, Bay Village, North Ridgeville, Strongsville, Berea, Fairview Park, Olmsted Falls, Elyria, Lorain, Sheffield Lake, Amherst and the surrounding Northeast Ohio communities. Not sure if we cover your address? Call us — if we don't service your area, we'll point you to someone reputable who does.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. LumiView carries full general liability and workers' compensation insurance. A current certificate of insurance can be sent directly to your property manager, HOA, or facility department on request.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Every estimate is free and written. For most residential and small-commercial work we can quote within 24 hours from photos and a few details. Larger commercial accounts and recurring contracts include an on-site walk-through at no cost.",
  },
  {
    q: "How do you price your services?",
    a: "Pricing is based on the scope of work — size, surface, access, frequency — not a vague hourly rate. You receive a flat, transparent quote before we start, and we don't add surprise charges after the job. Recurring clients receive preferred pricing.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards, ACH/bank transfer, and check. Commercial accounts can be set up on net-15 or net-30 billing terms.",
  },
  {
    q: "Do I need to be home during service?",
    a: "Not at all. The majority of our exterior work — windows, pressure washing, gutters, soft-wash — is completed without anyone home. We confirm access details ahead of time and send a completion notice with photos when we wrap up.",
  },
  {
    q: "What window-cleaning method do you use?",
    a: "For exteriors we use a purified-water-fed pole system that leaves zero residue and lets us safely reach upper floors without ladders against the home. Interiors are cleaned by hand with traditional squeegee technique to protect sills, blinds, and trim.",
  },
  {
    q: "Will pressure washing damage my siding, paint, or roof?",
    a: "Not when it's done correctly. We use a soft-wash low-pressure approach with biodegradable cleaning solution on siding, painted surfaces, and roofs, and we reserve high-pressure cleaning for hard surfaces like concrete and brick. Surface protection is part of the job, not an afterthought.",
  },
  {
    q: "How often should exterior cleaning be done?",
    a: "Most Northeast Ohio homes benefit from window cleaning twice a year (spring and fall) and a full exterior soft-wash annually. Lakefront, wooded, and high-traffic commercial properties usually warrant a quarterly schedule. We'll recommend a cadence based on your property — never an upsell that doesn't make sense.",
  },
  {
    q: "Do you handle short-term rentals like Airbnb and Vrbo?",
    a: "Yes — turnover cleaning between guests is one of our specialties. We work directly with hosts and co-hosts, sync to your booking calendar, restock essentials, and send photo confirmation after every turn so you can publish next-guest-ready with confidence.",
  },
  {
    q: "Can you support property managers across multiple buildings?",
    a: "Absolutely. We provide single-point-of-contact service across residential rentals, multi-unit buildings, office portfolios, and retail plazas — consolidated invoicing, scheduled recurring service, and rapid response for unit turnovers and emergency calls.",
  },
  {
    q: "What's your cancellation or reschedule policy?",
    a: "Life happens — and so does Ohio weather. We don't charge cancellation fees as long as you let us know at least 24 hours ahead. Weather-related reschedules from our side are always free and re-booked at the next available window.",
  },
  {
    q: "Are your cleaning products pet- and family-safe?",
    a: "Yes. We use biodegradable, plant-based detergents wherever possible, and any specialty solutions are rinsed thoroughly. We're happy to flag specific products in advance for clients with allergy or sensitivity concerns.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Yes. If something isn't right, call us within 48 hours and we'll come back to make it right at no cost. Our reputation in this community is built one driveway at a time, and we treat it that way.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => {
    const seo = buildSeo({
      title: "Frequently Asked Questions",
      description:
        "Answers to the most common questions about LumiView's window cleaning, pressure washing, janitorial, Airbnb turnover and property care services across Northeast Ohio.",
      path: "/faq",
    });
    return {
      ...seo,
      scripts: [jsonLdScript(faqJsonLd(FAQS))],
    };
  },
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you ask."
        description="Pricing, scheduling, methods, insurance, weather, pets — the questions our customers ask most. If yours isn't here, we're a phone call away."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "FAQ" },
        ]}
      />
      <FaqSection items={FAQS} title="Everything you wanted to know." eyebrow="Frequently asked" />
      <CTABand title="Still have a question? Let's talk." />
    </SiteShell>
  ),
});
