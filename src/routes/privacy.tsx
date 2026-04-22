import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { buildSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeo({
      title: "Privacy Policy",
      description:
        "How LumiView Services collects, uses, and protects customer information across our website, estimates, and service communications.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How LumiView collects, uses, and protects customer information."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy" }]}
      />

      <section className="container-prose mx-auto max-w-3xl py-16 lg:py-20">
        <div className="prose-policy space-y-10 text-foreground/85 leading-relaxed">
          <div>
            <p>
              This privacy policy explains what information {SITE.name} may collect through our website,
              estimates, service requests, and customer communications, how that information is used, and
              how to contact us with privacy-related questions.
            </p>
            <p className="mt-4 rounded-2xl border border-border bg-muted/40 p-5 text-sm">
              By using the {SITE.name} website or contacting us for service, you agree to the collection
              and use of information as described in this privacy policy.
            </p>
          </div>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3">
              {SITE.name} respects your privacy and handles business information with practical care. We
              collect only the information reasonably needed to respond to inquiries, prepare estimates,
              schedule service, communicate with customers, improve operations, and comply with legal or
              contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Information we collect</h2>
            <h3 className="mt-4 text-base font-semibold text-foreground">Information you provide directly</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Name, company name, and property contact details</li>
              <li>Email address, phone number, and service address</li>
              <li>Project details, scheduling preferences, notes, and photos you choose to provide</li>
              <li>Billing details and related transaction information when needed for service</li>
              <li>Messages submitted through contact forms, quote requests, or direct communication</li>
            </ul>
            <h3 className="mt-5 text-base font-semibold text-foreground">Information collected automatically</h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>IP address, browser type, device type, and general usage data</li>
              <li>Pages visited, referral sources, and interactions with website features</li>
              <li>Basic cookie or analytics data used to understand website performance and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">How we use information</h2>
            <p className="mt-3">{SITE.name} may use collected information to:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Respond to questions, quote requests, and service inquiries</li>
              <li>Prepare estimates, proposals, schedules, invoices, and service records</li>
              <li>Deliver and manage residential, commercial, and property care services</li>
              <li>Communicate about appointments, schedule changes, follow-up, and customer support</li>
              <li>Improve website usability, service operations, and internal processes</li>
              <li>Maintain records for legal, tax, safety, or insurance purposes</li>
              <li>Send service-related updates and, where appropriate, marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">When we may share information</h2>
            <p className="mt-3">
              {SITE.name} does not sell personal information. We may share information only when reasonably
              necessary to operate the business, fulfill a service request, or comply with legal obligations.
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>With service providers that support website hosting, communications, payment processing, scheduling, analytics, or business operations</li>
              <li>With subcontractors or authorized field partners when necessary to perform approved services</li>
              <li>With legal, insurance, regulatory, or government parties when required by law or to protect legitimate business interests</li>
              <li>In connection with a business transfer, restructuring, sale, or merger involving {SITE.name} or LumiView Services Inc.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Cookies and analytics</h2>
            <p className="mt-3">
              The {SITE.name} website may use cookies, analytics tools, and similar technologies to
              understand how visitors use the site, measure performance, improve content, and support
              marketing effectiveness. These tools may collect limited technical and usage data.
            </p>
            <p className="mt-3">
              You can usually control cookies through your browser settings. Disabling some cookies may
              affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Data security</h2>
            <p className="mt-3">
              {SITE.name} uses reasonable administrative, technical, and operational safeguards to protect
              information from unauthorized access, misuse, or disclosure. No method of electronic storage
              or transmission is completely secure, so absolute security cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Your choices</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>You may request updates or corrections to information you have provided.</li>
              <li>You may opt out of non-essential marketing communications by using the unsubscribe method provided or by contacting {SITE.name} directly.</li>
              <li>You may ask general questions about what information we maintain in the normal course of business, subject to legal, operational, and recordkeeping limits.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Third-party links</h2>
            <p className="mt-3">
              The {SITE.name} website may contain links to third-party websites, booking systems, review
              platforms, or social platforms. {SITE.name} is not responsible for the privacy practices,
              content, or security of third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Children&apos;s privacy</h2>
            <p className="mt-3">
              The {SITE.name} website is not intended for children under 13, and {SITE.name} does not
              knowingly collect personal information directly from children through the website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Policy updates</h2>
            <p className="mt-3">
              {SITE.name} may revise this privacy policy from time to time to reflect legal, operational,
              technical, or business changes. The updated version posted by {SITE.name} will apply from
              the effective date of publication unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">What this policy covers</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>Website and form submissions</li>
              <li>Estimate and scheduling communications</li>
              <li>Customer service records</li>
              <li>Analytics and site performance data</li>
              <li>Operational and legal recordkeeping</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Business identity</h2>
            <p className="mt-3">
              {SITE.name} is a DBA of LumiView Services Inc. This policy applies to {SITE.name} website
              activity, quote requests, customer communication, and service-related information handled in
              the ordinary course of business.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Privacy questions?</h2>
            <p className="mt-3">
              If you have questions about how your information is handled, reach out and we will direct
              your request to the appropriate contact.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                Contact {SITE.name} →
              </Link>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-primary hover:underline">
                Email privacy contact →
              </a>
            </div>
          </section>
        </div>
      </section>
    </SiteShell>
  );
}
