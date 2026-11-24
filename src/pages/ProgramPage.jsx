import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROGRAM_HEROES } from '../data'
import VisitCta from '../components/VisitCta'
import Contact from '../components/Contact'

export default function ProgramPage() {
  const { slug } = useParams()
  const program = PROGRAM_HEROES.find((p) => p.id === slug)

  if (!program) return <Navigate to="/" replace />

  return (
    <>
      <section className="relative min-h-[min(88svh,860px)] overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] overflow-hidden md:h-[55%]">
          <img
            src={program.wave}
            alt=""
            className="hero-wave absolute inset-x-[-10%] bottom-[-18%] h-[155%] w-[120%] max-w-none object-cover object-top"
            aria-hidden
          />
        </div>

        <motion.img
          src={program.image}
          alt=""
          className="pointer-events-none absolute right-0 bottom-0 z-10 hidden h-[82%] w-auto max-w-[52%] object-contain object-bottom lg:block"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.img
          src={program.image}
          alt=""
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[40%] w-auto object-contain object-bottom sm:h-[48%] lg:hidden"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        />

        <div className="relative z-20 mx-auto flex min-h-[min(88svh,860px)] max-w-[1280px] items-start px-6 pt-[12vh] pb-[42%] lg:items-center lg:px-10 lg:pt-0 lg:pb-[8%]">
          <motion.div
            className="max-w-[560px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/#programs"
              className="mb-5 inline-flex text-sm font-semibold text-zera-light transition hover:text-zera"
            >
              ← All Programs
            </Link>
            <h1 className="text-[34px] leading-[1.15] font-medium tracking-tight text-zera sm:text-4xl md:text-[48px]">
              {program.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-zera md:text-lg">{program.copy}</p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-zera px-5 py-3 text-sm font-semibold text-white transition hover:bg-zera-dark"
            >
              Learn More
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-zera">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <VisitCta />
      <Contact />
    </>
  )
}
