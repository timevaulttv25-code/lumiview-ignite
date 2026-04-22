import { createFileRoute } from "@tanstack/react-router";
import { CITIES, SERVICES, INDUSTRIES, SITE } from "@/lib/site";

const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/our-work",
  "/case-studies",
  "/results",
  "/reviews",
  "/blog",
  "/service-areas",
  "/quote",
  "/contact",
  "/faq",
  "/careers",
  "/giving-back",
  "/partner",
  "/referral",
  "/privacy",
  "/terms",
  "/service-policy",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const urls: { loc: string; priority: string; changefreq: string }[] = [];

        STATIC_PATHS.forEach((p) => {
          urls.push({
            loc: `${SITE.url}${p}`,
            priority: p === "/" ? "1.0" : "0.8",
            changefreq: p === "/" ? "weekly" : "monthly",
          });
        });

        SERVICES.forEach((s) => {
          urls.push({
            loc: `${SITE.url}/services/${s.slug}`,
            priority: "0.9",
            changefreq: "monthly",
          });
        });

        INDUSTRIES.forEach((i) => {
          urls.push({
            loc: `${SITE.url}/industries/${i.slug}`,
            priority: "0.8",
            changefreq: "monthly",
          });
        });

        CITIES.forEach((c) => {
          urls.push({
            loc: `${SITE.url}/service-areas/${c.slug}`,
            priority: "0.85",
            changefreq: "monthly",
          });
        });

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
