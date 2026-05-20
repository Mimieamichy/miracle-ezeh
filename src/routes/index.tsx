import { createFileRoute } from "@tanstack/react-router";
import portrait from "../assets/portrait.jpg";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "Halcyon Commerce",
    role: "Frontend Engineering · UI Systems",
    year: "2025",
    image: project1,
    tags: ["React", "TypeScript", "Motion"],
  },
  {
    n: "02",
    title: "Atelier Nord Identity",
    role: "Brand site & CMS",
    year: "2024",
    image: project2,
    tags: ["Next.js", "Sanity", "GSAP"],
  },
  {
    n: "03",
    title: "Lumen Analytics",
    role: "Dashboard & Design System",
    year: "2024",
    image: project3,
    tags: ["React", "D3", "Tailwind"],
  },
  {
    n: "04",
    title: "Press / Type Foundry",
    role: "Editorial microsite",
    year: "2023",
    image: project4,
    tags: ["Astro", "WebGL"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight text-sm">
            Miracle Ezeh<span className="text-muted-foreground">/dev</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a className="hover:text-muted-foreground transition" href="#work">Work</a></li>
            <li><a className="hover:text-muted-foreground transition" href="#about">About</a></li>
            <li><a className="hover:text-muted-foreground transition" href="#contact">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main id="top" className="pt-16">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-28 pb-20 lg:pb-32">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
            <span className="h-px w-8 bg-foreground/40" />
            Frontend Developer · Available May 2026
          </div>
          <h1 className="font-display font-medium text-[clamp(2.75rem,9vw,8.5rem)] leading-[0.92] tracking-tight max-w-6xl">
            Crafting calm, <em className="italic font-light text-muted-foreground">considered</em> interfaces for the modern web.
          </h1>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 md:col-start-7 text-base lg:text-lg text-muted-foreground leading-relaxed">
              I'm Miracle — a frontend developer based in Lagos, building fast,
              accessible, and beautifully detailed products with React, TypeScript,
              and a respect for typography.
            </p>
          </div>
        </section>

        {/* Hero image strip */}
        <section className="border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            {[
              ["06+", "Years building"],
              ["40+", "Shipped projects"],
              ["12", "Clients worldwide"],
              ["∞", "Cups of coffee"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl lg:text-4xl">{k}</div>
                <div className="text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Work / hero-grid */}
        <section id="work" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Selected work
              </div>
              <h2 className="font-display text-4xl lg:text-6xl tracking-tight">
                Recent projects
              </h2>
            </div>
            <a href="#contact" className="hidden md:inline text-sm underline underline-offset-4 hover:text-muted-foreground">
              Start a project →
            </a>
          </div>

          {/* Featured */}
          <a href="#" className="group block mb-8">
            <div className="overflow-hidden bg-muted aspect-[16/9]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                width={1200}
                height={900}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5 text-sm">
              <div className="col-span-1 text-muted-foreground">{projects[0].n}</div>
              <div className="col-span-7 md:col-span-6">
                <div className="font-display text-xl">{projects[0].title}</div>
                <div className="text-muted-foreground">{projects[0].role}</div>
              </div>
              <div className="col-span-4 md:col-span-4 text-muted-foreground">
                {projects[0].tags.join(" · ")}
              </div>
              <div className="col-span-12 md:col-span-1 text-right text-muted-foreground">
                {projects[0].year}
              </div>
            </div>
          </a>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {projects.slice(1).map((p) => (
              <a href="#" key={p.title} className="group block">
                <div className="overflow-hidden bg-muted aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-4">
                  <div>
                    <div className="text-xs text-muted-foreground">{p.n}</div>
                    <div className="font-display text-lg mt-1">{p.title}</div>
                    <div className="text-sm text-muted-foreground">{p.role}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{p.year}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border bg-card/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={portrait}
                  alt="Portrait of Miracle Ezeh"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  About
                </div>
                <h2 className="font-display text-3xl lg:text-5xl tracking-tight leading-[1.05]">
                  I build interfaces that feel inevitable — quiet, precise, and quick to the touch.
                </h2>
                <div className="mt-8 space-y-5 text-muted-foreground max-w-2xl leading-relaxed">
                  <p>
                    For six years I've partnered with founders, studios, and product
                    teams to translate ambitious ideas into web experiences that
                    perform. My work lives at the intersection of engineering rigor
                    and editorial craft.
                  </p>
                  <p>
                    Currently freelancing from Lagos, previously building design
                    systems for early-stage startups across Europe and West Africa.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Stack</div>
                  <ul className="space-y-1">
                    <li>React · Next.js · TanStack</li>
                    <li>TypeScript · Node</li>
                    <li>Tailwind · CSS architecture</li>
                    <li>Motion · GSAP · WebGL</li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Services</div>
                  <ul className="space-y-1">
                    <li>Product UI engineering</li>
                    <li>Marketing & brand sites</li>
                    <li>Design systems</li>
                    <li>Performance audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-40">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Contact
          </div>
          <h2 className="font-display text-[clamp(2.25rem,7vw,6rem)] leading-[0.95] tracking-tight max-w-5xl">
            Have something in mind? <br />
            <a href="mailto:hello@miracleezeh.com" className="italic font-light underline underline-offset-[0.15em] decoration-1 hover:text-muted-foreground transition">
              hello@miracleezeh.com
            </a>
          </h2>
          <div className="mt-16 flex flex-wrap gap-6 text-sm">
            {["GitHub", "LinkedIn", "X / Twitter", "Read.cv"].map((l) => (
              <a key={l} href="#" className="px-5 py-2 rounded-full border border-border hover:bg-foreground hover:text-background transition">
                {l}
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Miracle Ezeh. All rights reserved.</div>
            <div>Designed & built in Lagos.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
