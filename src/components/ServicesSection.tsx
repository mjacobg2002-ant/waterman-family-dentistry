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
          <span className="eyebrow-chip">What We Offer</span>
          <h2 className="section-title mt-5">
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
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 shadow-card ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:border-evergreen-600/20 hover:shadow-lift"
            >
              {/* gradient accent that grows on hover */}
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-evergreen-50 text-evergreen-600 shadow-sm transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={service.icon} className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-harbor-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-charcoal/70">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-evergreen-700">
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
