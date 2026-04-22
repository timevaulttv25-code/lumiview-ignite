import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { ServiceAreaMap } from "@/components/site/ServiceAreaMap";
import { SITE } from "@/lib/site";
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
        description={`Local crews across ${SITE.primaryAreas.length}+ communities. Tap your city below — the pin moves to that area, and you can jump straight to its localized page.`}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service areas" }]}
      />

      <ServiceAreaMap
        title="Find your city"
        subtitle="Tap a city to move the pin and open its dedicated services page."
        interactive
        pillsAsLinks
      />

      <section className="container-prose py-16 lg:py-20">
        <div className="rounded-2xl border border-border bg-secondary/40 p-8">
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
