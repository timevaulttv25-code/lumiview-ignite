import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Clock, Star, CheckCircle2, Phone, Sparkles } from "lucide-react";

import heroImg from "@/assets/hero-window-cleaner.jpg";
import ogImg from "@/assets/og-default.jpg";
import windowImg from "@/assets/service-window-cleaning.jpg";
import pressureImg from "@/assets/service-pressure-washing.jpg";
import janitorialImg from "@/assets/service-janitorial.jpg";
import propertyImg from "@/assets/service-property-care.jpg";
import commercialImg from "@/assets/industry-commercial.jpg";
import residentialImg from "@/assets/industry-residential.jpg";
import propertyMgrImg from "@/assets/industry-property-managers.jpg";
import airbnbImg from "@/assets/service-airbnb-turnover.jpg";

import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/CTABand";
import { FaqSection } from "@/components/site/FaqSection";
import { ClientLogos } from "@/components/site/ClientLogos";
import { ServiceAreaMap } from "@/components/site/ServiceAreaMap";
import { SITE, SERVICES, INDUSTRIES, CITIES } from "@/lib/site";
import { buildSeo, faqJsonLd, jsonLdScript, localBusinessJsonLd } from "@/lib/seo";

const FAQS = [
  { q: "How quickly can you respond to a quote request?", a: "We respond to all inquiries within 24 hours, often the same business day. For urgent commercial or property-management needs, call us directly at " + SITE.phoneDisplay + " for same-day scheduling when available." },
  { q: "Do you serve my area in Northeast Ohio?", a: "We serve Avon, Avon Lake, Westlake, Lakewood, Rocky River, North Olmsted, Bay Village, North Ridgeville, Strongsville, Berea, Elyria, Lorain, and many surrounding communities. If you're nearby and unsure, give us a call — we're happy to confirm coverage." },
  { q: "Are you fully insured?", a: "Yes. LumiView carries full general liability and workers' compensation insurance. Certificates of insurance are available on request for property managers and commercial clients." },
  { q: "Do I need to be home during service?", a: "In most cases, no. We coordinate access in advance — driveway, lockbox code, or property manager handoff — and complete the work professionally and securely without disturbing your day." },
  { q: "Do you offer recurring service plans?", a: "Yes. Monthly, quarterly, and seasonal plans are available for both residential and commercial properties, with priority scheduling and consistent crews." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, ACH bank transfer, and check. Commercial accounts can be invoiced on net-15 or net-30 terms." },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildSeo({
      title: `${SITE.name} | Window Cleaning, Pressure Washing & Property Care in Avon, OH`,
      description:
        "Premium window cleaning, pressure washing, janitorial and property-care services for homes, businesses and managed properties across Avon and Northeast Ohio. 24-hour response · 4.9★ rated · fully insured.",
      path: "/",
      image: `${SITE.url}${ogImg}`,
    }),
    scripts: [
      jsonLdScript(localBusinessJsonLd()),
      jsonLdScript(faqJsonLd(FAQS as unknown as { q: string; a: string }[])),
    ],
  }),
  component: HomePage,
});

const TRUST = [
  { icon: Clock, label: "24-hour response" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Star, label: "4.9★ on Google" },
  { icon: CheckCircle2, label: "Free estimates" },
] as const;

const WHY = [
  { title: "Reliable scheduling", body: "We arrive on time and complete work as promised. Plan your week — and your property's upkeep — with confidence." },
  { title: "Clear communication", body: "You know what to expect and when. Straightforward updates from quote to completion, no guesswork." },
  { title: "Professional presentation", body: "Uniformed crews, clean equipment, and a finish that reflects well on your home or business." },
  { title: "Attention to detail", body: "From glass clarity to surface finish, every service is performed with care for the small things." },
  { title: "Residential & commercial fluency", body: "Single-family homes, storefronts, multi-unit portfolios — the same standard, adapted to context." },
  { title: "Consistent quality", body: "One-time or recurring, you get the same dependable result every visit." },
] as const;

const PROCESS = [
  { n: "01", title: "Tell us about your property", body: "Share your location, property type, and the services you're considering — online or by phone." },
  { n: "02", title: "We review the scope", body: "We confirm details, recommend the right approach, and follow up with a clear, written estimate." },
  { n: "03", title: "Enjoy a better-presented property", body: "Our crew completes the work with care. You'll see the difference the moment we leave." },
] as const;

const TESTIMONIALS = [
  { name: "James L.", role: "Property Owner & Airbnb Host", quote: "They've been consistent and dependable across multiple units. Communication is clear, and the results are always solid." },
  { name: "Sarah M.", role: "Homeowner, Westlake", quote: "LumiView did an excellent job on our windows and exterior cleaning. Everything looked noticeably better right away." },
  { name: "David R.", role: "Business Owner, Rocky River", quote: "Reliable, professional, and easy to work with. Our storefront always looks clean and well-presented after each visit." },
] as const;

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-prose grid gap-12 pb-16 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-6 lg:pt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Residential & commercial property care · Avon, OH
            </div>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-balance text-navy-deep sm:text-6xl lg:text-[5rem]">
              Windows that disappear.{" "}
              <span className="italic text-navy-deep">
                Properties that{" "}
                <span className="rounded-lg bg-accent/15 px-2 py-0.5 font-semibold not-italic text-accent">
                  shine
                </span>
                .
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Premium window cleaning, pressure washing and property care for homes,
              storefronts and managed properties across Avon and Northeast Ohio.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-7 text-base">
                <Link to="/quote">
                  Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-navy-deep hover:bg-muted"
              >
                <Phone className="h-4 w-4 text-accent" /> {SITE.phoneDisplay}
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
              {TRUST.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="animate-trust-pop flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-accent/5"
                  style={{ animationDelay: `${120 + i * 110}ms` }}
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  <dt className="text-xs font-medium text-foreground/85">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <ClientLogos />

      {/* WHY */}
      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="container-prose">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="eyebrow text-accent">Why LumiView</div>
              <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
                The standard your property deserves.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Clean windows, cared-for exteriors and well-kept interiors do more
                than improve appearance. They protect first impressions, lengthen
                the life of your finishes, and signal to everyone who walks by that
                this property is looked after.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {WHY.map((w) => (
                  <div key={w.title} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-soft">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h3 className="mt-3 font-serif text-xl font-medium">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-prose py-20 lg:py-28">
        <div className="flex flex-col items-end justify-between gap-6 lg:flex-row">
          <div className="max-w-2xl">
            <div className="eyebrow text-accent">Services</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
              Professional cleaning &amp; property-care services
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-navy-deep hover:text-accent">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { ...SERVICES[0], img: windowImg },
            { ...SERVICES[1], img: pressureImg },
            { ...SERVICES[2], img: janitorialImg },
            { ...SERVICES[3], img: propertyImg },
          ].map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-medium leading-tight">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-border bg-navy-deep py-20 text-ivory lg:py-28">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="eyebrow text-accent">Industries</div>
              <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
                Care tailored to every type of property.
              </h2>
              <p className="mt-5 max-w-md text-ivory/70">
                Single homes to multi-property portfolios — the same standard, adapted to context.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-2xl bg-ivory/10">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    className="group flex items-center justify-between gap-6 bg-navy-deep p-6 transition-colors hover:bg-navy lg:p-8"
                  >
                    <div>
                      <h3 className="font-serif text-2xl font-medium">{ind.title}</h3>
                      <p className="mt-1 text-sm text-ivory/65">{ind.short}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-prose py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow text-accent">How it works</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            Simple. Clear. Reliable.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <div key={p.n} className="relative">
              <div className="font-serif text-7xl font-light text-accent/40">{p.n}</div>
              <div className="mt-3 h-px gold-rule" />
              <h3 className="mt-5 font-serif text-2xl font-medium">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.body}</p>
              {i < PROCESS.length - 1 && (
                <ArrowRight className="absolute right-0 top-8 hidden h-5 w-5 text-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow text-accent">Reviews</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
              Trusted by homeowners, businesses &amp; property managers.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-1 text-sm font-semibold text-navy-deep hover:text-accent">
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="container-prose py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow text-accent">Service areas</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            Serving Avon &amp; <span className="brand-gradient-text">Northeast Ohio</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Local crews across {CITIES.length}+ communities including {CITIES.slice(0, 7).map((c) => c.name).join(", ")} and many more across Northeast Ohio.
          </p>
          <Button asChild variant="outline" className="mt-6 rounded-full">
            <Link to="/service-areas">View all service areas <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-12">
          <ServiceAreaMap compact />
        </div>
      </section>

      <FaqSection items={FAQS as unknown as { q: string; a: string }[]} />

      <CTABand
        title="Let's talk about your property."
        body="Tell us a few details and we'll follow up within 24 hours with clear next steps for residential or commercial service across Avon and nearby Northeast Ohio."
      />
    </SiteShell>
  );
}

const HERO_SLIDES = [
  { src: heroImg, label: "Window Cleaning", sub: "Streak-free clarity" },
  { src: pressureImg, label: "Pressure Washing", sub: "Driveways, siding & patios" },
  { src: commercialImg, label: "Commercial", sub: "Storefronts & offices" },
  { src: residentialImg, label: "Residential", sub: "Homes across NE Ohio" },
  { src: propertyMgrImg, label: "Property Managers", sub: "Multi-unit portfolios" },
  { src: airbnbImg, label: "Airbnb & VRBO", sub: "Turnover-ready" },
  { src: janitorialImg, label: "Janitorial", sub: "Interior care" },
  { src: propertyImg, label: "Property Care", sub: "Year-round upkeep" },
] as const;

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl shadow-elegant">
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[640px]">
          {HERO_SLIDES.map((slide, i) => (
            <img
              key={slide.label}
              src={slide.src}
              alt={slide.label}
              width={1920}
              height={1080}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
                i === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}

          {/* Caption */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent p-6 lg:p-8">
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={slide.label}
                className={`transition-all duration-700 ${
                  i === index ? "opacity-100 translate-y-0" : "absolute opacity-0 translate-y-3"
                }`}
              >
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {slide.sub}
                </div>
                <div className="mt-1 font-serif text-2xl font-medium text-ivory lg:text-3xl">
                  {slide.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute right-4 top-4 flex gap-1.5 rounded-full bg-navy-deep/40 px-2.5 py-1.5 backdrop-blur-sm">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              aria-label={`Show ${slide.label}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-accent" : "w-1.5 bg-ivory/60 hover:bg-ivory"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rating card */}
      <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-elegant sm:block lg:left-auto lg:right-6">
        <div className="flex items-center gap-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <div className="text-sm font-semibold">{SITE.rating.value} on Google</div>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          Based on {SITE.rating.count}+ verified reviews
        </div>
      </div>
    </div>
  );
}
