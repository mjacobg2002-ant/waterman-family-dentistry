import { useEffect, useState } from 'react'
import { Phone, Navigation, CalendarCheck } from 'lucide-react'
import { business, externalLinks } from '../data/site'

/**
 * Fixed bottom action bar for mobile. Hides once the footer is reached so it
 * never obstructs contact details, and respects device safe-area insets.
 */
export function MobileActionBar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: '0px 0px -20px 0px' },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Quick actions"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-cream/95 backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3">
        <a
          href={business.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-charcoal/80"
        >
          <Phone className="h-5 w-5 text-evergreen-600" aria-hidden="true" />
          Call
        </a>
        <a
          href={business.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-black/5 py-3 text-xs font-semibold text-charcoal/80"
        >
          <Navigation className="h-5 w-5 text-evergreen-600" aria-hidden="true" />
          Directions
        </a>
        <a
          href={externalLinks.requestAppointment}
          className="flex flex-col items-center gap-1 bg-evergreen-600 py-3 text-xs font-semibold text-white"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Appointment
        </a>
      </div>
    </nav>
  )
}
