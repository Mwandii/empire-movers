// src/components/sections/Hero.jsx
// ─────────────────────────────────────────────────────
// Full-viewport split hero.
// Left: headline, CTA, stats bar.
// Right: hero image with overlay badge.
// ─────────────────────────────────────────────────────
import FadeIn from '../ui/FadeIn'
import { COMPANY, STATS } from '../../../data/siteData'

const HERO_IMAGE = 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1400'

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHow = () => {
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative flex min-h-[95vh] overflow-hidden pt-16 lg:pt-[68px]"
      aria-label="Hero"
    >
      {/* ── Left panel — content ── */}
      <div className="relative z-10 w-full lg:w-[52%] bg-navy flex items-center">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 0% 100%, rgba(249,115,22,0.07) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />

        <div className="section-container py-24 lg:py-0 relative">
          {/* Overline pill */}
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 border border-orange/30 px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" aria-hidden="true" />
              <span className="text-orange text-[0.625rem] tracking-[0.35em] uppercase">
                Nairobi&apos;s Trusted Movers
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={200}>
            <h1
              className="font-display font-black uppercase text-white leading-[0.95] mb-7"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              <span className="block">Move With</span>
              <span className="block text-orange">Confidence.</span>
              <span className="block">Settle With Ease.</span>
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={300}>
            <p className="text-white/45 text-base lg:text-[1.0625rem] leading-relaxed max-w-[420px] mb-11">
              Professional house and office moving across Nairobi. Transparent pricing,
              careful handling, and a team that shows up on time — every time.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-4 mb-16">
              <button onClick={scrollToContact} className="btn-primary">
                Get a Free Quote
              </button>
              <button onClick={scrollToHow} className="btn-secondary">
                How It Works
              </button>
            </div>
          </FadeIn>

          {/* Stats bar */}
          <FadeIn delay={500}>
            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-10 border-t border-white/[0.07]">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-orange text-[2.25rem] font-bold leading-none">
                    {value}
                  </div>
                  <div className="text-white/35 text-[0.625rem] tracking-[0.25em] uppercase mt-1.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Right panel — image ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%]" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt="Professional movers carrying furniture"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Left-edge gradient to blend with navy panel */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #0f172a 0%, transparent 28%)' }}
        />
        {/* Bottom overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.3) 0%, transparent 40%)' }}
        />

        {/* Floating badge */}
        <div className="absolute bottom-12 right-12 bg-orange p-5 max-w-[210px]">
          <p className="font-display text-white text-[0.8125rem] tracking-[0.15em] uppercase mb-1">
            Serving Nairobi
          </p>
          <p className="text-white/75 text-xs leading-relaxed">
            All areas covered — from Runda to Rongai
          </p>
        </div>
      </div>
    </section>
  )
}