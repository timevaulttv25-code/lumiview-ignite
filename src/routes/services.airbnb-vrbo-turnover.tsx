import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd } from "@/lib/seo";
import {
  ServiceDetailPage,
  SERVICE_DETAILS,
  SERVICE_IMG,
} from "@/components/site/ServiceDetail";

const slug = "airbnb-vrbo-turnover";
const data = SERVICE_DETAILS[slug];

export const Route = createFileRoute("/services/airbnb-vrbo-turnover")({
  head: () => ({
    ...buildSeo({
      title: `${data.title} — Northeast Ohio Short-Term Rental Cleaning`,
      description: data.intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${SERVICE_IMG[slug]}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(data.title, data.intro, slug))],
  }),
  component: () => <ServiceDetailPage slug={slug} />,
});
