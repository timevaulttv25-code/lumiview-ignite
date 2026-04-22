import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { SERVICES, SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";
import windowImg from "@/assets/service-window-cleaning.jpg";
import pressureImg from "@/assets/service-pressure-washing.jpg";
import janitorialImg from "@/assets/service-janitorial.jpg";
import propertyImg from "@/assets/service-property-care.jpg";
import airbnbImg from "@/assets/service-airbnb-turnover.jpg";
import pmImg from "@/assets/service-property-management.jpg";

const IMG: Record<string, string> = {
  "window-cleaning": windowImg,
  "pressure-washing": pressureImg,
  "janitorial-interior-cleaning": janitorialImg,
  "property-care": propertyImg,
  "airbnb-vrbo-turnover": airbnbImg,
  "property-management-cleaning": pmImg,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    ...buildSeo({
      title: "Cleaning & Property-Care Services in Avon, OH",
      description: "Professional window cleaning, pressure washing, janitorial and property-care services for residential, commercial and managed properties across Northeast Ohio.",
      path: "/services",
      image: `${SITE.url}/og-default.jpg`,
    }),
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Premium care for every surface of your property."
        description="From streak-free glass to soft-washed siding to weekly interior care, every LumiView service is delivered with the same dependable standard."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="container-prose grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
        {SERVICES.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={IMG[s.slug]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <h2 className="font-serif text-2xl font-medium">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>
      <CTABand title="Not sure which service you need?" body="Tell us about the property and we'll recommend the right approach." />
    </SiteShell>
  );
}
