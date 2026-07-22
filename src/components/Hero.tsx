import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-dark">
      {/* Video slot — replace this block with a muted looping <video> later */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#3a3f4a_0%,#23262d_45%,#141519_100%)]" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 text-white/25">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em]">Hero video placeholder</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-28 pt-40 sm:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Setting the Standard for Egocentric Robot Learning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="mt-6 max-w-xl text-lg text-white/75"
        >
          An open, university-led benchmark measuring what egocentric data truly
          contributes to embodied AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-9"
        >
          <Link
            to="/benchmark"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Explore the Benchmark
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
