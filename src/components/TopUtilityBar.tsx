import { useEffect, useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import { business } from '../data/site'
import { getOfficeStatus } from '../lib/officeStatus'

export function TopUtilityBar() {
  const [status, setStatus] = useState(() => getOfficeStatus())
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setStatus(getOfficeStatus()), 60_000)
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearInterval(id)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={`hidden text-white/90 transition-colors duration-300 md:block ${
        scrolled ? 'bg-harbor-900' : 'bg-transparent [text-shadow:0_1px_10px_rgba(9,20,34,0.6)]'
      }`}
    >
      <div className="container-x flex h-10 items-center justify-between text-[13px]">
        <div className="flex items-center gap-6">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 font-medium transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-2 text-white/80">
            <MapPin className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
            {business.address.short}, {business.address.city}, {business.address.state}
          </span>
        </div>
        <span className="inline-flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
          <span
            className={`inline-flex h-1.5 w-1.5 rounded-full ${
              status.open ? 'bg-emerald-400' : 'bg-white/40'
            }`}
            aria-hidden="true"
          />
          <span className="text-white/90">{status.label}</span>
        </span>
      </div>
    </div>
  )
}
