/* Empty image slot — swap for real photography/video stills later */
export default function Placeholder({
  label = 'Image placeholder',
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center border border-line bg-soft ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 text-mut">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.8" />
          <path d="m3.5 18 5-5 3.5 3.5L16 12l4.5 4.5" />
        </svg>
        <span className="text-[11px] uppercase tracking-[0.18em]">{label}</span>
      </div>
    </div>
  )
}
