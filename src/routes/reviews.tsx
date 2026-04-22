import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

const REVIEWS = [
  { name: "James L.", role: "Property Owner & Airbnb Host · Avon Lake", quote: "They've been consistent and dependable across multiple units. Communication is clear, and the results are always solid." },
  { name: "Sarah M.", role: "Homeowner · Westlake", quote: "LumiView did an excellent job on our windows and exterior cleaning. Everything looked noticeably better right away." },
  { name: "David R.", role: "Business Owner · Rocky River", quote: "Reliable, professional, and easy to work with. Our storefront always looks clean and well-presented after each visit." },
  { name: "Megan T.", role: "Property Manager · Lakewood", quote: "Our portfolio's exterior care is finally on autopilot. One contact, one invoice, consistent quality." },
  { name: "Robert P.", role: "Homeowner · Avon Lake", quote: "Showed up on time, did a meticulous job on hard-water stains we thought were permanent. Highly recommend." },
  { name: "Linda K.", role: "Daycare Director · Avon", quote: "Detail-focused and trustworthy. Parents have noticed the difference and so have our staff." },
  { name: "Anthony G.", role: "HOA Board Member · North Ridgeville", quote: "First vendor we've kept on a multi-year contract. They earn it every quarter." },
  { name: "Priya N.", role: "Realtor · Bay Village", quote: "I use LumiView for every pre-listing exterior. Photos look better. Listings move faster. Easy decision." },
  { name: "Mark D.", role: "Builder · Avon", quote: "Post-construction window cleaning that actually clears the mortar and stickers without scratching the glass. They're our preferred vendor now." },
];

export const Route = createFileRoute("/reviews")({
  head: () =>
    buildSeo({
      title: `Customer Reviews — ${SITE.rating.value}★ on Google`,
      description: `LumiView is rated ${SITE.rating.value}★ across ${SITE.rating.count}+ verified Google reviews. Read what homeowners, businesses and property managers across Northeast Ohio say about working with us.`,
      path: "/reviews",
    }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Reviews"
        title={`${SITE.rating.value}★ across ${SITE.rating.count}+ verified reviews.`}
        description="What our residential, commercial and property-management clients say about working with LumiView across Northeast Ohio."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Results", to: "/results" },
          { label: "Reviews" },
        ]}
      />

      {/* RATING BANNER */}
      <section className="container-prose pt-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft md:flex-row md:p-10">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
              <span className="font-serif text-2xl font-semibold text-navy-deep">
                {SITE.rating.value}
              </span>
            </div>
            <div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="mt-1 font-semibold text-foreground">
                Rated {SITE.rating.value} out of 5 on Google
              </div>
              <div className="text-sm text-muted-foreground">
                Based on {SITE.rating.count}+ verified customer reviews
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a
                href={SITE.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="mr-1.5 h-4 w-4 fill-current" />
                Leave a Google review
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={SITE.social.google} target="_blank" rel="noopener noreferrer">
                Read all on Google →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* REVIEW GRID */}
      <section className="container-prose grid gap-6 py-20 lg:grid-cols-3 lg:py-24">
        {REVIEWS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant"
          >
            <Quote className="h-6 w-6 text-accent/60" />
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-snug text-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <div className="font-semibold text-navy-deep">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="container-prose pb-20 lg:pb-24">
        <div className="rounded-3xl border border-border bg-secondary/40 p-10 text-center lg:p-14">
          <div className="mx-auto inline-flex items-center justify-center rounded-full bg-accent/15 p-4">
            <Star className="h-7 w-7 fill-accent text-accent" />
          </div>
          <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight lg:text-4xl">
            Worked with LumiView? Tell the next neighbor.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A 30-second Google review is the single best way to support a small local business —
            and it helps the next homeowner or property manager find a vendor they can trust.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full">
            <a
              href={SITE.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="mr-1.5 h-4 w-4 fill-current" />
              Leave a Google review
            </a>
          </Button>
        </div>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        title="Become our next happy client."
        body="Tell us about your property and we'll come back within 24 hours with a clear written estimate."
      />
    </SiteShell>
  );
}
