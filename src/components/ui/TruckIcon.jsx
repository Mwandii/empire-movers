// src/components/ui/TruckIcon.jsx
// Inline SVG truck icon — no icon library dependency needed

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.color='currentColor']
 */
export default function TruckIcon({ className = 'w-5 h-5', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 4v4h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}