import { SITE } from "./site";

interface SeoArgs {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

/** Build a TanStack Router head() meta array with full SEO + Open Graph + Twitter coverage. */
export function buildSeo({ title, description, path = "/", image, type = "website" }: SeoArgs) {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.shortName) ? title : `${title} | ${SITE.shortName}`;
  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  const links = [{ rel: "canonical", href: url }];
  return { meta, links };
}

/** LocalBusiness schema – use on home, contact, and city pages for AEO/voice search. */
export function localBusinessJsonLd(extra?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    image: `${SITE.url}/og-default.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHours: SITE.hoursSchema,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    },
    areaServed: SITE.primaryAreas.map((c) => ({ "@type": "City", name: c })),
    sameAs: Object.values(SITE.social),
    ...extra,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function serviceJsonLd(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE.url}/services/${slug}`,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: SITE.primaryAreas,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

/** Helper to inject JSON-LD as a script tag via TanStack head() scripts array. */
export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
