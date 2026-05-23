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
    slug: "the-art-of-vibe-coding",
    title: "The Art of Vibe Coding: What to Know Before Letting AI Agents Build Your App",
    excerpt: "There is a new phenomenon sweeping through the tech world, and it goes by a glorious name: Vibe Coding. Here is what you need to know before you hand over the keys.",
    date: "2026-05-24",
    readTime: "3 min read",
    category: "Engineering",
    body: [
      "There is a new phenomenon sweeping through the tech world, and it goes by a glorious name: Vibe Coding.",
      "Coined to describe the act of leaning back, sipping your coffee, and typing high-level instructions while an AI agent (like Bolt.new, Devin, or Lovable) spins up a full-stack application, it feels like pure magic. You aren't wrestling with syntax; you are managing intent. You are coding on pure vibes.",
      "But as anyone who has tried to scale a 'vibe-coded' app knows, the hangover can hit hard. Before you hand the keys of your next big project over to an AI agent, here is a breakdown of what you need to know, along with the honest pros and cons.",
      "3 Things to Note Before You Vibe Code",
      "If you go into an AI agent workflow blind, you will likely end up with a tangled web of code that even the AI can't fix. Keep these three rules in mind before you hit enter:",
      "1. The Agent Needs a Director, Not Just a Prompt,\nAI agents are incredibly powerful, but they lack intuition. If you tell an agent to 'build a fintech app,' it will guess the database structure, the authentication flow, and the UI. Defined architecture and scope upfront is essential.",
      "2. Guard Your Context Window\nAs your project grows, the codebase gets heavier. If you let the AI generate bloated, repetitive code, it will quickly hit its context limit. Once that happens, the agent will begin to 'forget' earlier features or introduce bugs into working code.",
      "3. Prompting is the New Refactoring\nIn traditional coding, you rewrite functions to clean them up. In vibe coding, you must rewrite your prompts to guide the AI to clean up its own mess. If the AI introduces a bug, tell it exactly where the logic deviated.",
      "The Pros: Why Vibe Coding Feels Like a Superpower",
      "0 to MVP in Record Time: The speed of prototyping is unparalleled. What used to take a solo developer two weeks of setup can now be accomplished in an afternoon.",
      "Democratization of Product Building: It bridges the gap between ideation and execution. Founders and designers can now build functional prototypes without waiting for a dedicated engineering team.",
      "Bypassing the 'Syntax Wall': You no longer get stuck for hours because of a missing comma or mismatched bracket. The AI handles the plumbing.",
      "The Cons: The Harsh Realities of Agentic Code",
      "The Infinite Agent Loop: This happens when the agent attempts to fix a bug, creates a new bug, and accidentally deletes a feature that worked twenty prompts ago.",
      "Compounding Technical Debt: AI agents often copy-paste code instead of modularizing it, leading to massive, unmaintainable files if not carefully directed.",
      "The 'Black Box' Problem: If you don't actually understand the code the AI is writing, you don't really own the application. You are left with code you cannot debug yourself when the AI hits a wall.",
      "The Golden Rule: Use AI agents to accelerate your velocity, not to replace your critical thinking.",
      "Vibe coding is not a fad; it is the evolutionary next step of software development. It shifts the human developer's role from a bricklayer to an architect. If you are building a prototype, go all in. If you are building mission-critical software, keep your hands on the keyboard and audit every line.",
    ],
  },
  {
    slug: "building-sakosile-challenges-lessons-growth",
    title: "Building SAKOSILE: Challenges, Lessons, and Growth as a Frontend Developer",
    excerpt: "Building SAKOSILE was more than just creating a web application — it was a project that challenged my problem-solving skills and improved my understanding of frontend architecture.",
    date: "2026-05-23",
    readTime: "3 min read",
    category: "Case Study",
    body: [
      "Building SAKOSILE was more than just creating a web application — it was a project that challenged my problem-solving skills, improved my understanding of frontend architecture, and pushed me to think more deeply about user experience and scalability.",
      "One of the biggest challenges I faced during development was implementing routing for multiple user roles. The application required different access levels and experiences depending on the type of user logged in. Managing protected routes, conditional rendering, authentication flow, and ensuring users only accessed the pages relevant to their role became a complex but rewarding part of the project.",
      "I had to carefully structure the routing system to maintain both security and scalability while keeping the codebase organized and maintainable. This experience helped me better understand application architecture and role-based access control in modern frontend development.",
      "Another major focus during the project was responsiveness and adaptability across all screen sizes. I wanted SAKOSILE to provide a seamless experience whether users accessed it from a mobile phone, tablet, laptop, or large desktop screen. Achieving this required a lot of testing, layout restructuring, and attention to spacing, typography, and component behavior on different devices.",
      "From flexible grids to responsive navigation and adaptive UI components, I learned the importance of designing with users in mind rather than only focusing on functionality.",
      "Beyond the technical side, SAKOSILE taught me patience, consistency, and the importance of writing scalable and maintainable code. Every bug fixed and every feature completed contributed to my growth as a frontend developer.",
      "Looking back, the project was not just about building an application — it was about becoming a better developer through real-world challenges and hands-on experience.",
    ],
  },
  {
    slug: "building-kumani-reusable-modules",
    title: "Building KUMANI: How Reusable Modules Improved My Development Process",
    excerpt: "While building KUMANI, one of the biggest lessons I learned was the importance of reusable modules in frontend development.",
    date: "2026-05-22",
    readTime: "2 min read",
    category: "Architecture",
    body: [
      "While building KUMANI, one of the biggest lessons I learned was the importance of reusable modules in frontend development. Instead of rewriting the same logic and UI structure multiple times, I focused on creating reusable components and modules that could be used across different parts of the application.",
      "At the beginning of the project, I noticed that many sections shared similar layouts, buttons, cards, form structures, and functionality. Rather than duplicating code, I started breaking the application into smaller reusable pieces. This made the project more organized, easier to maintain, and faster to scale as new features were added.",
      "Reusable modules also helped improve consistency throughout the application. Since the same components were used across multiple pages, the UI remained uniform and easier for users to navigate. It also reduced bugs because changes made in one component automatically reflected everywhere the module was used.",
      "Another advantage was development speed. As the project grew, having reusable modules allowed me to build new pages and features much faster without starting from scratch every time. It also made debugging easier because the logic was centralized instead of scattered across different files.",
      "This experience taught me that writing reusable and scalable code is just as important as building functional features. KUMANI helped me better understand component architecture, maintainability, and the long-term benefits of modular frontend development.",
    ],
  },
  {
    slug: "shipping-react-faster",
    title: "Shipping React Faster Without Burning the Codebase",
    excerpt:
      "Lessons from rebuilding internal tooling at Harley Innovations: how component primitives, SSR and pragmatic caching cut iteration time in half.",
    date: "2026-05-21",
    readTime: "2 min read",
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
    date: "2026-05-20",
    readTime: "1 min read",
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
    date: "2026-05-19",
    readTime: "2 min read",
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
