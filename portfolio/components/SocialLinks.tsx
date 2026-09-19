import { SOCIAL_LINKS } from "@/lib/data";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

export default function SocialLinks({ className = "", iconSize = 18 }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-hair text-secondary transition-colors duration-200 hover:border-accent-line hover:text-accent"
          >
            <Icon size={iconSize} strokeWidth={1.75} />
          </a>
        </li>
      ))}
    </ul>
  );
}
