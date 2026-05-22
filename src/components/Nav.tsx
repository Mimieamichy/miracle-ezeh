import { Link, useLocation } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

type Item = { to?: string; hash?: string; label: string; mobile?: boolean };
const items: Item[] = [
  { to: "/", label: "Home" },
  { hash: "about", label: "About" },
  { hash: "services", label: "Services" },
  { to: "/projects", label: "Projects", mobile: true },
  { to: "/blog", label: "Blog", mobile: true },
  { hash: "contact", label: "Contact", mobile: true },
];

export function Nav() {
  const { pathname, hash } = useLocation();
  
  // Normalize hash for comparison
  const currentHash = hash?.replace("#", "");

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3">
      <nav className="flex items-center gap-1 rounded-full bg-accent text-accent-foreground pl-2 pr-2 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] backdrop-blur w-full max-w-3xl">
        <Link
          to="/"
          activeOptions={{ exact: true }}
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-primary text-primary-foreground font-display text-sm shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">ME</span>
        </Link>
        <ul className="flex items-center gap-0.5 overflow-x-auto no-scrollbar text-sm flex-1 justify-end sm:justify-center">
          {items.map((i) => {
            const isMobileVisible = i.mobile;
            
            // Determine if active
            let isActive = false;
            if (i.hash) {
              isActive = currentHash === i.hash;
            } else if (i.to) {
              isActive = i.to === "/" 
                ? (pathname === "/" && !currentHash) 
                : pathname.startsWith(i.to);
            }

            return (
              <li key={i.label} className={isMobileVisible ? "" : "hidden sm:block"}>
                <Link
                  to={i.to || "/"}
                  hash={i.hash}
                  className={`px-3 sm:px-4 py-1.5 rounded-full transition whitespace-nowrap ${
                    isActive
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
