import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { buildSeo } from "@/lib/seo";
import { Building2, Hammer, KeyRound, Sparkles, Handshake, FileText } from "lucide-react";

const PARTNER_TYPES = [
  {
    icon: Building2,
    title: "Property Management Companies",
    body: "Single-vendor coverage across your residential and commercial portfolio, windows, exterior, janitorial, turnover. Consolidated invoicing, dedicated account manager.",
  },
  {
    icon: KeyRound,
    title: "Realtors & Brokerages",
    body: "Pre-listing and post-closing cleans on a 48-hour turnaround. Photo-ready windows and exteriors that help your listings show better and close faster.",
  },
  {
    icon: Hammer,
    title: "Builders & General Contractors",
    body: "Post-construction cleanup and pre-walkthrough detailing for new builds and renovations. We arrive after the punch list, leave it move-in ready.",
  },
  {
    icon: Sparkles,
    title: "Interior Designers & Stagers",
    body: "Final-detail window and surface cleaning before the photographer or stager arrives. Glass that doesn't fight your lighting.",
  },
  {
    icon: Handshake,
    title: "Airbnb / STR Co-hosts",
    body: "Calendar-synced turnover support across multiple listings. Photo confirmation after every clean. Linen and restock service available.",
  },
  {
    icon: FileText,
    title: "Facility & Office Managers",
    body: "Recurring janitorial and exterior service contracts with one point of contact, COI on file, and same-day response for urgent needs.",
  },
];

const BENEFITS = [
  "Preferred trade pricing on every service line",
  "Net-15 or net-30 billing on commercial accounts",
  "Dedicated account manager and direct cell access",
  "Consolidated multi-property monthly invoicing",
  "Certificate of insurance furnished on request",
  "Priority scheduling for last-minute turnovers",
  "Photo confirmation and digital reporting after every visit",
  "Quarterly business reviews on multi-site contracts",
];

export const Route = createFileRoute("/partner")({
  head: () =>
    buildSeo({
      title: "Partner With LumiView",
      description:
        "Property managers, realtors, builders, designers and STR hosts, partner with LumiView for trade pricing, net terms and a single dependable vendor across Northeast Ohio.",
      path: "/partner",
    }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Partner With Us"
        title="One vendor. Every property. Done right."
        description="If your business depends on properties looking sharp on a deadline, you need a partner you can call once and trust to follow through. That's the relationship LumiView is built for."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Partner With Us" },
        ]}
      />

      <section className="container-prose py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">Built for trade partners</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            Who we partner with.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We work behind the scenes for the businesses that make Northeast Ohio properties
            shine. If you sell, manage, build, design or host, we're your exterior and
            interior cleaning department.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_TYPES.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elegant">
              <p.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Partner benefits</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
              The kind of vendor relationship you've been looking for.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Real account management, real terms, real follow-through. Not a call center,
              not a national franchise, not a different crew every visit.
            </p>
            <Button asChild size="lg" className="mt-7 rounded-full">
              <Link to="/contact">Start a partner conversation</Link>
            </Button>
          </div>
          <ul className="grid gap-3 lg:col-span-7 lg:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b} className="rounded-xl border border-border bg-background p-4 text-sm font-medium text-foreground/85">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-prose py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { step: "01", title: "Intro call", body: "15 minutes. Tell us about your portfolio, your pain points, and what your ideal vendor looks like." },
            { step: "02", title: "Walk-through & pricing", body: "We tour a representative property (or two), then send a clear partner pricing sheet within 3 business days." },
            { step: "03", title: "Onboard & launch", body: "COI on file, account manager assigned, schedule built. First service typically within two weeks of signature." },
          ].map((s) => (
            <div key={s.step}>
              <div className="font-serif text-5xl font-medium text-accent">{s.step}</div>
              <h3 className="mt-3 font-serif text-2xl font-medium">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Let's build it"
        title="Become a LumiView partner."
        body="Tell us about your business and what you need from a cleaning partner. We'll come back within 24 hours with a custom plan."
      />
    </SiteShell>
  ),
});
