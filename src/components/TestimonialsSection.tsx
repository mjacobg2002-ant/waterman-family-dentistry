import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/site'
import { useReveal } from '../lib/useReveal'

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
          <span className="eyebrow justify-center">In Their Words</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-harbor-900">
            Loved by Virginia Beach Families
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div
            className="relative rounded-[1.5rem] border border-black/5 bg-white p-8 shadow-soft sm:p-12"
            aria-live="polite"
          >
            <Quote className="h-10 w-10 text-evergreen-600/20" aria-hidden="true" />
            <blockquote className="mt-4">
              <p className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug text-harbor-900">
                {active.quote}
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-evergreen-700">
                — {active.name}
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
