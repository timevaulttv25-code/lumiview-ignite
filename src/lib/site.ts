/** Central source of truth for site-wide content. Used by SEO, JSON-LD, footer, contact pages. */
export const SITE = {
  name: "LumiView Services",
  shortName: "LumiView",
  tagline: "Window Cleaning, Pressure Washing & Property Care",
  url: "https://lumiviewservices.com",
  phoneDisplay: "(216) 939-LUMI",
  phoneLink: "tel:+12169395864",
  email: "connect@lumiviewservices.com",
  address: {
    street: "Avon, OH",
    city: "Avon",
    region: "OH",
    postal: "44011",
    country: "US",
  },
  geo: { lat: 41.4517, lng: -82.0357 },
  /** Display strings for human-facing UI. */
  hoursDisplay: [
    { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  /** Schema.org-compatible openingHours strings for JSON-LD. */
  hoursSchema: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  rating: { value: 4.9, count: 127 },
  social: {
    google: "https://www.google.com/maps/place/LumiView+Services",
    googleReviews: "https://g.page/r/lumiview-services/review",
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
  { slug: "avon", name: "Avon", zip: "44011", lat: 41.4517, lng: -82.0357 },
  { slug: "avon-lake", name: "Avon Lake", zip: "44012", lat: 41.5053, lng: -82.0282 },
  { slug: "westlake", name: "Westlake", zip: "44145", lat: 41.4553, lng: -81.9179 },
  { slug: "lakewood", name: "Lakewood", zip: "44107", lat: 41.4820, lng: -81.7982 },
  { slug: "rocky-river", name: "Rocky River", zip: "44116", lat: 41.4753, lng: -81.8593 },
  { slug: "north-olmsted", name: "North Olmsted", zip: "44070", lat: 41.4156, lng: -81.9234 },
  { slug: "bay-village", name: "Bay Village", zip: "44140", lat: 41.4856, lng: -81.9290 },
  { slug: "north-ridgeville", name: "North Ridgeville", zip: "44039", lat: 41.3897, lng: -82.0190 },
  { slug: "strongsville", name: "Strongsville", zip: "44136", lat: 41.3145, lng: -81.8368 },
  { slug: "berea", name: "Berea", zip: "44017", lat: 41.3661, lng: -81.8543 },
  { slug: "olmsted-falls", name: "Olmsted Falls", zip: "44138", lat: 41.3737, lng: -81.9043 },
  { slug: "fairview-park", name: "Fairview Park", zip: "44126", lat: 41.4417, lng: -81.8590 },
  { slug: "brook-park", name: "Brook Park", zip: "44142", lat: 41.3992, lng: -81.8201 },
  { slug: "elyria", name: "Elyria", zip: "44035", lat: 41.3683, lng: -82.1076 },
  { slug: "lorain", name: "Lorain", zip: "44052", lat: 41.4528, lng: -82.1824 },
  { slug: "sheffield-lake", name: "Sheffield Lake", zip: "44054", lat: 41.4881, lng: -82.0974 },
  { slug: "amherst", name: "Amherst", zip: "44001", lat: 41.4006, lng: -82.2224 },
  { slug: "grafton", name: "Grafton", zip: "44044", lat: 41.2725, lng: -82.0571 },
  { slug: "columbia-station", name: "Columbia Station", zip: "44028", lat: 41.3203, lng: -81.9357 },
  { slug: "lagrange", name: "LaGrange", zip: "44050", lat: 41.2378, lng: -82.1196 },
  { slug: "oberlin", name: "Oberlin", zip: "44074", lat: 41.2939, lng: -82.2174 },
  { slug: "vermilion", name: "Vermilion", zip: "44089", lat: 41.4214, lng: -82.3641 },
  { slug: "west-cleveland", name: "West Cleveland", zip: "44102", lat: 41.4845, lng: -81.7363 },
] as const;
