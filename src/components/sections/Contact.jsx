// src/components/sections/Contact.jsx
// ─────────────────────────────────────────────────────
// Quote request form.
// Submits to /api/contact serverless function via Resend.
// Loading → success → error states all handled.
// ─────────────────────────────────────────────────────
import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import { COMPANY, HOUSE_SIZES } from '../../../data/siteData'

const TRUCK_IMAGE = 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800'

const INITIAL_FORM = {
  name:      '',
  phone:     '',
  from:      '',
  to:        '',
  date:      '',
  houseSize: '',
  notes:     '',
}

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL_FORM)
  const [status,  setStatus]  = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          name:      form.name,
          phone:     form.phone,
          from:      form.from,
          to:        form.to,
          date:      form.date,
          houseSize: form.houseSize,
          notes:     form.notes,
        }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setStatus('success')
      setForm(INITIAL_FORM)

    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  const handleReset = () => {
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-start">

          {/* ── Left — contact info ── */}
          <div>
            <FadeIn>
              <p className="overline mb-4">Get In Touch</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="section-heading mb-5">
                Get Your Free<br />
                <span className="text-orange">Moving Quote</span>
              </h2>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="text-muted text-[0.9375rem] leading-relaxed mb-12">
                Tell us about your move and we&apos;ll get back to you within 2 hours
                with a confirmed quote. No obligation, no hidden fees.
              </p>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={240}>
              <div className="space-y-6 mb-12">
                {[
                  { label: 'Phone',    value: COMPANY.phone,    href: `tel:${COMPANY.phone}`       },
                  { label: 'Email',    value: COMPANY.email,    href: `mailto:${COMPANY.email}`    },
                  { label: 'Based In', value: COMPANY.location, href: null                         },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-slate border border-border flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 bg-orange rounded-full" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="form-label mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="text-navy text-sm font-medium hover:text-orange transition-colors duration-200">{value}</a>
                        : <p className="text-navy text-sm font-medium">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Truck image */}
            <FadeIn delay={300}>
              <div className="h-48 overflow-hidden">
                <img
                  src={TRUCK_IMAGE}
                  alt="Empire Movers truck on the road"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* ── Right — form ── */}
          <FadeIn delay={150} direction="left">
            <div className="bg-slate border border-border p-10 lg:p-12">

              {/* Success state */}
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" className="w-8 h-8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-navy text-2xl font-bold uppercase mb-3">
                    Quote Request Sent!
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-8">
                    We&apos;ve received your request and will get back to you
                    within 2 hours with a confirmed quote.
                  </p>
                  <button onClick={handleReset} className="btn-outline-dark">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-5">

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Your full name"
                        className="form-input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+254 700 000 000"
                        className="form-input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* From */}
                    <div>
                      <label htmlFor="from" className="form-label">Moving From *</label>
                      <input
                        id="from"
                        type="text"
                        required
                        value={form.from}
                        onChange={set('from')}
                        placeholder="e.g. Westlands"
                        className="form-input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* To */}
                    <div>
                      <label htmlFor="to" className="form-label">Moving To *</label>
                      <input
                        id="to"
                        type="text"
                        required
                        value={form.to}
                        onChange={set('to')}
                        placeholder="e.g. Kilimani"
                        className="form-input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="date" className="form-label">Moving Date *</label>
                      <input
                        id="date"
                        type="date"
                        required
                        value={form.date}
                        onChange={set('date')}
                        className="form-input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* House size */}
                    <div>
                      <label htmlFor="houseSize" className="form-label">House Size *</label>
                      <select
                        id="houseSize"
                        required
                        value={form.houseSize}
                        onChange={set('houseSize')}
                        className="form-input appearance-none cursor-pointer"
                        disabled={status === 'loading'}
                      >
                        <option value="" disabled>Select size</option>
                        {HOUSE_SIZES.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>

                    {/* Notes */}
                    <div className="col-span-2">
                      <label htmlFor="notes" className="form-label">Additional Notes</label>
                      <textarea
                        id="notes"
                        rows={4}
                        value={form.notes}
                        onChange={set('notes')}
                        placeholder="Fragile items, special requirements, preferred time..."
                        className="form-input resize-y"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <div className="col-span-2 bg-red-50 border border-red-200 px-4 py-3">
                        <p className="text-red-600 text-sm">
                          {errorMsg || 'Something went wrong. Please try again.'}
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="col-span-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-orange text-white py-4 text-[0.6875rem] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 hover:bg-orange-light disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-body border-none"
                      >
                        {status === 'loading' ? 'Sending...' : 'Request Free Quote →'}
                      </button>
                      <p className="text-center text-muted text-xs mt-3">
                        We respond within 2 hours during business hours
                      </p>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}