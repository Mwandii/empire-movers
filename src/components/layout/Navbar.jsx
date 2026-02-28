// src/components/layout/Navbar.jsx
// ─────────────────────────────────────────────────────
// Sticky top navigation.
// Highlights active section via scroll spy.
// Mobile menu with smooth open/close.
// ─────────────────────────────────────────────────────
import { useState, useEffect } from 'react'
import TruckIcon from '../ui/TruckIcon'
import { COMPANY } from '../../../data/siteData'

const NAV_LINKS = [
  { label: 'Services',    href: '#services'      },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',     href: '#pricing'       },
  { label: 'Coverage',    href: '#coverage'      },
  { label: 'Contact',     href: '#contact'       },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  // Add shadow + background opacity on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy/98 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-navy'
        }`}
      >
        <nav
          className="section-container flex items-center justify-between h-16 lg:h-[68px]"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Empire Movers home"
          >
            <div className="w-9 h-9 bg-orange flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-orange-light">
              <TruckIcon className="w-5 h-5" color="#fff" />
            </div>
            <div>
              <div className="font-display text-white text-xl tracking-[0.12em] uppercase leading-none">
                {COMPANY.name.split(' ')[0]}
              </div>
              <div className="text-orange text-[0.5rem] tracking-[0.35em] uppercase mt-0.5">
                Movers & Logistics
              </div>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-white/55 text-[0.6875rem] tracking-[0.15em] uppercase font-medium transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary !py-2.5 !px-6"
            >
              Get a Quote
            </a>
          </div>

          {/* ── Mobile menu button ── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer bg-transparent border-none"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-16 flex items-center justify-end px-6 border-b border-white/06" />

        <nav className="flex flex-col px-8 py-10 gap-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="text-white/60 text-2xl font-display uppercase tracking-widest py-3 border-b border-white/06 hover:text-orange transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary mt-8 justify-center"
          >
            Get a Free Quote
          </a>
        </nav>

        {/* Contact info at bottom */}
        <div className="mt-auto px-8 pb-10 text-white/30 text-sm">
          <p>{COMPANY.phone}</p>
          <p>{COMPANY.email}</p>
        </div>
      </div>
    </>
  )
}