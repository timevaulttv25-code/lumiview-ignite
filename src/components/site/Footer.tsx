import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, SERVICES, CITIES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="navy-gradient mt-24 text-ivory">
      <div className="container-prose grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <img
            src={new URL("../../assets/lumiview-logo.png", import.meta.url).href}
            alt={SITE.name}
            className="h-10 w-auto brightness-0 invert"
            width={220}
            height={40}
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
            Premium window cleaning, pressure washing and property care for homes,
            businesses and managed properties across Avon and Northeast Ohio.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={SITE.phoneLink} className="flex items-center gap-2.5 text-ivory hover:text-accent">
              <Phone className="h-4 w-4 text-accent" /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-ivory hover:text-accent">
              <Mail className="h-4 w-4 text-accent" /> {SITE.email}
            </a>
            <div className="flex items-center gap-2.5 text-ivory/80">
              <MapPin className="h-4 w-4 text-accent" /> {SITE.address.city}, {SITE.address.region}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="eyebrow text-ivory/60">Services</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-ivory/85 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="eyebrow text-ivory/60">Service Areas</div>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to="/service-areas/$slug" params={{ slug: c.slug }} className="text-ivory/85 hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="text-accent hover:underline">All areas →</Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="eyebrow text-ivory/60">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-ivory/85 hover:text-accent">About LumiView</Link></li>
            <li><Link to="/reviews" className="text-ivory/85 hover:text-accent">Customer Reviews</Link></li>
            <li><Link to="/blog" className="text-ivory/85 hover:text-accent">Insights & Guides</Link></li>
            <li><Link to="/quote" className="text-ivory/85 hover:text-accent">Request a Quote</Link></li>
            <li><Link to="/contact" className="text-ivory/85 hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-ivory/55 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved. Fully insured.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent">Privacy</Link>
            <Link to="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
