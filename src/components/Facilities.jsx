import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/** About → Facilities (own page; not on landing scroll) */
export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative min-h-[min(78svh,720px)] overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] overflow-hidden md:h-[52%]">
        <img
          src="/hero-back.png"
          alt=""
          className="hero-wave absolute inset-x-[-10%] bottom-[-18%] h-[155%] w-[120%] max-w-none object-cover object-top"
          aria-hidden
        />
      </div>

      <motion.img
        src="/facilities-hero.png"
        alt="Classroom facilities"
        className="pointer-events-none absolute right-0 bottom-0 z-10 hidden h-[80%] w-auto max-w-[52%] object-contain object-bottom lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src="/facilities-hero.png"
        alt="Classroom facilities"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[38%] w-auto object-contain object-bottom sm:h-[44%] lg:hidden"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      />

      <div className="relative z-20 mx-auto flex min-h-[min(78svh,720px)] max-w-[1280px] items-start px-6 pt-[10vh] pb-[40%] lg:items-center lg:px-10 lg:pt-0 lg:pb-[6%]">
        <motion.div
          className="max-w-[540px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-[34px] leading-[1.15] font-medium tracking-tight text-zera sm:text-4xl md:text-[48px]">
            State-of-the-Art Facilities for Holistic Growth
          </h2>
          <p className="mt-5 text-base leading-7 text-zera md:text-lg">
            Explore our spaces designed to inspire learning, creativity, and
            community. Each facility is thoughtfully crafted to support your
            Grades 9–12 journey.
          </p>
          <Link
            to="/#gallery"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-zera px-5 py-3 text-sm font-semibold text-white transition hover:bg-zera-dark"
          >
            View Gallery
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-zera">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
