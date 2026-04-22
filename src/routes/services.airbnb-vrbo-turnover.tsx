import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  BedDouble,
  Camera,
  Sparkles,
  PackageCheck,
  Star,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { RichServiceLayout } from "@/components/site/RichServiceLayout";
import heroImg from "@/assets/service-airbnb-turnover.jpg";
import beforeImg from "@/assets/ba/airbnb-before.jpg";
import afterImg from "@/assets/ba/airbnb-after.jpg";

const slug = "airbnb-vrbo-turnover";
const title = "Airbnb & Vrbo Turnover Cleaning";
const intro =
  "Hotel-grade turnover cleaning for short-term rentals on Airbnb, Vrbo, Booking.com, and direct-booking platforms. Same-day turnovers, hotel-style bed-making, fresh linens, restocked essentials, and photo confirmation, so every guest walks into a 5-star experience.";

const FAQS = [
  {
    q: "How fast is your Airbnb turnover window?",
    a: "Standard Airbnb and Vrbo turnovers are completed inside the 11am check-out to 4pm check-in window. Tight back-to-back bookings, including same-day same-hour turns, are accommodated when scheduled in advance.",
  },
  {
    q: "How much does an Airbnb turnover cost in Northeast Ohio?",
    a: "Most 1-bedroom turnovers run $65–$95, 2-bedroom $95–$135, and 3-bedroom+ $135–$195, including linen change, restocking, and photo confirmation. Linen laundering and consumable restocking are billed at cost or on a flat-rate package.",
  },
  {
    q: "Do you provide linens and towels?",
    a: "Yes, we offer optional hotel-grade linen and towel service with off-site laundering, or we can launder your existing inventory between stays. Most hosts prefer a 2x par-stock model so a clean set is always ready.",
  },
  {
    q: "Will you restock soap, paper, coffee, and other consumables?",
    a: "Yes. We maintain a per-property restock checklist (toilet paper, paper towels, soap, shampoo, coffee, sugar, etc.) and refill from your supply closet, or we can source and bill consumables at cost.",
  },
  {
    q: "What if a guest leaves damage or steals an item?",
    a: "We document and photograph any damage, stains, missing items, or low supplies and notify you the same day so you can file an Airbnb AirCover or Vrbo damage claim inside the platform's reporting window.",
  },
  {
    q: "Do you sync with my Airbnb / Vrbo calendar?",
    a: "Yes. We connect to your iCal feed (Airbnb, Vrbo, Hospitable, Guesty, Hostfully, OwnerRez) and your turns auto-populate our schedule, no manual booking required.",
  },
  {
    q: "How do I know the clean was done?",
    a: "Every turnover ends with photo confirmation through our app, bedrooms made, bathrooms reset, kitchen reset, and consumables restocked. You see every photo before the next guest checks in.",
  },
  {
    q: "Are you experienced with hot tubs, pools, and luxury amenities?",
    a: "Yes, we handle hot tub wipe-down and chemical check, pool deck reset, fire-pit cleanup, EV charger care, and other premium-amenity properties common in lakefront Northeast Ohio rentals.",
  },
];

export const Route = createFileRoute("/services/airbnb-vrbo-turnover")({
  head: () => ({
    ...buildSeo({
      title: `${title}, 5-Star Northeast Ohio Cleaning`,
      description: intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${heroImg}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(title, intro, slug)), jsonLdScript(faqJsonLd(FAQS))],
  }),
  component: () => (
    <RichServiceLayout
      heroEyebrow="Short-Term Rental • Airbnb & Vrbo"
      heroTitle="5-star turnover cleaning that protects your reviews and frees up your weekends."
      heroDescription={intro}
      heroImage={heroImg}
      serviceTitle={title}
      highlights={[
        "Same-day 11am–4pm turnovers",
        "iCal-synced auto-scheduling",
        "Photo confirmation every clean",
        "Linen & restock service available",
        "Hotel-grade 5-star standards",
        "Damage & low-supply reporting",
        "Airbnb, Vrbo & Booking.com ready",
        "Backup crews to protect your reviews",
      ]}
      tiersEyebrow="Turnover Service Plans"
      tiersHeading="Service tiers built around how you run your rental."
      tiersIntro="Whether you self-manage one cabin on the lake or run 20+ doors across Northeast Ohio, we have a turnover plan that fits your booking volume and amenity level."
      tiers={[
        {
          icon: BedDouble,
          eyebrow: "Standard Turnover",
          title: "Standard turnover",
          body: "The core 5-star clean, perfect for self-managed hosts running 1–3 listings.",
          items: [
            "Full reset of every room",
            "Hotel-style bed making",
            "Bathroom & kitchen reset",
            "Photo confirmation",
          ],
        },
        {
          icon: PackageCheck,
          eyebrow: "Turnover + Linens",
          title: "Turnover + linen service",
          body: "Add hotel-grade linen and towel service with off-site laundering, no host laundry runs.",
          items: [
            "2x par-stock linen rotation",
            "Off-site commercial laundering",
            "Folded & staged on arrival",
            "Stain-tracking & replacement",
          ],
        },
        {
          icon: Star,
          eyebrow: "Full-Service Host",
          title: "Full-service host plan",
          body: "For hosts and co-hosts running 5+ listings who want the entire turnover operation handled.",
          items: [
            "iCal auto-scheduling",
            "Consumables restock at cost",
            "Mid-stay & deep cleans",
            "Damage & inventory reporting",
          ],
        },
      ]}
      featuresEyebrow="Every Turnover, Every Time"
      featuresHeading="The 5-star turnover checklist, completed and photographed."
      featuresIntro="Hosts lose 5-star reviews over hair on the pillow, a dusty fan, or a missing roll of toilet paper. We built our checklist around the exact details that drive review scores on Airbnb and Vrbo."
      features={[
        {
          icon: BedDouble,
          title: "Hotel-style bedrooms",
          body: "Beds made the way guests expect at a 4-star hotel, crisp, layered, and inspection-ready.",
          items: ["Fresh linens on every bed", "Hospital-corner sheets", "Pillow & duvet fluff", "Under-bed & nightstand wipe"],
        },
        {
          icon: Sparkles,
          title: "Spotless bathrooms",
          body: "The single biggest driver of bad reviews. We treat it like a hotel housekeeper would.",
          items: ["Disinfect toilet, tub, shower", "Mirror & glass detail", "Fresh towel sets", "Hair check on every surface"],
        },
        {
          icon: PackageCheck,
          title: "Kitchen reset",
          body: "A guest-ready kitchen with no leftover crumbs, dishes, or last-guest evidence.",
          items: [
            "Counters, sink & appliances",
            "Inside microwave & coffee maker",
            "Dishwasher run & put away",
            "Trash empty & liner replaced",
          ],
        },
        {
          icon: Smartphone,
          title: "Consumables restock",
          body: "Per-property checklist so guests never run out of the basics.",
          items: [
            "Toilet paper, paper towels, tissues",
            "Soap, shampoo, conditioner",
            "Coffee, sugar, dish soap",
            "Trash bags & dishwasher pods",
          ],
        },
        {
          icon: Camera,
          title: "Photo confirmation",
          body: "Every clean ends with a photo set so you know the turn is done before the next check-in.",
          items: [
            "Beds made & staged",
            "Bathrooms reset",
            "Kitchen reset",
            "Restock confirmed",
          ],
        },
        {
          icon: ShieldCheck,
          title: "Damage & inventory reporting",
          body: "Same-day notification of damage, stains, or missing items so you can file claims in time.",
          items: [
            "Photo-documented damage",
            "Missing item alerts",
            "Low-supply notifications",
            "Mid-stay deep-clean requests",
          ],
        },
      ]}
      resultEyebrow="The Result"
      resultHeading="Higher review scores, fewer guest complaints, and your weekends back."
      resultBody="Hosts who switch to LumiView typically see review scores climb above 4.9 within 60 days, and complaint messages about cleanliness drop to near zero. The cleaner the turnover, the better the listing performs in Airbnb and Vrbo search."
      resultBeforeImage={beforeImg}
      resultAfterImage={afterImg}
      resultImageAlt="Before and after Airbnb turnover cleaning by LumiView Services"
      audienceEyebrow="Who We Serve"
      audienceHeading="Built for the way short-term rental hosts actually operate."
      audiences={[
        {
          to: "/industries/property-managers",
          eyebrow: "Co-Hosts & Managers",
          title: "Co-hosts & STR property managers",
          body: "Managing 5+ listings? We integrate with your PMS, sync to your iCal, and report damage same-day.",
        },
        {
          to: "/industries/residential",
          eyebrow: "Self-Managed Hosts",
          title: "Self-managed hosts",
          body: "Running your own lakefront cabin or city loft? We turn it over while you focus on guest messaging.",
        },
        {
          to: "/industries/commercial",
          eyebrow: "Mid-Term & Corporate",
          title: "Mid-term & corporate rentals",
          body: "Furnished Finder, Blueground, and corporate housing turnovers with the same 5-star standard.",
        },
      ]}
      processEyebrow="How It Works"
      processHeading="From first listing to first turnover in 48 hours."
      process={[
        {
          step: "01",
          title: "Property walk-through",
          body: "We tour each listing, document inventory, build the per-property checklist, and photograph the staged baseline you want every guest to see.",
        },
        {
          step: "02",
          title: "Sync your calendar",
          body: "Connect your Airbnb, Vrbo, Hospitable, Guesty, or Hostfully iCal, turnovers auto-populate our schedule without manual booking.",
        },
        {
          step: "03",
          title: "Turn, photo, repeat",
          body: "Every check-out triggers a turn. We complete the checklist, restock, photograph, and report any issues before the next guest arrives.",
        },
      ]}
      serviceAreaHeading="Short-term rental cleaning across Northeast Ohio."
      serviceAreaBody="We service Airbnb, Vrbo, and Booking.com properties throughout Lorain and Cuyahoga counties, including lakefront, downtown Cleveland, and Avon-area listings."
      faqs={FAQS}
      faqTitle="Airbnb & Vrbo turnover questions"
      ctaTitle="Ready to protect your 5-star reviews?"
      ctaBody="iCal-synced scheduling, hotel-grade turnovers, and photo confirmation every clean. Most hosts onboard in 48 hours."
    />
  ),
});
