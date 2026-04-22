import { MapPin } from "lucide-react";
import { CITIES, SITE } from "@/lib/site";

/**
 * Embedded interactive map of LumiView's service areas.
 * Uses OpenStreetMap (no API key required) centered on Avon, OH with a marker.
 * Below the map we render a quick-jump grid of every primary city we serve.
 */
export function ServiceAreaMap({
  title = "Where we work",
  subtitle = "Local crews across Avon and Northeast Ohio. Tap a city to see services available there.",
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  /** Compact removes the heading and tightens spacing — use inside dense layouts. */
  compact?: boolean;
}) {
  const { lat, lng } = SITE.geo;
  // Bounding box around Lorain → Lakewood (covers all primary areas)
  const bbox = "-82.45,41.30,-81.70,41.60";
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const externalMap = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=11/${lat}/${lng}`;

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

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-soft">
          <div className="relative">
            <iframe
              title={`${SITE.name} service area map`}
              src={mapSrc}
              loading="lazy"
              className="h-[420px] w-full bg-muted"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={externalMap}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-navy-deep shadow-soft hover:text-accent"
            >
              View larger map ↗
            </a>
          </div>

          {/* City pills band — also serves as a visual legend of markers */}
          <div className="border-t border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Primary cities
              </span>
              {SITE.primaryAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {!compact && CITIES.length > 0 && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&rsquo;t see your town? Call{" "}
            <a href={SITE.phoneLink} className="font-semibold text-accent hover:underline">
              {SITE.phoneDisplay}
            </a>{" "}
            — we&rsquo;re happy to confirm coverage.
          </p>
        )}
      </div>
    </section>
  );
}
