import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { buildSeo } from "@/lib/seo";

export const POSTS = [
  { slug: "how-often-clean-windows", title: "How often should you really clean your windows?", excerpt: "A practical schedule for homes, storefronts and managed properties, and why most owners under-clean.", date: "2026-04-12" },
  { slug: "pressure-vs-soft-wash", title: "Pressure washing vs. soft washing: what your siding actually needs", excerpt: "Choosing the wrong method can damage siding. Here's how the pros decide.", date: "2026-04-05" },
  { slug: "property-manager-checklist", title: "The property manager's quarterly exterior-care checklist", excerpt: "Five items that protect curb appeal, tenant satisfaction, and your asset value.", date: "2026-03-28" },
];

export const Route = createFileRoute("/blog")({
  head: () => buildSeo({
    title: "Insights & Guides, LumiView",
    description: "Practical guides on window cleaning, pressure washing, janitorial care and property management for Northeast Ohio property owners.",
    path: "/blog",
  }),
  component: () => (
    <SiteShell>
      <PageHero eyebrow="Insights" title="Property-care guides for owners who care."
        description="Short, practical articles on how to keep windows clear, exteriors clean, and properties well-presented."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]} />
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose grid gap-8 py-20 lg:grid-cols-3 lg:py-28">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-soft">
            <time className="eyebrow">{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <h2 className="mt-3 flex-1 font-serif text-2xl font-medium leading-tight">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-5 text-sm font-semibold text-navy-deep group-hover:text-accent">Read article →</div>
          </Link>
        ))}
        </div>
      </section>
    </SiteShell>
  ),
});
