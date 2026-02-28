// src/pages/HomePage.jsx
// ─────────────────────────────────────────────────────
// Assembles all sections in order.
// Navbar and Footer wrap the page.
// ─────────────────────────────────────────────────────
import Navbar       from '../components/layout/Navbar'
import Footer       from '../components/layout/Footer'
import Hero         from '../components/sections/Hero'
import Services     from '../components/sections/Services'
import HowItWorks   from '../components/sections/HowItWorks'
import Pricing      from '../components/sections/Pricing'
import WhyEmpire    from '../components/sections/WhyEmpire'
import Team         from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Coverage     from '../components/sections/Coverage'
import Contact      from '../components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyEmpire />
        <Team />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  )
}