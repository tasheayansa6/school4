import { motion } from 'framer-motion'
import { GALLERY } from '../data'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-zera md:text-5xl">
            Photo Gallery
          </h2>
          <p className="mt-4 text-base leading-7 text-mute">
            Explore our vibrant campus facilities and learning spaces.
          </p>
        </motion.div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY.map((src, i) => (
            <motion.img
              key={`${src}-${i}`}
              src={src}
              alt={`Wow Secondary campus ${i + 1}`}
              className="mb-4 w-full break-inside-avoid rounded-xl object-cover"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.04, duration: 0.45 }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
