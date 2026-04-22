import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Home,
  Building2,
  Sparkles,
  Layers,
  ShieldCheck,
  Sun,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { FaqSection } from "@/components/site/FaqSection";
import { HighlightMarquee } from "@/components/site/HighlightMarquee";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/service-window-cleaning.jpg";
import beforeImg from "@/assets/work/work-windows-before.jpg";
import afterImg from "@/assets/work/work-windows-after.jpg";

const slug = "window-cleaning";
const title = "Window Cleaning";
const intro =
  "LumiView provides detail-focused window cleaning for homes, storefronts, offices, and managed properties across Avon and Northeast Ohio, purified water, professional squeegee technique, no streaks, no residue.";

const TIERS = [
  {
    icon: Home,
    eyebrow: "Residential",
    title: "Home window cleaning",
    body: "Clearer views, brighter interiors, and a cleaner exterior presentation for homes and residential properties.",
    items: ["Interior glass cleaning", "Exterior glass cleaning", "Screen cleaning", "Track and frame detailing"],
  },
  {
    icon: Building2,
    eyebrow: "Commercial",
    title: "Storefront and office glass care",
    body: "Reliable support for businesses that want a stronger first impression and a more polished customer-facing environment.",
    items: ["Storefront doors and sidelights", "Front-facing office glass", "Recurring service scheduling", "Presentation-focused maintenance"],
  },
  {
    icon: Sparkles,
    eyebrow: "Detail Work",
    title: "Hard water and specialty glass",
    body: "Additional detail work for mineral buildup, shower glass, mirrors, and interior glass surfaces that need extra attention.",
    items: ["Hard water stain treatment", "Shower glass detail cleaning", "Mirrors and interior partitions", "Display and presentation glass"],
  },
];

const FEATURES = [
  {
    icon: Layers,
    title: "Core window cleaning",
    body: "Built around the essentials most residential and commercial properties need for cleaner glass and a better overall finish.",
    items: ["Interior windows", "Exterior windows", "Screen cleaning", "Track cleaning", "Frame cleaning"],
  },
  {
    icon: Building2,
    title: "Storefront & entry glass",
    body: "For businesses and customer-facing properties that want a sharper first impression at the door.",
    items: ["Storefront glass", "Glass doors & sidelights", "Vestibule & entry panels", "Recurring weekly routes"],
  },
  {
    icon: Sparkles,
    title: "Glass restoration & detail work",
    body: "For glass surfaces that need more than a standard maintenance clean.",
    items: ["Hard water stain removal", "Decal, sticker & paint removal", "Walk-in shower glass", "Mirrors", "Display & light fixture glass"],
  },
  {
    icon: ShieldCheck,
    title: "Safety & screen detail",
    body: "Keeping the surrounding presentation as clean as the glass itself.",
    items: ["Screen wash & rehang", "Sill & track detailing", "Cobweb & dust removal", "Safety-first ladder & pole work"],
  },
  {
    icon: Sun,
    title: "Skylights & high glass",
    body: "Specialty access for elevated and angled glass that's normally out of reach.",
    items: ["Residential skylights", "Atrium & cathedral glass", "Second & third-story exteriors", "Water-fed pole technique"],
  },
  {
    icon: Star,
    title: "Exterior presentation support",
    body: "Useful add-ons that round out the finish around the windows themselves.",
    items: ["Awning wipe-down", "Spider web removal", "Frame & casing detail", "Light fixture cleaning"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Request a quote",
    body: "Share the property type, location, timing, and the kind of window cleaning support you need. Most quotes go back inside 24 hours.",
  },
  {
    step: "02",
    title: "Confirm the scope",
    body: "We review glass count, access conditions, recurring-service interest, and any detail concerns like staining or heavy buildup.",
  },
  {
    step: "03",
    title: "Schedule the service",
    body: "Once approved, we book a one-time visit or set up a recurring plan that fits the property's rhythm.",
  },
];

const FAQS = [
  { q: "How often should windows be cleaned?", a: "Most homes benefit from twice yearly (spring and fall). Storefronts often run weekly or biweekly to maintain a polished appearance. Lakeside and tree-lined properties may want quarterly service." },
  { q: "Do you clean both interior and exterior?", a: "Yes, interior and exterior are included by default. You can request exterior-only if preferred, which is common for second-story homes." },
  { q: "What method do you use?", a: "Purified (deionized) water with professional squeegee technique on most glass, plus water-fed poles for elevated and hard-to-reach panels. No soap residue, no spotting." },
  { q: "Can you remove hard water stains?", a: "Yes. We assess the severity first, light mineral haze typically restores to clear, while deeply etched glass may require multiple treatments. We'll set expectations honestly before starting." },
  { q: "Are screens and tracks included?", a: "Screens are washed and rehung on full-service cleans. Tracks and sills are wiped down as part of the standard scope." },
  { q: "Are you insured?", a: "Yes, fully insured with general liability and workers' comp. Certificates of insurance available on request, with property managers added as additional insured if needed." },
  { q: "Do you service commercial storefronts on a route?", a: "Yes. Weekly and biweekly storefront routes are a core part of what we do across Avon, Westlake, Rocky River, and Lakewood." },
];

export const Route = createFileRoute("/services/window-cleaning")({
  head: () => ({
    ...buildSeo({
      title: `${title} in Avon & Northeast Ohio`,
      description: intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [
      jsonLdScript(serviceJsonLd(title, intro, slug)),
      jsonLdScript(faqJsonLd(FAQS)),
    ],
  }),
  component: WindowCleaningPage,
});

function WindowCleaningPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Window Cleaning • Residential & Commercial"
        title="Window cleaning for homes, storefronts, offices and managed properties."
        description={intro}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: title },
        ]}
        image={heroImg}
      />

      {/* Quick highlights marquee */}
      <HighlightMarquee
        items={[
          "One-time or recurring scheduling",
          "Residential + commercial support",
          `${SITE.rating.value}★ on Google`,
          "24-hour quote response",
          "Purified-water exterior cleaning",
          "Streak-free, residue-free finish",
          "Fully insured + bonded crews",
          "Free written estimates",
        ]}
      />

      {/* Service tiers */}
      <section className="container-prose py-20 lg:py-28">
        <div className="mb-14 max-w-3xl">
          <div className="eyebrow">Window Cleaning Services</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
            Professional glass care, with options that fit how the property is used.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            From homes and shower glass to storefront entry systems and customer-facing office glass,
            LumiView keeps the scope clear and the finish presentation-ready.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-elegant"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="eyebrow mt-6 text-accent">{t.eyebrow}</div>
                <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-deep">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                <ul className="mt-5 space-y-2">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complete features grid */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-20 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <div className="eyebrow">Complete Window Cleaning Features</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              The full glass-care toolkit, combined into one clear plan.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Some properties only need standard interior and exterior cleaning. Others want a broader scope, screens, tracks, frames, shower glass, storefront presentation, web removal, and more. We combine
              the right services into a single visit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-elegant"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-navy-deep">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-foreground/85">
                    {f.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / after proof */}
      <section className="container-prose py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">The Result</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              A finish that looks more open, polished, and cared for.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Clean glass is one of the fastest ways to improve how a space feels, from the inside and from
              the curb. Hard-water haze, exterior pollen, and storefront fingerprints all disappear in a
              single visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/our-work">
                  See more before & after <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                <Link to="/quote">Get my quote</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeSrc={beforeImg}
              afterSrc={afterImg}
              alt="Before and after window cleaning by LumiView Services"
              className="overflow-hidden rounded-2xl border border-border shadow-elegant"
            />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Drag the slider to compare before and after.
            </p>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-20 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="eyebrow">Who We Serve</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              Window cleaning built for the way each property needs to show up.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { to: "/industries/residential", eyebrow: "Residential Properties", title: "Homes & multi-unit residential", body: "For homeowners that want cleaner views, brighter rooms, and a more polished exterior appearance." },
              { to: "/industries/commercial", eyebrow: "Commercial Properties", title: "Storefronts, offices & customer-facing spaces", body: "For businesses that care about first impressions and glass that supports a professional brand image." },
              { to: "/industries/property-managers", eyebrow: "Managed Properties", title: "Property managers & recurring care plans", body: "For properties that need scheduled support, dependable communication, and window cleaning inside a broader care plan." },
            ].map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="eyebrow text-accent">{s.eyebrow}</div>
                <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-navy-deep">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-prose py-20 lg:py-28">
        <div className="mb-14 max-w-3xl">
          <div className="eyebrow">Our Process</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
            A simple path from inquiry to cleaner glass.
          </h2>
        </div>
        <ol className="grid gap-8 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <li key={p.step} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="font-serif text-5xl font-semibold text-accent">{p.step}</div>
              <h3 className="mt-4 font-serif text-xl font-medium text-navy-deep">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service area strip */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow">Service Area</div>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-navy-deep lg:text-4xl">
                Serving Avon and nearby Northeast Ohio communities.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Window cleaning quotes are based on property type, glass count, and access, call us or
                request one online and we'll respond inside 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link to="/quote">Start your quote</Link>
                </Button>
                <a
                  href={SITE.phoneLink}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-navy-deep hover:border-accent hover:text-accent"
                >
                  <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <ul className="grid gap-2 text-sm text-foreground/85 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {SITE.primaryAreas.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} title="Window cleaning questions" />
      <CTABand title="Ready for cleaner, brighter windows?" />
    </SiteShell>
  );
}
