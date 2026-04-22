import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { buildSeo, jsonLdScript, serviceJsonLd } from "@/lib/seo";
import {
  ServiceDetailPage,
  SERVICE_DETAILS,
  SERVICE_IMG,
} from "@/components/site/ServiceDetail";

const slug = "window-cleaning";
const data = SERVICE_DETAILS[slug];

export const Route = createFileRoute("/services/window-cleaning")({
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
