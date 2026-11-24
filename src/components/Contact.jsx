import { useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND } from '../data'

const TOPICS = [
  'Admissions',
  'Booking a campus visit',
  'Fees & tuition',
  'Cambridge programme',
  'Wow PLUS',
  'Something else',
]

const fieldClass =
  'mt-1.5 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-zera outline-none transition placeholder:text-mute/50 focus:border-zera'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // Honeypot — bots fill "website"
    if (data.get('website')) return
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold text-zera">General Enquiry</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zera md:text-5xl">
              Send Us a Message
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-mute">
              For specific inquiries, please fill out the form below, and we will
              get back to you as soon as possible.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
              <label className="block">
                <span className="text-sm font-medium text-zera">
                  Your name <span className="text-sun-dark">*</span>
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zera">Phone / WhatsApp</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+60"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zera">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zera">I&apos;m asking about</span>
                <select name="topic" defaultValue="Admissions" className={fieldClass}>
                  {TOPICS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-zera">
                  Your message <span className="text-sun-dark">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClass} resize-y`}
                />
              </label>

              {/* Honeypot */}
              <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
                Website
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-md bg-zera px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zera-dark"
              >
                Send message
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-zera">
                  →
                </span>
              </button>

              {sent ? (
                <p className="text-sm font-medium text-zera">
                  Thanks — we&apos;ve received your message and usually reply within a day.
                </p>
              ) : (
                <p className="text-sm leading-6 text-mute">
                  Please share your name, a way to reach you, and your question — we
                  usually reply within a day.
                </p>
              )}
            </form>
          </motion.div>

          {/* Direct contact card */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="rounded-[20px] bg-zera p-7 text-white md:p-9 lg:sticky lg:top-28"
          >
            <p className="text-base font-medium leading-7 text-white/90">
              Prefer to chat? Reach us directly:
            </p>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zera transition hover:bg-sun"
            >
              Message us on WhatsApp
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-zera text-white">
                →
              </span>
            </a>

            <div className="mt-8 space-y-5 border-t border-white/20 pt-7 text-sm">
              <div>
                <p className="font-semibold text-white/60">WhatsApp</p>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-medium text-white transition hover:text-sun"
                >
                  {BRAND.phoneWhatsApp}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white/60">Student Service</p>
                <a
                  href={`tel:${BRAND.phoneService.replace(/\D/g, '')}`}
                  className="mt-1 block text-base font-medium text-white transition hover:text-sun"
                >
                  {BRAND.phoneService}
                </a>
              </div>
              <div>
                <p className="font-semibold text-white/60">Email</p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-1 block text-base font-medium text-white transition hover:text-sun"
                >
                  {BRAND.email}
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
