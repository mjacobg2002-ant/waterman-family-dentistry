import { useEffect, useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import { business } from '../data/site'
import { getOfficeStatus } from '../lib/officeStatus'

export function TopUtilityBar() {
  const [status, setStatus] = useState(() => getOfficeStatus())

  useEffect(() => {
    const id = setInterval(() => setStatus(getOfficeStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hidden bg-harbor-900 text-white/90 md:block">
      <div className="container-x flex h-10 items-center justify-between text-[13px]">
        <div className="flex items-center gap-6">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 font-medium transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-2 text-white/75">
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
          <span className="text-white/85">{status.label}</span>
        </span>
      </div>
    </div>
  )
}
