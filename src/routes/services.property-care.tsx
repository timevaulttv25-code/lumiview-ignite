import { createFileRoute, redirect } from "@tanstack/react-router";

// This service was consolidated into "Property Management Cleaning".
// Permanent redirect preserves SEO and any inbound links.
export const Route = createFileRoute("/services/property-care")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/property-management-cleaning",
      statusCode: 301,
    });
  },
});
