import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials, reviewSummary } from '../data/site'
import { useReveal } from '../lib/useReveal'

function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-champagne text-champagne`} />
      ))}
    </span>
  )
}

export function TestimonialsSection() {
  const head = useReveal<HTMLDivElement>()
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count)
  const active = testimonials[index]

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-x">
        <div ref={head.ref} className={`mx-auto max-w-2xl text-center ${head.className}`}>
          <span className="eyebrow-chip">In Their Words</span>
          <h2 className="section-title mt-5">
            Loved by Virginia Beach Families
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 shadow-card">
            <Stars className="h-[18px] w-[18px]" />
            <span className="text-sm font-semibold text-harbor-900">{reviewSummary.rating.toFixed(1)}</span>
            <span className="text-sm text-charcoal/60">· {reviewSummary.count}+ {reviewSummary.source}</span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft sm:p-12"
            aria-live="polite"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <Quote className="h-10 w-10 text-evergreen-600/20" aria-hidden="true" />
              <Stars className="h-5 w-5" />
            </div>
            <blockquote className="mt-4">
              <p className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug text-harbor-900">
                {active.quote}
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient font-serif text-lg font-semibold text-white">
                  {active.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-harbor-900">{active.name}</span>
                  <span className="block text-xs text-charcoal/55">{active.context}</span>
                </span>
              </footer>
            </blockquote>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-harbor-900 transition-colors hover:border-evergreen-600 hover:text-evergreen-700"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial from ${t.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-7 bg-evergreen-600' : 'w-2.5 bg-black/15 hover:bg-black/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-harbor-900 transition-colors hover:border-evergreen-600 hover:text-evergreen-700"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
