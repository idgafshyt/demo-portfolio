import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-xs sm:text-sm">Services</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          What I can build for you
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary">
          A focused set of services covering the full lifecycle of a web
          product — from first line of code to the maintenance after launch.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-hair bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-line"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_var(--accent-soft),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hair bg-surface-2 text-accent transition-colors duration-300 group-hover:border-accent-line">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
