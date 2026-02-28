// src/components/sections/WhyEmpire.jsx
import FadeIn from '../ui/FadeIn'
import { WHY_US } from '../../../data/siteData'

const COLLAGE = [
  {
    src: 'https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Movers carefully carrying a sofa',
  },
  {
    src: 'https://images.pexels.com/photos/7464414/pexels-photo-7464414.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Professional packing of boxes',
  },
  {
    src: 'https://images.pexels.com/photos/6969864/pexels-photo-6969864.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Happy family in new home',
  },
]

export default function WhyEmpire() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Image collage ── */}
          <FadeIn direction="right" threshold={0.08}>
            <div className="grid grid-cols-2 gap-1 h-[480px] lg:h-[520px]">
              {/* Tall left image */}
              <div className="overflow-hidden row-span-2">
                <img
                  src={COLLAGE[0].src}
                  alt={COLLAGE[0].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Two stacked right images */}
              <div className="overflow-hidden">
                <img
                  src={COLLAGE[1].src}
                  alt={COLLAGE[1].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={COLLAGE[2].src}
                  alt={COLLAGE[2].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          {/* ── Content ── */}
          <div>
            <FadeIn delay={100}>
              <p className="overline mb-4">Why Choose Us</p>
            </FadeIn>
            <FadeIn delay={180}>
              <h2 className="section-heading mb-5">
                Moving Done<br />
                <span className="text-orange">The Right Way</span>
              </h2>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="text-muted text-[0.9375rem] leading-relaxed mb-10">
                We started Empire Movers because moving in Nairobi shouldn&apos;t be
                stressful. No vanishing crews, no surprise charges, no damaged furniture.
                Just a clean, professional move from start to finish.
              </p>
            </FadeIn>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-0.5 mb-10">
              {WHY_US.map((item, i) => (
                <FadeIn key={item.title} delay={300 + i * 60} threshold={0.05}>
                  <div className="bg-slate p-6 border-l-[3px] border-orange">
                    <h3 className="text-navy text-[0.8125rem] font-semibold uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={560}>
              <button onClick={scrollToContact} className="btn-outline-dark">
                Book Your Move →
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}