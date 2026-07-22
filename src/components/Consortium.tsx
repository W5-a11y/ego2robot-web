import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const universities = [
  { name: 'UC Berkeley', detail: 'BAIR — Tomizuka Lab · Dawn Song Group', focus: 'Robot learning · egocentric vision' },
  { name: 'Stanford', detail: 'Robotics & foundation policies', focus: 'Manipulation · foundation policies' },
  { name: 'MIT', detail: 'Evaluation methodology', focus: 'Manipulation · evaluation methodology' },
  { name: 'CMU', detail: 'Robot learning', focus: 'Ego-to-robot transfer · robot learning' },
  { name: 'Tsinghua IIIS', detail: 'Yang Gao Group', focus: 'Robot learning · embodied AI' },
]

const industry = ['Google DeepMind', 'xAI', '1X Technologies', 'Robot-data partners']

export default function Consortium() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-28 sm:px-10 lg:py-36">
        <Reveal>
          <Eyebrow label="Consortium" />
          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            University-led. Industry-informed.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-body">
            Initiated by BETA at Berkeley — an open, neutral, university-led
            consortium. Industry partners provide a real-world deployment
            perspective only.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u, i) => (
            <Reveal key={u.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line p-7 transition-shadow hover:shadow-md">
                <h3 className="text-lg font-medium">{u.name}</h3>
                <p className="mt-1 text-sm text-body">{u.detail}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-mut">{u.focus}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="h-full rounded-2xl bg-soft p-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Deployment perspective
              </p>
              <div className="mt-4 space-y-1.5">
                {industry.map((name) => (
                  <p key={name} className="text-sm text-body">{name}</p>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-mut">
                Industry partners advise on deployment needs — they do not set
                the standard.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
