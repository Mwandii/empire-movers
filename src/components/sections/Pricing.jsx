// src/components/sections/Pricing.jsx
import FadeIn from '../ui/FadeIn'
import { PRICING } from '../../../data/siteData'

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="bg-navy py-24 lg:py-32">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <FadeIn>
              <p className="overline mb-4">Transparent Pricing</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="section-heading-white">
                Simple,<br />Honest Rates
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={150} direction="left">
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Final price depends on distance and specific items.
              Get an exact quote in 2 minutes.
            </p>
          </FadeIn>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0.5">
          {PRICING.map((tier, i) => (
            <FadeIn key={tier.size} delay={i * 60} threshold={0.05}>
              <article
                className={`relative p-8 ${
                  tier.popular
                    ? 'bg-orange'
                    : 'bg-white/4 border border-white/[0.07]'
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1 whitespace-nowrap">
                    <span className="text-orange text-[0.5625rem] tracking-[0.2em] uppercase font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Room label */}
                <p className={`text-[0.5625rem] tracking-[0.3em] uppercase mb-2 ${
                  tier.popular ? 'text-white/65' : 'text-white/30'
                }`}>
                  {tier.rooms}
                </p>

                {/* Size */}
                <h3 className="font-display text-white text-2xl font-black uppercase mb-1.5">
                  {tier.size}
                </h3>

                {/* Price */}
                <p className={`font-display text-xl font-bold mb-6 ${
                  tier.popular ? 'text-white' : 'text-orange'
                }`}>
                  {tier.price}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${
                  tier.popular ? 'bg-white/20' : 'bg-white/[0.07]'
                }`} />

                {/* Includes */}
                <ul className="space-y-2.5">
                  {tier.items.map(item => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                        tier.popular ? 'text-white/85' : 'text-white/40'
                      }`}
                    >
                      <span
                        className={`mt-1.25 w-1 h-1 rounded-full shrink-0 ${
                          tier.popular ? 'bg-white' : 'bg-orange'
                        }`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <button
              onClick={scrollToContact}
              className="border border-white/12 text-white/50 px-11 py-3.5 text-[0.6875rem] tracking-[0.25em] uppercase transition-colors duration-300 hover:border-white/30 hover:text-white/80 bg-transparent cursor-pointer font-body"
            >
              Get Exact Quote for Your Move →
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}