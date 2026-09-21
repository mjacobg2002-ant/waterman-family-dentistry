import { ShieldCheck } from 'lucide-react'
import { insurance } from '../data/site'

export function InsuranceBand() {
  const items = [...insurance, ...insurance]

  return (
    <section aria-label="Insurance and financing" className="border-y border-black/5 bg-ivory py-10">
      <div className="container-x">
        <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-evergreen-700">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Insurance welcomed &amp; flexible financing available
        </p>
      </div>

      <div className="mask-fade-x mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-4">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-sm font-medium text-charcoal/75 shadow-card"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
