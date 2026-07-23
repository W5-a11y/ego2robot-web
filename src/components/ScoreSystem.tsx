import { Link } from 'react-router-dom'
import Eyebrow from './Eyebrow'
import Placeholder from './Placeholder'
import Reveal from './Reveal'

const layers = [
  {
    num: '01',
    pts: 50,
    name: 'Signal Trust',
    question: 'Can we trust the signals?',
    slot: 'Ego-view still',
    metrics: [
      ['Ego-signal quality', 10],
      ['Pose & tracking reliability', 12],
      ['Temporal consistency', 10],
      ['Language annotation', 8],
      ['Coverage & balance', 10],
    ] as const,
  },
  {
    num: '02',
    pts: 30,
    name: 'Policy-Ready Conversion',
    question: 'Can signals become policy-ready episodes?',
    slot: 'Pipeline still',
    metrics: [
      ['Episode organization', 6],
      ['Standardized format', 5],
      ['Learning annotations', 6],
      ['Pipeline readiness', 4],
      ['Training & eval tooling', 4],
      ['Human-to-robot transfer', 5],
    ] as const,
  },
  {
    num: '03',
    pts: 20,
    name: 'Downstream Validation',
    question: 'Does it improve downstream robot performance?',
    slot: 'Robot eval still',
    metrics: [
      ['Controlled evaluation', 4],
      ['Success rate', 4],
      ['Generalization', 5],
      ['Long-horizon ability', 3],
      ['Robustness & safety', 2],
      ['Statistical reliability', 2],
    ] as const,
  },
]

export default function ScoreSystem() {
  return (
    <section id="benchmark" className="bg-page">
      <div className="mx-auto max-w-[1200px] px-6 py-28 sm:px-10 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <Eyebrow label="Benchmark" />
            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              One protocol. 100 points. Three layers of evidence.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm leading-relaxed text-body">
              Every dataset is scored by the same rubric — from raw signal
              integrity to measured gains on real robot policies.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {layers.map((layer, i) => (
            <Reveal key={layer.num} delay={i * 0.12}>
              <article className="group transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative overflow-hidden rounded-2xl">
                  <Placeholder
                    label={layer.slot}
                    className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 text-sm font-medium text-accent">
                    {layer.num}
                  </span>
                  <span className="absolute right-5 top-5 rounded-full bg-page px-3 py-1 text-xs font-medium text-ink shadow-sm">
                    {layer.pts} pts
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 pt-14">
                    <h3 className="text-xl font-medium text-white">{layer.name}</h3>
                    <p className="mt-1 text-sm text-white/75">{layer.question}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {layer.metrics.map(([name, pts]) => (
                    <li key={name} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-body">{name}</span>
                      <span className="whitespace-nowrap text-mut">{pts} pts</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-mut">
            Layer 03 is validated with policy families the community already
            trains — ACT, Diffusion Policy / DP3, OpenVLA, RT-X, π0, GR00T,
            DreamerV3, Genie and Cosmos — so scores reflect sensitivity to
            dataset quality under strong pretrained models.
          </p>
          <Link
            to="/benchmark"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            Explore the full protocol
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
        </Reveal>
      </div>
    </section>
  )
}
