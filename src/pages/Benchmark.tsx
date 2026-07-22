import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

const pipeline = [
  {
    step: '01',
    name: 'Dataset in',
    body: 'Public or private datasets enter the harness — egocentric human data and robot data alike.',
  },
  {
    step: '02',
    name: 'Agent-based loading',
    body: 'Agent-based parsing and data loading bring heterogeneous formats into a common structure.',
  },
  {
    step: '03',
    name: 'VLM evaluation',
    body: 'A vision-language model (Qwen-VL-Max) evaluates and classifies episodes by type, quality, downstream use, and diversity.',
  },
  {
    step: '04',
    name: 'Layered scoring',
    body: 'Results roll up into the 100-point score across Signal Trust, Policy-Ready Conversion, and Downstream Validation.',
  },
  {
    step: '05',
    name: 'Downstream validation',
    body: 'Downstream models are selected based on dataset modalities and run against the frozen task suites.',
  },
]

const layerA = {
  metrics: [
    ['Ego-signal quality', 10],
    ['Pose & tracking reliability', 12],
    ['Temporal consistency', 10],
    ['Language annotation', 8],
    ['Coverage & balance', 10],
  ] as const,
  sample: [
    ['Ego-signal quality', 'Blur, temporal gaps', '8.84 / 10'],
    ['Pose & tracking reliability', 'Pose jitter, NaN values, alignment', '8.68 / 12'],
    ['Temporal consistency', 'Continuity & physical realism', '10.0 / 10'],
    ['Language annotation', 'Accuracy, substep completeness', '5.60 / 8'],
    ['Coverage & balance', 'Dataset-level diversity', 'Skipped'],
  ] as const,
}

const layerB = {
  metrics: [
    ['Episode organization', 'Whether episodes are clearly structured and easily searchable', '6 / 6'],
    ['Standardized format', 'Consistency of data formats, arrays, and data types', '5 / 5'],
    ['Learning annotations', 'Availability and quality of task, camera, and action annotations', '4 / 6'],
    ['Pipeline readiness', 'Whether the data can be directly loaded into a processing pipeline', '4 / 4'],
    ['Training & eval tooling', 'Availability of timing information required for training and evaluation', '4 / 4'],
    ['Human-to-robot transfer', 'Support for mapping human motion to robot actions', '5 / 5'],
  ] as const,
}

const layerC = {
  metrics: [
    ['Controlled evaluation', 4],
    ['Success rate', 4],
    ['Generalization', 5],
    ['Long-horizon ability', 3],
    ['Robustness & safety', 2],
    ['Statistical reliability', 2],
  ] as const,
  families: [
    { name: 'BC family', models: ['ACT', 'Diffusion Policy / DP3'] },
    { name: 'VLA family', models: ['OpenVLA', 'RT-1 / RT-2 / RT-X', 'π0 / GR00T'] },
    { name: 'World action models', models: ['DreamerV3', 'Genie / GAIA', 'Cosmos'] },
  ],
}

const datasets = [
  { name: 'Ego4D', type: 'Egocentric human data' },
  { name: 'HOI4D', type: 'Egocentric human data' },
  { name: 'EgoLive', type: 'Egocentric human data' },
  { name: 'Egoverse', type: 'Egocentric human data' },
  { name: 'DROID', type: 'Robot data' },
  { name: 'BridgeData v2', type: 'Robot data' },
  { name: 'Open X-Embodiment', type: 'Robot data' },
  { name: 'ManiSkill', type: 'Robot data' },
]

function LayerEyebrow({ text }: { text: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{text}</p>
  )
}

export default function Benchmark() {
  return (
    <main>
      <PageHero eyebrow="Benchmark" title="The Ego2Robot Protocol">
        <p>
          One shared rubric for egocentric data: 100 points across three layers
          of evidence, from raw signal integrity to measured gains on real robot
          policies.
        </p>
      </PageHero>

      {/* Pipeline */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10">
          <Reveal>
            <LayerEyebrow text="[  Pipeline  ]" />
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              How a dataset moves through the harness.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {pipeline.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <span className="text-sm font-medium text-accent">{p.step}</span>
                <h3 className="mt-2 text-lg font-medium">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Layer A */}
      <section className="bg-soft">
        <div className="mx-auto grid max-w-[1200px] items-start gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <LayerEyebrow text="[  Layer A · 50 pts  ]" />
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">Signal Trust</h2>
            <p className="mt-2 italic text-body">Can we trust the signals?</p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {layerA.metrics.map(([name, pts]) => (
                <li key={name} className="flex items-center justify-between py-3 text-sm">
                  <span>{name}</span>
                  <span className="text-mut">{pts} pts</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-white p-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mut">
                Sample evaluation · Egoverse (episode-level pilot)
              </p>
              <div className="mt-5 space-y-4">
                {layerA.sample.map(([metric, dims, score]) => (
                  <div key={metric} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium">{metric}</span>
                      <span className="whitespace-nowrap text-sm text-accent">{score}</span>
                    </div>
                    <p className="mt-1 text-xs text-mut">{dims}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-mut">
                Pose metrics evaluated with a VLM (Qwen-VL-Max). Coverage &
                balance requires dataset-level evaluation and is skipped at the
                episode level.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Layer B */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1200px] items-start gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <LayerEyebrow text="[  Layer B · 30 pts  ]" />
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Policy-Ready Conversion
            </h2>
            <p className="mt-2 italic text-body">Can signals become policy-ready episodes?</p>
            <p className="mt-6 max-w-md leading-relaxed text-body">
              Six dimensions measure whether a dataset can be loaded, organized,
              and mapped onto robot actions without manual rework.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:order-1">
            <div className="rounded-2xl border border-line bg-white p-7 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mut">
                Sample evaluation · Egoverse
              </p>
              <div className="mt-5 space-y-4">
                {layerB.metrics.map(([name, dims, score]) => (
                  <div key={name} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium">{name}</span>
                      <span className="whitespace-nowrap text-sm text-accent">{score}</span>
                    </div>
                    <p className="mt-1 text-xs text-mut">{dims}</p>
                  </div>
                ))}
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-sm font-semibold">Total</span>
                  <span className="text-sm font-semibold text-accent">28 / 30</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Layer C */}
      <section className="bg-soft">
        <div className="mx-auto grid max-w-[1200px] items-start gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <LayerEyebrow text="[  Layer C · 20 pts  ]" />
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Downstream Validation
            </h2>
            <p className="mt-2 italic text-body">
              Does it improve downstream robot performance?
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {layerC.metrics.map(([name, pts]) => (
                <li key={name} className="flex items-center justify-between py-3 text-sm">
                  <span>{name}</span>
                  <span className="text-mut">{pts} pts</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-white p-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mut">
                Validated with
              </p>
              <div className="mt-5 space-y-6">
                {layerC.families.map((f) => (
                  <div key={f.name}>
                    <p className="text-sm font-medium">{f.name}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {f.models.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-line bg-soft px-4 py-1.5 text-sm text-body"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-mut">
                Sensitive to dataset quality and supported by strong pretrained
                models.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dataset catalog */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10">
          <Reveal>
            <LayerEyebrow text="[  Dataset catalog  ]" />
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Evaluated against the field.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-body">
              The harness runs on the datasets the community already trains on —
              public and private alike. A held-out test set is part of the
              protocol.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {datasets.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <Placeholder
                    label={`${d.name} still`}
                    className="aspect-[16/10] w-full border-0 border-b border-line transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="p-5">
                    <h3 className="font-medium">{d.name}</h3>
                    <span className="mt-2 inline-block rounded-full border border-line px-3 py-1 text-xs text-mut">
                      {d.type}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
