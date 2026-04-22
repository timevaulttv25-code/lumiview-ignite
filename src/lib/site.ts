/** Central source of truth for site-wide content. Used by SEO, JSON-LD, footer, contact pages. */
export const SITE = {
  name: "LumiView Services",
  shortName: "LumiView",
  tagline: "Window Cleaning, Pressure Washing & Property Care",
  url: "https://lumiviewservices.com",
  phoneDisplay: "(216) 939-LUMI",
  phoneLink: "tel:+12169395864",
  email: "hello@lumiviewservices.com",
  address: {
    street: "Avon, OH",
    city: "Avon",
    region: "OH",
    postal: "44011",
    country: "US",
  },
  geo: { lat: 41.4517, lng: -82.0357 },
  hours: "Mo-Sa 07:00-19:00",
  rating: { value: 4.9, count: 127 },
  social: {
    google: "https://www.google.com/maps/place/LumiView+Services",
    facebook: "https://facebook.com/lumiviewservices",
    instagram: "https://instagram.com/lumiviewservices",
  },
  primaryAreas: [
    "Avon", "Avon Lake", "Westlake", "Lakewood", "Rocky River",
    "North Olmsted", "Bay Village", "North Ridgeville", "Strongsville",
    "Berea", "Fairview Park", "Olmsted Falls", "Elyria", "Lorain",
    "Sheffield Lake", "Amherst",
  ],
};

export const SERVICES = [
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    short: "Streak-free interior & exterior glass.",
    excerpt:
      "Professional interior and exterior window cleaning for homes, storefronts, and commercial properties — purified water, no streaks, no residue.",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing & Exterior Cleaning",
    short: "Driveways, siding, walkways, patios.",
    excerpt:
      "Soft-wash and pressure-wash cleaning that lifts grime from siding, walkways, driveways, and patios without damaging the surface beneath.",
  },
  {
    slug: "janitorial-interior-cleaning",
    title: "Janitorial & Interior Cleaning",
    short: "Reliable recurring interior care.",
    excerpt:
      "Detail-driven janitorial and interior cleaning for offices, facilities, and residences — scheduled service you can plan a week around.",
  },
  {
    slug: "property-care",
    title: "Property Care & Facility Support",
    short: "Ongoing upkeep for managed portfolios.",
    excerpt:
      "Single point of contact for ongoing exterior and interior upkeep across managed properties, multi-unit buildings, and facility portfolios.",
  },
  {
    slug: "airbnb-vrbo-turnover",
    title: "Airbnb & Vrbo Turnover Cleaning",
    short: "5-star ready between every guest.",
    excerpt:
      "Hotel-grade short-term rental turnover cleaning with linen service, restocking and photo confirmation — built for Airbnb, Vrbo and Booking.com hosts who need flawless reviews.",
  },
  {
    slug: "property-management-cleaning",
    title: "Property Management Cleaning",
    short: "Residential rentals, buildings & plazas.",
    excerpt:
      "Recurring cleaning and turnover support for residential rental portfolios, multi-unit buildings, commercial offices, retail plazas and storefronts — one trusted vendor across every door.",
  },
] as const;

export const INDUSTRIES = [
  { slug: "residential", title: "Residential Properties", short: "Homeowners & private estates" },
  { slug: "commercial", title: "Commercial Properties", short: "Offices, storefronts, retail plazas" },
  { slug: "property-managers", title: "Property Managers", short: "Multi-unit & portfolio support" },
  { slug: "construction", title: "Builders & New Construction", short: "Post-build & turnover prep" },
  { slug: "daycare", title: "Daycare & Childcare", short: "Detail-focused, family-trusted" },
] as const;

export const CITIES = [
  { slug: "avon", name: "Avon", zip: "44011" },
  { slug: "avon-lake", name: "Avon Lake", zip: "44012" },
  { slug: "westlake", name: "Westlake", zip: "44145" },
  { slug: "lakewood", name: "Lakewood", zip: "44107" },
  { slug: "rocky-river", name: "Rocky River", zip: "44116" },
  { slug: "north-olmsted", name: "North Olmsted", zip: "44070" },
  { slug: "bay-village", name: "Bay Village", zip: "44140" },
] as const;
