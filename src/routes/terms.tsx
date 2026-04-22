import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeo({
      title: "Terms of Service",
      description:
        "The terms governing the use of the LumiView Services website and the cleaning, pressure washing, and property care services we provide.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that apply to our website and to the services we provide."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]}
      />

      <section className="container-prose mx-auto max-w-3xl py-16 lg:py-20">
        <div className="space-y-10 text-foreground/85 leading-relaxed">
          <p>
            These terms govern your use of the {SITE.name} website and the cleaning, pressure washing,
            window cleaning, janitorial, and property care services provided by {SITE.name}, a DBA of
            LumiView Services Inc. By using this website, requesting a quote, or accepting a written
            estimate from {SITE.name}, you agree to these terms.
          </p>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">1. Scope of work</h2>
            <p className="mt-3">
              The scope of work for any project is defined in the written estimate or service agreement
              accepted by the customer. Work outside that defined scope — additional surfaces, second-story
              work, hard-water restoration, biohazard cleanup, or any item not listed — is considered a
              change order and may require an updated estimate before being performed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">2. Estimates and pricing</h2>
            <p className="mt-3">
              Written estimates are valid for 30 days from the date issued. Estimates are based on the
              information provided by the customer and a visual assessment of the property. If on-site
              conditions differ materially from what was described — for example, additional square footage,
              heavy paint overspray, mineral staining, or unsafe access — {SITE.name} will pause and review
              the revised scope and pricing with the customer before proceeding.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">3. Scheduling and access</h2>
            <p className="mt-3">
              The customer is responsible for providing safe and reasonable access to the property on the
              scheduled service date, including unlocked gates, accessible water and power, cleared parking,
              and pets secured. If our crew is unable to access the property at the scheduled time, a
              trip-charge equal to one hour of crew time may apply.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">4. Weather and rescheduling</h2>
            <p className="mt-3">
              Many services — exterior window cleaning, pressure washing, soft washing — are weather
              dependent. {SITE.name} reserves the right to reschedule for active rain, lightning, freezing
              temperatures, or sustained high winds. Customers will be contacted as early as possible and
              the next available date offered at no additional charge.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">5. Cancellations</h2>
            <p className="mt-3">
              Customers may cancel or reschedule a confirmed service appointment without penalty up to
              48 hours before the scheduled start time. Cancellations made inside the 48-hour window may be
              subject to a cancellation fee of up to 50% of the service total to cover crew scheduling and
              prep costs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">6. Payment terms</h2>
            <p className="mt-3">
              Residential service is due in full upon completion unless otherwise stated in the written
              estimate. Commercial and recurring accounts are typically billed on Net-15 terms unless
              otherwise agreed. Past-due invoices may accrue a service charge of 1.5% per month and may
              result in suspension of recurring service until brought current.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">7. Satisfaction guarantee</h2>
            <p className="mt-3">
              {SITE.name} stands behind its work. If something does not meet the standard set in your
              estimate, contact us within 48 hours of service completion and we will return to make it
              right at no additional cost. The detailed terms of this guarantee — including coverage,
              exclusions, and the response window — are described in our{" "}
              <Link to="/service-policy" className="font-semibold text-primary hover:underline">
                Service Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">8. Insurance and liability</h2>
            <p className="mt-3">
              {SITE.name} carries general liability and workers&apos; compensation insurance. Certificates of
              insurance are available upon request. {SITE.name} is not responsible for pre-existing damage,
              defects, or conditions disclosed or undisclosed at the time of service — including but not
              limited to failed window seals, oxidized siding, soft or rotted wood, loose or unsealed
              caulking, or mineral and hard-water etching that has bonded to the glass.
            </p>
            <p className="mt-3">
              Maximum liability for any claim is limited to the amount paid for the specific service
              giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">9. Photography and use of work product</h2>
            <p className="mt-3">
              {SITE.name} may take before-and-after photographs of completed work for quality control,
              training, and marketing purposes. Photos will not include identifying information about the
              property or owner without permission. Customers may opt out by notifying us in writing before
              the service date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">10. Website use</h2>
            <p className="mt-3">
              The content on the {SITE.name} website — including text, photographs, logos, and graphics —
              is the property of {SITE.name} or its licensors and is provided for informational purposes
              only. You may not copy, reproduce, or redistribute website content for commercial purposes
              without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">11. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the State of Ohio. Any dispute arising under these
              terms or under a service agreement with {SITE.name} will be resolved in the appropriate
              courts of Lorain County or Cuyahoga County, Ohio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">12. Updates to these terms</h2>
            <p className="mt-3">
              {SITE.name} may update these terms from time to time to reflect changes in services, legal
              requirements, or business operations. The updated version posted on this page applies from
              its effective date. Continued use of the website or our services after an update constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Questions about these terms?</h2>
            <p className="mt-3">
              Our team is happy to walk through anything in this document before you book service.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                Contact {SITE.name} →
              </Link>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-primary hover:underline">
                Email us →
              </a>
            </div>
          </section>
        </div>
      </section>
    </SiteShell>
  );
}
