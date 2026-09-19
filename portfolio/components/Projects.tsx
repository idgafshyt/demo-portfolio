import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-xs sm:text-sm">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hair bg-surface transition-colors duration-300 hover:border-accent-line"
            >
              <div className="relative aspect-video overflow-hidden border-b border-hair">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-hair bg-surface-2 px-3 py-1 font-mono text-[11px] text-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-hair-strong px-4 py-2 text-xs font-semibold text-primary transition-colors duration-200 hover:border-accent-line hover:text-accent"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-accent-ink transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
