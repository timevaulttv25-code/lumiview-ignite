import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { POSTS } from "./blog";
import { buildSeo } from "@/lib/seo";

const BODY: Record<string, string> = {
  "how-often-clean-windows": `Most homeowners wait until their windows look obviously dirty — which is months past the right interval. For a typical single-family home in Northeast Ohio, twice yearly (spring and fall) keeps glass clear, prevents hard-water etching, and protects screens and seals from accumulated grime. Storefronts and high-traffic commercial buildings benefit from biweekly or monthly service to maintain a consistently polished first impression. Property managers should standardize a quarterly cadence across portfolios — it's the simplest way to ensure no building falls behind. The cost of "letting it go" isn't just appearance: mineral deposits permanently etch glass over time, and that's a window-replacement bill, not a cleaning bill.`,
  "pressure-vs-soft-wash": `High-pressure water can strip paint, force water behind siding, and damage soft surfaces like wood, stucco, and older vinyl. That's why professional crews almost never use full pressure on house siding. Instead, we use **soft washing** — a low-pressure rinse combined with a biodegradable cleaning solution that does the actual lifting work. Concrete, brick walkways, and driveways are different: they can take pressure, and that's where you get the most dramatic before/after. The right rule of thumb: hard surfaces get pressure, soft surfaces get chemistry. A good crew brings both to every job.`,
  "property-manager-checklist": `Quarterly exterior care is the single highest-leverage maintenance activity for managed properties. The five items every property manager should standardize: (1) common-area window cleaning, (2) entryway and walkway pressure washing, (3) building-facade soft wash on a yearly cadence, (4) trash-enclosure and dumpster-pad cleaning, and (5) seasonal gutter clearing. Bundling these with a single vendor on a recurring schedule typically reduces total cost by 15–25% versus piecing them out, and it eliminates the calendar chaos of coordinating four different vendors. Ask for one invoice and one point of contact.`,
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post, body: BODY[params.slug] || "Article coming soon." };
  },
  head: ({ loaderData }) => loaderData ? buildSeo({
    title: loaderData.post.title,
    description: loaderData.post.excerpt,
    path: `/blog/${loaderData.post.slug}`,
    type: "article",
  }) : {},
  notFoundComponent: () => (
    <SiteShell><div className="container-prose py-32 text-center"><Link to="/blog" className="text-accent">All articles →</Link></div></SiteShell>
  ),
  component: () => {
    const { post, body } = Route.useLoaderData();
    return (
      <SiteShell>
        <PageHero eyebrow={new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          title={post.title} description={post.excerpt}
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Insights", to: "/blog" }, { label: post.title }]} />
        <article className="container-prose py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/90 [&>strong]:font-semibold [&>strong]:text-foreground">
            {body.split("\n\n").map((p, i) => (
              <p key={i} className="mb-5" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
            ))}
          </div>
        </article>
        <CTABand title="Have a property question? We're happy to help." />
      </SiteShell>
    );
  },
});
