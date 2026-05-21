import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Miracle A. Ezeh" },
      { name: "description", content: "Notes on frontend engineering, SSR, design systems and shipping React faster." },
      { property: "og:title", content: "Blog — Miracle A. Ezeh" },
      { property: "og:description", content: "Notes on frontend engineering, SSR, design systems and shipping React faster." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary text-xs mb-5">
          Field notes
        </div>
        <h1 className="font-display text-5xl lg:text-7xl tracking-tight max-w-3xl">
          Things I've learned, <span className="text-primary italic">written down.</span>
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group block rounded-3xl overflow-hidden bg-accent text-accent-foreground"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-primary/30 via-primary/50 to-primary p-8 flex items-end">
              <div className="font-display text-6xl text-accent/80 leading-none">{featured.category}</div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent-foreground/50 mb-4">
                  Featured · {featured.readTime} · {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <h2 className="font-display text-3xl lg:text-5xl tracking-tight leading-[1.05] mb-5">
                  {featured.title}
                </h2>
                <p className="text-accent-foreground/60 leading-relaxed">{featured.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                Read article <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {rest.map((p) => (
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              key={p.slug}
              className="group block p-8 rounded-3xl bg-secondary border border-border hover:bg-secondary/70 transition"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {p.category} · {p.readTime}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl tracking-tight mb-3 group-hover:text-primary transition">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary">
                Read <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
