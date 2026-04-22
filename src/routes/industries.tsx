import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { INDUSTRIES } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => buildSeo({
    title: "Industries We Serve — Residential, Commercial & Property Managers",
    description: "LumiView serves homeowners, businesses, property managers, builders and daycare facilities across Avon and Northeast Ohio.",
    path: "/industries",
  }),
  component: IndustriesIndex,
});

import residentialImg from "@/assets/industry-residential.jpg";
import commercialImg from "@/assets/industry-commercial.jpg";
import pmImg from "@/assets/industry-property-managers.jpg";
import constructionImg from "@/assets/industry-construction.jpg";
import daycareImg from "@/assets/industry-daycare.jpg";

const IMG: Record<string, string> = {
  residential: residentialImg,
  commercial: commercialImg,
  "property-managers": pmImg,
  construction: constructionImg,
  daycare: daycareImg,
};

function IndustriesIndex() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Industries"
        title="Care tailored to every type of property."
        description="The same dependable standard, adapted to context — from single-family homes to short-term rentals to multi-property portfolios and retail plazas."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />
      <section className="container-prose grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
        {INDUSTRIES.map((i) => (
          <Link
            key={i.slug}
            to="/industries/$slug"
            params={{ slug: i.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={IMG[i.slug]}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h2 className="font-serif text-2xl font-medium">{i.title}</h2>
              <p className="mt-2 text-muted-foreground">{i.short}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>
      <CTABand title="Let's talk about your portfolio." />
    </SiteShell>
  );
}
