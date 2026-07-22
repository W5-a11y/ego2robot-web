import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/benchmark', label: 'Benchmark' },
  { to: '/consortium', label: 'Consortium' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <img src="/beta-logo.svg" alt="BETA logo" className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-[0.22em]">EGO2ROBOT</span>
          </div>
          <p className="mt-2 text-sm text-mut">
            Egocentric Data Evaluation Consortium · BETA at Berkeley
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-body transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-mut">© 2026 · An open, non-profit initiative</p>
      </div>
    </footer>
  )
}
