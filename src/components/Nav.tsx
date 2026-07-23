import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/benchmark', label: 'Benchmark' },
  { to: '/consortium', label: 'Consortium' },
  { to: '/contact', label: 'Contact' },
]

type Theme = 'light' | 'dark'

function initialTheme(): Theme {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function Nav() {
  const [overHero, setOverHero] = useState(true)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private mode */
    }
  }, [theme])

  useEffect(() => {
    // every page opens with a dark hero band; home's is full-height
    const heroHeight = () =>
      pathname === '/' ? window.innerHeight : window.innerHeight * 0.55
    const onScroll = () => setOverHero(window.scrollY < heroHeight() - 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // glass reads dark over the hero band, and everywhere in dark theme
  const onDark = overHero || theme === 'dark'
  const glass = onDark
    ? 'border-white/20 bg-white/10 backdrop-blur-md'
    : 'border-black/10 bg-white/70 backdrop-blur-md shadow-sm'
  const text = onDark ? 'text-white' : 'text-ink'
  const mutText = onDark
    ? 'text-white/70 hover:text-white'
    : 'text-body hover:text-ink'

  return (
    <div
      className="pointer-events-none fixed inset-x-4 top-4 z-50 sm:inset-x-5 sm:top-5"
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.nav
            key="bar"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`pointer-events-auto flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border px-5 py-3 sm:px-6 ${glass}`}
          >
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <img src="/beta-logo.svg" alt="BETA logo" className="h-8 w-8" />
              <span className={`text-[10px] font-semibold tracking-[0.22em] ${text}`}>
                EGO2ROBOT
              </span>
            </Link>
            <span aria-hidden className={`hidden h-6 w-px sm:block ${onDark ? 'bg-white/20' : 'bg-black/10'}`} />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `border-b-2 pb-0.5 text-sm transition-colors ${
                      isActive
                        ? 'border-accent text-accent'
                        : `border-transparent ${mutText}`
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`transition-colors ${mutText}`}
            >
              {theme === 'light' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              )}
            </button>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Join the Consortium
            </Link>
          </motion.nav>
        ) : (
          <motion.button
            key="chip"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            type="button"
            aria-label="Open navigation"
            onMouseEnter={() => setOpen(true)}
            onFocus={() => setOpen(true)}
            onClick={() => setOpen(true)}
            className={`pointer-events-auto flex flex-col items-center gap-1.5 rounded-2xl border px-4 py-3 ${glass}`}
          >
            <img src="/beta-logo.svg" alt="BETA logo" className="h-8 w-8" />
            <span className={`text-[9px] font-semibold tracking-[0.22em] ${text}`}>
              EGO2ROBOT
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
