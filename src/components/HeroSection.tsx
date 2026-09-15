import { CalendarCheck, Phone, MapPin, Check } from 'lucide-react'
import { business, externalLinks, heroTrustPoints } from '../data/site'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      {/* soft sage wash behind the composition */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(120% 80% at 85% 10%, rgba(138,167,154,0.22), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(199,168,106,0.10), transparent 60%)',
        }}
      />
      <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        {/* Copy */}
        <div className="reveal is-visible max-w-xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-evergreen-600/50" />
            Serving Virginia Beach Since {business.since}
          </span>
          <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.02] text-harbor-900">
            Thoughtful Dentistry.
            <span className="block text-evergreen-600">Lifelong Relationships.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-charcoal/75">
            Precise, gentle dental care centered around your comfort, your goals, and the
            long-term health of your smile — with {business.doctor} in Virginia Beach.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={externalLinks.requestAppointment} className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Request an Appointment
            </a>
            <a href={business.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {heroTrustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/80">
                <Check className="h-4 w-4 text-evergreen-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image composition */}
        <div className="reveal is-visible relative">
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-soft ring-1 ring-black/5">
            <img
              src="/images/waterman/waterman-reception.webp"
              alt="The welcoming front desk and reception area at Waterman Family Dentistry"
              className="h-full w-full object-cover"
              width={1100}
              height={1100}
              fetchPriority="high"
            />
          </div>

          {/* Floating location chip */}
          <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-harbor-900 shadow-card ring-1 ring-black/5 sm:left-6">
            <MapPin className="h-4 w-4 text-evergreen-600" aria-hidden="true" />
            Virginia Beach, VA
          </div>
        </div>
      </div>
    </section>
  )
}
