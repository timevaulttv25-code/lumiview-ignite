import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; to?: string }[];
  image?: string;
}) {
  // Auto-emit BreadcrumbList JSON-LD when breadcrumbs are provided (boosts SERP rich results).
  const breadcrumbLd = breadcrumbs && breadcrumbs.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      ...(b.to ? { item: `${SITE.url}${b.to}` } : {}),
    })),
  } : null;

  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      <div className="container-prose grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-1">
                  {b.to ? (
                    <Link to={b.to} className="hover:text-foreground">{b.label}</Link>
                  ) : (
                    <span className="text-foreground">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                </span>
              ))}
            </nav>
          )}
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-tight text-balance text-navy-deep lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-soft">
              <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
