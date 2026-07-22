import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const groups = [
  {
    label: 'Egocentric human data',
    items: ['Ego4D', 'HOI4D', 'EgoLive', 'Egoverse'],
  },
  {
    label: 'Robot data',
    items: ['DROID', 'BridgeData v2', 'Open X-Embodiment', 'ManiSkill'],
  },
]

export default function Datasets() {
  return (
    <section className="bg-soft">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-28 sm:px-10 lg:grid-cols-2 lg:py-36">
        <Reveal>
          <Eyebrow label="In scope" />
          <h2 className="mt-6 max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Evaluated against the field.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-body">
            The harness runs on the datasets the community already trains on —
            open and private, human and robot — so scores map directly onto real
            research decisions.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-10">
            {groups.map((g) => (
              <div key={g.label}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-mut">{g.label}</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {g.items.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-line bg-white px-5 py-2.5 text-sm text-ink"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-sm text-mut">
              Public and private datasets alike. A held-out test set is part of
              the protocol.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
