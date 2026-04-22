import client1 from "@/assets/clients/client-1.png";
import client2 from "@/assets/clients/client-2.png";
import client3 from "@/assets/clients/client-3.png";
import client4 from "@/assets/clients/client-4.png";
import client5 from "@/assets/clients/client-5.png";
import client6 from "@/assets/clients/client-6.png";
import client7 from "@/assets/clients/client-7.png";
import client8 from "@/assets/clients/client-8.png";

/**
 * Add or remove logos here, the marquee adapts automatically.
 * Use square or wide PNGs with transparent background for best results.
 */
const LOGOS: { src: string; name: string }[] = [
  { src: client1, name: "Lakewood Realty" },
  { src: client2, name: "Northcoast Properties" },
  { src: client3, name: "Avon Plaza" },
  { src: client4, name: "Westshore Builders" },
  { src: client5, name: "Bright Path Daycare" },
  { src: client6, name: "Harborview Stays" },
  { src: client7, name: "Maple Ridge HOA" },
  { src: client8, name: "Crestwood Office Park" },
];

export function ClientLogos({
  eyebrow = "Trusted by",
  title = "Property owners and operators across Northeast Ohio.",
}: { eyebrow?: string; title?: string }) {
  // Duplicate the list so the marquee can loop seamlessly
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-border bg-secondary/40 py-16 lg:py-20">
      <div className="container-prose text-center">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-2xl font-medium tracking-tight text-balance text-navy-deep lg:text-3xl">
          {title}
        </h2>
      </div>

      <div
        className="group relative mt-10 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="mx-auto flex w-max animate-marquee items-center justify-center gap-24 will-change-transform group-hover:[animation-play-state:paused]">
          {loop.map((l, i) => (
            <div
              key={`${l.name}-${i}`}
              className="flex h-32 w-56 shrink-0 items-center justify-center"
              aria-hidden={i >= LOGOS.length}
            >
              <img
                src={l.src}
                alt={i < LOGOS.length ? l.name : ""}
                className="h-full w-full object-contain opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                width={224}
                height={128}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
