export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "shipping-react-faster",
    title: "Shipping React Faster Without Burning the Codebase",
    excerpt:
      "Lessons from rebuilding internal tooling at Harley Innovations: how component primitives, SSR and pragmatic caching cut iteration time in half.",
    date: "2026-03-04",
    readTime: "6 min read",
    category: "Engineering",
    body: [
      "When I joined the team, every new screen felt like starting from scratch. Buttons drifted, spacing wandered, and TypeScript errors lived in a folder no one opened.",
      "We did three things, in this order: extracted a small set of primitives, locked the design tokens, and moved data fetching to the server. Nothing fancy — but together they removed entire categories of bugs.",
      "Primitives first. We picked 12 components — Button, Input, Field, Card, Sheet, Dialog, Tabs, Avatar, Badge, Menu, Tooltip, Toast — and forbade ad-hoc variants in feature code. Every variant must be added to the primitive.",
      "Then tokens. Color, radius, spacing and font tokens went into one CSS file. Feature code only consumes semantic tokens (bg-card, text-muted-foreground), never raw values. That alone killed half our drift.",
      "SSR with TanStack Start gave us per-route loaders and tiny client bundles. Most pages render before JS finishes — and the few interactive bits hydrate where needed.",
      "Six weeks later, ticket throughput nearly doubled. Not because we worked harder — because the codebase stopped pushing back.",
    ],
  },
  {
    slug: "ssr-tradeoffs",
    title: "The SSR Tradeoffs Nobody Warns You About",
    excerpt:
      "SSR is great for SEO and first paint — but it changes how you think about state, auth, and analytics. Here's what I learned the slow way.",
    date: "2026-02-12",
    readTime: "8 min read",
    category: "Architecture",
    body: [
      "SSR isn't a free upgrade. It's a different runtime model — and if you treat it like a sticker you add to a Vite app, you'll hit subtle issues for weeks.",
      "Issue one: window. Anything that touches window, localStorage or document at module scope crashes on the server. Move it inside useEffect or wrap with a typeof guard.",
      "Issue two: auth. Your session cookie is on the request, not in localStorage. Loaders must read from the request context — not call a client SDK.",
      "Issue three: analytics. Page views fire on the client after hydration. Don't double-count by also firing in a server loader.",
      "Done right, SSR pays off. Done blindly, it doubles your error budget. Go in with eyes open.",
    ],
  },
  {
    slug: "design-systems-for-small-teams",
    title: "Design Systems For Small Teams (Without the Overhead)",
    excerpt:
      "You don't need a 200-component library. You need 12 components, 6 tokens, and a rule everyone respects.",
    date: "2026-01-20",
    readTime: "5 min read",
    category: "Design",
    body: [
      "The phrase 'design system' has scared a lot of small teams into doing nothing. They think it means a year-long project, a Figma library and a Storybook deploy.",
      "It doesn't. A useful system for a 3-person team is a CSS file with semantic tokens, a handful of styled primitives, and one rule: no raw hex in feature code.",
      "Start with color, spacing and radius tokens. Add a Button. Add an Input. When the third Card appears, extract it. Grow the system from real pain, not speculation.",
      "The point isn't completeness — it's consistency. Twelve components used everywhere beats two hundred used sometimes.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
