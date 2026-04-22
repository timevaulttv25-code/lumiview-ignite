import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { buildSeo } from "@/lib/seo";
import {
  IndustryDetailPage,
  INDUSTRY_DETAILS,
  INDUSTRY_IMG,
} from "@/components/site/IndustryDetail";

const slug = "daycare";
const data = INDUSTRY_DETAILS[slug];

export const Route = createFileRoute("/industries/daycare")({
  head: () => buildSeo({
    title: `${data.title} Facility Cleaning — Northeast Ohio`,
    description: data.intro,
    path: `/industries/${slug}`,
    image: `${SITE.url}${INDUSTRY_IMG[slug]}`,
  }),
  component: () => <IndustryDetailPage slug={slug} />,
});
