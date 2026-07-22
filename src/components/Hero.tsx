import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const TITLE = 'Setting the Standard for Egocentric Robot Learning'
const WORDS = TITLE.split(' ')
const TYPE_START = 0.4
const TYPE_STEP = 0.13
const TYPE_END = TYPE_START + WORDS.length * TYPE_STEP

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 900], [0, 140])

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-dark">
      {/* Video slot — replace this block with a muted looping <video> later */}
      <motion.div aria-hidden style={{ y: bgY }} className="absolute inset-x-0 -inset-y-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#3a3f4a_0%,#23262d_45%,#141519_100%)]" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 text-white/25">
          <motion.span
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </motion.span>
          <span className="text-[11px] uppercase tracking-[0.25em]">Hero video placeholder</span>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-28 pt-40 sm:px-10">
        <h1
          aria-label={TITLE}
          className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: TYPE_START + i * TYPE_STEP, duration: 0.01 }}
              className="inline-block whitespace-pre"
            >
              {word}
              {i < WORDS.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
          <motion.span
            aria-hidden
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: TYPE_END + 1.8, duration: 0.4 }}
            className="inline-block"
          >
            <span className="caret-blink ml-2 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] bg-accent" />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: TYPE_END + 0.1, ease: 'easeOut' }}
          className="mt-6 max-w-xl text-lg text-white/75"
        >
          An open, university-led benchmark measuring what egocentric data truly
          contributes to embodied AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: TYPE_END + 0.28, ease: 'easeOut' }}
          className="mt-9"
        >
          <Link
            to="/benchmark"
            className="group inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Explore the Benchmark
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
