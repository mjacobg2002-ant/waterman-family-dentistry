import { CalendarClock, HandHeart, Users2, Medal } from 'lucide-react'
import { trustPoints } from '../data/site'

const icons = [CalendarClock, HandHeart, Users2, Medal]

export function TrustStrip() {
  return (
    <section aria-label="Why patients choose us" className="border-y border-black/5 bg-harbor-900">
      <div className="container-x grid grid-cols-2 gap-y-6 py-7 lg:grid-cols-4">
        {trustPoints.map((point, i) => {
          const Ico = icons[i]
          return (
            <div key={point} className="flex items-center gap-3 px-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-champagne">
                <Ico className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-snug text-white/90">{point}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
