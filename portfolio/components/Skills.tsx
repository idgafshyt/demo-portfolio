import { SKILL_CATEGORIES, SKILL_LEVELS } from "@/lib/data";
import SkillBar from "@/components/SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-hair bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-xs sm:text-sm">Skills</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Tools I reach for
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.label}
                className="rounded-2xl border border-hair bg-surface p-5"
              >
                <h3 className="eyebrow text-xs">{category.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-hair bg-surface-2 px-3 py-1 text-xs text-secondary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-hair bg-surface p-6 sm:p-8">
            <h3 className="eyebrow text-xs">Proficiency</h3>
            <div className="mt-6 flex flex-col gap-6">
              {SKILL_LEVELS.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
