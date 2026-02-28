// src/components/layout/Footer.jsx
import TruckIcon from '../ui/TruckIcon'
import { COMPANY, FOOTER_LINKS } from '../../../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep" aria-label="Site footer">
      <div className="section-container py-16 lg:py-20">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-orange flex items-center justify-center flex-shrink-0">
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
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-[220px]">
              Professional moving services across Nairobi. Reliable, transparent, and careful with everything we move.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white text-[0.625rem] tracking-[0.3em] uppercase font-semibold mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-white text-[0.625rem] tracking-[0.3em] uppercase font-semibold mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${COMPANY.phone}`} className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="text-white/30 text-sm">{COMPANY.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            &copy; {year} {COMPANY.name} & Logistics. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            {COMPANY.location}
          </p>
        </div>

      </div>
    </footer>
  )
}