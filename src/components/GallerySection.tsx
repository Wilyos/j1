import { motion } from 'framer-motion';

const images = [
  { src: '/box/alitas.webp', alt: "Empaque de papel de calidad personalizado - vista principal" },
  { src: '/box/alitas1.webp', alt: "Empaque de papel personalizado - vista lateral" },
  { src: '/box/j1papel.webp', alt: "Empaque de papel personalizado - detalle de marca" },
];

const GallerySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight"
            >
              Asi se ve cuando tu marca decide cambiar
            </motion.h2>
            <p className="text-muted-foreground mt-2">Tus clientes siguen recibiendo un empaque funcional, pero ahora la caja se ve de marca, se siente de mayor valor y da ganas de tomarle foto.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-muted rounded-3xl border border-border overflow-hidden"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
