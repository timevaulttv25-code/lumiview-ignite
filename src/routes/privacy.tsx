import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => buildSeo({ title: "Privacy Policy", description: "How LumiView Services collects and protects your information.", path: "/privacy" }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How we collect, use and protect your information."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy" }]} />
      <section className="container-prose mx-auto max-w-3xl py-16 text-muted-foreground leading-relaxed lg:py-20">
        <p>LumiView Services collects only the information needed to respond to your quote requests and provide service: name, contact details, property address, and service preferences. We do not sell or share your information with third parties except as required to deliver the requested service. Contact {`hello@lumiviewservices.com`} with any questions.</p>
      </section>
    </SiteShell>
  ),
});
