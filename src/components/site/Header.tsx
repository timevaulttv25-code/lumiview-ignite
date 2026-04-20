import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-navy-deep">
            Lumi<span className="text-accent">View</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneLink}
            className="flex items-center gap-2 text-sm font-semibold text-navy-deep"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Button asChild variant="default" size="sm" className="rounded-full px-5">
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
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
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
