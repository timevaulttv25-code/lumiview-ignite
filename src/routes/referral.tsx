import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { buildSeo } from "@/lib/seo";
import { Gift, Users, DollarSign, Sparkles } from "lucide-react";
import heroImg from "@/assets/page-referral.jpg";

const TIERS = [
  {
    icon: Gift,
    title: "$50 credit",
    sub: "per residential referral",
    body: "When a friend, family member or neighbor books any residential service of $200 or more, you get $50 off your next service. No limit, refer 10, save $500.",
  },
  {
    icon: DollarSign,
    title: "$250 cash",
    sub: "per commercial referral",
    body: "Refer a commercial property, HOA, office or retail plaza that signs a recurring contract, receive a $250 cash bonus once the first invoice is paid.",
  },
  {
    icon: Sparkles,
    title: "Unlock VIP perks",
    sub: "after 3 successful referrals",
    body: "Three successful referrals in a calendar year unlocks priority scheduling, a free annual gutter clean, and a dedicated account contact for life.",
  },
];

const HOW = [
  {
    step: "1",
    title: "Tell them about us",
    body: "Send your friend or business contact our way, text, email, social, word of mouth. They mention your name when they book.",
  },
  {
    step: "2",
    title: "We do the work",
    body: "We deliver the LumiView experience they were promised, clear quote, on-time arrival, finish you'd be proud to have referred.",
  },
  {
    step: "3",
    title: "You get rewarded",
    body: "Your credit or cash bonus is issued within 7 days of the completed first invoice. Stack as many as you want, no annual limit.",
  },
];

const RULES = [
  "Referred client must be a new LumiView customer (no prior service in the last 12 months).",
  "Residential credit applied automatically to your next service.",
  "Commercial cash bonus paid via Venmo, Zelle, ACH, or check, your choice.",
  "Referral must be named at time of booking, we can't backdate after the fact.",
  "No limit on how many friends, family or businesses you refer in a year.",
  "Stack referral credits with seasonal promotions and recurring-customer discounts.",
];

export const Route = createFileRoute("/referral")({
  head: () =>
    buildSeo({
      title: "Referral Program, Earn With LumiView",
      description:
        "Refer a friend, neighbor or business to LumiView and earn $50 in service credit or up to $250 in cash. No annual cap. Built to thank the people who built our business.",
      path: "/referral",
    }),
  component: () => (
    <SiteShell>
      <PageHero
        eyebrow="Referral Program"
        title="The best compliment is a referral."
        description="Most of LumiView's growth has come from existing customers telling someone they trust about us. This program is our thank you, every time you do it."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Referral Program" },
        ]}
      />

      <section className="container-prose py-20 lg:py-24">
        <div className="max-w-2xl">
          <div className="eyebrow">How you earn</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            Real rewards. No fine print.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Three ways to earn, pick whichever applies. Stack them as often as you want.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.title} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-elegant">
              <t.icon className="h-8 w-8 text-accent" />
              <div className="mt-5 font-serif text-4xl font-medium text-navy-deep">{t.title}</div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent">{t.sub}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="container-prose">
          <div className="max-w-2xl">
            <div className="eyebrow">How it works</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
              Three steps. That's the whole thing.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {HOW.map((h) => (
              <div key={h.step} className="rounded-2xl border border-border bg-background p-7">
                <div className="font-serif text-5xl font-medium text-accent">{h.step}</div>
                <h3 className="mt-3 font-serif text-2xl font-medium">{h.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <div className="eyebrow">The fine print (it's short)</div>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight lg:text-5xl">
            Simple, fair rules.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We wrote this program to be easy to use, not to be a riddle. If you have a
            question that isn't answered here, just ask.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full">
            <Link to="/contact">Submit a referral now</Link>
          </Button>
        </div>
        <ul className="space-y-3 lg:col-span-7">
          {RULES.map((r) => (
            <li key={r} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/85">
              <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTABand
        eyebrow="Ready to refer?"
        title="Send your first referral today."
        body="Drop their name and contact info on our contact form, or have them mention your name when they book. We'll handle the rest."
      />
    </SiteShell>
  ),
});
