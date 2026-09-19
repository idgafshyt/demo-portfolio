import { Terminal } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-void">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-lg font-semibold text-primary"
            >
              <Terminal size={18} className="text-accent" strokeWidth={1.75} />
              {SITE.name}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              {SITE.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-tertiary">
              Find me on
            </p>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-3 border-t border-hair pt-6 text-xs text-tertiary sm:flex-row sm:justify-between">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p className="font-mono">built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
