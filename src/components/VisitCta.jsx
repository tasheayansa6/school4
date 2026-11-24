import { motion } from 'framer-motion'

export default function VisitCta() {
  return (
    <section id="visit" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[24px] bg-zera px-8 py-12 text-white md:px-14 md:py-16"
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            See the Future of Education for Yourself
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85">
            Discover innovative educational opportunities that foster your
            child&apos;s growth and transform their learning experience.
          </p>
          <a
            href="#login"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-zera transition hover:bg-sun"
          >
            Login
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-zera text-white">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
