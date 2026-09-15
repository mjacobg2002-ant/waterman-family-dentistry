import { experiencePoints } from '../data/site'
import { Icon } from './Icon'
import { useReveal } from '../lib/useReveal'

export function ExperienceSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-harbor-900 py-20 text-white lg:py-28"
    >
      <div className="container-x">
        <div ref={head.ref} className={`mx-auto max-w-2xl text-center ${head.className}`}>
          <span className="eyebrow justify-center text-champagne">The Patient Experience</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-white">
            What to Expect at Every Visit
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
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-champagne/15 text-champagne">
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
