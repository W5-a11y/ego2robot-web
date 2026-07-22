import type { FormEvent } from 'react'
import PageHero from '../components/PageHero'
import GetInvolved from '../components/GetInvolved'
import Faq from '../components/Faq'
import Reveal from '../components/Reveal'

const CONTACT_EMAIL = 'contact@ego2robot.org'

export default function Contact() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Ego2Robot inquiry — ${fd.get('name')}`)
    const body = encodeURIComponent(
      `${fd.get('message')}\n\n— ${fd.get('name')} (${fd.get('email')}${
        fd.get('org') ? `, ${fd.get('org')}` : ''
      })`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent'

  return (
    <main>
      <PageHero eyebrow="Contact" title="Help build the standard.">
        <p>
          Whether you lead a lab, advise on methodology, or contribute egocentric
          data and eval infrastructure — the consortium is open.
        </p>
      </PageHero>

      <GetInvolved />

      {/* Form + info */}
      <section className="bg-soft">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form onSubmit={submit} className="rounded-2xl border border-line bg-white p-8">
              <h2 className="text-2xl font-medium">Send us a message</h2>
              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Full name *
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    placeholder="jane@university.edu"
                  />
                </div>
                <div>
                  <label htmlFor="org" className="mb-1.5 block text-sm font-medium">
                    Organization / lab
                  </label>
                  <input id="org" name="org" className={field} placeholder="Robotics Lab" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={field}
                    placeholder="Tell us how you'd like to participate…"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                >
                  Send message
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5">
              <div className="rounded-2xl border border-line bg-white p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium">Email</h3>
                <p className="mt-1 text-sm text-mut">For inquiries and participation</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block text-sm text-accent">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="rounded-2xl border border-line bg-white p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium">Initiated by</h3>
                <p className="mt-1 text-sm text-mut">BETA at Berkeley</p>
                <p className="mt-2 text-sm text-body">Berkeley · Stanford · MIT · CMU · Tsinghua IIIS</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
    </main>
  )
}
