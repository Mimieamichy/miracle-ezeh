import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog" },
      { name: "description", content: "Notes on frontend engineering, SSR, design systems and shipping React faster." },
      { property: "og:title", content: "Blog" },
      { property: "og:description", content: "Notes on frontend engineering, SSR, design systems and shipping React faster." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => <Outlet />,
});
