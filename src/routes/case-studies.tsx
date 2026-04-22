import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, Sparkles, TrendingUp } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

const STATS = [
  { value: "12,000+", label: "Windows cleaned this year" },
  { value: "450+", label: "Properties on recurring service" },
  { value: `${SITE.rating.value}★`, label: `Across ${SITE.rating.count}+ Google reviews` },
  { value: "24 hr", label: "Average quote turnaround" },
];

const CASE_STUDIES = [
  {
    icon: Building2,
    eyebrow: "Property Management",
    title: "8-building rental portfolio, one vendor, one invoice",
    client: "Regional PM company • Lakewood + Rocky River",
    challenge: "Coordinating 4 different vendors across 142 doors meant missed turnovers, inconsistent quality, and frustrated tenants.",
    solution: "Consolidated window, exterior, and turnover cleaning under a single recurring contract with a dedicated account manager.",
    outcomes: [
      "32% reduction in vendor management overhead",
      "Zero missed turnovers in 14 months of service",
      "Tenant satisfaction scores up across all 8 properties",
    ],
  },
  {
    icon: Home,
    eyebrow: "Residential, Airbnb",
    title: "5-star rating recovery for short-term rental host",
    client: "Lakefront Airbnb host • Avon Lake",
    challenge: "Inconsistent cleaning was costing 4-star reviews and reducing nightly rate. Host needed reliable, photo-documented turnovers.",
    solution: "Hotel-grade turnover with linen service, restock checklist, and photo confirmation sent within 30 minutes of completion.",
    outcomes: [
      "Average review score climbed from 4.6 to 4.94",
      "Superhost status maintained 4 quarters running",
      "Nightly rate increased ~18% with better reviews",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Commercial",
    title: "Retail plaza, weekly storefront route",
    client: "Mixed-use retail plaza • Westlake",
    challenge: "11 storefronts with inconsistent vendor showings made the plaza look neglected and hurt foot traffic perception.",
    solution: "Single weekly route, before-doors-open scheduling, and unified billing through plaza management.",
    outcomes: [
      "100% on-time service rate over 18 months",
      "Tenants report cleaner, more inviting storefronts",
      "Single PO replaced 11 separate vendor invoices",
    ],
  },
  {
    icon: TrendingUp,
    eyebrow: "New Construction",
    title: "Post-construction window cleaning, 32-unit build",
    client: "Custom home builder • Avon",
    challenge: "Construction debris, stickers, and mortar splatter on 600+ windows needed removing before final walkthroughs.",
    solution: "Two-person crew, scraper-and-pure-water method, completed across 4 days to align with builder closing schedule.",
    outcomes: [
      "All 32 units delivered on schedule",
      "Zero buyer complaints about glass at walkthrough",
      "Builder added LumiView as preferred vendor",
    ],
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => buildSeo({
    title: "Case Studies, Measurable Client Outcomes",
    description: "Real outcomes from LumiView clients: portfolio consolidation, Airbnb rating recovery, retail plaza routes, and post-construction projects across Northeast Ohio.",
    path: "/case-studies",
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes our clients can measure."
        description="The work speaks for itself, but the numbers help. See how homeowners, property managers, and businesses across Northeast Ohio use LumiView to protect their assets and look their best."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Results", to: "/results" }, { label: "Case Studies" }]}
      />

      <section className="container-prose py-20 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
              <div className="font-serif text-4xl font-semibold text-navy-deep lg:text-5xl">{s.value}</div>
              <div className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow">Case Studies</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-navy-deep lg:text-4xl">
            Selected client stories.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {CASE_STUDIES.map((c) => {
            const Icon = c.icon;
            return (
              <article key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elegant lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="eyebrow text-accent">{c.eyebrow}</div>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium leading-snug text-navy-deep">{c.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{c.client}</div>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">Challenge</dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">What we did</dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground">{c.solution}</dd>
                  </div>
                </dl>

                <div className="mt-6 rounded-xl bg-secondary/40 p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-accent">Outcomes</div>
                  <ul className="mt-3 space-y-2 text-sm">
                    {c.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 leading-snug text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-secondary/30 p-8">
          <div>
            <div className="font-serif text-xl font-medium text-navy-deep">Want to see the visual proof?</div>
            <p className="mt-1 text-sm text-muted-foreground">Browse our before-and-after gallery from real Northeast Ohio jobs.</p>
          </div>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Our Work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        </div>
      </section>

      <CTABand title="Ready to be our next case study?" />
    </SiteShell>
  ),
});
