import Image from "next/image";
import { GraduationCap, Briefcase, Heart, Target } from "lucide-react";
import { SITE, STATS } from "@/lib/data";
import StatCounter from "@/components/StatCounter";

const DETAILS = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Data Science & Engineering practicum, focused on applied software development and full-stack project work.",
  },
  {
    icon: Briefcase,
    title: "Experience",
    body: "Built and shipped internal tools end-to-end, from database schema to the interface staff use every day.",
  },
  {
    icon: Heart,
    title: "Interests",
    body: "Clean systems design, developer tooling, and turning messy spreadsheets into software people enjoy using.",
  },
  {
    icon: Target,
    title: "Career Goals",
    body: "Growing into a full-stack role where I can own products end-to-end — from data model to shipped feature.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-hair bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-xs sm:text-sm">About</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          A little about how I work
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-hair-strong bg-surface">
              <Image
                src="/me.PNG"
                alt={`${SITE.name} at work`}
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
              />
            </div>
            <div className="glass-panel absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 font-mono text-xs text-secondary">
            
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-secondary sm:text-lg">
              I&apos;m {SITE.name}, a full-stack developer who enjoys the unglamorous parts
              of software as much as the polished ones — data modeling, error states,
              the details that make an app trustworthy. My recent work centers on
              Next.js and Supabase, building tools that real teams rely on day to day.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {DETAILS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hair bg-surface text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-primary">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-hair pt-10 sm:grid-cols-4">
              {STATS.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
