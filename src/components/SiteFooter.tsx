import { Phone, Mail, MapPin, CalendarCheck } from 'lucide-react'
import { business, externalLinks, services } from '../data/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-harbor-900 text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-xl bg-white px-3 py-2">
            <img
              src="/images/waterman/waterman-logo.png"
              alt="Waterman Family Dentistry"
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Gentle, personalized family, cosmetic and restorative dentistry with Dr. Jennifer
            Waterman — proudly serving Virginia Beach since {business.since}.
          </p>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-champagne">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <a href={s.href} className="text-white/70 transition-colors hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-champagne">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <span className="text-white/70">
                {business.address.line1}, {business.address.city}, {business.address.state}{' '}
                {business.address.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <a href={business.phoneHref} className="text-white/70 hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden="true" />
              <a href={business.emailHref} className="text-white/70 hover:text-white">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours + CTA */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-champagne">Office Hours</h3>
          <p className="mt-4 text-sm text-white/70">
            Monday – Thursday
            <br />
            9:00 AM – 5:00 PM
          </p>
          <p className="mt-1 text-sm text-white/50">Friday – Sunday: Closed</p>
          <a href={externalLinks.requestAppointment} className="btn-primary mt-6 w-full">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Request Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="text-white/40">
            Homepage redesign concept prepared for Waterman Family Dentistry.
          </p>
        </div>
      </div>
    </footer>
  )
}
