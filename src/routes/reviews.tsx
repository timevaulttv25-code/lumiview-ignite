import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

const REVIEWS = [
  { name: "James L.", role: "Property Owner & Airbnb Host", quote: "They've been consistent and dependable across multiple units. Communication is clear, and the results are always solid." },
  { name: "Sarah M.", role: "Homeowner, Westlake", quote: "LumiView did an excellent job on our windows and exterior cleaning. Everything looked noticeably better right away." },
  { name: "David R.", role: "Business Owner, Rocky River", quote: "Reliable, professional, and easy to work with. Our storefront always looks clean and well-presented after each visit." },
  { name: "Megan T.", role: "Property Manager, Lakewood", quote: "Our portfolio's exterior care is finally on autopilot. One contact, one invoice, consistent quality." },
  { name: "Robert P.", role: "Homeowner, Avon Lake", quote: "Showed up on time, did a meticulous job on hard-water stains we thought were permanent. Highly recommend." },
  { name: "Linda K.", role: "Daycare Director", quote: "Detail-focused and trustworthy. Parents have noticed the difference and so have our staff." },
];

export const Route = createFileRoute("/reviews")({
  head: () => buildSeo({
    title: `Customer Reviews — ${SITE.rating.value}★ on Google`,
    description: `LumiView is rated ${SITE.rating.value}★ across ${SITE.rating.count}+ verified Google reviews. Read what homeowners, businesses and property managers across Northeast Ohio have to say.`,
    path: "/reviews",
  }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Reviews" title={`${SITE.rating.value}★ across ${SITE.rating.count}+ reviews.`}
        description="What our residential, commercial and property-management clients say about working with LumiView."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]} />
      <section className="container-prose grid gap-6 py-20 lg:grid-cols-3 lg:py-28">
        {REVIEWS.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="flex">{[1,2,3,4,5].map(i=><Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
            <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-snug">"{t.quote}"</blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </section>
      <CTABand title="Become our next happy client." />
    </SiteShell>
  ),
});
