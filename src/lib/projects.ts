import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  category: string;
  year: string;
  repo: string;
  live?: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "harley-innovations",
    name: "Harley Innovations",
    tagline: "Learning platform for an innovations hub.",
    description:
      "Internal tools and a learning platform for Harley Innovations Hub. Built reusable component libraries, integrated REST APIs, and designed responsive course delivery experiences for engineering students.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Web Platform",
    year: "2026",
    repo: "https://github.com/Mimieamichy/harley-innovations-website",
    image: p1,
    accent: "from-orange-400 to-rose-500",
  },
  {
    slug: "revival-academy",
    name: "Revival Academy",
    tagline: "Modern school portal with admissions & results.",
    description:
      "A school portal with admissions, results, fees and a content hub. Focused on accessibility (WCAG), keyboard navigation, and a calm reading experience for parents and staff.",
    stack: ["React", "TypeScript", "Tailwind"],
    category: "Education Portal",
    year: "2025",
    repo: "https://github.com/Mimieamichy/revival-academy",
    live: "https://rpais.vercel.app",
    image: p2,
    accent: "from-amber-400 to-orange-600",
  },
  {
    slug: "soma-vault",
    name: "Soma Vault",
    tagline: "A focused study & note vault for learners.",
    description:
      "A study companion for organizing notes, summaries and revision sets. Built around a fast typography-first reading view, with light-touch keyboard shortcuts.",
    stack: ["React", "TypeScript", "Vite"],
    category: "Productivity",
    year: "2025",
    repo: "https://github.com/Mimieamichy/soma-vault",
    live: "https://study-vault-kappa.vercel.app",
    image: p3,
    accent: "from-orange-300 to-red-500",
  },
  {
    slug: "kumani",
    name: "Kumani",
    tagline: "A clean commerce-ready brand surface.",
    description:
      "A storefront-style marketing surface with product showcases, considered motion and refined typography — engineered for fast LCP and friendly content updates.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Marketing Site",
    year: "2025",
    repo: "https://github.com/Mimieamichy/kumani",
    image: p4,
    accent: "from-rose-400 to-orange-500",
  },
  {
    slug: "sakosile",
    name: "Sakosile",
    tagline: "Community-driven product surface.",
    description:
      "A community product with discovery feeds and contributor tooling. Built fast iteration loops and a small design system that the team can extend.",
    stack: ["JavaScript", "React", "Node"],
    category: "Community App",
    year: "2024",
    repo: "https://github.com/Mimieamichy/SAKOSILE",
    image: p1,
    accent: "from-orange-500 to-amber-300",
  },
  {
    slug: "miracle-ezeh",
    name: "Personal Portfolio",
    tagline: "This site — handcrafted with TanStack Start.",
    description:
      "The portfolio you're reading. Built on TanStack Start with SSR, an opinionated typography system, semantic tokens and a sharp orange/ink palette.",
    stack: ["TanStack Start", "React 19", "Tailwind"],
    category: "Personal",
    year: "2026",
    repo: "https://github.com/Mimieamichy/miracle-ezeh",
    image: p2,
    accent: "from-amber-300 to-orange-500",
  },
];
