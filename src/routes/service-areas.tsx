import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { CITIES, SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/service-areas")({
  head: () => buildSeo({
    title: "Service Areas — Avon, Westlake, Lakewood & Northeast Ohio",
    description: "LumiView serves Avon, Avon Lake, Westlake, Lakewood, Rocky River, North Olmsted, Bay Village and surrounding Northeast Ohio communities.",
    path: "/service-areas",
  }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Service areas" title="Serving Avon & Northeast Ohio."
        description={`Local crews across ${SITE.primaryAreas.length}+ communities. If you're nearby and unsure, call us — we're happy to confirm coverage.`}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service areas" }]} />
      <section className="container-prose py-20 lg:py-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link key={c.slug} to="/service-areas/$slug" params={{ slug: c.slug }}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-soft">
              <div>
                <div className="font-serif text-xl font-medium">{c.name}</div>
                <div className="text-sm text-muted-foreground">ZIP {c.zip}</div>
              </div>
              <MapPin className="h-5 w-5 text-accent" />
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-8">
          <div className="eyebrow">Additional coverage</div>
          <p className="mt-3 text-muted-foreground">
            We also serve North Ridgeville, Strongsville, Berea, Olmsted Falls, Fairview Park, Brook Park, Elyria, Lorain, Sheffield Lake, Amherst, Grafton, Columbia Station, LaGrange, Oberlin, Vermilion and west-side Cleveland neighborhoods.
          </p>
        </div>
      </section>
      <CTABand title="Outside our standard area? Just ask." />
    </SiteShell>
  ),
});
