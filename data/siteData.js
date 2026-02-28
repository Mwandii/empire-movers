// ─────────────────────────────────────────────────────────────────────────────
// siteData.js — Single source of truth for all Empire Movers content
// Update this file to change any text, numbers, or data on the site.
// No need to touch individual components.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name:     'Empire Movers',
  tagline:  'Move With Confidence. Settle With Ease.',
  phone:    '+254 700 000 000',
  email:    'hello@empiremovers.co.ke',
  location: 'Nairobi, Kenya',
  founded:  '2022',
}

export const STATS = [
  { value: '100+', label: 'Moves Completed' },
  { value: '4.9',  label: 'Star Rating'     },
  { value: '2hr',  label: 'Quote Response'  },
  { value: '0',    label: 'Hidden Charges'  },
]

export const SERVICES = [
  {
    id:    'residential',
    title: 'Residential Moving',
    desc:  'Bedsitters to 4-bedroom homes moved with care and precision. We handle everything from packing to placement.',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id:    'packing',
    title: 'Packing & Unpacking',
    desc:  'Full packing service using quality materials to protect your belongings — fragile or bulky.',
    image: 'https://images.pexels.com/photos/7464414/pexels-photo-7464414.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id:    'office',
    title: 'Office Relocation',
    desc:  'Minimal downtime, maximum care. We move your workspace efficiently so youre back operational fast.',
    image: 'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id:    'longdistance',
    title: 'Long Distance',
    desc:  'Moving across Nairobi or upcountry — we plan the logistics and handle the distance.',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export const STEPS = [
  {
    number: '01',
    title:  'Book Your Move',
    desc:   'Fill in our quick quote form with your house size, locations, and preferred date. We confirm within 2 hours.',
    image:  'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '02',
    title:  'We Pack & Load',
    desc:   'Our trained team arrives on time, handles your items with care, and loads everything securely onto the truck.',
    image:  'https://images.pexels.com/photos/4246096/pexels-photo-4246096.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    number: '03',
    title:  'You Settle In',
    desc:   'We deliver, offload, and place items in your new space. You\'re home before you know it.',
    image:  'https://images.pexels.com/photos/6969864/pexels-photo-6969864.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export const PRICING = [
  {
    size:    'Bedsitter',
    rooms:   'Studio',
    price:   'From KES 3,500',
    items:   ['Bed & mattress', 'Sofa', 'Kitchen items', 'Personal effects'],
    popular: false,
  },
  {
    size:    '1 Bedroom',
    rooms:   '1 BR',
    price:   'From KES 5,500',
    items:   ['All bedsitter items', 'Wardrobe', 'Dining set', 'Additional boxes'],
    popular: false,
  },
  {
    size:    '2 Bedroom',
    rooms:   '2 BR',
    price:   'From KES 9,000',
    items:   ['All 1BR items', 'Extra bedroom furniture', 'TV & electronics', 'Appliances'],
    popular: true,
  },
  {
    size:    '3 Bedroom',
    rooms:   '3 BR',
    price:   'From KES 14,000',
    items:   ['All 2BR items', 'Extra bedroom', 'Full kitchen', 'Garden items'],
    popular: false,
  },
  {
    size:    '4 Bedroom',
    rooms:   '4 BR',
    price:   'From KES 20,000',
    items:   ['Full house contents', 'Multiple bedrooms', 'Full kitchen & dining', 'Outdoor furniture'],
    popular: false,
  },
]

export const WHY_US = [
  {
    title: 'Fully Insured',
    desc:  'Every move is covered. Your belongings are protected from pickup to delivery.',
  },
  {
    title: 'Always On Time',
    desc:  'We respect your schedule. Our team arrives at the agreed time, every time.',
  },
  {
    title: 'No Hidden Costs',
    desc:  'The price you\'re quoted is the price you pay. Zero surprises on moving day.',
  },
  {
    title: 'Trained Team',
    desc:  'Professional movers who handle everything from fragile items to heavy furniture.',
  },
]

export const TEAM = [
  {
    name:  'Brian Otieno',
    role:  'Lead Mover',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name:  'Kevin Mwangi',
    role:  'Packing Specialist',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name:  'Daniel Kamau',
    role:  'Logistics Coordinator',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export const TESTIMONIALS = [
  {
    text:   'Empire Movers made my relocation completely stress-free. The team was professional, careful with my furniture, and finished ahead of schedule.',
    name:   'Sarah M.',
    move:   '2 Bedroom — Westlands to Kilimani',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    text:   'Finally a moving company that shows up on time and doesn\'t break things. The pricing was transparent and fair. Highly recommend.',
    name:   'James K.',
    move:   '3 Bedroom — Karen to Runda',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    text:   'Used them for my office move. Zero damage, zero downtime. We were operational the same afternoon. Exceptional service.',
    name:   'David O.',
    move:   'Office Relocation — CBD',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
]

export const COVERAGE = [
  'Westlands', 'Kilimani',  'Karen',      'Lavington', 'Parklands',
  'Runda',     'Gigiri',    'Kileleshwa', "Lang'ata",  'South B',
  'South C',   'Eastleigh', 'Kasarani',   'Ruaka',     'Rongai',
]

export const HOUSE_SIZES = [
  'Bedsitter',
  '1 Bedroom',
  '2 Bedroom',
  '3 Bedroom',
  '4 Bedroom',
  'Office / Commercial',
]

export const FOOTER_LINKS = {
  Services: [
    'Residential Moving',
    'Office Relocation',
    'Packing Services',
    'Long Distance',
  ],
  Company: [
    'How It Works',
    'Pricing',
    'Coverage Area',
    'Contact Us',
  ],
}