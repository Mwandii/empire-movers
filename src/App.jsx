import { useState } from "react";

// ── All images from Pexels — free to use, realistic moving/people photos
// Hero: Black man carrying boxes
// Team: African men portraits
// Services: Moving/logistics scenes
// Replace with actual client photos before going live

const NAV_LINKS = ["Services", "How It Works", "Pricing", "Coverage", "Contact"];

const SERVICES = [
  {
    title: "Residential Moving",
    desc: "Bedsitters to 4-bedroom homes moved with care and precision.",
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Packing & Unpacking",
    desc: "Full packing service using quality materials to protect your belongings.",
    image: "https://images.pexels.com/photos/7464414/pexels-photo-7464414.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Office Relocation",
    desc: "Minimal downtime. We move your workspace efficiently and safely.",
    image: "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Long Distance",
    desc: "Moving across Nairobi or upcountry — we handle the distance.",
    image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Book Your Move",
    desc: "Fill in our quick quote form with your house size, locations, and preferred date. We confirm within 2 hours.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "02",
    title: "We Pack & Load",
    desc: "Our trained team arrives on time, handles your items with care, and loads everything securely.",
    image: "https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "03",
    title: "You Settle In",
    desc: "We deliver, offload, and place items in your new space. You're home before you know it.",
    image: "https://images.pexels.com/photos/6969864/pexels-photo-6969864.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const PRICING = [
  { size: "Bedsitter", rooms: "Studio", price: "From KES 3,500", items: ["Bed & mattress", "Sofa", "Kitchen items", "Personal effects"], popular: false },
  { size: "1 Bedroom", rooms: "1 BR", price: "From KES 5,500", items: ["All bedsitter items", "Wardrobe", "Dining set", "Additional boxes"], popular: false },
  { size: "2 Bedroom", rooms: "2 BR", price: "From KES 9,000", items: ["All 1BR items", "Extra bedroom furniture", "TV & electronics", "Appliances"], popular: true },
  { size: "3 Bedroom", rooms: "3 BR", price: "From KES 14,000", items: ["All 2BR items", "Extra bedroom", "Full kitchen", "Garden items"], popular: false },
  { size: "4 Bedroom", rooms: "4 BR", price: "From KES 20,000", items: ["Full house contents", "Multiple bedrooms", "Full kitchen & dining", "Outdoor furniture"], popular: false },
];

const WHY_US = [
  { title: "Fully Insured", desc: "Every move is covered. Your belongings are protected from pickup to delivery." },
  { title: "Always On Time", desc: "We respect your schedule. Our team arrives at the agreed time, every time." },
  { title: "No Hidden Costs", desc: "The price you're quoted is the price you pay. Zero surprises on moving day." },
  { title: "Trained Team", desc: "Professional movers who handle everything from fragile items to heavy furniture." },
];

const TEAM = [
  {
    name: "Brian Otieno",
    role: "Lead Mover",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Kevin Mwangi",
    role: "Packing Specialist",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Daniel Kamau",
    role: "Logistics Coordinator",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const TESTIMONIALS = [
  {
    text: "Empire Movers made my relocation completely stress-free. The team was professional, careful with my furniture, and finished ahead of schedule.",
    name: "Sarah M.",
    move: "2 Bedroom — Westlands to Kilimani",
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    text: "Finally a moving company that shows up on time and doesn't break things. The pricing was transparent and fair. Highly recommend.",
    name: "James K.",
    move: "3 Bedroom — Karen to Runda",
    avatar: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    text: "Used them for my office move. Zero damage, zero downtime. We were operational the same afternoon. Exceptional service.",
    name: "David O.",
    move: "Office Relocation — CBD",
    avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const COVERAGE = ["Westlands", "Kilimani", "Karen", "Lavington", "Parklands", "Runda", "Gigiri", "Kileleshwa", "Lang'ata", "South B", "South C", "Eastleigh", "Kasarani", "Ruaka", "Rongai"];

const TruckIcon = ({ color = "#fff" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={{ width: 20, height: 20 }}>
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 4v4h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8fafc", color: "#0f172a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .display { font-family: 'Barlow Condensed', sans-serif; }
        html { scroll-behavior: smooth; }
        input, select, textarea { font-family: 'DM Sans', sans-serif; }
        img { display: block; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ background: "#0f172a", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TruckIcon />
            </div>
            <div>
              <div className="display" style={{ color: "#fff", fontSize: 20, letterSpacing: 2, lineHeight: 1, textTransform: "uppercase" }}>Empire</div>
              <div style={{ color: "#f97316", fontSize: 9, letterSpacing: 4, textTransform: "uppercase" }}>Movers & Logistics</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`}
                style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, letterSpacing: 1.5, textDecoration: "none", textTransform: "uppercase", fontWeight: 500 }}>
                {link}
              </a>
            ))}
            <a href="#contact" style={{ background: "#f97316", color: "#fff", padding: "10px 28px", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "95vh", display: "flex", overflow: "hidden" }}>
        {/* Left content */}
        <div style={{ width: "52%", background: "#0f172a", display: "flex", alignItems: "center", padding: "80px 64px", position: "relative", zIndex: 1 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 0% 100%, rgba(249,115,22,0.08) 0%, transparent 50%)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(249,115,22,0.35)", padding: "6px 16px", marginBottom: 36 }}>
              <div style={{ width: 6, height: 6, background: "#f97316", borderRadius: "50%" }} />
              <span style={{ color: "#f97316", fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase" }}>Nairobi's Trusted Movers</span>
            </div>
            <h1 className="display" style={{ color: "#fff", fontSize: "clamp(52px, 6vw, 88px)", lineHeight: 0.92, fontWeight: 900, textTransform: "uppercase", marginBottom: 28 }}>
              Move With<br />
              <span style={{ color: "#f97316" }}>Confidence.</span><br />
              Settle With<br />Ease.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, lineHeight: 1.85, maxWidth: 420, marginBottom: 44 }}>
              Professional house and office moving across Nairobi. Transparent pricing, careful handling, and a team that shows up on time — every time.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="#contact" style={{ background: "#f97316", color: "#fff", padding: "15px 40px", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
                Get a Free Quote
              </a>
              <a href="#how-it-works" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "15px 40px", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none" }}>
                How It Works
              </a>
            </div>
            <div style={{ display: "flex", gap: 44, marginTop: 64, paddingTop: 44, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[["100+", "Moves Completed"], ["4.9", "Star Rating"], ["2hr", "Quote Response"], ["0", "Hidden Charges"]].map(([num, label]) => (
                <div key={label}>
                  <div className="display" style={{ color: "#f97316", fontSize: 36, fontWeight: 800, lineHeight: 1 }}>{num}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — hero image: movers carrying boxes */}
        <div style={{ flex: 1, position: "relative" }}>
          <img
            src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Professional movers carrying furniture"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0f172a 0%, rgba(15,23,42,0.05) 35%)" }} />
          <div style={{ position: "absolute", bottom: 48, right: 48, background: "#f97316", padding: "20px 28px", maxWidth: 220 }}>
            <div className="display" style={{ color: "#fff", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Serving Nairobi</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, lineHeight: 1.6 }}>All areas covered — from Runda to Rongai</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>What We Do</div>
              <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, color: "#0f172a" }}>Our Services</h2>
            </div>
            <p style={{ color: "#64748b", fontSize: 14, maxWidth: 340, lineHeight: 1.8 }}>
              Whether you're moving a bedsitter or a full 4-bedroom home, we have the crew and equipment for the job.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 28px" }}>
                  <div style={{ width: 28, height: 2, background: "#f97316", marginBottom: 16 }} />
                  <h3 className="display" style={{ color: "#fff", fontSize: 22, fontWeight: 800, textTransform: "uppercase", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ background: "#f8fafc", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>The Process</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, color: "#0f172a" }}>How It Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ background: "#fff", overflow: "hidden" }}>
                <div style={{ height: 260, overflow: "hidden", position: "relative" }}>
                  <img src={step.image} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 20, left: 20, background: "#f97316", padding: "6px 14px" }}>
                    <span className="display" style={{ color: "#fff", fontSize: 16, fontWeight: 800, letterSpacing: 1 }}>{step.number}</span>
                  </div>
                </div>
                <div style={{ padding: "32px 28px" }}>
                  <h3 className="display" style={{ fontSize: 24, fontWeight: 800, textTransform: "uppercase", color: "#0f172a", marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ background: "#0f172a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Transparent Pricing</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, color: "#fff" }}>
                Simple,<br />Honest Rates
              </h2>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, maxWidth: 320, lineHeight: 1.8 }}>
                Final price depends on distance and specific items. Get an exact quote in 2 minutes.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2 }}>
            {PRICING.map((tier, i) => (
              <div key={i} style={{ background: tier.popular ? "#f97316" : "rgba(255,255,255,0.04)", border: tier.popular ? "none" : "1px solid rgba(255,255,255,0.07)", padding: "40px 28px", position: "relative" }}>
                {tier.popular && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#f97316", fontSize: 9, letterSpacing: 2, padding: "4px 14px", textTransform: "uppercase", fontWeight: 800, whiteSpace: "nowrap" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ color: tier.popular ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.3)", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>{tier.rooms}</div>
                <div className="display" style={{ color: "#fff", fontSize: 26, fontWeight: 900, textTransform: "uppercase", marginBottom: 6 }}>{tier.size}</div>
                <div className="display" style={{ color: tier.popular ? "#fff" : "#f97316", fontSize: 20, fontWeight: 700, marginBottom: 24 }}>{tier.price}</div>
                <div style={{ height: 1, background: tier.popular ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)", marginBottom: 24 }} />
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {tier.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: tier.popular ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.5 }}>
                      <div style={{ width: 4, height: 4, background: tier.popular ? "#fff" : "#f97316", borderRadius: "50%", flexShrink: 0, marginTop: 5 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <a href="#contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)", padding: "14px 44px", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", textDecoration: "none" }}>
              Get Exact Quote for Your Move →
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY EMPIRE ── */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Image collage */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, height: 520 }}>
            <img
              src="https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Movers carrying sofa"
              style={{ width: "100%", height: "100%", objectFit: "cover", gridRow: "span 2" }}
            />
            <img
              src="https://images.pexels.com/photos/7464414/pexels-photo-7464414.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Packing boxes"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <img
              src="https://images.pexels.com/photos/6969864/pexels-photo-6969864.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Happy family after move"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Why Choose Us</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, color: "#0f172a", marginBottom: 20 }}>
              Moving Done<br /><span style={{ color: "#f97316" }}>The Right Way</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.9, marginBottom: 40 }}>
              We started Empire Movers because moving in Nairobi shouldn't be stressful. No vanishing crews, no surprise charges, no damaged furniture. Just a clean, professional move from start to finish.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 40 }}>
              {WHY_US.map((w, i) => (
                <div key={i} style={{ background: "#f8fafc", padding: "24px", borderLeft: "3px solid #f97316" }}>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>{w.title}</h3>
                  <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.7 }}>{w.desc}</p>
                </div>
              ))}
            </div>
            <a href="#contact" style={{ display: "inline-block", background: "#0f172a", color: "#fff", padding: "14px 40px", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none", fontWeight: 600 }}>
              Book Your Move →
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ background: "#f8fafc", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>The People</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, color: "#0f172a" }}>Meet the Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {TEAM.map((member, i) => (
              <div key={i} style={{ background: "#fff", overflow: "hidden" }}>
                <div style={{ height: 380, overflow: "hidden" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <div style={{ padding: "24px 28px", borderTop: "3px solid #f97316" }}>
                  <div className="display" style={{ fontSize: 22, fontWeight: 800, textTransform: "uppercase", color: "#0f172a" }}>{member.name}</div>
                  <div style={{ color: "#f97316", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#0f172a", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Client Stories</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", color: "#fff", lineHeight: 0.95 }}>
              What Our Clients Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "40px 36px" }}>
                <div className="display" style={{ color: "#f97316", fontSize: 72, lineHeight: 0.7, marginBottom: 24, opacity: 0.4 }}>"</div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24 }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 3 }}>{t.move}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section id="coverage" style={{ background: "#f8fafc", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Where We Operate</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, color: "#0f172a", marginBottom: 20 }}>
              We Cover All<br />of Nairobi
            </h2>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>
              From Westlands to Rongai, Karen to Kasarani — wherever you're moving within Nairobi. Upcountry moves available on request.
            </p>
            <a href="#contact" style={{ display: "inline-block", background: "#f97316", color: "#fff", padding: "13px 36px", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>
              Check Your Area →
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {COVERAGE.map((area, i) => (
              <div key={i} style={{ border: "1px solid #e2e8f0", padding: "9px 20px", color: "#475569", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", background: "#fff" }}>
                {area}
              </div>
            ))}
            <div style={{ border: "1px dashed #f97316", padding: "9px 20px", color: "#f97316", fontSize: 12, letterSpacing: 1, textTransform: "uppercase" }}>
              + More on Request
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ color: "#f97316", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>Get In Touch</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1, color: "#0f172a", marginBottom: 20 }}>
              Get Your Free<br /><span style={{ color: "#f97316" }}>Moving Quote</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.85, marginBottom: 44 }}>
              Tell us about your move and we'll get back to you within 2 hours with a confirmed quote. No obligation, no hidden fees.
            </p>
            {[["Phone", "+254 700 000 000"], ["Email", "hello@empiremovers.co.ke"], ["Based In", "Nairobi, Kenya"]].map(([label, value]) => (
              <div key={label} style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, background: "#f97316", borderRadius: "50%" }} />
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#94a3b8", marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 14, color: "#0f172a", fontWeight: 500 }}>{value}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 40, height: 220, overflow: "hidden" }}>
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Moving truck on the road"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#f8fafc", padding: "48px 40px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { label: "Full Name *", placeholder: "Your full name", type: "text", span: 1 },
                { label: "Phone Number *", placeholder: "+254 700 000 000", type: "tel", span: 1 },
                { label: "Moving From *", placeholder: "e.g. Westlands", type: "text", span: 1 },
                { label: "Moving To *", placeholder: "e.g. Kilimani", type: "text", span: 1 },
                { label: "Moving Date *", placeholder: "", type: "date", span: 1 },
              ].map((field, i) => (
                <div key={i} style={{ gridColumn: `span ${field.span}` }}>
                  <label style={{ display: "block", fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#64748b", marginBottom: 8, fontWeight: 600 }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={{ width: "100%", background: "#fff", border: "1px solid #e2e8f0", padding: "12px 16px", fontSize: 14, color: "#0f172a", outline: "none" }} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#64748b", marginBottom: 8, fontWeight: 600 }}>House Size *</label>
                <select style={{ width: "100%", background: "#fff", border: "1px solid #e2e8f0", padding: "12px 16px", fontSize: 14, color: "#0f172a", outline: "none", appearance: "none" }}>
                  <option value="">Select size</option>
                  {["Bedsitter", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "Office"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label style={{ display: "block", fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "#64748b", marginBottom: 8, fontWeight: 600 }}>Additional Notes</label>
                <textarea rows={4} placeholder="Fragile items, special requirements, preferred time..." style={{ width: "100%", background: "#fff", border: "1px solid #e2e8f0", padding: "12px 16px", fontSize: 14, color: "#0f172a", outline: "none", resize: "vertical" }} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <button style={{ width: "100%", background: "#f97316", color: "#fff", border: "none", padding: "16px", fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
                  Request Free Quote →
                </button>
                <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 12, marginTop: 12 }}>We respond within 2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#020617", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <TruckIcon />
                </div>
                <div>
                  <div className="display" style={{ color: "#fff", fontSize: 20, letterSpacing: 2, lineHeight: 1, textTransform: "uppercase" }}>Empire</div>
                  <div style={{ color: "#f97316", fontSize: 9, letterSpacing: 4, textTransform: "uppercase" }}>Movers & Logistics</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, lineHeight: 1.85, maxWidth: 260 }}>
                Professional moving services across Nairobi. Reliable, transparent, and careful with everything we move.
              </p>
            </div>
            {[
              { title: "Services", links: ["Residential Moving", "Office Relocation", "Packing Services", "Long Distance"] },
              { title: "Company", links: ["How It Works", "Pricing", "Coverage Area", "Contact Us"] },
              { title: "Contact", links: ["+254 700 000 000", "hello@empiremovers.co.ke", "Nairobi, Kenya"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ color: "#fff", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>{col.title}</div>
                {col.links.map(link => (
                  <div key={link} style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, marginBottom: 12, lineHeight: 1.5 }}>{link}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>© 2025 Empire Movers & Logistics. All rights reserved.</div>
            <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>Nairobi, Kenya</div>
          </div>
        </div>
      </footer>
    </div>
  );
}