import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROGRAMS } from '../data'

const ROUTES = {
  Cambridge: '/programs/cambridge',
  'Wow PLUS': '/programs/plus',
  'Wow ECA': '/programs/eca',
}

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold text-zera">Programs Overview</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zera md:text-5xl">
            Discover Our Unique Programs
          </h2>
          <p className="mt-5 text-base leading-7 text-mute">
            Cambridge pathway, specialist learning support, and enrichment —
            built for Grades 9–12.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <Link
                to={ROUTES[program.title] || '/'}
                className="group block overflow-hidden rounded-[20px] bg-paper"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zera/75 via-zera/20 to-transparent p-5 pt-20">
                    <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-mute">{program.copy}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-zera group-hover:text-zera-light">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
