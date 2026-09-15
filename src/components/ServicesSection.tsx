import { ArrowUpRight } from 'lucide-react'
import { services, externalLinks } from '../data/site'
import { Icon } from './Icon'
import { useReveal } from '../lib/useReveal'

export function ServicesSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section id="services" className="scroll-mt-24 bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <div ref={head.ref} className={`mx-auto max-w-2xl text-center ${head.className}`}>
          <span className="eyebrow justify-center">What We Offer</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-harbor-900">
            Comprehensive Care for Every Smile
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
            From routine cleanings to cosmetic and restorative dentistry, Dr. Waterman and her team
            provide thoughtful care for your whole family — all in one trusted place.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-evergreen-600/20 hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-evergreen-50 text-evergreen-600 transition-colors group-hover:bg-evergreen-600 group-hover:text-white">
                <Icon name={service.icon} className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-harbor-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-charcoal/70">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-evergreen-700">
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={externalLinks.services} className="btn-primary">
            Explore All Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
