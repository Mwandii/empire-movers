// src/components/sections/Services.jsx
import FadeIn from '../ui/FadeIn'
import { SERVICES } from '../../../data/siteData'

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <FadeIn>
              <p className="overline mb-4">What We Do</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="section-heading">Our Services</h2>
            </FadeIn>
          </div>
          <FadeIn delay={150} direction="left">
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Whether you&apos;re moving a bedsitter or a full 4-bedroom home,
              we have the crew and equipment for the job.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 80} threshold={0.05}>
              <article className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.25) 55%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="divider mb-4" />
                  <h3 className="font-display text-white text-xl font-bold uppercase tracking-wide mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-[0.8125rem] leading-relaxed">
                    {service.desc}
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