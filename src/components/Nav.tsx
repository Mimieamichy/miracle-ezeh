import { Link, useLocation } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

type Item = { to?: string; hash?: string; label: string };
const items: Item[] = [
  { to: "/", label: "Home" },
  { hash: "about", label: "About" },
  { hash: "services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { hash: "contact", label: "Contact" },
];

export function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3">
      <nav className="flex items-center gap-1 rounded-full bg-accent text-accent-foreground pl-2 pr-2 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] backdrop-blur w-full max-w-3xl">
        <Link
          to="/"
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-primary text-primary-foreground font-display text-sm shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">ME</span>
        </Link>
        <ul className="flex items-center gap-0.5 overflow-x-auto no-scrollbar text-sm flex-1 justify-end sm:justify-center">
          {items.map((i) => {
            if (i.hash) {
              const href = onHome ? `#${i.hash}` : `/#${i.hash}`;
              return (
                <li key={i.hash}>
                  <a
                    href={href}
                    className="px-3 sm:px-4 py-1.5 rounded-full transition whitespace-nowrap text-accent-foreground/70 hover:text-accent-foreground"
                  >
                    {i.label}
                  </a>
                </li>
              );
            }
            const active = i.to === "/" ? pathname === "/" : pathname.startsWith(i.to!);
            return (
              <li key={i.to}>
                <Link
                  to={i.to!}
                  className={`px-3 sm:px-4 py-1.5 rounded-full transition whitespace-nowrap ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-accent-foreground/70 hover:text-accent-foreground"
                  }`}
                >
                  {i.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
