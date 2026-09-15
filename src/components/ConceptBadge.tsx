import { SHOW_CONCEPT_BADGE } from '../data/site'

/**
 * Unobtrusive concept marker for the sales presentation.
 * Disabled by flipping SHOW_CONCEPT_BADGE in src/data/site.ts.
 */
export function ConceptBadge() {
  if (!SHOW_CONCEPT_BADGE) return null
  return (
    <div className="pointer-events-none fixed bottom-24 left-1/2 z-40 -translate-x-1/2 md:bottom-4 md:left-4 md:translate-x-0">
      <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-harbor-900/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-soft backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
        Homepage Redesign Concept
      </span>
    </div>
  )
}
