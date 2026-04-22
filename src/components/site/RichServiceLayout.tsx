import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { FaqSection } from "@/components/site/FaqSection";
import { HighlightMarquee } from "@/components/site/HighlightMarquee";
import { Button } from "@/components/ui/button";

export interface RichTier {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
}

export interface RichFeature {
  icon: LucideIcon;
  title: string;
  body: string;
  items: string[];
}

export interface RichProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface RichAudience {
  to: string;
  eyebrow: string;
  title: string;
  body: string;
}

export interface RichServiceLayoutProps {
  // Hero
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  serviceTitle: string;

  // Trust bar
  highlights: string[];

  // Tiers
  tiersEyebrow: string;
  tiersHeading: string;
  tiersIntro: string;
  tiers: RichTier[];

  // Features
  featuresEyebrow: string;
  featuresHeading: string;
  featuresIntro: string;
  features: RichFeature[];

  // Result / proof section
  resultEyebrow: string;
  resultHeading: string;
  resultBody: string;
  resultImage: string;
  resultImageAlt: string;

  // Audience
  audienceEyebrow: string;
  audienceHeading: string;
  audiences: RichAudience[];

  // Process
  processEyebrow: string;
  processHeading: string;
  process: RichProcessStep[];

  // Service area
  serviceAreaHeading: string;
  serviceAreaBody: string;

  // FAQ
  faqs: { q: string; a: string }[];
  faqTitle: string;

  // CTA band
  ctaTitle: string;
  ctaBody?: string;
}

export function RichServiceLayout(p: RichServiceLayoutProps) {
  return (
    <SiteShell>
      <PageHero
        eyebrow={p.heroEyebrow}
        title={p.heroTitle}
        description={p.heroDescription}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: p.serviceTitle },
        ]}
        image={p.heroImage}
      />

      {/* Quick highlights / trust marquee */}
      <HighlightMarquee items={p.highlights} />

      {/* Tiers */}
      <section className="container-prose py-20 lg:py-28">
        <div className="mb-14 max-w-3xl">
          <div className="eyebrow">{p.tiersEyebrow}</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
            {p.tiersHeading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.tiersIntro}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {p.tiers.map((t) => {
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
                <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-navy-deep">
                  {t.title}
                </h3>
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

      {/* Features grid */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-20 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <div className="eyebrow">{p.featuresEyebrow}</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              {p.featuresHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.featuresIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => {
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

      {/* Result / proof */}
      <section className="container-prose py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">{p.resultEyebrow}</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              {p.resultHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.resultBody}</p>
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
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={p.resultImage}
                alt={p.resultImageAlt}
                width={1280}
                height={832}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-20 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <div className="eyebrow">{p.audienceEyebrow}</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              {p.audienceHeading}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {p.audiences.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="eyebrow text-accent">{s.eyebrow}</div>
                <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-navy-deep">
                  {s.title}
                </h3>
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
          <div className="eyebrow">{p.processEyebrow}</div>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
            {p.processHeading}
          </h2>
        </div>
        <ol className="grid gap-8 lg:grid-cols-3">
          {p.process.map((s) => (
            <li key={s.step} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="font-serif text-5xl font-semibold text-accent">{s.step}</div>
              <h3 className="mt-4 font-serif text-xl font-medium text-navy-deep">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service area */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-prose py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow">Service Area</div>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-navy-deep lg:text-4xl">
                {p.serviceAreaHeading}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">{p.serviceAreaBody}</p>
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
              {SITE.primaryAreas.slice(0, 12).map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={p.faqs} title={p.faqTitle} />
      <CTABand title={p.ctaTitle} body={p.ctaBody} />
    </SiteShell>
  );
}
