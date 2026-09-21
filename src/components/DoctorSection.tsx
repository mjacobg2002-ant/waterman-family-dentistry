import { GraduationCap, Shield, MapPin, ArrowUpRight } from 'lucide-react'
import { externalLinks } from '../data/site'
import { useReveal } from '../lib/useReveal'

const milestones = [
  { icon: GraduationCap, text: 'West Point graduate, Class of 1995' },
  { icon: Shield, text: 'Former quartermaster officer · Virginia Army National Guard' },
  { icon: GraduationCap, text: 'VCU Dental School, 2004 (formerly Medical College of Virginia)' },
  { icon: MapPin, text: 'Practicing in Virginia Beach since 2005' },
]

export function DoctorSection() {
  const media = useReveal<HTMLDivElement>()
  const copy = useReveal<HTMLDivElement>()

  return (
    <section id="doctor" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        {/* Portrait */}
        <div ref={media.ref} className={media.className}>
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-[1.5rem] shadow-soft ring-1 ring-black/5">
              <img
                src="/images/waterman/dr-jennifer-waterman.jpg"
                alt="Dr. Jennifer Waterman in uniform with her children"
                className="w-full object-cover"
                loading="lazy"
                width={640}
                height={640}
              />
            </div>
            {/* Signature-style accent card — sits below the photo (never overlaps the faces) */}
            <div className="mt-4 rounded-2xl bg-harbor-900 p-5 text-white shadow-soft sm:max-w-sm">
              <p className="font-serif text-lg italic leading-snug text-white/95">
                Care and integrity, in every interaction.
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                Dr. Jennifer Waterman
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div ref={copy.ref} className={copy.className}>
          <span className="eyebrow">Meet Your Dentist</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-harbor-900">
            Meet Dr. Jennifer Waterman
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
            Dr. Waterman has cared for Virginia Beach smiles since 2005. Her path to dentistry
            began at the United States Military Academy at West Point, followed by service overseas
            as a quartermaster officer — a background that shaped her steady, detail-driven, and
            deeply personal approach to patient care.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
            Today she is proud to serve the Virginia Beach community and its military families,
            treating every patient with the same care and integrity that define her practice.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {milestones.map((m) => (
              <li key={m.text} className="flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-card ring-1 ring-black/5">
                <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-evergreen-600" aria-hidden="true" />
                <span className="text-sm leading-snug text-charcoal/85">{m.text}</span>
              </li>
            ))}
          </ul>

          <a href={externalLinks.about} className="btn-primary mt-8">
            Meet Dr. Waterman
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
