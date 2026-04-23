import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Star, MapPinned } from "lucide-react";
import { SITE, SERVICES, CITIES } from "@/lib/site";
import logo from "@/assets/lumiview-logo.png";

export function Footer() {
  return (
    <footer className="navy-gradient mt-24 text-ivory">
      <div className="container-prose grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link to="/" aria-label={`${SITE.name} home`} className="inline-flex items-center">
            <img
              src={logo}
              alt={SITE.name}
              className="h-11 w-auto"
              width={220}
              height={44}
            />
          </Link>
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

          <div className="mt-6">
            <div className="eyebrow text-ivory/60">Follow & Review</div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href={SITE.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leave a Google review"
                className="review-btn-dark px-3.5 py-1.5 text-xs font-semibold"
              >
                <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                {SITE.rating.value}★ Google Reviews
              </a>
              <a
                href={SITE.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumiView on Google Maps"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-accent hover:bg-accent/15 hover:text-accent"
              >
                <MapPinned className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumiView on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-accent hover:bg-accent/15 hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumiView on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-accent hover:bg-accent/15 hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="eyebrow text-ivory/60">Services</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-ivory/85 hover:text-accent">
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

          <div className="mt-8">
            <div className="eyebrow text-ivory/60">Hours</div>
            <ul className="mt-3 space-y-1.5 text-sm text-ivory/80">
              {SITE.hoursDisplay.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-ivory/65">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="eyebrow text-ivory/60">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-ivory/85 hover:text-accent">About LumiView</Link></li>
            <li><Link to="/giving-back" className="text-ivory/85 hover:text-accent">Giving Back</Link></li>
            <li><Link to="/careers" className="text-ivory/85 hover:text-accent">Careers</Link></li>
            <li><Link to="/our-work" className="text-ivory/85 hover:text-accent">Our Work (Before & After)</Link></li>
            <li><Link to="/case-studies" className="text-ivory/85 hover:text-accent">Case Studies</Link></li>
            <li><Link to="/reviews" className="text-ivory/85 hover:text-accent">Customer Reviews</Link></li>
            <li><Link to="/blog" className="text-ivory/85 hover:text-accent">Insights & Guides</Link></li>
            <li><Link to="/faq" className="text-ivory/85 hover:text-accent">FAQ</Link></li>
            <li><Link to="/partner" className="text-ivory/85 hover:text-accent">Partner With Us</Link></li>
            <li><Link to="/referral" className="text-ivory/85 hover:text-accent">Referral Program</Link></li>
            <li><Link to="/quote" className="text-ivory/85 hover:text-accent">Request a Quote</Link></li>
            <li><Link to="/contact" className="text-ivory/85 hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-ivory/55 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved. Fully insured.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/service-policy" className="hover:text-accent">Service Policy</Link>
            <Link to="/privacy" className="hover:text-accent">Privacy</Link>
            <Link to="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
