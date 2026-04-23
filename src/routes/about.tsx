import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, Star, Sparkles, Heart, Handshake, Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-window-cleaner.jpg";

const STATS = [
  { value: `${SITE.rating.value}★`, label: `Across ${SITE.rating.count}+ Google reviews` },
  { value: "12,000+", label: "Windows cleaned this year" },
  { value: "450+", label: "Properties on recurring service" },
  { value: "24 hr", label: "Typical quote turnaround" },
];

const VALUES = [
  {
    icon: Clock,
    title: "Show up, on time, every time",
    body: "Confirmed appointments come with a 2-hour arrival window and a text the day before. The crew lead texts on arrival and again at completion. No silent windows. No vanishing acts.",
  },
  {
    icon: ShieldCheck,
    title: "Insured, trained, and accountable",
    body: "Full general liability and workers' comp on every job. Background-checked crews. OSHA-aligned safety. COIs sent direct to your PM, HOA, or facility department on request.",
  },
  {
    icon: Sparkles,
    title: "Detail is the whole job",
    body: "Anybody can spray a window. The difference is the frame, the sill, the screen, the corner you don't notice until somebody else does. That's the job we actually do.",
  },
  {
    icon: Heart,
    title: "Locally owned, locally invested",
    body: "Built in Avon. Run by people who live here. A portion of every invoice funds free cleanings for neighbors going through hard seasons, quietly, no marketing line item.",
  },
  {
    icon: Handshake,
    title: "Same crew, every visit",
    body: "Recurring accounts get the same lead and the same team. They learn your property, your access details, and your standards, and the quality compounds visit after visit.",
  },
  {
    icon: Star,
    title: "Backed by a real guarantee",
    body: "If something falls short of the standard set in your estimate, call within 48 hours and we'll be back to make it right, no charge, no friction, no fine print.",
  },
];

const STANDARDS = [
  "Free, written estimates returned within 24 hours",
  "Fully insured (general liability + workers' comp)",
  "Same crew lead on every recurring visit",
  "Same-day response for urgent commercial needs",
  "Transparent flat-rate pricing, no surprise charges",
  "Photo confirmation on commercial and turnover work",
  "Purified-water-fed pole system on exterior glass",
  "Soft-wash methodology on siding, paint, and roofs",
];

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeo({
      title: "About LumiView Services",
      description:
        "LumiView is a locally owned property-care company in Avon, OH. Reliable scheduling, clear communication, and a finish that reflects well on every property we touch, across Northeast Ohio.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About LumiView"
        title="Locally owned. Detail obsessed."
        description="A Northeast Ohio property-care company built on three things: showing up when promised, communicating clearly, and finishing every job to a standard the property's owner can be proud of."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* STORY + IMAGE */}
      <section className="container-prose grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <div className="eyebrow">Our story</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            We started LumiView because property care had stopped feeling personal.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Missed appointments. Unanswered calls. A different crew every visit. Quotes that
              quietly grew on the invoice. The bar in our industry had slipped to "good enough", and homeowners, business owners, and property managers were paying the price for it.
            </p>
            <p>
              We built LumiView to be the opposite of that experience. Uniformed crews who arrive
              on time. A real human who answers the phone. Estimates that match the invoice.
              Recurring accounts handled by the same lead month after month. A finish you'd notice
              the moment you walked up.
            </p>
            <p>
              Today {SITE.name} cares for hundreds of homes, storefronts, daycares, and managed
              properties across Avon, Westlake, Lakewood, Rocky River, and the rest of Northeast
              Ohio. The standard hasn't changed. Neither has the way we answer the phone.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/quote">
                Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <a href={SITE.phoneLink} className="phone-btn">
              <Phone className="h-4 w-4 text-accent" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={heroImg}
              alt="LumiView crew member servicing a Northeast Ohio home"
              className="h-[420px] w-full object-cover lg:h-[560px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40 py-16 lg:py-20">
        <div className="container-prose">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
                <div className="font-serif text-4xl font-semibold text-navy-deep lg:text-5xl">{s.value}</div>
                <div className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-prose py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">What we stand for</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            Six standards, applied to every job.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            These aren't poster phrases, they're how we hire, train, schedule, and finish every
            visit. If we ever fall short of one, we want to hear about it the same day.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-elegant">
              <v.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-xl font-medium leading-snug">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-y border-border bg-navy-deep py-20 text-ivory lg:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-accent">What you get</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
              The standard, in plain English.
            </h2>
            <p className="mt-5 text-ivory/75 leading-relaxed">
              Every quote, every visit, every invoice, measured against this list. If something on
              this page doesn't match your experience, that's on us to fix.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-7 rounded-full">
              <Link to="/service-policy">Read our full Service Policy <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <ul className="grid gap-3 lg:col-span-7 lg:grid-cols-2">
            {STANDARDS.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-xl border border-ivory/15 bg-ivory/5 p-4 text-sm text-ivory/90">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROOF / NEXT STEPS */}
      <section className="container-prose py-20 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <Link
            to="/reviews"
            className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
          >
            <Star className="h-7 w-7 fill-accent text-accent" />
            <h3 className="mt-4 font-serif text-2xl font-medium">Hear from clients</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {SITE.rating.value}★ across {SITE.rating.count}+ verified Google reviews from
              homeowners, businesses, and property managers across Northeast Ohio.
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">
              Read reviews <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link
            to="/our-work"
            className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
          >
            <Sparkles className="h-7 w-7 text-accent" />
            <h3 className="mt-4 font-serif text-2xl font-medium">See the work</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Real before-and-after photos from windows, driveways, siding, patios and storefronts
              across Avon and the surrounding communities.
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">
              View gallery <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link
            to="/giving-back"
            className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
          >
            <Heart className="h-7 w-7 text-accent" />
            <h3 className="mt-4 font-serif text-2xl font-medium">Built here, invested here</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              How we give time, services, and sponsorships back to the Northeast Ohio
              communities that built this business.
            </p>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep group-hover:text-accent">
              Giving back <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        title="Work with a team that follows through."
        body="Tell us about your property and we'll come back within 24 hours with a clear written estimate."
      />
    </SiteShell>
  );
}
