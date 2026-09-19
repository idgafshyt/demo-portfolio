import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";

const DETAILS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}` },
  { icon: MapPin, label: "Location", value: SITE.location },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-hair bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow text-xs sm:text-sm">Contact</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary">
          Have a project in mind or just want to talk shop? My inbox is open.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {DETAILS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-hair bg-surface p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hair bg-surface-2 text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-tertiary">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm text-primary">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="transition-opacity hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-tertiary">
                Find me on
              </p>
              <SocialLinks className="mt-4" />
            </div>
          </div>

          <div className="rounded-2xl border border-hair bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
