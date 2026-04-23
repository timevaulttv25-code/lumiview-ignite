import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, Facebook, Instagram, MapPinned } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => buildSeo({
    title: "Contact LumiView Services",
    description: `Call ${SITE.phoneDisplay}, email ${SITE.email}, or request a quote online. 24-hour response across Avon and Northeast Ohio.`,
    path: "/contact",
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to a real person."
        description="Call, email, or request a quote. We respond to every inquiry within 24 hours."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="space-y-6">
          <a href={SITE.phoneLink} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-accent">
            <Phone className="h-6 w-6 text-accent" />
            <div>
              <div className="eyebrow">Phone</div>
              <div className="mt-1 font-serif text-2xl">{SITE.phoneDisplay}</div>
            </div>
          </a>

          <a href={`mailto:${SITE.emails.general}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-accent">
            <Mail className="h-6 w-6 text-accent" />
            <div>
              <div className="eyebrow">General inquiries</div>
              <div className="mt-1 font-serif text-xl">{SITE.emails.general}</div>
              <div className="mt-1 text-xs text-muted-foreground">Questions, feedback, anything else.</div>
            </div>
          </a>

          <a href={`mailto:${SITE.emails.quotes}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-accent">
            <Mail className="h-6 w-6 text-accent" />
            <div>
              <div className="eyebrow">Quote requests</div>
              <div className="mt-1 font-serif text-xl">{SITE.emails.quotes}</div>
              <div className="mt-1 text-xs text-muted-foreground">Pricing, scheduling, new projects.</div>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-accent" />
            <div>
              <div className="eyebrow">Service area</div>
              <div className="mt-1">
                Based in {SITE.address.city}, {SITE.address.region} · Serving Northeast Ohio
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <Clock className="h-6 w-6 text-accent" />
            <div className="flex-1">
              <div className="eyebrow">Hours</div>
              <ul className="mt-2 space-y-1 text-sm">
                {SITE.hoursDisplay.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6">
                    <span className="font-medium text-foreground">{h.days}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="eyebrow">Follow & Review</div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href={SITE.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Star className="h-3.5 w-3.5 fill-current" />
                Leave a Google review
              </a>
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumiView on Google Maps"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <MapPinned className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumiView on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumiView on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-10 shadow-soft">
          <h2 className="font-serif text-3xl font-medium">Prefer the quote form?</h2>
          <p className="mt-3 text-muted-foreground">
            Walk through a guided three-step quote with everything we need to give you a clear estimate.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link to="/quote">
              Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        </div>
      </section>
    </SiteShell>
  );
}
