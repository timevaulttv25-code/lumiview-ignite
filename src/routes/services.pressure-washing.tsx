import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd } from "@/lib/seo";
import {
  ServiceDetailPage,
  SERVICE_DETAILS,
  SERVICE_IMG,
} from "@/components/site/ServiceDetail";

const slug = "pressure-washing";
const data = SERVICE_DETAILS[slug];

export const Route = createFileRoute("/services/pressure-washing")({
  head: () => ({
    ...buildSeo({
      title: `${data.title} in Avon & Northeast Ohio`,
      description: data.intro,
      path: `/services/${slug}`,
      image: `${SITE.url}${SERVICE_IMG[slug]}`,
    }),
    scripts: [jsonLdScript(serviceJsonLd(data.title, data.intro, slug))],
  }),
  component: () => <ServiceDetailPage slug={slug} />,
});
