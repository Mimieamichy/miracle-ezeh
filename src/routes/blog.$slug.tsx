import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, Check, Copy, Share2, Twitter, Linkedin } from "lucide-react";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} — Miracle A. Ezeh` : "Article";
    const desc = post?.excerpt ?? "Article by Miracle A. Ezeh.";
    const origin = process.env.SITE_ORIGIN ?? "";
    const ogImage = post?.heroImage ? (origin ? `${origin}${post.heroImage}` : post.heroImage) : undefined;
    const ogUrl = origin ? `${origin}/blog/${params.slug}` : `/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        ...(ogImage ? [{ property: "og:image", content: ogImage }, { name: "twitter:image", content: ogImage }] : []),
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: ogUrl },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: post
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              datePublished: post.date,
              author: { "@type": "Person", name: "Miracle A. Ezeh" },
              description: post.excerpt,
            }),
          }]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 pt-28">
      <div className="text-center">
        <h1 className="font-display text-5xl mb-3">Post not found</h1>
        <Link to="/blog" className="text-primary underline underline-offset-4">Back to blog</Link>
      </div>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;
  const tweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const onCopy = async () => {
    try {
      // copy only the page URL so social platforms pick up `og:image` for previews
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  const onShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try { await navigator.share({ title: post.title, text: post.excerpt, url: shareUrl }); }
      catch { /* user cancel */ }
    } else {
      onCopy();
    }
  };

  return (
    <article className="min-h-screen bg-background text-foreground pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
          {post.category} · {post.readTime} · {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </div>

        <h1 className="font-display text-4xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>

        {post.heroImage ? (
          <div className="relative aspect-[16/9] rounded-3xl mb-12 overflow-hidden">
            <img
              src={post.heroImage}
              alt={`${post.category} artwork`}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/25" aria-hidden />
            <div className="absolute left-8 bottom-8">
              <div className="font-display text-3xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">{post.category}</div>
            </div>
          </div>
        ) : (
          <div className={`aspect-[16/9] rounded-3xl mb-12 bg-gradient-to-br ${
            post.slug === "shipping-react-faster" ? "from-primary/30 via-primary/50 to-primary/80" :
            post.slug === "ssr-tradeoffs" ? "from-emerald-300 via-teal-400 to-cyan-600" :
            "from-primary/20 via-primary/40 to-primary"
          } flex items-end p-8`}>
            <div className="font-display text-5xl lg:text-7xl text-accent/80 leading-none">{post.category}</div>
          </div>
        )}

        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 mb-12">
          {
            (() => {
              const markdown = post.body.join("\n\n");
              return (
                <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
                  img: ({ node, ...props }) => (
                    // keep styling consistent with existing layout
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img className="rounded-lg mx-auto" {...props} />
                  ),
                  // allow paragraphs and emphasis/strong from Markdown normally
                }}>{markdown}</ReactMarkdown>
              );
            })()
          }
        </div>

        {/* Share bar */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 p-2 rounded-2xl sm:rounded-full bg-secondary border border-border mb-12 w-full sm:w-fit">
          <button onClick={onShare} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-medium">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button onClick={onCopy} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm hover:bg-background transition">
            {copied ? <><Check className="w-4 h-4 text-primary" /> Copied</> : <><Copy className="w-4 h-4" /> Copy link</>}
          </button>
          <a href={tweet} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm hover:bg-background transition" aria-label="Share on Twitter">
            <Twitter className="w-4 h-4" /> Tweet
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm hover:bg-background transition" aria-label="Share on LinkedIn">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground mb-4">Keep reading</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {posts.filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => (
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                key={p.slug}
                className="block p-5 rounded-2xl bg-secondary border border-border hover:bg-secondary/70 transition"
              >
                <div className="text-xs text-muted-foreground mb-1">{p.category}</div>
                <div className="font-display text-lg">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
