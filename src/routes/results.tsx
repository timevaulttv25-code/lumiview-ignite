import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Images, LineChart } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

const PILLARS = [
  {
    icon: Star,
    eyebrow: "Reviews",
    title: `${SITE.rating.value}★ on Google`,
    body: `Hear directly from ${SITE.rating.count}+ homeowners, businesses, and property managers across Northeast Ohio.`,
    to: "/reviews",
    cta: "Read Reviews",
  },
  {
    icon: Images,
    eyebrow: "Our Work",
    title: "Before & after gallery",
    body: "Real photo proof from real Northeast Ohio properties — windows, driveways, siding, patios, storefronts, and more.",
    to: "/our-work",
    cta: "View Gallery",
  },
  {
    icon: LineChart,
    eyebrow: "Case Studies",
    title: "Measurable client outcomes",
    body: "PM portfolio consolidation, Airbnb rating recovery, retail plaza routes, post-construction handoffs — with the numbers behind them.",
    to: "/case-studies",
    cta: "Read Case Studies",
  },
] as const;

const STATS = [
  { value: "12,000+", label: "Windows cleaned this year" },
  { value: "450+", label: "Properties on recurring service" },
  { value: `${SITE.rating.value}★`, label: `Across ${SITE.rating.count}+ Google reviews` },
  { value: "24 hr", label: "Average quote turnaround" },
];

export const Route = createFileRoute("/results")({
  head: () => buildSeo({
    title: "Results — Reviews, Before & After, Case Studies",
    description: "Three ways to see the LumiView difference: verified Google reviews, before-and-after photo galleries, and detailed case studies with measurable client outcomes.",
    path: "/results",
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Results"
        title="See the work, the proof, and the outcomes."
        description="Whether you want quick social proof, visual before-and-afters, or the full story behind a project — we've got you covered."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Results" }]}
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
        <div className="container-prose py-20 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow">Three ways to explore</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-navy-deep lg:text-4xl">
            Pick how you want to see the proof.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.to}
                to={p.to}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="eyebrow mt-6 text-accent">{p.eyebrow}</div>
                <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-deep">{p.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
        </div>
      </section>

      <CTABand title="Ready to be our next happy result?" />
    </SiteShell>
  ),
});
