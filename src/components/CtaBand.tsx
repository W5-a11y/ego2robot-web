import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-28 sm:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-8 rounded-3xl bg-soft px-10 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-medium sm:text-3xl">
                Let's build the standard together.
              </h3>
              <p className="mt-3 text-body">
                The charter phase for academic founding members is underway.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Join the Consortium
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
