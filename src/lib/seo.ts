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
    telephone: SITE.phoneNumeric,
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
    areaServed: SITE.primaryAreas.map((c) => ({ "@type": "City", name: c })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
    },
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

/** Organization schema, strengthens entity recognition for AI search engines. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/og-default.jpg`,
    image: `${SITE.url}/og-default.jpg`,
    telephone: SITE.phoneNumeric,
    email: SITE.email,
    sameAs: Object.values(SITE.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneLink.replace("tel:", ""),
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };
}

/** WebSite schema with SearchAction for sitelinks search box. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}#organization` },
    inLanguage: "en-US",
  };
}

/** Review collection schema for the /reviews page, boosts star-rich snippets. */
export function reviewCollectionJsonLd(
  reviews: { author: string; rating: number; body: string; date?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.body,
      ...(r.date ? { datePublished: r.date } : {}),
    })),
  };
}

/** Speakable schema, flags FAQ content for voice assistants (Google Assistant, etc.). */
export function speakableFaqJsonLd(cssSelectors: string[] = [".faq-question", ".faq-answer"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

/** Helper to inject JSON-LD as a script tag via TanStack head() scripts array. */
export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

