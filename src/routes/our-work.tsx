import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Reveal } from "@/components/site/Reveal";
import { buildSeo } from "@/lib/seo";

import windowsBefore from "@/assets/work/work-windows-before.jpg";
import windowsAfter from "@/assets/work/work-windows-after.jpg";
import drivewayBefore from "@/assets/work/work-driveway-before.jpg";
import drivewayAfter from "@/assets/work/work-driveway-after.jpg";
import sidingBefore from "@/assets/work/work-siding-before.jpg";
import sidingAfter from "@/assets/work/work-siding-after.jpg";
import patioBefore from "@/assets/work/work-patio-before.jpg";
import patioAfter from "@/assets/work/work-patio-after.jpg";
import storefrontBefore from "@/assets/work/work-storefront-before.jpg";
import storefrontAfter from "@/assets/work/work-storefront-after.jpg";
import gutterBefore from "@/assets/work/work-gutter-before.jpg";
import gutterAfter from "@/assets/work/work-gutter-after.jpg";

const PROJECTS = [
  {
    before: windowsBefore,
    after: windowsAfter,
    title: "Two-story residential, full window restoration",
    location: "Westlake, OH",
    service: "Window Cleaning",
    detail:
      "32 windows, interior + exterior, screens hand-washed. Removed years of hard-water spotting from south-facing glass.",
  },
  {
    before: drivewayBefore,
    after: drivewayAfter,
    title: "Triple-bay driveway pressure wash",
    location: "Avon Lake, OH",
    service: "Pressure Washing",
    detail:
      "Lifted oil staining, tire marks, and embedded grime from 1,400 sq ft of concrete. Surface-cleaner finish, no wand stripes.",
  },
  {
    before: sidingBefore,
    after: sidingAfter,
    title: "Algae-streaked vinyl siding soft wash",
    location: "Avon, OH",
    service: "Exterior Cleaning",
    detail:
      "Low-pressure soft wash with biodegradable surfactant restored the original siding color without damaging landscaping.",
  },
  {
    before: patioBefore,
    after: patioAfter,
    title: "Paver patio + walkway refresh",
    location: "Bay Village, OH",
    service: "Pressure Washing",
    detail:
      "Removed moss, weeds, and stains from 600 sq ft of pavers. Re-sanded joints on request.",
  },
  {
    before: storefrontBefore,
    after: storefrontAfter,
    title: "Retail storefront glass, weekly route",
    location: "Rocky River, OH",
    service: "Commercial Window Cleaning",
    detail:
      "Recurring weekly service for a high-traffic boutique. Smudge-free, streak-free, before doors open.",
  },
  {
    before: gutterBefore,
    after: gutterAfter,
    title: "Gutter cleanout + roof debris removal",
    location: "North Olmsted, OH",
    service: "Property Care",
    detail:
      "Cleared a fall's worth of leaves from 180 linear feet of gutter and bagged debris off-site.",
  },
];

export const Route = createFileRoute("/our-work")({
  head: () =>
    buildSeo({
      title: "Our Work, Before & After Gallery",
      description:
        "Drag the slider on real before-and-after photos from window cleaning, pressure washing, and exterior projects across Avon and Northeast Ohio.",
      path: "/our-work",
    }),
  component: OurWorkPage,
});

const STATS = [
  { value: "175+", label: "Windows Cleaned" },
  { value: "2,800+", label: "Sq ft pressure-washed monthly" },
  { value: "100%", label: "Jobs photographed before & after" },
];

function OurWorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Work"
        title="The proof is in the panes."
        description="Drag the slider on each project to reveal the difference. Every job is photographed before and after, homes, storefronts, and managed properties across Northeast Ohio."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Results", to: "/results" },
          { label: "Our Work" },
        ]}
      />

      <section className="container-prose pt-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="lift-card rounded-2xl border border-border bg-card p-6 text-center shadow-soft hover:shadow-elegant">
                <div className="font-serif text-3xl font-semibold text-navy-deep lg:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 border-y border-border bg-secondary/40 lg:mt-24">
        <div className="container-prose grid gap-10 py-20 lg:grid-cols-2 lg:py-24">
        {PROJECTS.map((p, idx) => (
          <Reveal key={p.title} delay={(idx % 2) * 120} as="figure" className="flex">
            <div className="lift-card group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elegant">
              <BeforeAfterSlider
                beforeSrc={p.before}
                afterSrc={p.after}
                alt={p.title}
              />
              <figcaption className="flex flex-1 flex-col p-6">
                <div className="eyebrow text-accent">{p.service}</div>
                <h2 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-deep">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
                <div className="mt-5 border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {p.location}
                </div>
              </figcaption>
            </div>
          </Reveal>
        ))}
        </div>
      </section>
      <CTABand title="Want your property in the next gallery?" />
    </SiteShell>
  );
}
