import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'Who sets the standard?',
    a: 'The university consortium — UC Berkeley, Stanford, MIT and CMU, joined by Tsinghua IIIS. Industry partners provide a real-world deployment perspective only.',
  },
  {
    q: 'How is the score structured?',
    a: 'Every dataset receives 100 points across three layers: Signal Trust (50) — can we trust the signals; Policy-Ready Conversion (30) — can signals become policy-ready episodes; and Downstream Validation (20) — does it improve downstream robot performance.',
  },
  {
    q: 'Which datasets are in scope?',
    a: 'Egocentric human data such as Ego4D, HOI4D, EgoLive and Egoverse, and robot data such as DROID, BridgeData v2, Open X-Embodiment and ManiSkill — public and private alike.',
  },
  {
    q: 'Is the evaluation framework open?',
    a: 'Yes. Ego2Robot is an open, non-profit initiative built on an open-source evaluation framework: the open harness and first public results arrive with v0 at NeurIPS, and v1.0 opens submissions worldwide.',
  },
]

export default function Faq() {
  return (
    <section className="bg-page">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-28 sm:px-10 lg:grid-cols-[1fr_1.4fr] lg:py-36">
        <Reveal>
          <Eyebrow label="FAQ" />
          <h2 className="mt-6 max-w-sm text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-mut transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-xl leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
