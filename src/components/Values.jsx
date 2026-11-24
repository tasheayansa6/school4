import { motion } from 'framer-motion'
import { VALUES } from '../data'

export default function Values() {
  return (
    <section id="values" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-sm font-semibold text-zera">Values</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zera md:text-[48px] md:leading-[1.2]">
              Our Core Values Define Our Community
            </h2>
            <p className="mt-5 text-base leading-7 text-mute">
              At Wow Secondary School, we believe in fostering a culture built
              on strong values. Our commitment to these principles shapes the
              character of our students and guides their journey.
            </p>
            <a
              href="#programs"
              className="mt-8 inline-flex items-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-zera transition hover:border-zera hover:bg-zera-lightest"
            >
              Learn More
            </a>
          </motion.div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
              >
                <img src={value.icon} alt="" className="h-11 w-auto" />
                <h3 className="mt-4 text-xl font-semibold text-zera">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{value.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
