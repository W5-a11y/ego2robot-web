import Placeholder from './Placeholder'
import Reveal from './Reveal'

export default function Mission() {
  return (
    <section className="bg-page">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-28 sm:px-10 lg:grid-cols-2 lg:py-36">
        <Reveal>
          <Placeholder
            label="Robot / lab photo"
            className="aspect-[4/3] w-full rounded-2xl"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <span aria-hidden className="mb-8 block h-1 w-12 rounded-full bg-accent" />
          <p className="text-2xl leading-relaxed text-ink sm:text-[28px]">
            An <span className="text-accent">open, neutral, university-led</span>{' '}
            standard for evaluating egocentric data for robot learning.
          </p>
          <p className="mt-6 text-sm text-mut">
            Egocentric Data Evaluation Consortium · BETA at Berkeley
          </p>
        </Reveal>
      </div>
    </section>
  )
}
