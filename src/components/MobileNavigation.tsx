import { useEffect, useRef } from 'react'
import { X, Phone, CalendarCheck } from 'lucide-react'
import { navLinks, business, externalLinks } from '../data/site'

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileNavigation({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Body-scroll lock while the drawer is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Focus management: move focus into the drawer, trap it, close on Escape.
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <div
        className={`absolute inset-0 bg-harbor-900/50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream shadow-soft transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <img
            src="/images/waterman/waterman-logo.png"
            alt="Waterman Family Dentistry"
            className="h-9 w-auto"
          />
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full text-charcoal hover:bg-black/5"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-3 text-lg font-medium text-charcoal hover:bg-evergreen-50 hover:text-evergreen-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-black/5 px-5 py-5">
          <a href={externalLinks.requestAppointment} className="btn-primary w-full" onClick={onClose}>
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Request Appointment
          </a>
          <a href={business.phoneHref} className="btn-secondary w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}
