import { CheckCircle2 } from 'lucide-react'
import { useReveal } from '../lib/useReveal'
import { externalLinks } from '../data/site'

const themes = [
  'A team that genuinely gets to know each patient',
  'Recommendations guided by your individual goals',
  'A calm, professional and welcoming environment',
  'Care built on integrity, respect and long-term trust',
]

export function WelcomeSection() {
  const left = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>()

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div ref={right.ref} className={`order-2 lg:order-1 ${right.className}`}>
          <div className="relative">
            <img
              src="/images/waterman/waterman-waiting-room.jpg"
              alt="Comfortable, light-filled waiting area at Waterman Family Dentistry"
              className="w-full rounded-[1.5rem] object-cover shadow-soft ring-1 ring-black/5"
              loading="lazy"
              width={1600}
              height={1200}
            />
            <div className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-2xl border border-champagne/40 sm:block" aria-hidden="true" />
          </div>
        </div>

        <div ref={left.ref} className={`order-1 lg:order-2 ${left.className}`}>
          <span className="eyebrow-chip">Welcome</span>
          <h2 className="section-title mt-5">
            Dental Care Built Around You
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
            Our practice is committed to providing precise, effective oral care in a gentle
            manner — keeping our family of patients’ goals as our guide. We believe great dentistry
            begins with a genuine relationship.
          </p>

          <ul className="mt-7 space-y-3.5">
            {themes.map((theme) => (
              <li key={theme} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-evergreen-600" aria-hidden="true" />
                <span className="text-base text-charcoal/85">{theme}</span>
              </li>
            ))}
          </ul>

          <a href={externalLinks.about} className="btn-secondary mt-8">
            Learn About Our Practice
          </a>
        </div>
      </div>
    </section>
  )
}
