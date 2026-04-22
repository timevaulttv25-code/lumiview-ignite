import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { ServiceAreaMap } from "@/components/site/ServiceAreaMap";
import { CITIES, SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/service-areas")({
  head: () =>
    buildSeo({
      title: "Service Areas — Avon, Westlake, Lakewood & Northeast Ohio",
      description:
        "LumiView serves Avon, Avon Lake, Westlake, Lakewood, Rocky River, North Olmsted, Bay Village and surrounding Northeast Ohio communities.",
      path: "/service-areas",
    }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Service areas"
        title="Serving Avon & Northeast Ohio."
        description={`Local crews across ${SITE.primaryAreas.length}+ communities. If you're nearby and unsure, call us — we're happy to confirm coverage.`}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service areas" }]}
      />

      <ServiceAreaMap
        title="Where we work"
        subtitle="Tap a city below the map to see services available there."
      />

      <section className="container-prose py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow text-accent">Featured cities</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
            Pick your city for a localized page
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              to="/service-areas/$slug"
              params={{ slug: c.slug }}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-soft"
            >
              <div>
                <div className="font-serif text-xl font-medium text-navy-deep">{c.name}</div>
                <div className="text-sm text-muted-foreground">ZIP {c.zip}</div>
              </div>
              <MapPin className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-8">
          <div className="eyebrow text-accent">Additional coverage</div>
          <p className="mt-3 text-muted-foreground">
            We also serve North Ridgeville, Strongsville, Berea, Olmsted Falls,
            Fairview Park, Brook Park, Elyria, Lorain, Sheffield Lake, Amherst,
            Grafton, Columbia Station, LaGrange, Oberlin, Vermilion and west-side
            Cleveland neighborhoods.
          </p>
        </div>
      </section>
      <CTABand title="Outside our standard area? Just ask." />
    </SiteShell>
  );
}
