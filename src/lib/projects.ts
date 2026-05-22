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
    category: "WebApp",
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
    category: "WebApp",
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
    category: "WebApp",
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
    category: "Website",
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
    category: "WebApp",
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
    category: "Portfolio",
    year: "2026",
    repo: "https://github.com/Mimieamichy/miracle-ezeh",
    image: p2,
    accent: "from-amber-300 to-orange-500",
  },
  {
    slug: "fintech-dashboard",
    name: "FinFlow",
    tagline: "High-fidelity fintech dashboard.",
    description:
      "A comprehensive financial dashboard with real-time transaction tracking, wealth management modules, and dark-mode optimized data visualizations.",
    stack: ["React", "TypeScript", "Recharts", "Tailwind"],
    category: "WebApp",
    year: "2025",
    repo: "https://github.com/Mimieamichy",
    image: p1,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    slug: "eco-store",
    name: "Eco-Commerce",
    tagline: "Sustainable fashion storefront.",
    description:
      "A fast, SEO-optimized e-commerce platform for sustainable fashion. Features a custom cart engine and seamless checkout flow.",
    stack: ["Next.js", "TypeScript", "Stripe"],
    category: "Website",
    year: "2024",
    repo: "https://github.com/Mimieamichy",
    image: p3,
    accent: "from-emerald-400 to-teal-600",
  },
  {
    slug: "health-track",
    name: "Vitals",
    tagline: "Health and wellness mobile interface.",
    description:
      "A mobile-first web app for tracking daily vitals and workout progress. Focused on touch interactions and high-performance animations.",
    stack: ["React", "Framer Motion", "PWA"],
    category: "Mobile App",
    year: "2025",
    repo: "https://github.com/Mimieamichy",
    image: p4,
    accent: "from-rose-400 to-red-600",
  },
  {
    slug: "creative-studio",
    name: "Lumina Studio",
    tagline: "Portfolio for a creative agency.",
    description:
      "A visually rich agency website with horizontal scrolling, custom cursor interactions, and immersive case study layouts.",
    stack: ["Next.js", "GSAP", "Three.js"],
    category: "Website",
    year: "2024",
    repo: "https://github.com/Mimieamichy",
    image: p2,
    accent: "from-purple-500 to-pink-500",
  },
  {
    slug: "task-master",
    name: "FocusDone",
    tagline: "Productivity & deep work tracker.",
    description:
      "A minimalist productivity tool that combines pomodoro timers with task management. Designed for deep work sessions.",
    stack: ["React", "Zustand", "Vite"],
    category: "WebApp",
    year: "2025",
    repo: "https://github.com/Mimieamichy",
    image: p3,
    accent: "from-zinc-700 to-zinc-900",
  },
];
