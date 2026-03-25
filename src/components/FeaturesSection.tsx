import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Palette } from 'lucide-react';

const features = [
  { icon: <Gift />, title: "Si tu caja parece barata, tu producto tambien", desc: "No importa cuanto cuides la receta o el producto: si entregas en un empaque que se siente improvisado, el cliente percibe menos valor antes del primer uso." },
  { icon: <Palette />, title: "Cada entrega sin marca es publicidad perdida", desc: "Si tu logo, colores y mensaje no aparecen en la caja, cada domicilio termina trabajando para el olvido. La gente recibe el pedido, consume y no recuerda de quien era." },
  { icon: <ShieldCheck />, title: "Los detalles que no cuidas tambien venden", desc: "Un empaque descuidado dice que la experiencia completa no importa. Uno bien pensado transmite orden, seriedad y hace mas facil que hablen bien de tu marca." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Lo que pierdes cuando tu empaque no esta a la altura</h2>
          <p className="text-muted-foreground mt-3">El problema no es solo que el icopor se vea simple. El problema es que hace que tu negocio se sienta menos cuidado, menos memorable y mas facil de reemplazar por cualquier competidor.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden p-8 md:p-10 bg-background rounded-[2rem] shadow-elegant border border-border transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0" />
              <div className="absolute right-5 top-5 text-[11px] font-bold tracking-[0.22em] text-muted-foreground">0{i + 1}</div>
              <div className="w-14 h-14 bg-primary/15 text-primary border border-primary/35 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
