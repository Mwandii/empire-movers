// src/components/sections/HowItWorks.jsx
import FadeIn from '../ui/FadeIn'
import { STEPS } from '../../../data/siteData'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate py-24 lg:py-32">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="overline mb-4">The Process</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="section-heading">How It Works</h2>
          </FadeIn>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100} threshold={0.05}>
              <article className="bg-white overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 bg-orange px-3.5 py-1.5">
                    <span className="font-display text-white text-sm font-bold tracking-wider">
                      {step.number}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-navy text-2xl font-bold uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}