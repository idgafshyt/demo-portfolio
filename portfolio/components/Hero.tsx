import Image from "next/image";
import { ArrowRight, MoveDown } from "lucide-react";
import { SITE } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

const [firstName] = SITE.name.split(" ");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="grid-veil absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <span className="text-primary">Hi, It&apos;s </span>
            <span className="accent-gradient-text">{firstName}</span>
            <br />
            <span className="text-primary">I&apos;m a </span>
            <span className="accent-gradient-text">{SITE.role}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
            {SITE.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="accent-gradient group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-accent-ink transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_var(--accent-from)]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-hair-strong px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:border-accent-line hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-tertiary">
              Find me on
            </span>
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in [animation-delay:150ms]">
          <div className="animate-float relative">
            <div className="glow-circle absolute inset-[-6%] -z-10 rounded-full opacity-70" />
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 shadow-2xl">
              <Image
                src="/me.png.PNG"
                alt={`Portrait of ${SITE.name}`}
                fill
                sizes="(min-width: 1024px) 384px, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-tertiary transition-colors hover:text-accent sm:block"
      >
        <MoveDown size={20} className="animate-float" />
      </a>
    </section>
  );
}
