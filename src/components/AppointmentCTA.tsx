import { CalendarCheck, Phone } from 'lucide-react'
import { business, externalLinks } from '../data/site'

export function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Local Virginia Beach imagery with an evergreen wash for contrast */}
      <img
        src="/images/waterman/virginia-beach-pier.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-evergreen-900/95 via-evergreen-800/90 to-harbor-900/85" />

      <div className="container-x relative py-20 text-center lg:py-28">
        <span className="eyebrow justify-center text-champagne">Ready to Schedule?</span>
        <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-tight text-white">
          We Would Love to Meet You
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          Take the next step toward a healthier, more confident smile with personalized care from
          {' '}
          {business.doctor} and her team.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={externalLinks.requestAppointment}
            className="btn bg-white text-evergreen-700 shadow-soft hover:-translate-y-0.5 hover:bg-white/95"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Request an Appointment
          </a>
          <a href={business.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
