import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => buildSeo({ title: "Terms of Service", description: "LumiView Services terms of service.", path: "/terms" }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Legal" title="Terms of Service" description="The terms governing use of our website and services."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
      <section className="container-prose mx-auto max-w-3xl py-16 text-muted-foreground leading-relaxed lg:py-20">
        <p>By using this website or engaging LumiView Services, you agree to standard terms covering scope of work, scheduling, payment, cancellations, and liability. A complete written agreement is provided with every accepted estimate.</p>
      </section>
    </SiteShell>
  ),
});
