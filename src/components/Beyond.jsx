import { motion } from 'framer-motion'
import { BEYOND } from '../data'

export default function Beyond() {
  return (
    <section id="beyond" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-sm font-semibold text-zera">Why Wow</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zera md:text-[48px] md:leading-[1.2]">
              An Education Beyond Expectation
            </h2>
            <p className="mt-5 text-base leading-7 text-mute">
              At Wow Secondary School, we offer a unique educational experience
              that goes beyond traditional academics to shape resilient,
              compassionate, and well-rounded leaders.
            </p>
          </motion.div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {BEYOND.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
              >
                <img src={item.icon} alt="" className="h-11 w-auto" />
                <h3 className="mt-4 text-xl font-semibold text-zera md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-mute">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
