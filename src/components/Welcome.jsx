import { motion } from 'framer-motion'
import { BRAND } from '../data'

export default function Welcome() {
  return (
    <section id="about" className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src="/hero-back.png"
          alt=""
          className="h-full w-full scale-110 object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,79,41,0.72) 0%, rgba(10,79,41,0.45) 45%, rgba(247,185,23,0.28) 100%)',
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-20 lg:px-10 lg:py-24">
        <motion.h2
          className="text-4xl font-medium tracking-tight md:text-5xl lg:text-[56px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Wow
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-base leading-7 text-white/90 md:text-lg">
            Wow Secondary School serves Grades 9–12 on a Cambridge pathway —
            where education is more than academics—it&apos;s about nurturing
            courageous, compassionate, and committed leaders of tomorrow.
          </p>
          <a
            href="#visit"
            className="mt-7 inline-flex items-center gap-3 rounded-md border border-white/50 bg-white px-5 py-3 text-sm font-semibold text-zera transition hover:bg-sun"
          >
            Book a Visit
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-zera text-white">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
