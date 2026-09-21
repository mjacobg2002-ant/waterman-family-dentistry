import { CalendarCheck, Phone, Star, ShieldCheck, Award, MapPin } from 'lucide-react'
import { business, externalLinks, heroTrustPoints, reviewSummary } from '../data/site'

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-harbor-900">
      {/* Full-bleed Virginia Beach background: static poster (also the reduced-motion fallback) + looping video */}
      <img
        src="/images/waterman/va-beach-hero-poster.jpg"
        alt="Aerial view of the Virginia Beach oceanfront at sunrise"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <video
        className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/waterman/va-beach-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/images/waterman/va-beach-hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility scrim — darker toward the left where the copy sits */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-harbor-900/92 via-harbor-900/62 to-harbor-900/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-harbor-900/80 via-transparent to-harbor-900/30"
        aria-hidden="true"
      />

      <div className="container-x flex min-h-[86vh] items-center py-20 lg:min-h-[88vh]">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
            Virginia Beach · Since {business.since}
          </span>

          <h1 className="mt-6 font-serif text-[clamp(2.7rem,6.4vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-white [text-shadow:0_2px_30px_rgba(9,20,34,0.45)]">
            Thoughtful Dentistry.
            <span
              className="mt-1 block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(115deg,#8ff0e4 0%,#e7cf96 90%)' }}
            >
              Lifelong Relationships.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">
            Precise, gentle dental care centered around your comfort, your goals, and the
            long-term health of your smile — with {business.doctor} on the Virginia Beach oceanfront.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={externalLinks.requestAppointment} className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Request an Appointment
            </a>
            <a href={business.phoneHref} className="btn bg-white/10 text-white ring-1 ring-white/40 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/20">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>

          {/* Rating + credibility row */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-[18px] w-[18px] fill-champagne text-champagne" />
                ))}
              </div>
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">{reviewSummary.rating.toFixed(1)}</span> from{' '}
                {reviewSummary.count}+ patients
              </p>
            </div>
            <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden="true" />
            <p className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
              <Award className="h-4 w-4 text-champagne" aria-hidden="true" />
              West Point graduate &amp; Army veteran
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6">
            {heroTrustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
                <ShieldCheck className="h-4 w-4 text-champagne" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
