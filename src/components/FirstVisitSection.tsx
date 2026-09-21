import { ArrowUpRight } from 'lucide-react'
import { firstVisit, externalLinks } from '../data/site'
import { useReveal } from '../lib/useReveal'

export function FirstVisitSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section id="patient-info" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div ref={head.ref} className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end ${head.className}`}>
          <div>
            <span className="eyebrow-chip">New Patients</span>
            <h2 className="section-title mt-5">
              What Your First Visit Looks Like
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-charcoal/70 lg:pb-2">
            We&rsquo;ve made becoming a patient simple and stress-free. Here&rsquo;s exactly what to
            expect — no uncertainty, no pressure, just attentive care from the moment you arrive.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {firstVisit.map((s) => (
            <li key={s.step} className="group relative card-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="font-serif text-4xl font-semibold text-evergreen-500/35 transition-colors group-hover:text-evergreen-500">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-harbor-900">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal/70">{s.description}</p>
              <span
                className="absolute right-6 top-7 h-2 w-2 rounded-full bg-evergreen-500/30 transition-colors group-hover:bg-evergreen-500"
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-harbor-900 px-8 py-8 text-white sm:flex-row">
          <p className="text-center text-lg font-medium sm:text-left">
            Ready to become part of the Waterman family?
          </p>
          <a
            href={externalLinks.patientInfo}
            className="btn bg-white text-evergreen-700 shadow-soft hover:-translate-y-0.5"
          >
            New Patient Information
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
