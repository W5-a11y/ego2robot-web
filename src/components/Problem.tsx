import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const problems = [
  {
    title: 'No shared protocol',
    body: 'Dataset categories and evaluation priorities remain ambiguous, while industrial needs vary widely across deployment scenarios.',
  },
  {
    title: 'Contamination unchecked',
    body: 'Open datasets leak into training, so reported gains cannot be audited or reproduced.',
  },
  {
    title: 'No comparable results',
    body: 'Without shared evaluation standards, labs cannot determine whether a dataset or method genuinely advances the field.',
  },
]

export default function Problem() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-28 sm:px-10 lg:py-36">
        <Reveal>
          <Eyebrow label="Why now" />
          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Every group reports numbers on its own setup.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <span aria-hidden className="mb-6 block h-0.5 w-10 bg-accent" />
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-body">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
