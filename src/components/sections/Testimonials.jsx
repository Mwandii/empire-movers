// src/components/sections/Testimonials.jsx
import FadeIn from '../ui/FadeIn'
import { TESTIMONIALS } from '../../../data/siteData'

export default function Testimonials() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="overline mb-4">Client Stories</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="section-heading-white">What Our Clients Say</h2>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100} threshold={0.05}>
              <article className="bg-white/[0.04] border border-white/[0.07] p-10 flex flex-col">
                {/* Large quote mark */}
                <span
                  className="font-display text-orange text-7xl leading-[0.7] mb-6 opacity-40 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <blockquote className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                  {t.text}
                </blockquote>

                {/* Attribution */}
                <footer className="flex items-center gap-3.5 border-t border-white/[0.07] pt-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <cite className="not-italic text-white text-sm font-semibold">
                      {t.name}
                    </cite>
                    <p className="text-white/35 text-xs mt-0.5">{t.move}</p>
                  </div>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}