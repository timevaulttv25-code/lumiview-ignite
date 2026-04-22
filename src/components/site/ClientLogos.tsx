import { useState } from "react";
import maximizeFitness from "@/assets/clients/maximize-fitness.png";
import coffeeTherapy from "@/assets/clients/coffee-therapy.png";
import oliveTree from "@/assets/clients/olive-tree.png";
import amanisLearning from "@/assets/clients/amanis-learning.png";
import wirelessExpress from "@/assets/clients/wireless-express.png";
import blushBeauty from "@/assets/clients/blush-beauty.png";
import perfect10Nails from "@/assets/clients/perfect-10-nails.png";
import zeinas from "@/assets/clients/zeinas.png";
import bkBarbershop from "@/assets/clients/bk-barbershop.png";
import lowcostPharmacy from "@/assets/clients/lowcost-pharmacy.png";
import wcma from "@/assets/clients/wcma.png";

import maximizeFitnessBefore from "@/assets/clients/ba/maximize-fitness-before.jpg";
import maximizeFitnessAfter from "@/assets/clients/ba/maximize-fitness-after.jpg";
import coffeeTherapyBefore from "@/assets/clients/ba/coffee-therapy-before.jpg";
import coffeeTherapyAfter from "@/assets/clients/ba/coffee-therapy-after.jpg";
import oliveTreeBefore from "@/assets/clients/ba/olive-tree-before.jpg";
import oliveTreeAfter from "@/assets/clients/ba/olive-tree-after.jpg";
import amanisLearningBefore from "@/assets/clients/ba/amanis-learning-before.jpg";
import amanisLearningAfter from "@/assets/clients/ba/amanis-learning-after.jpg";
import wirelessExpressBefore from "@/assets/clients/ba/wireless-express-before.jpg";
import wirelessExpressAfter from "@/assets/clients/ba/wireless-express-after.jpg";
import blushBeautyBefore from "@/assets/clients/ba/blush-beauty-before.jpg";
import blushBeautyAfter from "@/assets/clients/ba/blush-beauty-after.jpg";
import perfect10NailsBefore from "@/assets/clients/ba/perfect-10-nails-before.jpg";
import perfect10NailsAfter from "@/assets/clients/ba/perfect-10-nails-after.jpg";
import zeinasBefore from "@/assets/clients/ba/zeinas-before.jpg";
import zeinasAfter from "@/assets/clients/ba/zeinas-after.jpg";
import bkBarbershopBefore from "@/assets/clients/ba/bk-barbershop-before.jpg";
import bkBarbershopAfter from "@/assets/clients/ba/bk-barbershop-after.jpg";
import lowcostPharmacyBefore from "@/assets/clients/ba/lowcost-pharmacy-before.jpg";
import lowcostPharmacyAfter from "@/assets/clients/ba/lowcost-pharmacy-after.jpg";
import wcmaBefore from "@/assets/clients/ba/wcma-before.jpg";
import wcmaAfter from "@/assets/clients/ba/wcma-after.jpg";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";

/**
 * Add or remove logos here, the marquee adapts automatically.
 * Use square or wide PNGs with transparent background for best results.
 */
const LOGOS: { src: string; name: string; scale?: number; before: string; after: string }[] = [
  { src: maximizeFitness, name: "Maximize Fitness", before: maximizeFitnessBefore, after: maximizeFitnessAfter },
  { src: coffeeTherapy, name: "Coffee Therapy", scale: 1.4, before: coffeeTherapyBefore, after: coffeeTherapyAfter },
  { src: oliveTree, name: "Olive Tree", scale: 1.52, before: oliveTreeBefore, after: oliveTreeAfter },
  { src: amanisLearning, name: "Amani's Hopes & Dreams Early Learning Center", before: amanisLearningBefore, after: amanisLearningAfter },
  { src: wirelessExpress, name: "Wireless Express", scale: 1.15, before: wirelessExpressBefore, after: wirelessExpressAfter },
  { src: blushBeauty, name: "Blush Beauty & Aesthetics", before: blushBeautyBefore, after: blushBeautyAfter },
  { src: perfect10Nails, name: "Perfect 10 Nails", before: perfect10NailsBefore, after: perfect10NailsAfter },
  { src: zeinas, name: "Zeina's Frozen Yogurt & Fried Chicken", before: zeinasBefore, after: zeinasAfter },
  { src: bkBarbershop, name: "BK Barbershop", scale: 1.27, before: bkBarbershopBefore, after: bkBarbershopAfter },
  { src: lowcostPharmacy, name: "LowCost Pharmacy & Urgent Care", before: lowcostPharmacyBefore, after: lowcostPharmacyAfter },
  { src: wcma, name: "West Cleveland Muslim Association", before: wcmaBefore, after: wcmaAfter },
];

export function ClientLogos({
  eyebrow = "Trusted by",
  title = "Businesses and property owners across Northeast Ohio.",
}: { eyebrow?: string; title?: string }) {
  const [selected, setSelected] = useState<typeof LOGOS[number] | null>(null);
  // Duplicate the list so the marquee can loop seamlessly
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-border bg-secondary/40 py-16 lg:py-20">
      <div className="container-prose text-center">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-2xl font-medium tracking-tight text-balance text-navy-deep lg:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Click on a logo to see before-and-after images.
        </p>
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
        <div className="mx-auto flex w-max animate-marquee items-center will-change-transform group-hover:[animation-play-state:paused]">
          {loop.map((l, i) => (
            <button
              key={`${l.name}-${i}`}
              type="button"
              onClick={() => setSelected(l)}
              className="flex h-24 w-48 shrink-0 cursor-pointer items-center justify-center px-6 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label={`See before and after for ${l.name}`}
              aria-hidden={i >= LOGOS.length}
              tabIndex={i >= LOGOS.length ? -1 : 0}
            >
              <img
                src={l.src}
                alt={i < LOGOS.length ? l.name : ""}
                className="h-full w-full object-contain transition duration-300 hover:scale-105"
                style={l.scale ? { transform: `scale(${l.scale})` } : undefined}
                loading="lazy"
                width={192}
                height={96}
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div>
              <BeforeAfterSlider
                beforeSrc={selected.before}
                afterSrc={selected.after}
                alt={`${selected.name} before and after cleaning`}
              />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Drag the slider to compare before and after.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
