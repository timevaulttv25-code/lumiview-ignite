import { CheckCircle2 } from "lucide-react";

/**
 * Smooth left-scrolling marquee for service/industry hero highlight bars.
 * - Duplicates the list for seamless looping
 * - Pauses on hover, respects prefers-reduced-motion (handled via .animate-marquee in styles.css)
 * - aria-hidden on the duplicate so screen readers only announce the list once
 */
export function HighlightMarquee({ items }: { items: string[] }) {
  return (
    <section
      className="border-b border-border bg-secondary/30"
      aria-label="Service highlights"
    >
      <div
        className="group relative overflow-hidden py-5"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...items, ...items].map((h, i) => (
            <div
              key={`${h}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-foreground"
              aria-hidden={i >= items.length ? "true" : undefined}
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="whitespace-nowrap">{h}</span>
              <span
                className="ml-10 h-1 w-1 rounded-full bg-accent/40"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
