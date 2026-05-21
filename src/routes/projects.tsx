import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Sparkle } from "lucide-react";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Miracle A. Ezeh" },
      { name: "description", content: "Selected projects by Miracle A. Ezeh — React, Next.js & TypeScript work shipped for studios, schools and product teams." },
      { property: "og:title", content: "Projects — Miracle A. Ezeh" },
      { property: "og:description", content: "Selected projects: education portals, learning platforms, commerce surfaces and more." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary text-xs mb-5">
              <Sparkle className="w-3 h-3 text-primary" /> Selected work
            </div>
            <h1 className="font-display text-5xl lg:text-7xl tracking-tight">
              The <span className="text-primary italic">things</span> I've<br />been making.
            </h1>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            Pinned from GitHub. Click a row to preview — every project links to its repo
            and live site (where it exists).
          </p>
        </div>
      </section>

      {/* Split: list left, sticky preview right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16">
        {/* List */}
        <ol className="divide-y divide-border border-y border-border">
          {projects.map((proj, i) => {
            const isActive = i === active;
            return (
              <li key={proj.slug} id={proj.slug}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="w-full text-left py-6 flex items-center gap-5 group"
                >
                  <span className={`font-display text-2xl w-10 shrink-0 transition ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={`block font-display text-2xl lg:text-3xl tracking-tight transition ${isActive ? "text-primary" : ""}`}>
                      {proj.name}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1 truncate">
                      {proj.tagline}
                    </span>
                  </span>
                  <span className="hidden sm:flex flex-col items-end text-xs text-muted-foreground shrink-0">
                    <span>{proj.year}</span>
                    <span className="mt-1">{proj.category}</span>
                  </span>
                  <ArrowUpRight className={`w-5 h-5 transition ${isActive ? "text-primary translate-x-0" : "text-muted-foreground -translate-x-1 opacity-50 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                </button>
              </li>
            );
          })}
        </ol>

        {/* Sticky preview */}
        <aside className="lg:sticky lg:top-28 self-start">
          <div className="relative rounded-[2rem] overflow-hidden bg-accent">
            <div className={`aspect-[4/5] bg-gradient-to-br ${p.accent}`}>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 bg-gradient-to-t from-accent via-accent/85 to-transparent text-accent-foreground">
              <div className="text-xs uppercase tracking-[0.18em] text-accent-foreground/60 mb-2">
                {p.category} · {p.year}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl mb-3">{p.name}</h2>
              <p className="text-sm text-accent-foreground/70 leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs border border-white/15 bg-white/5">{s}</span>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full text-sm">
                  <Github className="w-4 h-4" /> Code
                </a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-1.5 justify-center lg:justify-start">
            {projects.map((_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all ${i === active ? "bg-primary w-8" : "bg-border w-3"}`} />
            ))}
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <div className="rounded-[2rem] bg-accent text-accent-foreground p-10 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h3 className="font-display text-3xl lg:text-5xl tracking-tight max-w-lg">
            Got a project worth <span className="text-primary italic">building?</span>
          </h3>
          <Link to="/" hash="contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium self-start">
            Start a conversation <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
