import { motion } from 'framer-motion'
import { BRAND } from '../data'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[min(100svh,960px)] min-h-[640px] overflow-hidden bg-white"
    >
      {/* Wave kept LOW so student faces sit on clean white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden md:h-[46%]">
        <img
          src="/hero-back.png"
          alt=""
          className="hero-wave absolute inset-x-[-12%] bottom-[-18%] h-[160%] w-[124%] max-w-none object-cover object-top"
          aria-hidden
        />
      </div>

      {/* Students — top-right so faces stay on white */}
      <motion.img
        src="/hero-students-right.png?v=3"
        alt={`${BRAND.name} students`}
        className="pointer-events-none absolute top-[4.5rem] right-0 z-10 hidden h-[78%] w-auto max-w-[52%] object-contain object-top lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.img
        src="/hero-students-right.png?v=3"
        alt={`${BRAND.name} students`}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[44%] w-auto object-contain object-bottom sm:h-[50%] lg:hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.75 }}
      />

      {/* Left copy */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1280px] items-start px-6 pt-[12vh] pb-[42%] lg:items-center lg:px-10 lg:pt-0 lg:pb-[8%]">
        <motion.div
          className="w-full max-w-[560px]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[40px] leading-[1.2] font-medium tracking-tight text-zera sm:text-5xl md:text-[56px] md:leading-[1.2]">
            Cambridge Rigour, Family Heart.
          </h1>
          <p className="mt-4 max-w-[448px] text-[16px] leading-[1.5] text-zera md:mt-5 md:text-[18px] md:leading-[1.5]">
            At {BRAND.name} (Grades 9–12) we blend the globally recognised
            Cambridge curriculum with the personalised care of a close-knit
            community — so every student is known by name, challenged to grow,
            and prepared to lead.
          </p>

          <div className="mt-7 flex flex-nowrap items-center gap-5 overflow-x-auto pb-1 md:mt-8">
            <a
              href="#programs"
              className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md bg-zera px-5 py-3 text-sm text-white transition hover:bg-zera-dark"
            >
              <span>Explore our Programs</span>
              <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-[3px] bg-[#fcfcfc]">
                <img
                  src="/arrow-dark.svg"
                  alt=""
                  className="h-2.5 w-2.5 transition duration-300 group-hover:translate-x-[150%] group-hover:opacity-0"
                  aria-hidden
                />
                <img
                  src="/arrow-dark.svg"
                  alt=""
                  className="absolute h-2.5 w-2.5 -translate-x-[150%] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </span>
            </a>

            <a
              href="#visit"
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap py-1 text-base font-medium text-zera transition hover:text-zera-light"
            >
              Book a Visit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
