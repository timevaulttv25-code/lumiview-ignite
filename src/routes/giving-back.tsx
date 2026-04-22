import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { buildSeo } from "@/lib/seo";
import { Heart, HandHeart, Sparkles, Home } from "lucide-react";
import heroImg from "@/assets/page-giving-back.jpg";

const INITIATIVES = [
  {
    icon: Home,
    title: "Cleaning for a Reason",
    body: "Free interior and exterior cleanings each year for Northeast Ohio neighbors going through cancer treatment. Nominated quietly, completed quietly.",
  },
  {
    icon: HandHeart,
    title: "Veteran & First Responder Discount",
    body: "Year-round 10% discount on every service for active military, veterans, police, fire, and EMS, because their work makes ours possible.",
  },
  {
    icon: Sparkles,
    title: "Local Schools & Daycares",
    body: "Pro-bono window and exterior cleaning for selected daycare centers and elementary schools in the communities we serve.",
  },
  {
    icon: Heart,
    title: "Avon Community Sponsorships",
    body: "Annual sponsorships of youth sports teams, school events, and Northeast Ohio community fundraisers our team cares about.",
  },
];

const PARTNERS = [
  "Avon City Schools",
  "Avon Lake Soccer Association",
  "Northeast Ohio Food Bank",
  "Cleveland Clinic Foundation, community programs",
  "Local Habitat for Humanity chapters",
];

export const Route = createFileRoute("/giving-back")({
  head: () =>
    buildSeo({
      title: "Giving Back to Northeast Ohio",
      description:
        "LumiView donates time, services and sponsorships to Northeast Ohio neighbors, first responders, schools and families in need. Here's how, and how to nominate someone.",
      path: "/giving-back",
    }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Giving back"
        title="Built here. Invested here."
        description="LumiView is locally owned, and the community that supports us deserves to feel it back. Here's how we give time, services and sponsorships to Northeast Ohio."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Giving Back" },
        ]}
        image={heroImg}
      />

      <section className="container-prose py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">Our commitment</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            5% of every job, given back.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A portion of every invoice, residential or commercial, is set aside for community
            initiatives. No marketing line item, no asterisk. It funds the programs below
            and a steady rotation of one-off needs that come up across our service area.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {INITIATIVES.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <i.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-2xl font-medium">{i.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Nominate a neighbor</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
              Know someone who could use a hand?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              If a neighbor, family member, or coworker is going through a hard season, illness,
              loss, a new baby, a tough move, and a clean home or storefront would lift the
              load, tell us. Nominations stay confidential, and the recipient never has to know
              who reached out.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Send a short note to{" "}
              <a href="mailto:givingback@lumiviewservices.com" className="font-semibold text-accent underline-offset-4 hover:underline">
                givingback@lumiviewservices.com
              </a>{" "}
              with their name, a sentence on the situation, and the best way for us to reach
              out discreetly.
            </p>
          </div>
          <div>
            <div className="eyebrow">Community partners</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight">
              Organizations we support.
            </h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {PARTNERS.map((p) => (
                <li key={p} className="border-b border-border pb-3 text-foreground/85">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Stronger together"
        title="When you hire LumiView, your neighbors benefit too."
      />
    </SiteShell>
  ),
});
