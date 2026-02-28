// src/components/sections/Team.jsx
import FadeIn from '../ui/FadeIn'
import { TEAM } from '../../../data/siteData'

export default function Team() {
  return (
    <section className="bg-slate py-24 lg:py-32">
      <div className="section-container">

        {/* Header */}
        <div className="mb-14">
          <FadeIn>
            <p className="overline mb-4">The People</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="section-heading">Meet the Team</h2>
          </FadeIn>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
          {TEAM.map((member, i) => (
            <FadeIn key={member.name} delay={i * 100} threshold={0.05}>
              <article className="bg-white overflow-hidden">
                {/* Photo */}
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Name / role */}
                <div className="px-7 py-6 border-t-[3px] border-orange">
                  <h3 className="font-display text-navy text-xl font-bold uppercase">
                    {member.name}
                  </h3>
                  <p className="text-orange text-[0.625rem] tracking-[0.2em] uppercase mt-1">
                    {member.role}
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