import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { ServiceAreaMap } from "@/components/site/ServiceAreaMap";
import { CITIES, SERVICES, SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, localBusinessJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/$slug")({
  loader: ({ params }) => {
    const city = CITIES.find((c) => c.slug === params.slug);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => loaderData ? {
    ...buildSeo({
      title: `Window Cleaning & Property Care in ${loaderData.city.name}, OH`,
      description: `Premium window cleaning, pressure washing and property care for homes and businesses in ${loaderData.city.name} (ZIP ${loaderData.city.zip}). 24-hour response, 4.9★ rated, fully insured.`,
      path: `/service-areas/${loaderData.city.slug}`,
      image: `${SITE.url}/og-default.jpg`,
    }),
    scripts: [jsonLdScript(localBusinessJsonLd({ areaServed: { "@type": "City", name: loaderData.city.name } }))],
  } : {},
  notFoundComponent: () => (
    <SiteShell><div className="container-prose py-32 text-center"><Link to="/service-areas" className="text-accent">All areas →</Link></div></SiteShell>
  ),
  component: () => {
    const { city } = Route.useLoaderData();
    return (
      <SiteShell>
        <PageHero eyebrow={`${city.name}, OH · ${city.zip}`}
          title={`Window cleaning & property care in ${city.name}.`}
          description={`Local crews serving ${city.name} homeowners, businesses and property managers — from streak-free glass to soft-washed siding and recurring interior care.`}
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service areas", to: "/service-areas" }, { label: city.name }]} />
        <section className="container-prose py-20 lg:py-28">
          <h2 className="font-serif text-3xl font-medium text-navy-deep">Services available in {city.name}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-soft">
                <div className="font-serif text-xl font-medium text-navy-deep">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </section>
        <ServiceAreaMap
          title={`${city.name} is in our daily route`}
          subtitle="The pin is on your city. Tap another to compare nearby coverage."
          interactive
          activeCitySlug={city.slug}
        />
        <CTABand title={`Get a ${city.name} quote within 24 hours.`} />
      </SiteShell>
    );
  },
});
