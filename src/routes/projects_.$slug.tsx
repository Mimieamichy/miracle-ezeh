import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink, Sparkles, BookOpen, Clock, Tag } from "lucide-react";
import { projects } from "@/lib/projects";
import { caseStudies } from "@/lib/caseStudies";

export const Route = createFileRoute("/projects_/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    const study = caseStudies[params.slug];
    if (!project || !study) throw notFound();
    return { project, study };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const title = project ? `Case Study: ${project.name} — Miracle A. Ezeh` : "Case Study";
    const desc = project?.description ?? "Case Study by Miracle A. Ezeh.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [{ rel: "canonical", href: `/projects/${project?.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 pt-28 bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-5xl mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">The case study you are looking for does not exist or is still under construction.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
      </div>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project, study } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${project.accent} opacity-5 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3`} />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Navigation */}
        <div className="mb-10">
          <Link
            to="/projects"
            hash={project.slug}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to projects
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-secondary/50 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-primary" /> Case Study
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-border bg-secondary/30 text-[10px] sm:text-xs text-muted-foreground uppercase font-medium">
              <Clock className="w-3 h-3" /> {project.year}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-border bg-secondary/30 text-[10px] sm:text-xs text-muted-foreground uppercase font-medium">
              <Tag className="w-3 h-3" /> {project.category}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-display">
            {study.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full text-xs font-semibold border border-border bg-secondary text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* Dynamic Project Details Grid */}
        <section className="grid md:grid-cols-12 gap-10 lg:gap-16 border-t border-border pt-12">
          {/* Left Column: Problem */}
          <div className="md:col-span-6 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> {study.problem.title}
            </h2>
            <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
              {study.problem.content}
            </div>
          </div>

          {/* Right Column: Role & Decisions */}
          <div className="md:col-span-6 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> {study.roleAndDecisions.title}
            </h2>
            <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
              {study.roleAndDecisions.content}
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        {study.outcome && (
          <section className="border-t border-border mt-12 pt-12 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> {study.outcome.title}
            </h2>
            <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line max-w-3xl">
              {study.outcome.content}
            </div>
          </section>
        )}

        {/* Gallery / Screenshots Section */}
        <section className="border-t border-border mt-16 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl tracking-tight mb-8">
            Project Screenshots & Interfaces
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {study.screenshots.map((s, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border border-border bg-secondary shadow-lg flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden bg-secondary/50">
                  <img
                    src={s.src}
                    alt={s.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const placeholder = parent.querySelector(".img-placeholder");
                        if (placeholder) placeholder.classList.remove("hidden");
                      }
                    }}
                  />
                  {/* Fallback layout if screenshot image file is missing */}
                  <div className="img-placeholder hidden absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-secondary/90">
                    <Sparkles className="w-8 h-8 text-primary/50 mb-3 animate-pulse" />
                    <div className="font-semibold text-sm mb-1 text-foreground">{s.caption}</div>
                    <p className="text-xs text-muted-foreground/60 max-w-xs">
                      Screenshot placeholder. Drop your image into `public{s.src}` to display it here.
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t border-border/50 bg-secondary/30 mt-auto">
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Actions */}
        <footer className="border-t border-border mt-20 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/projects"
            hash={project.slug}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to projects
          </Link>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-border bg-background text-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:bg-secondary transition"
            >
              <Github className="w-4 h-4" /> View Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition"
              >
                <ExternalLink className="w-4 h-4" /> Visit Live Site
              </a>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
