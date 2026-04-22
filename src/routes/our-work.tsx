import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { buildSeo } from "@/lib/seo";
import windowsBA from "@/assets/work-windows-ba.jpg";
import drivewayBA from "@/assets/work-driveway-ba.jpg";
import sidingBA from "@/assets/work-siding-ba.jpg";
import patioBA from "@/assets/work-patio-ba.jpg";
import storefrontBA from "@/assets/work-storefront-ba.jpg";
import gutterBA from "@/assets/work-gutter-ba.jpg";

const PROJECTS = [
  {
    img: windowsBA,
    title: "Two-story residential — full window restoration",
    location: "Westlake, OH",
    service: "Window Cleaning",
    detail: "32 windows, interior + exterior, screens hand-washed. Removed years of hard-water spotting from south-facing glass.",
  },
  {
    img: drivewayBA,
    title: "Triple-bay driveway pressure wash",
    location: "Avon Lake, OH",
    service: "Pressure Washing",
    detail: "Lifted oil staining, tire marks, and embedded grime from 1,400 sq ft of concrete. Surface-cleaner finish — no wand stripes.",
  },
  {
    img: sidingBA,
    title: "Algae-streaked vinyl siding soft wash",
    location: "Avon, OH",
    service: "Exterior Cleaning",
    detail: "Low-pressure soft wash with biodegradable surfactant restored the original siding color without damaging landscaping.",
  },
  {
    img: patioBA,
    title: "Paver patio + walkway refresh",
    location: "Bay Village, OH",
    service: "Pressure Washing",
    detail: "Removed moss, weeds, and stains from 600 sq ft of pavers. Re-sanded joints on request.",
  },
  {
    img: storefrontBA,
    title: "Retail storefront glass — weekly route",
    location: "Rocky River, OH",
    service: "Commercial Window Cleaning",
    detail: "Recurring weekly service for a high-traffic boutique. Smudge-free, streak-free, before doors open.",
  },
  {
    img: gutterBA,
    title: "Gutter cleanout + roof debris removal",
    location: "North Olmsted, OH",
    service: "Property Care",
    detail: "Cleared a fall's worth of leaves from 180 linear feet of gutter and bagged debris off-site.",
  },
];

export const Route = createFileRoute("/our-work")({
  head: () => buildSeo({
    title: "Our Work — Before & After Gallery",
    description: "Real before-and-after photos from window cleaning, pressure washing, and exterior projects across Avon and Northeast Ohio. See the LumiView difference for yourself.",
    path: "/our-work",
  }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Our Work"
        title="The proof is in the panes."
        description="Every project is photographed before and after. Browse real jobs from homes, storefronts, and managed properties across Northeast Ohio."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Results" }, { label: "Our Work" }]}
      />
      <section className="container-prose grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
        {PROJECTS.map((p) => (
          <figure key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-elegant">
            <div className="relative aspect-[3/2] overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={`${p.title} — before and after`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                width={1280}
                height={832}
                loading="lazy"
              />
              <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground shadow-soft">
                Before / After
              </div>
            </div>
            <figcaption className="flex flex-1 flex-col p-6">
              <div className="eyebrow text-accent">{p.service}</div>
              <h2 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-deep">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              <div className="mt-5 border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {p.location}
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
      <CTABand title="Want your property in the next gallery?" />
    </SiteShell>
  ),
});
