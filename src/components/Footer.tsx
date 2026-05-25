import { Link } from "@tanstack/react-router";
import { ArrowUpRight,  } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tight max-w-3xl">
            Let's <span className="text-primary">connect</span> there
          </h2>
          <a
            href="mailto:amichy07@gmail.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition self-start lg:self-auto"
          >
            Hire me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm pt-10 border-t border-white/10">
          <div className="col-span-2">
            <div className="font-display text-xl text-primary mb-3">Miracle A. Ezeh</div>
            <p className="text-accent-foreground/60 max-w-sm leading-relaxed">
              Frontend developer crafting fast, accessible, beautifully detailed
              products with React, Next.js & TypeScript.
            </p>
          </div>
          <div>
            <div className="text-accent-foreground/50 uppercase tracking-[0.18em] text-xs mb-3">Navigation</div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>

            </ul>
          </div>
          <div>
            <div className="text-accent-foreground/50 uppercase tracking-[0.18em] text-xs mb-3">Elsewhere</div>
            <ul className="space-y-2">
              <li><a href="https://github.com/Mimieamichy" target="_blank" className="hover:text-primary">GitHub</a></li>
              <li><a href="https://x.com/dev_amichy" target="_blank" className="hover:text-primary">Twitter</a></li>
              <li><a href="mailto:amichy07@gmail.com" target="_blank" className="hover:text-primary">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-accent-foreground/40">
          <div>© {new Date().getFullYear()} Miracle A. Ezeh </div>
          <div>Made in 🇳🇬. </div>
        </div>
      </div>
    </footer>
  );
}
