import { CalendarCheck, Phone, Star, ShieldCheck, Award } from 'lucide-react'
import { business, externalLinks, heroTrustPoints, reviewSummary } from '../data/site'

export function HeroSection() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-cream">
      {/* Layered brand mesh behind the composition */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-brand-radial" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(33,182,168,0.22), transparent 70%)' }}
      />

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Copy */}
        <div className="reveal is-visible max-w-xl">
          <span className="eyebrow-chip">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Serving Virginia Beach Since {business.since}
          </span>

          <h1 className="mt-6 font-serif text-[clamp(2.6rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-harbor-900">
            Thoughtful Dentistry.
            <span className="mt-1 block gradient-text">Lifelong Relationships.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal/75">
            Precise, gentle dental care centered around your comfort, your goals, and the
            long-term health of your smile — with {business.doctor} in Virginia Beach.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={externalLinks.requestAppointment} className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Request an Appointment
            </a>
            <a href={business.phoneHref} className="btn-secondary">
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
              <p className="text-sm text-charcoal/70">
                <span className="font-semibold text-harbor-900">{reviewSummary.rating.toFixed(1)}</span> from{' '}
                {reviewSummary.count}+ patients
              </p>
            </div>
            <span className="hidden h-5 w-px bg-black/10 sm:block" aria-hidden="true" />
            <p className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70">
              <Award className="h-4 w-4 text-evergreen-600" aria-hidden="true" />
              West Point graduate &amp; Army veteran
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-black/5 pt-6">
            {heroTrustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/80">
                <span className="h-1.5 w-1.5 rounded-full bg-evergreen-500" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image composition */}
        <div className="reveal is-visible relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-black/5">
            <img
              src="/images/waterman/waterman-reception.webp"
              alt="The welcoming front desk and reception area at Waterman Family Dentistry"
              className="h-full w-full object-cover"
              width={1100}
              height={1100}
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-harbor-900/25 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <div className="absolute -left-3 top-6 animate-floaty rounded-2xl border border-black/5 bg-white/90 p-4 shadow-lift backdrop-blur sm:-left-6">
            <div className="flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-champagne text-champagne" />
              ))}
            </div>
            <p className="mt-1.5 text-xs font-semibold text-harbor-900">Rated 5.0 by families</p>
            <p className="text-[11px] text-charcoal/55">{reviewSummary.source}</p>
          </div>

          {/* Floating credential card */}
          <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-harbor-900 px-5 py-4 text-white shadow-lift sm:right-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-champagne">
              <ShieldCheck className="h-[22px] w-[22px]" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Gentle, Comprehensive Care</p>
              <p className="text-xs text-white/65">Family · Cosmetic · Restorative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
