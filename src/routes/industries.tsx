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
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Industries" title="Care tailored to every type of property."
        description="The same dependable standard, adapted to context — from single-family homes to multi-property portfolios."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
      <section className="container-prose grid gap-6 py-20 sm:grid-cols-2 lg:py-28">
        {INDUSTRIES.map((i) => (
          <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }}
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-soft">
            <h2 className="font-serif text-2xl font-medium">{i.title}</h2>
            <p className="mt-2 text-muted-foreground">{i.short}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">Learn more <ArrowRight className="h-4 w-4" /></div>
          </Link>
        ))}
      </section>
      <CTABand title="Let's talk about your portfolio." />
    </SiteShell>
  ),
});
