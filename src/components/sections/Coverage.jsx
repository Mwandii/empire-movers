// src/components/sections/Coverage.jsx
import FadeIn from '../ui/FadeIn'
import { COVERAGE } from '../../../data/siteData'

export default function Coverage() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="coverage" className="bg-white py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-center">

          {/* Left — copy */}
          <div>
            <FadeIn>
              <p className="overline mb-4">Where We Operate</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="section-heading mb-5">
                We Cover All<br />of Nairobi
              </h2>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="text-muted text-sm leading-relaxed mb-8">
                From Westlands to Rongai, Karen to Kasarani — wherever you&apos;re
                moving within Nairobi, we&apos;ve got you covered. Upcountry moves
                available on request.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <button onClick={scrollToContact} className="btn-primary">
                Check Your Area →
              </button>
            </FadeIn>
          </div>

          {/* Right — area tags */}
          <FadeIn delay={200} threshold={0.05}>
            <div className="flex flex-wrap gap-2.5" role="list" aria-label="Service areas">
              {COVERAGE.map(area => (
                <span
                  key={area}
                  role="listitem"
                  className="border border-border bg-slate px-5 py-2.5 text-muted text-[0.6875rem] tracking-[0.1em] uppercase"
                >
                  {area}
                </span>
              ))}
              <span className="border border-dashed border-orange px-5 py-2.5 text-orange text-[0.6875rem] tracking-[0.1em] uppercase">
                + More on Request
              </span>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}