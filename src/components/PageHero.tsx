import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-dark">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,#343945_0%,#20242c_50%,#14161b_100%)]"
      />
      <span
        aria-hidden
        className="absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.2em] text-white/20"
      >
        Header image placeholder
      </span>
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 pt-36 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-accent"
        >
          [&nbsp;&nbsp;{eyebrow}&nbsp;&nbsp;]
        </motion.p>
        <h1
          aria-label={title}
          className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl"
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              aria-hidden
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
              className="inline-block whitespace-pre"
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55, ease: 'easeOut' }}
            className="mt-6 max-w-xl leading-relaxed text-white/75"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
