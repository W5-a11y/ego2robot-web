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
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
          [&nbsp;&nbsp;{eyebrow}&nbsp;&nbsp;]
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-xl leading-relaxed text-white/75">{children}</div>
        )}
      </div>
    </section>
  )
}
