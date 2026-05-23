import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Sparkle } from "lucide-react";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects" },
      { name: "description", content: "Selected projects by Miracle A. Ezeh — React, Next.js & TypeScript work shipped for studios, schools and product teams." },
      { property: "og:title", content: "Projects" },
      { property: "og:description", content: "Selected projects: education portals, learning platforms, commerce surfaces and more." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Portfolio", "Website", "WebApp", "Customized Website", "Mobile App"];

  const filteredProjects = filter === "All"
    ? projects.slice(0, 6)
    : projects.filter(p => p.category === filter);

  const p = filteredProjects[active] || filteredProjects[0];

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary text-[10px] sm:text-xs mb-5 uppercase tracking-wider font-medium">
              <Sparkle className="w-3 h-3 text-primary" /> Selected work
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.9]">
              The <span className="text-primary italic">things</span> I've<br className="hidden sm:block" /> been making.
            </h1>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6 shrink-0">
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed lg:text-right">
              A curated selection of digital products, design systems and experimental interfaces.
            </p>
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setActive(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs transition-all border font-medium ${
                    filter === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Split: list left, sticky preview right */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
        {/* List */}
        <div className="min-h-[300px]">
          {filteredProjects.length > 0 ? (
            <ol className="border-t border-border">
              {filteredProjects.map((proj, i) => {
                const isActive = i === active;
                return (
                  <li key={proj.slug} id={proj.slug} className="border-b border-border">
                    <button
                      onClick={() => setActive(i)}
                      className="w-full text-left py-6 sm:py-10 flex items-start gap-4 sm:gap-8 group relative"
                    >
                      <span className={`font-display text-lg sm:text-xl w-6 sm:w-8 shrink-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground/40 group-hover:text-primary/60"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                          <h2 className={`font-display text-2xl sm:text-4xl lg:text-5xl tracking-tight transition-colors ${isActive ? "text-primary" : "group-hover:text-primary"}`}>
                            {proj.name}
                          </h2>
                          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">
                            {proj.category} · {proj.year}
                          </span>
                        </div>
                        
                        <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed transition-all duration-500 overflow-hidden ${isActive ? "max-h-40 opacity-100 mb-6" : "max-h-0 sm:max-h-6 opacity-0 sm:opacity-100 sm:truncate"}`}>
                          {proj.tagline}
                          <span className="block sm:hidden mt-2 text-xs opacity-70">{proj.description}</span>
                        </p>

                        {/* Tech Stack - Mobile Only */}
                        <div className={`flex flex-wrap gap-1.5 transition-all duration-500 overflow-hidden lg:hidden ${isActive ? "max-h-20 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                          {proj.stack.map((s) => (
                            <span key={s} className="px-2 py-0.5 rounded-full text-[10px] border border-border bg-secondary text-muted-foreground">{s}</span>
                          ))}
                        </div>

                        {/* Links - Mobile Only */}
                        <div className={`flex items-center gap-3 lg:hidden transition-all duration-500 overflow-hidden ${isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                          <a 
                            href={proj.repo} 
                            target="_blank" 
                            rel="noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary border border-border text-xs font-medium text-foreground hover:bg-border transition"
                          >
                            <Github className="w-4 h-4" /> Code
                          </a>
                          {proj.live && (
                            <a 
                              href={proj.live} 
                              target="_blank" 
                              rel="noreferrer" 
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition"
                            >
                              <ExternalLink className="w-4 h-4" /> Live
                            </a>
                          )}
                        </div>
                      </div>

                      {/* External Arrow - Desktop Only */}
                      <div className="hidden lg:flex shrink-0 pt-2">
                        <div className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all ${isActive ? "bg-primary border-primary text-primary-foreground rotate-0" : "group-hover:border-primary group-hover:text-primary -rotate-45"}`}>
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="py-20 text-center border-t border-border">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Sticky preview - Desktop Only */}
        {p && (
          <aside className="hidden lg:block lg:sticky lg:top-28 self-start">
            <div className="group/preview relative rounded-[2.5rem] overflow-hidden bg-accent shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden relative">
                {p.video && (
                  <video
                    key={p.video}
                    src={p.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-110 opacity-50 "
                  />
                )}
              </div>

              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end bg-gradient-to-t from-accent via-accent/40 to-transparent">
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-white/10 bg-white/5 text-white/80">{s}</span>
                    ))}
                  </div>
                  <p className="text-base text-accent-foreground/70 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs font-bold transition-all border border-white/20 text-white">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-xs font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-2 justify-center">
              {filteredProjects.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-10" : "bg-border w-4 hover:bg-primary/40"}`} 
                />
              ))}
            </div>
          </aside>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-32">
        <div className="rounded-[3rem] bg-accent text-accent-foreground p-8 sm:p-16 lg:p-24 flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-2xl leading-[0.95] mb-6">
              Ready to ship something <span className="text-primary italic underline decoration-primary/30 underline-offset-8">extraordinary?</span>
            </h3>
            <p className="text-accent-foreground/60 text-lg sm:text-xl max-w-md leading-relaxed">
              I'm currently accepting new projects and consulting roles.
            </p>
          </div>
          <Link 
            to="/" 
            hash="contact" 
            className="relative z-10 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
          >
            Start a project <ArrowUpRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
