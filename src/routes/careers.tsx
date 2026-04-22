import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { buildSeo } from "@/lib/seo";
import { CheckCircle2, Heart, TrendingUp, Users } from "lucide-react";

const VALUES = [
  {
    icon: CheckCircle2,
    title: "Show up & follow through",
    body: "On time, in uniform, with a plan. We do what we said we'd do — every visit, every property.",
  },
  {
    icon: Heart,
    title: "Respect the property",
    body: "Every home or building we touch belongs to someone proud of it. We treat it that way.",
  },
  {
    icon: TrendingUp,
    title: "Grow with us",
    body: "Hourly raises tied to skill, paid training, and a clear path from technician to crew lead.",
  },
  {
    icon: Users,
    title: "Crew over ego",
    body: "We hire kind, coachable people. Drama-free crews stay together — and our customers feel it.",
  },
];

const OPEN_ROLES = [
  {
    title: "Window Cleaning Technician",
    type: "Full-time · Avon, OH",
    pay: "$18–$24 / hr + tips",
    summary:
      "Residential and light commercial window cleaning across Northeast Ohio. Paid training, no nights, weekends optional.",
  },
  {
    title: "Pressure Washing Crew Member",
    type: "Full-time · Seasonal-to-permanent",
    pay: "$19–$26 / hr + bonuses",
    summary:
      "Soft-wash and surface cleaning on residential and commercial properties. Comfortable on ladders and lifts a plus.",
  },
  {
    title: "Janitorial Team Member",
    type: "Part-time · Evenings",
    pay: "$17–$21 / hr",
    summary:
      "Recurring office and facility cleaning routes. Consistent schedule, same buildings each week, mileage paid.",
  },
  {
    title: "Crew Lead",
    type: "Full-time · Year-round",
    pay: "$26–$32 / hr + production bonus",
    summary:
      "Lead a 2–3 person crew, manage the daily route, train new technicians. Promoted from within preferred.",
  },
];

const PERKS = [
  "Paid training — no experience required for entry roles",
  "Company-supplied uniforms, equipment, and PPE",
  "Weekly pay via direct deposit",
  "Paid time off after 90 days",
  "Performance bonuses on quality reviews and tips",
  "Mileage reimbursement for personal-vehicle travel",
  "Clear promotion path — Technician → Senior Tech → Crew Lead",
  "Drug-free, drama-free workplace",
];

export const Route = createFileRoute("/careers")({
  head: () =>
    buildSeo({
      title: "Careers at LumiView Services",
      description:
        "Join a Northeast Ohio property-care team that pays well, trains thoroughly, and treats people right. Open roles in window cleaning, pressure washing, janitorial, and crew leadership.",
      path: "/careers",
    }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        title="Build a career, not just a job."
        description="LumiView is hiring kind, dependable people who take pride in their work. Paid training, real growth, and a crew you'll actually like working with."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Careers" },
        ]}
      />

      <section className="container-prose py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">Why LumiView</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            Hard work deserves a serious team behind it.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We built LumiView because we wanted to work somewhere that paid fairly,
            communicated clearly, and respected the people doing the work. If that
            sounds like the kind of place you'd want to spend your week, we should talk.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <v.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-serif text-xl font-medium">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="container-prose">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow">Open roles</div>
              <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
                We're hiring.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Don't see a perfect fit? We hire year-round and grow into new roles often. Send your info and we'll keep you in mind.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {OPEN_ROLES.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-background p-7 shadow-soft">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl font-medium">{r.title}</h3>
                  <span className="text-sm font-semibold text-accent">{r.pay}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{r.type}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
                <Button asChild variant="outline" size="sm" className="mt-5 rounded-full">
                  <Link to="/contact">Apply for this role</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose grid gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="eyebrow">Pay & perks</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            What you get with the job.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Competitive pay is the floor — not the ceiling. Here's what comes with the role.
          </p>
        </div>
        <ul className="space-y-3">
          {PERKS.map((p) => (
            <li key={p} className="flex items-start gap-3 text-foreground/90">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTABand
        eyebrow="Ready to apply?"
        title="Send us a quick hello."
        body="No formal resume needed for entry roles. Tell us a little about yourself and we'll be in touch within two business days."
      />
    </SiteShell>
  ),
});
