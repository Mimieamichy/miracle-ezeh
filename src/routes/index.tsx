import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Star,
  Layout,
  Code2,
  Sparkles,
  Quote,
  Send,
  Check,
  Asterisk,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import image from "@/assets/miracle-ezeh.jpeg";
import { projects, testimonials } from "@/lib/projects";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miracle A. Ezeh Frontend Developer & React Engineer" },
      { name: "description", content: "I'm Miracle  a frontend developer with 4+ years building React, Next.js & TypeScript products for teams of 50+ staff and 500+ users." },
      { property: "og:title", content: "Miracle A. Ezeh Frontend Developer" },
      { property: "og:description", content: "Frontend developer building fast, accessible, beautifully detailed products." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Layout,
    title: "UI Engineering",
    blurb:
      "Pixel-honest, accessible interfaces shipped with React, TypeScript and a respect for typography.",
  },
  {
    icon: Code2,
    title: "Web Apps",
    blurb:
      "Next.js & TanStack apps with SSR/SSG, fast LCP, REST integration and clean state.",
  },
  {
    icon: Sparkles,
    title: "Design Systems",
    blurb:
      "Reusable component libraries, semantic tokens and patterns your whole team can extend.",
  },
];

const experience = [
  {
    role: "Frontend Developer & Facilitator",
    company: "Harley Innovations Hub",
    period: "Jan 2026 – Present",
    detail: "Built internal tools & learning platforms in React/Next.js. Facilitated curricula on React, state, and modern Git workflows.",
  },
  {
    role: "Frontend Developer & IT Officer",
    company: "Dennic Electrical Construction",
    period: "Jun 2025 – Dec 2025",
    detail: "Owned the company's web presence and internal tooling. Streamlined workflows across a 200+ staff organisation.",
  },
  {
    role: "Freelance Frontend Developer",
    company: "Independent",
    period: "2022 – Present",
    detail: "Shipped portfolios, dashboards, school portals and commerce surfaces for clients across Nigeria and abroad.",
  },
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Hello
            </span>
          </div>

          <h1 className="font-display text-center text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight">
            I'm <span className="text-primary italic">Miracle</span>,<br />
            Frontend Developer.
          </h1>

          <div className="relative mt-12 lg:mt-16 flex justify-center">
            {/* burgundy circle backdrop */}
            <div className="absolute top-8 lg:top-12 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full bg-primary" />
            <img
              src={image}
              alt="Miracle A. Ezeh"
              className="relative z-10 w-64 sm:w-80 lg:w-[28rem] aspect-square object-cover rounded-full grayscale-[100%]"
            />

            {/* floating quote left */}
            <div className="hidden md:block absolute left-0 top-12 max-w-[14rem] z-20">
              <Quote className="w-5 h-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                "I build interfaces that feel quiet, precise and quick to the touch."
              </p>
            </div>

            {/* floating rating right */}
            <div className="hidden md:flex absolute right-0 top-12 flex-col items-end z-20">
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="font-display text-3xl leading-none">4 Years</div>
              <div className="text-xs text-muted-foreground mt-1">Experience</div>
            </div>

            {/* CTAs floating bottom */}
            <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 md:px-5 md:py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition shadow-lg"
              >
                Portfolio <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#contact"
                className=" hidden md:inline-flex items-center gap-2 bg-background text-foreground border border-border px-3 py-1.5 md:px-5 md:py-2.5 rounded-full font-small md:font-medium text-xs md:text-sm hover:bg-secondary transition"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — dark band */}
      <section id="services" className="bg-accent text-accent-foreground rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="max-w-md text-sm text-accent-foreground/60 leading-relaxed">
              Frontend engineering for founders, studios and product teams  from
              a single marketing page to a full design system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.07] transition"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-accent-foreground/60 leading-relaxed mb-10">
                  {s.blurb}
                </p>
                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:rotate-12 transition">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE timeline */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-center mb-16">
            My Work <span className="text-primary">Experience</span>
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-border -translate-x-1/2" />
            <ul className="space-y-12">
              {experience.map((e, i) => (
                <li key={e.role} className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-start">
                  <div className={i % 2 === 0 ? "md:order-1 md:text-right" : "md:order-3"}>
                    <div className="font-display text-xl">{e.company}</div>
                    <div className="text-sm text-muted-foreground mt-1">{e.period}</div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary mt-2 shrink-0 ring-4 ring-primary/15 md:order-2" />
                  <div className={i % 2 === 0 ? "md:order-3" : "md:order-1 md:text-right"}>
                    <div className="font-display text-xl">{e.role}</div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section className="px-3 lg:px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-secondary rounded-[2rem] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 p-8 lg:p-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-48 h-48 lg:w-72 lg:h-72 bg-primary rounded-full" />
              <img
                src={image}
                alt="Miracle smiling"
                className="relative rounded-3xl object-cover w-full aspect-[4/5] grayscale-[100%]"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-4">
                Why <span className="text-primary">Hire me?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-10">
                Four years of shipping work that performs in production 
                accessible, fast, and easy for teams to extend. I care about the
                small details because they add up.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="font-display text-4xl text-primary">20+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects shipped</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-primary">100+</div>
                  <div className="text-sm text-muted-foreground mt-1">Staff impacted</div>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90"
              >
                Hire me <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight max-w-2xl">
              Lets have a look at<br />
              my <span className="text-primary">Portfolio</span>
            </h2>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90"
            >
              See All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((p) => (
              <Link
                to="/projects"
                hash={p.slug}
                key={p.slug}
                className="group block rounded-3xl overflow-hidden bg-secondary border border-border"
              >
                <div className="relative aspect-video overflow-hidden">
                  {p.video && (
                    <video
                      src={p.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-[0.18em]">{p.category}</div>
                      <div className="font-display text-3xl text-white mt-1">{p.name}</div>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-10 justify-center">
            {["Landing Page", "Product Design", "Animation", "Design Systems", "Cards"].map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-secondary border border-border text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="py-16 lg:py-20 bg-accent text-accent-foreground overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Quote className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl tracking-tight">
              What <span className="text-primary italic">Clients</span> Say
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 px-4">
                    <div className="max-w-3xl mx-auto">
                      <p className="font-display text-xl md:text-2xl lg:text-3xl leading-tight mb-6 text-accent-foreground/90 italic">
                        "{t.content}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="font-display text-lg text-primary">{t.author}</div>
                        {t.role && (
                          <div className="text-xs text-accent-foreground/50 mt-1 uppercase tracking-widest font-medium">
                            {t.role}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? "bg-primary w-8" : "bg-white/10 w-2 hover:bg-white/30"}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-primary text-primary-foreground py-5 overflow-hidden">
        <div className="flex gap-12 marquee-track whitespace-nowrap font-display text-2xl lg:text-3xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-12 shrink-0">
              {["React", "Next.js", "TypeScript", "Tailwind", "TanStack", "Design Systems", "SSR", "Accessibility"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w}
                  <Asterisk className="w-5 h-5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight">
              From my <span className="text-primary">blog</span>
            </h2>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90"
            >
              See All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p, i) => (
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                key={p.slug}
                className="group block bg-secondary rounded-3xl overflow-hidden border border-border"
              >
                <div className={`aspect-[4/3] p-6 flex items-end ${
                  i === 0 ? "bg-gradient-to-br from-primary/20 via-primary/30 to-primary/60" :
                  i === 1 ? "bg-gradient-to-br from-emerald-300 to-teal-500" :
                  "bg-gradient-to-br from-primary/20 to-primary/50"
                }`}>
                  <div className="font-display text-5xl text-accent/80 leading-none">{p.category}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.18em] mb-2">
                    {p.readTime} · {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                  <h3 className="font-display text-xl leading-snug group-hover:text-primary transition mb-4">
                    {p.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    Read article <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight">
            Have an Awesome Project<br />
            Idea? <span className="text-primary italic">Let's Discuss</span>
          </h2>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:amichy07@gmail.com?subject=Project%20from%20${encodeURIComponent((e.currentTarget.elements.namedItem("email") as HTMLInputElement).value)}`; }}
            className="mt-12 flex items-center gap-2 max-w-xl mx-auto p-1.5 sm:p-2 bg-secondary border border-border rounded-full"
          >
            <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-full bg-primary text-primary-foreground items-center justify-center ml-1">
              <Send className="w-4 h-4" />
            </div>
            <input
              name="email"
              type="email"
              required
              placeholder="hello@youremail.com"
              className="flex-1 bg-transparent px-4 sm:px-3 py-2 outline-none text-sm placeholder:text-muted-foreground min-w-0"
            />
            <button
              type="submit"
              className="px-5 sm:px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 shrink-0"
            >
              Send
            </button>
          </form>
          <div className="mt-6 text-sm text-muted-foreground">
            or email me directly at{" "}
            <a href="mailto:amichy07@gmail.com" className="text-primary underline underline-offset-4">amichy07@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
