import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const roles = [
  { name: 'Co-PI', body: 'Co-design the protocol, co-lead a task track, co-author the paper.' },
  { name: 'Working group', body: 'Send a student or postdoc; gain submission rights and early access to test sets.' },
  { name: 'Advisor', body: 'Review the charter and rubric, lend your name, join a quarterly sync.' },
  { name: 'Data contributor', body: 'Contribute egocentric data or eval infrastructure; cited as a founding contributor.' },
]

export default function GetInvolved() {
  return (
    <section id="involved" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-28 sm:px-10 lg:py-36">
        <Reveal>
          <Eyebrow label="Get involved" />
          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Four ways to help build the standard.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line p-7 transition-shadow hover:shadow-md">
                <h3 className="text-lg font-medium text-accent">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
