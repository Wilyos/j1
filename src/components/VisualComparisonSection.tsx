import { motion } from 'framer-motion';

const VisualComparisonSection = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Cuando sigues usando icopor</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Dos empaques,{' '}
            <span className="text-primary">dos niveles de respeto por tu propia marca</span>.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">
            El icopor cumple una funcion basica, pero tambien deja claro que el empaque no fue prioridad. Un empaque de papel bien diseñado hace lo contrario: convierte la entrega en una prueba visible de que tu marca no compite por precio barato, sino por valor percibido.
          </p>
          <div className="mt-4 rounded-3xl border border-border bg-background/80 p-5 md:p-6 shadow-elegant">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Lo que pasa cuando sigues con icopor</p>
            <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
              <li>Tu marca entra muda: el cliente recibe el pedido y no siente diferencia frente a otra opcion.</li>
              <li>El producto se percibe mas barato aunque por dentro sea bueno.</li>
              <li>La entrega no genera foto, recuerdo ni conversacion; se desecha y ya.</li>
              <li>Sigues perdiendo una de las pocas superficies que realmente llegan a la mano del cliente.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl border border-border/80 bg-card/80 shadow-elegant overflow-hidden"
        >
          <img
            src="/box/comparacionj1.webp"
            alt="Comparacion visual entre caja de icopor y empaque de papel personalizado"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60" />
          <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/90">
            Icopor que no dice nada
          </div>
          <div className="pointer-events-none absolute left-3 bottom-3 rounded-full bg-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-glow">
            Papel que hace marca
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualComparisonSection;
