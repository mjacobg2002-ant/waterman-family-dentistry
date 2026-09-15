import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { gallery } from '../data/site'
import { useReveal } from '../lib/useReveal'

export function OfficeGallery() {
  const head = useReveal<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [active, close, next, prev])

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <div ref={head.ref} className={`max-w-2xl ${head.className}`}>
          <span className="eyebrow">Our Office</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-harbor-900">
            See Our Modern Dental Office
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
            A clean, calm and comfortable space in Virginia Beach — designed to put you at ease
            from the moment you walk in.
          </p>
        </div>

        {/* Mosaic: one large anchor + supporting tiles */}
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 focus-visible:outline-none ${
                img.span === 'large'
                  ? 'col-span-2 row-span-2'
                  : 'col-span-1 row-span-1'
              }`}
              aria-label={`View larger: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-harbor-900/0 transition-colors group-hover:bg-harbor-900/20" />
              <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-harbor-900 opacity-0 transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Office photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-harbor-900/90 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-soft"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {gallery[active].alt}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
