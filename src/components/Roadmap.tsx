import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const phases = [
  { tag: 'P0', when: 'Jun – Aug 2026', what: 'Charter & academic founding members', active: true },
  { tag: 'P1', when: 'Sep – Oct 2026', what: 'Working group; protocol & rubric co-design; held-out test set', active: false },
  { tag: 'P1.5', when: 'Oct 2026', what: 'Position paper & public call for participation', active: false },
  { tag: 'P2', when: 'Dec 2026', what: 'v0 at NeurIPS — open harness & first public results', active: false },
  { tag: 'P3', when: 'Q1 2027', what: 'University summit; v1.0; open submissions worldwide', active: false },
]

export default function Roadmap() {
  return (
    <section className="bg-dark text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-28 sm:px-10 lg:py-36">
        <Reveal>
          <Eyebrow label="Roadmap" />
          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Public by NeurIPS. Standard by ICLR.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {phases.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl border p-6 ${
                  p.active ? 'border-accent/60 bg-white/[0.07]' : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${p.active ? 'text-accent' : 'text-white/60'}`}>
                    {p.tag}
                  </span>
                  {p.active && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Now
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xs text-white/50">{p.when}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{p.what}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
