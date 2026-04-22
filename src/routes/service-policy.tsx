import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/service-policy")({
  head: () =>
    buildSeo({
      title: "Service Policy",
      description:
        "How LumiView Services delivers every job — quality standards, scheduling, weather, safety, satisfaction guarantee, and recurring service.",
      path: "/service-policy",
    }),
  component: ServicePolicyPage,
});

function ServicePolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How We Work"
        title="Service Policy"
        description="The standards every LumiView crew works to — and the guarantee behind every job."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service Policy" }]}
      />

      <section className="container-prose mx-auto max-w-3xl py-16 lg:py-20">
        <div className="space-y-10 text-foreground/85 leading-relaxed">
          <p>
            This service policy explains how {SITE.name} schedules, performs, and stands behind the work we
            do — window cleaning, pressure washing, janitorial, and property care across Northeast Ohio.
            It complements your written estimate and our{" "}
            <Link to="/terms" className="font-semibold text-primary hover:underline">
              Terms of Service
            </Link>
            .
          </p>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Our service standard</h2>
            <p className="mt-3">
              Every job is performed by trained, uniformed, background-checked crew members under the
              supervision of a senior lead. We use the right tools and methods for the surface — purified
              water-fed poles for exterior glass, soft-wash systems for siding and roofs, surface cleaners
              for flatwork, and HEPA-grade interior tools for janitorial work — and we leave the property
              cleaner than we found it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Scheduling and arrival</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Confirmed appointments include a 2-hour arrival window communicated by text the day before.</li>
              <li>Our crew lead will text on arrival and again at completion with a brief recap.</li>
              <li>Most residential jobs are completed in a single visit; larger commercial and post-construction projects are scoped with a written timeline.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Weather and rescheduling</h2>
            <p className="mt-3">
              Exterior window cleaning, pressure washing, and soft washing are weather dependent. Active
              rain, sustained high winds, lightning, and freezing temperatures are conditions where we will
              proactively reschedule for safety and quality. There is no charge for weather rescheduling —
              we will offer the next available date and prioritize you on the route.
            </p>
            <p className="mt-3">
              Light rain after exterior windows are cleaned will not normally streak or spot the glass when
              the work is done with a purified water-fed pole. Soft-wash and pressure-wash treatments are
              effective once applied and rinsed; rain afterward is not a problem.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Site preparation</h2>
            <p className="mt-3">
              Before our crew arrives, customers are asked to:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Move vehicles, patio furniture, planters, and fragile décor away from the work area.</li>
              <li>Close all windows and exterior doors fully before exterior washing begins.</li>
              <li>Secure pets indoors or in a safe area away from the work zone.</li>
              <li>Provide access to an outdoor water spigot and, where needed, an exterior power outlet.</li>
              <li>Unlock gates and disarm any pet or yard sensors along the work path.</li>
            </ul>
            <p className="mt-3">
              We are happy to handle minor moving for an additional charge — just let us know in advance.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Safety and access</h2>
            <p className="mt-3">
              Our crews follow OSHA-aligned safety protocols, use fall protection where appropriate, and
              are trained on ladder, lift, and water-fed pole operation. We do not perform work that
              requires unsafe access — for example, climbing on icy or weak roofs, walking on tile, or
              operating in active electrical hazards. If a portion of your project is outside our safe
              working scope, we will tell you up front and recommend a partner where appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Quality check &amp; walkthrough</h2>
            <p className="mt-3">
              Every job ends with a crew lead walkthrough. On commercial accounts, we include a quality
              checklist photographed and emailed to the property contact. On residential jobs, the lead
              will invite you to walk the work with them before we leave.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Satisfaction guarantee</h2>
            <p className="mt-3">
              If something does not meet the standard set in your estimate, contact us within 48 hours of
              service completion and we will return to make it right at no additional cost. The guarantee
              covers the specific work performed under the original estimate.
            </p>
            <p className="mt-3">
              The guarantee does not cover:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Pre-existing damage, failed seals, oxidation, or mineral and hard-water etching bonded to glass or surface.</li>
              <li>Conditions caused by third parties or weather events after the service was completed.</li>
              <li>Surfaces or items specifically excluded from the original written scope.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Recurring &amp; commercial accounts</h2>
            <p className="mt-3">
              Recurring accounts — janitorial, property management, short-term rental turnover, monthly or
              quarterly window cleaning — are governed by the service-level agreement attached to the
              account. Service frequency, included scope, after-hours access, key handling, COI delivery,
              and reporting cadence are documented in writing and reviewed with the property contact at
              account start and at every quarterly review.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Pricing and changes</h2>
            <p className="mt-3">
              Pricing is documented in your written estimate. Recurring service pricing is held for the
              term of the agreement and reviewed annually. Material changes in scope — additional doors,
              expanded square footage, added frequency — are quoted in writing before being added to the
              account.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Communication</h2>
            <p className="mt-3">
              Every customer has a direct line to the office during business hours and a written record of
              every service visit. We respond to most inquiries within one business hour and to active
              service questions same-day.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Have a question about how we work?</h2>
            <p className="mt-3">
              Reach out — we are happy to walk through anything in this policy before you book.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                Contact {SITE.name} →
              </Link>
              <Link to="/quote" className="font-semibold text-primary hover:underline">
                Request a quote →
              </Link>
            </div>
          </section>
        </div>
      </section>
    </SiteShell>
  );
}
