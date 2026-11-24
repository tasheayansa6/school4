import { motion } from 'framer-motion'
import { LEADERSHIP, TEAM_STATS } from '../data'

/** About → Our Team (own page; not on landing scroll) */
export default function Team() {
  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-zera">Our team in numbers</p>
          <p className="mt-3 text-base leading-7 text-mute">
            One proudly Malaysian team of educators and support staff, dedicated
            to every child.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {TEAM_STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className={`px-0 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-line' : ''}`}
            >
              <p className="text-4xl font-semibold tracking-tight text-zera md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-mute">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-20 max-w-2xl"
        >
          <h2 className="text-3xl font-medium tracking-tight text-zera md:text-5xl">
            Leadership & Board
          </h2>
          <p className="mt-4 text-base leading-7 text-mute">
            Setting the vision and stewarding Wow&apos;s values-led growth.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((person, i) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-paper">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zera">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-zera-light">{person.role}</p>
              <p className="mt-3 text-sm leading-6 text-mute">{person.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
