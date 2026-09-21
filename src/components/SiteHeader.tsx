import { useEffect, useState } from 'react'
import { Menu, CalendarCheck } from 'lucide-react'
import { navLinks, externalLinks } from '../data/site'
import { MobileNavigation } from './MobileNavigation'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`border-b transition-all duration-300 ${
        scrolled
          ? 'border-black/5 bg-cream shadow-[0_2px_20px_-12px_rgba(18,35,58,0.25)]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#top" className="flex items-center" aria-label="Waterman Family Dentistry — home">
          <img
            src="/images/waterman/waterman-logo.png"
            alt="Waterman Family Dentistry — A Division of Atlantic Dental Care, PLC"
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-12' : 'h-12'}`}
            width={900}
            height={301}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-evergreen-500 after:transition-all hover:after:w-full ${
                scrolled
                  ? 'text-charcoal/80 hover:text-evergreen-700'
                  : 'text-white/90 [text-shadow:0_1px_10px_rgba(9,20,34,0.6)] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href={externalLinks.requestAppointment} className="btn-primary">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Request Appointment
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className={`grid h-11 w-11 place-items-center rounded-full transition-colors md:hidden ${
            scrolled ? 'text-charcoal hover:bg-black/5' : 'bg-white/10 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/20'
          }`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
