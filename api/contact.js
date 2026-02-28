// api/contact.js
// ─────────────────────────────────────────────────────
// Handles quote request form submissions.
// Sends an email to the business owner via Resend.
// Protected against non-POST requests.
// ─────────────────────────────────────────────────────
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Change this to the client's real email address
const OWNER_EMAIL  = 'hello@empiremovers.co.ke'
const SENDER_EMAIL = 'onboarding@resend.dev'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, from, to, date, houseSize, notes } = req.body

  // Basic validation
  if (!name || !phone || !from || !to || !houseSize) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  try {
    await resend.emails.send({
      from:    SENDER_EMAIL,
      to:      OWNER_EMAIL,
      subject: `New Quote Request — ${houseSize} from ${from} to ${to}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 0;">

          <!-- Header -->
          <div style="background: #0f172a; padding: 28px 32px;">
            <h1 style="color: #f97316; font-size: 22px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
              Empire Movers
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 11px; margin: 4px 0 0; letter-spacing: 3px; text-transform: uppercase;">
              New Quote Request
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">

            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ['Full Name',    name],
                ['Phone',        phone],
                ['Moving From',  from],
                ['Moving To',    to],
                ['Moving Date',  date || 'Not specified'],
                ['House Size',   houseSize],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 140px; vertical-align: top; padding-right: 16px;">
                    ${label}
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 500;">
                    ${value}
                  </td>
                </tr>
              `).join('')}
            </table>

            ${notes ? `
              <div style="margin-top: 20px; background: #fff; border-left: 3px solid #f97316; padding: 14px 16px;">
                <p style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 6px;">
                  Additional Notes
                </p>
                <p style="color: #0f172a; font-size: 14px; margin: 0; line-height: 1.6;">
                  ${notes}
                </p>
              </div>
            ` : ''}

          </div>

          <!-- Footer -->
          <div style="background: #020617; padding: 20px 32px; text-align: center;">
            <p style="color: rgba(255,255,255,0.2); font-size: 11px; margin: 0;">
              Empire Movers & Logistics · Nairobi, Kenya
            </p>
          </div>

        </div>
      `,
    })

    return res.status(200).json({ success: true })

  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}