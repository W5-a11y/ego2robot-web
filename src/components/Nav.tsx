import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/benchmark', label: 'Benchmark' },
  { to: '/consortium', label: 'Consortium' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [onDark, setOnDark] = useState(true)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    // every page opens with a dark hero band; home's is full-height
    const heroHeight = () =>
      pathname === '/' ? window.innerHeight : window.innerHeight * 0.55
    const onScroll = () => setOnDark(window.scrollY < heroHeight() - 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

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
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="ml-auto rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
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
