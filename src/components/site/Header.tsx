import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SITE, SERVICES, INDUSTRIES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lumiview-logo.png";

const NAV: Array<{
  to: string;
  label: string;
  children?: { to: string; label: string; description?: string }[];
}> = [
  {
    to: "/services",
    label: "Services",
    children: SERVICES.map((s) => ({
      to: `/services/${s.slug}`,
      label: s.title,
      description: s.short,
    })),
  },
  {
    to: "/industries",
    label: "Industries",
    children: INDUSTRIES.map((i) => ({
      to: `/industries/${i.slug}`,
      label: i.title,
      description: i.short,
    })),
  },
  {
    to: "/results",
    label: "Results",
    children: [
      { to: "/reviews", label: "Reviews", description: `${SITE.rating.value}★ across ${SITE.rating.count}+ Google reviews.` },
      { to: "/our-work", label: "Our Work", description: "Before & after photos from real projects." },
      { to: "/case-studies", label: "Case Studies", description: "Measurable outcomes from real clients." },
    ],
  },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "Our Story", description: "Locally owned. Detail obsessed." },
      { to: "/giving-back", label: "Giving Back", description: "How we invest in Northeast Ohio." },
      { to: "/careers", label: "Careers", description: "Join a team that pays and trains right." },
      { to: "/service-areas", label: "Service Areas", description: "Cities and neighborhoods we serve." },
      { to: "/faq", label: "FAQ", description: "Pricing, scheduling, methods, and more." },
      { to: "/blog", label: "Insights & Guides", description: "Tips, seasonal advice, and how-tos." },
      { to: "/partner", label: "Partner With Us", description: "For PMs, realtors, builders, hosts." },
      { to: "/referral", label: "Referral Program", description: "Earn credit or cash for every referral." },
    ],
  },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link to="/" className="flex items-center" aria-label={`${SITE.name} home`}>
          <img
            src={logo}
            alt={SITE.name}
            className="h-9 w-auto lg:h-11"
            width={220}
            height={40}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) =>
            n.children ? (
              <div key={n.to} className="group relative">
                <Link
                  to={n.to}
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-elegant">
                    {n.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-muted"
                      >
                        <span className="text-sm font-semibold text-foreground">{c.label}</span>
                        {c.description && (
                          <span className="text-xs text-muted-foreground">{c.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={SITE.phoneLink}
            className="phone-btn-sm shrink-0 whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-12" />
            <span className="whitespace-nowrap">{SITE.phoneDisplay}</span>
          </a>
          <Button asChild variant="default" size="sm" className="whitespace-nowrap rounded-full px-5">
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {NAV.map((n) =>
              n.children ? (
                <div key={n.to}>
                  <button
                    onClick={() => setOpenSub(openSub === n.to ? null : n.to)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-muted"
                  >
                    {n.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openSub === n.to ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSub === n.to && (
                    <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
                      >
                        All {n.label}
                      </Link>
                      {n.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-muted"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-muted"
                >
                  {n.label}
                </Link>
              )
            )}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <a
                href={SITE.phoneLink}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-navy-deep"
              >
                <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
              <Button asChild className="rounded-full">
                <Link to="/quote" onClick={() => setOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
