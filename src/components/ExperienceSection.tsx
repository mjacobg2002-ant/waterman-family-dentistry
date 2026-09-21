import { experiencePoints } from '../data/site'
import { Icon } from './Icon'
import { useReveal } from '../lib/useReveal'

export function ExperienceSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section
      id="experience"
      className="grain relative scroll-mt-24 overflow-hidden bg-harbor-900 py-20 text-white lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(33,182,168,0.28), transparent 70%)' }}
      />
      <div className="container-x relative">
        <div ref={head.ref} className={`mx-auto max-w-2xl text-center ${head.className}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
            The Waterman Difference
          </span>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-white">
            Care That Feels Different — On Purpose
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            We designed our practice around the way care should feel — unhurried, personal, and
            centered entirely on you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiencePoints.map((point) => (
            <div
              key={point.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-champagne/15 text-champagne transition-colors group-hover:bg-champagne group-hover:text-harbor-900">
                <Icon name={point.icon} className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
