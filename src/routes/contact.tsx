import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => buildSeo({
    title: "Contact LumiView Services",
    description: `Call ${SITE.phoneDisplay} or request a quote online. 24-hour response across Avon and Northeast Ohio.`,
    path: "/contact",
  }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Talk to a real person."
        description="Call, email, or request a quote. We respond to every inquiry within 24 hours."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <section className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="space-y-6">
          <a href={SITE.phoneLink} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-accent">
            <Phone className="h-6 w-6 text-accent" />
            <div><div className="eyebrow">Phone</div><div className="mt-1 font-serif text-2xl">{SITE.phoneDisplay}</div></div>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-accent">
            <Mail className="h-6 w-6 text-accent" />
            <div><div className="eyebrow">Email</div><div className="mt-1 font-serif text-xl">{SITE.email}</div></div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-accent" />
            <div><div className="eyebrow">Service area</div><div className="mt-1">Based in {SITE.address.city}, {SITE.address.region} · Serving Northeast Ohio</div></div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <Clock className="h-6 w-6 text-accent" />
            <div><div className="eyebrow">Hours</div><div className="mt-1">Mon–Sat · 7:00 AM – 7:00 PM</div></div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-secondary/40 p-10">
          <h2 className="font-serif text-3xl font-medium">Prefer the quote form?</h2>
          <p className="mt-3 text-muted-foreground">Walk through a guided three-step quote with everything we need to give you a clear estimate.</p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link to="/quote">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  ),
});
