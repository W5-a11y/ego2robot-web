import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

const universities = [
  {
    name: 'UC Berkeley',
    detail: 'BAIR — Tomizuka Lab · Dawn Song Group',
    focus: 'Robot learning · egocentric vision',
    img: '/universities/berkeley.jpg',
    position: '50% 38%',
  },
  {
    name: 'Stanford',
    detail: 'Robotics & foundation policies',
    focus: 'Manipulation · foundation policies',
    img: '/universities/stanford.jpg',
    position: '50% 50%',
  },
  {
    name: 'MIT',
    detail: 'Evaluation methodology',
    focus: 'Manipulation · evaluation methodology',
    img: '/universities/mit.jpg',
    position: '50% 55%',
  },
  {
    name: 'CMU',
    detail: 'Robot learning',
    focus: 'Ego-to-robot transfer · robot learning',
    img: '/universities/cmu.jpg',
    position: '50% 40%',
  },
  {
    name: 'Tsinghua IIIS',
    detail: 'Yang Gao Group',
    focus: 'Robot learning · embodied AI',
    img: '/universities/tsinghua.jpg',
    position: '50% 45%',
  },
]

const industry = [
  { name: 'Google DeepMind', role: 'Research scientist perspective' },
  { name: 'xAI', role: 'Deployment perspective' },
  { name: '1X Technologies', role: 'Data research perspective' },
  { name: 'Robot-data partners', role: 'Data collection perspective' },
]

export default function ConsortiumPage() {
  return (
    <main>
      <PageHero eyebrow="Consortium" title="University-led. Industry-informed.">
        <p>
          An open, neutral, university-led consortium initiated by BETA at
          Berkeley — building the shared standard for evaluating egocentric data
          in robot learning.
        </p>
      </PageHero>

      {/* Universities */}
      <section className="bg-page">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              [&nbsp;&nbsp;University consortium&nbsp;&nbsp;]
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              The academic groups setting the standard.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u, i) => (
              <Reveal key={u.name} delay={i * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="overflow-hidden border-b border-line">
                    <img
                      src={u.img}
                      alt={`${u.name} campus`}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      style={{ objectPosition: u.position }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium">{u.name}</h3>
                    <p className="mt-1 text-sm text-body">{u.detail}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-mut">{u.focus}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-mut">
            Campus photography via Wikimedia Commons — Tristan Harward (CC
            BY-SA 2.5), King of Hearts (CC BY-SA 3.0), Madcoverboy (CC BY-SA
            3.0), Dllu (CC BY-SA 4.0), Jon (CC BY 2.0).
          </p>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-soft">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <span aria-hidden className="mb-8 block h-1 w-12 rounded-full bg-accent" />
            <p className="text-2xl leading-relaxed text-ink sm:text-[26px]">
              The standard is set by the university consortium.{' '}
              <span className="text-accent">
                Industry partners provide a real-world deployment perspective only.
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.map((p) => (
                <div key={p.name} className="rounded-2xl border border-line bg-page p-6">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-mut">{p.role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-page pt-28" />
      <CtaBand />
    </main>
  )
}
