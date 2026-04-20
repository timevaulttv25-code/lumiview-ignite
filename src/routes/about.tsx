import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => buildSeo({
    title: "About LumiView Services",
    description: "LumiView is a locally owned property-care company serving Avon and Northeast Ohio. Reliable scheduling, clear communication, and a finish that reflects well on every property we touch.",
    path: "/about",
  }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="About" title="Locally owned. Detail obsessed."
        description="LumiView is a Northeast Ohio property-care company built on three things: showing up when promised, communicating clearly, and finishing every job to a standard the property's owner can be proud of."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <section className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="font-serif text-3xl font-medium">Our standard</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We started LumiView because the property-services industry too often
            settles for "good enough." Missed appointments, unclear communication,
            inconsistent results. We built the opposite: uniformed crews, on-time
            arrival, clear follow-through, and a finish you'd notice the moment
            you walked up.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-medium">What you get</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>· Free, written estimates within 24 hours</li>
            <li>· Fully insured (general liability + workers' comp)</li>
            <li>· Consistent crews on recurring accounts</li>
            <li>· Same-day response for urgent commercial needs</li>
            <li>· Transparent pricing with no surprise charges</li>
          </ul>
        </div>
      </section>
      <CTABand title="Work with a team that follows through." />
    </SiteShell>
  ),
});
