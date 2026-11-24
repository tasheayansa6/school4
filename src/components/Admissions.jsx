import { motion } from 'framer-motion'

export default function Admissions() {
  return (
    <>
      {/* Admissions hero */}
      <section
        id="admissions"
        className="relative min-h-[min(88svh,820px)] overflow-hidden bg-white"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] overflow-hidden md:h-[52%]">
          <img
            src="/adm-wave.png"
            alt=""
            className="hero-wave absolute inset-x-[-10%] bottom-[-20%] h-[160%] w-[120%] max-w-none object-cover object-top"
            aria-hidden
          />
        </div>

        <motion.img
          src="/adm-hero.png"
          alt="Teacher and students in class"
          className="pointer-events-none absolute right-0 bottom-0 z-10 hidden h-[78%] w-auto max-w-[54%] object-contain object-bottom lg:block"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.img
          src="/adm-hero.png"
          alt="Teacher and students in class"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-[40%] w-auto object-contain object-bottom sm:h-[46%] lg:hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        />

        <div className="relative z-20 mx-auto flex min-h-[min(88svh,820px)] max-w-[1280px] items-start px-6 pt-[12vh] pb-[42%] lg:items-center lg:px-10 lg:pt-0 lg:pb-[8%]">
          <motion.div
            className="max-w-[520px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[36px] leading-[1.15] font-medium tracking-tight text-zera sm:text-5xl md:text-[52px]">
              Open the Door to a Brighter Future
            </h2>
            <p className="mt-5 text-base leading-7 text-zera md:text-lg">
              Discover a Grades 9–12 secondary school where character,
              confidence, and curiosity grow together. We&apos;re here to guide
              you through every step of the admissions process.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-zera px-5 py-3 text-sm font-semibold text-white transition hover:bg-zera-dark"
            >
              Book a Visit
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-zera">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Community — about story */}
      <section id="community" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
          <img
            src="/hero-back.png"
            alt=""
            className="absolute inset-x-[-8%] bottom-[-30%] h-[170%] w-[116%] max-w-none object-cover object-top opacity-90"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl font-medium tracking-tight text-zera md:text-[48px] md:leading-[1.15]">
              More Than a School, We&apos;re a Community.
            </h2>
            <p className="mt-5 text-base leading-7 text-zera md:text-lg">
              We believe in a sense of belonging and collaboration between
              students, parents and educators. Together we create an environment
              where every child is known, and everyone grows — helping every
              learner become confident, compassionate, and ready to lead.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-md bg-zera px-5 py-3 text-sm font-semibold text-white transition hover:bg-zera-dark"
              >
                Learn More
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-zera">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-base font-medium text-zera transition hover:text-zera-light"
              >
                Book a Visit <span aria-hidden>›</span>
              </a>
            </div>
          </motion.div>

          <motion.img
            src="/community-hero.png"
            alt="Wow Secondary School community"
            className="relative z-10 w-full object-contain object-bottom drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          />
        </div>
      </section>
    </>
  )
}
