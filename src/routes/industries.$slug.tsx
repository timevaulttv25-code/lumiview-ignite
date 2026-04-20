import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { INDUSTRIES, SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

const COPY: Record<string, string> = {
  residential: "From quarterly window cleaning to seasonal exterior refreshes, we help homeowners protect the look and value of their largest investment.",
  commercial: "Storefronts, offices and retail spaces depend on first impressions. We deliver consistent, scheduled care that keeps your business presentation sharp.",
  "property-managers": "One point of contact, one invoice, one consistent standard across your entire portfolio — common areas, exteriors and turnover units.",
  construction: "Post-construction window cleaning, debris removal and final-detail cleaning so newly built or renovated properties show at their absolute best.",
  daycare: "Detail-focused interior and exterior cleaning for environments where cleanliness, safety and presentation directly affect the trust of every parent.",
};

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const ind = INDUSTRIES.find((i) => i.slug === params.slug);
    if (!ind) throw notFound();
    return { ind, copy: COPY[params.slug] ?? "" };
  },
  head: ({ loaderData }) => loaderData ? buildSeo({
    title: `${loaderData.ind.title} Cleaning Services — Northeast Ohio`,
    description: loaderData.copy,
    path: `/industries/${loaderData.ind.slug}`,
    image: `${SITE.url}/og-default.jpg`,
  }) : {},
  notFoundComponent: () => (
    <SiteShell><div className="container-prose py-32 text-center"><Link to="/industries" className="text-accent">All industries →</Link></div></SiteShell>
  ),
  component: () => {
    const { ind, copy } = Route.useLoaderData();
    return (
      <SiteShell>
        <PageHero eyebrow="Industry" title={ind.title} description={copy}
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries", to: "/industries" }, { label: ind.title }]} />
        <CTABand title={`Cleaning services built for ${ind.title.toLowerCase()}.`} />
      </SiteShell>
    );
  },
});
