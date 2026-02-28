# Empire Movers & Logistics

A professional marketing website for Empire Movers, a residential and commercial moving company based in Nairobi, Kenya.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI framework |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [Resend](https://resend.com) | Transactional email (contact form) |
| [Vercel](https://vercel.com) | Hosting & serverless functions |

## Project Structure

```
empire-movers/
├── api/
│   └── contact.js              # Serverless function — handles quote form email
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Sticky nav with mobile menu
│   │   │   └── Footer.jsx      # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.jsx        # Split hero with stats bar
│   │   │   ├── Services.jsx    # 4-card services grid
│   │   │   ├── HowItWorks.jsx  # 3-step process
│   │   │   ├── Pricing.jsx     # 5-tier pricing cards
│   │   │   ├── WhyEmpire.jsx   # Image collage + features
│   │   │   ├── Team.jsx        # Team member cards
│   │   │   ├── Testimonials.jsx# Client testimonial cards
│   │   │   ├── Coverage.jsx    # Nairobi coverage areas
│   │   │   └── Contact.jsx     # Quote request form
│   │   └── ui/
│   │       ├── FadeIn.jsx      # Scroll-triggered fade animation
│   │       └── TruckIcon.jsx   # Inline SVG truck icon
│   ├── data/
│   │   └── siteData.js         # ← All site content lives here
│   ├── pages/
│   │   └── HomePage.jsx        # Assembles all sections
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + global styles
├── .env.example                # Environment variable reference
├── tailwind.config.js          # Design tokens (colors, fonts)
├── vercel.json                 # Routing for SPA + API functions
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/empire-movers.git
cd empire-movers

# Install dependencies
npm install

# Copy env file and fill in values
cp .env.example .env
```

### Environment Variables

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `RESEND_API_KEY` | API key for sending emails | [resend.com](https://resend.com) |

### Development

```bash
# Frontend only (API functions won't work)
npm run dev

# Frontend + API functions (recommended)
npx vercel dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
npm run preview
```

## Updating Content

All text, images, and data are managed from a single file:

```
src/data/siteData.js
```

No need to touch individual components. Update the exported constants:

- `COMPANY` — name, tagline, phone, email, location
- `STATS` — hero stats bar (moves completed, rating, etc.)
- `SERVICES` — service cards (title, description, image)
- `STEPS` — how it works steps
- `PRICING` — pricing tiers
- `WHY_US` — feature highlights
- `TEAM` — team member names, roles, photos
- `TESTIMONIALS` — client reviews
- `COVERAGE` — service area tags
- `HOUSE_SIZES` — dropdown options in quote form

## Deployment

The project is configured for zero-config Vercel deployment.

```bash
# Deploy to Vercel
vercel

# Set environment variables
vercel env add RESEND_API_KEY
```

Or connect your GitHub repo to Vercel for automatic deployments on every push.

After deploying, set `RESEND_API_KEY` in:
**Vercel Dashboard → Project → Settings → Environment Variables**

## Contact Form

The quote form submits to `/api/contact` which:
1. Validates required fields
2. Sends a formatted email to the business owner via Resend
3. Returns success/error JSON

To update the recipient email, change `OWNER_EMAIL` in `api/contact.js`.