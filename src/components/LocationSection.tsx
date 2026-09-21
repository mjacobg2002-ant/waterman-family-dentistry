import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { business, hours } from '../data/site'
import { useReveal } from '../lib/useReveal'

export function LocationSection() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="location" className="scroll-mt-24 bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div ref={reveal.ref} className={`max-w-2xl ${reveal.className}`}>
          <span className="eyebrow-chip">Visit Us</span>
          <h2 className="section-title mt-5">
            Conveniently in Virginia Beach
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
            Find us on Lynnhaven Parkway. We look forward to welcoming you and your family.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Details */}
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-8 shadow-card">
            <dl className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-evergreen-600" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal/50">Address</dt>
                  <dd className="mt-1 text-base text-charcoal/90">
                    {business.name}
                    <br />
                    {business.address.line1}
                    <br />
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-evergreen-600" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal/50">Phone</dt>
                  <dd className="mt-1">
                    <a href={business.phoneHref} className="text-base text-charcoal/90 hover:text-evergreen-700">
                      {business.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-evergreen-600" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal/50">Email</dt>
                  <dd className="mt-1">
                    <a href={business.emailHref} className="text-base text-charcoal/90 hover:text-evergreen-700">
                      {business.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-evergreen-600" aria-hidden="true" />
                <div className="w-full">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-charcoal/50">Office Hours</dt>
                  <dd className="mt-2 space-y-1.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-6 text-[15px]">
                        <span className="text-charcoal/70">{h.day}</span>
                        <span className={h.close ? 'font-medium text-charcoal/90' : 'text-charcoal/45'}>
                          {h.close ? `${h.open} – ${h.close}` : 'Closed'}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={business.mapsDirections} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
              <a href={business.phoneHref} className="btn-secondary flex-1">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call the Office
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[360px] overflow-hidden rounded-[1.5rem] border border-black/5 shadow-card">
            <iframe
              title={`Map to ${business.name}`}
              src={business.mapEmbed}
              className="h-full min-h-[360px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
