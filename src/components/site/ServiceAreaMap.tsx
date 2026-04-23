import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { CITIES, SITE } from "@/lib/site";
import { PhoneDisplay } from "@/components/site/PhoneDisplay";

type CityLike = { slug: string; name: string; zip: string; lat: number; lng: number };

/**
 * Embedded interactive service-area map.
 * - Renders an OpenStreetMap iframe centered on the active city.
 * - When `interactive`, clicking a city pill moves the marker to that city.
 * - When `pillsAsLinks`, pills also navigate to the city detail page.
 * - When `activeCitySlug` is provided (e.g. on a city page), the map starts there.
 */
export function ServiceAreaMap({
  title = "Where we work",
  subtitle = "Tap a city to move the pin and explore that area.",
  compact = false,
  interactive = false,
  activeCitySlug,
  pillsAsLinks = false,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  interactive?: boolean;
  activeCitySlug?: string;
  pillsAsLinks?: boolean;
}) {
  const cities = CITIES as ReadonlyArray<CityLike>;
  const initialSlug =
    activeCitySlug && cities.find((c) => c.slug === activeCitySlug)
      ? activeCitySlug
      : "avon";
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);
  const [mapActive, setMapActive] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const mapWrapRef = useRef<HTMLDivElement | null>(null);
  const active = cities.find((c) => c.slug === selectedSlug) ?? cities[0];

  useEffect(() => {
    if (mapVisible || typeof IntersectionObserver === "undefined") return;
    const el = mapWrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMapVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mapVisible]);

  const lat = active?.lat ?? SITE.geo.lat;
  const lng = active?.lng ?? SITE.geo.lng;

  // ~0.18° box around the marker keeps the city framed nicely.
  const d = 0.18;
  const bbox = `${lng - d},${lat - d},${lng + d},${lat + d}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const externalMap = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=12/${lat}/${lng}`;

  return (
    <section
      className={
        compact
          ? "container-prose py-12"
          : "border-y border-border bg-secondary/40 py-20 lg:py-24"
      }
    >
      <div className={compact ? "" : "container-prose"}>
        {!compact && (
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow text-accent">Service area</div>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-balance text-navy-deep lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground">{subtitle}</p>
          </div>
        )}

        <div className={`${compact ? "mt-3" : "mt-10"} overflow-hidden rounded-2xl border border-border shadow-soft`}>
          <div className="relative" ref={mapWrapRef} onMouseLeave={() => setMapActive(false)}>
            {mapVisible ? (
              <iframe
                key={`${lat},${lng}`}
                title={`${SITE.name} service area map, ${active?.name ?? "Avon"}`}
                src={mapSrc}
                loading="lazy"
                className={`h-[420px] w-full bg-muted ${mapActive ? "" : "pointer-events-none"}`}
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-[420px] w-full bg-muted" aria-hidden="true" />
            )}
            {!mapActive && (
              <button
                type="button"
                onClick={() => setMapActive(true)}
                aria-label="Activate map, click to enable scrolling and zooming"
                className="absolute inset-0 flex items-end justify-center bg-transparent pb-6 text-xs font-semibold text-navy-deep transition-colors hover:bg-navy-deep/5"
              >
                <span className="rounded-full bg-background/95 px-4 py-2 shadow-soft">
                  Click to interact with the map
                </span>
              </button>
            )}
            <a
              href={externalMap}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-navy-deep shadow-soft hover:text-accent"
            >
              View larger map ↗
            </a>
          </div>

          <div className="border-t border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {interactive ? "Select your city" : "Primary cities"}
              </span>
              {cities.map((c) => {
                const isActive = c.slug === selectedSlug;
                const base =
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors";
                const styles = isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-secondary/60 text-foreground/80 hover:border-accent hover:text-accent";

                if (pillsAsLinks) {
                  return (
                    <Link
                      key={c.slug}
                      to="/service-areas/$slug"
                      params={{ slug: c.slug }}
                      onMouseEnter={() => interactive && setSelectedSlug(c.slug)}
                      onFocus={() => interactive && setSelectedSlug(c.slug)}
                      className={`${base} ${styles}`}
                    >
                      {c.name}
                    </Link>
                  );
                }
                if (interactive) {
                  return (
                    <button
                      key={c.slug}
                      type="button"
                      onClick={() => setSelectedSlug(c.slug)}
                      className={`${base} ${styles}`}
                    >
                      {c.name}
                    </button>
                  );
                }
                return (
                  <span key={c.slug} className={`${base} ${styles}`}>
                    {c.name}
                  </span>
                );
              })}
            </div>

            {interactive && active && (
              <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                Showing <span className="font-semibold text-navy-deep">{active.name}</span> · ZIP {active.zip}
              </div>
            )}
          </div>
        </div>

        {!compact && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&rsquo;t see your town? Call{" "}
            <a href={SITE.phoneLink} className="font-semibold text-accent hover:underline">
              <PhoneDisplay />
            </a>{" "}, we&rsquo;re happy to confirm coverage.
          </p>
        )}
      </div>
    </section>
  );
}
