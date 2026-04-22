import maximizeFitness from "@/assets/clients/maximize-fitness.png";
import coffeeTherapy from "@/assets/clients/coffee-therapy.png";
import oliveTree from "@/assets/clients/olive-tree.png";
import qahwahHouse from "@/assets/clients/qahwah-house.png";
import amanisLearning from "@/assets/clients/amanis-learning.png";
import wirelessExpress from "@/assets/clients/wireless-express.png";
import blushBeauty from "@/assets/clients/blush-beauty.png";
import perfect10Nails from "@/assets/clients/perfect-10-nails.png";
import zeinas from "@/assets/clients/zeinas.png";
import bkBarbershop from "@/assets/clients/bk-barbershop.png";
import lowcostPharmacy from "@/assets/clients/lowcost-pharmacy.png";

/**
 * Add or remove logos here, the marquee adapts automatically.
 * Use square or wide PNGs with transparent background for best results.
 */
const LOGOS: { src: string; name: string }[] = [
  { src: maximizeFitness, name: "Maximize Fitness" },
  { src: coffeeTherapy, name: "Coffee Therapy" },
  { src: oliveTree, name: "Olive Tree" },
  { src: qahwahHouse, name: "Qahwah House Coffee" },
  { src: amanisLearning, name: "Amani's Hopes & Dreams Early Learning Center" },
  { src: wirelessExpress, name: "Wireless Express" },
  { src: blushBeauty, name: "Blush Beauty & Aesthetics" },
  { src: perfect10Nails, name: "Perfect 10 Nails" },
  { src: zeinas, name: "Zeina's Frozen Yogurt & Fried Chicken" },
  { src: bkBarbershop, name: "BK Barbershop" },
  { src: lowcostPharmacy, name: "LowCost Pharmacy & Urgent Care" },
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
                className="h-full w-full object-contain opacity-95 transition duration-300 hover:opacity-100 hover:scale-105"
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
