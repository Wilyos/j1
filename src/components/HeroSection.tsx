import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, ArrowRight, Palette, Layers3, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const heroProduct = '/box/box2hero.png';

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const isMobile = useIsMobile();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sellingPoints = [
    {
      icon: Layers3,
      mobile: 'Tu marca no se pierde',
      desktop: 'Tu marca deja de verse como una mas',
    },
    {
      icon: Sparkles,
      mobile: 'No parece desechable',
      desktop: 'Tu entrega deja de sentirse desechable',
    },
    {
      icon: Palette,
      mobile: 'Se recuerda mas',
      desktop: 'Recuperas recordacion y valor percibido',
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 sm:hidden bg-background" />
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="/box/bannerBox2.jpeg"
          alt="Banner de empaque de papel de calidad"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-background" />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-7 max-md:order-2"
        >
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-white/10 text-foreground text-[10px] sm:text-sm font-bold tracking-[0.08em] sm:tracking-wide uppercase shadow-elegant whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="sm:hidden">Tu empaque te esta restando</span>
            <span className="hidden sm:inline">Cada entrega en icopor hace que tu marca se vea mas barata de lo que deberia</span>
          </div>
          <h1 className="text-[2.25rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.98] [text-wrap:pretty]">
            <span className="block sm:hidden">
              Si tu empaque se ve barato,
              <span className="text-primary block">tu marca tambien.</span>
            </span>
            <span className="hidden sm:inline">
              Si tu empaque se ve generico,{' '}
              <span className="text-primary inline">tu marca cobra menos de lo que vale.</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            <span className="sm:hidden">
              Seguir entregando en icopor hace que tu producto se olvide rapido. Cambia a una caja de papel que si se vea como parte de tu marca.
            </span>
            <span className="hidden sm:inline">
              Tus clientes juzgan tu negocio antes de abrir el pedido. Si reciben un empaque generico, tu producto arranca perdiendo valor. Cambiar el icopor por una caja de papel personalizada hace que la entrega se vea seria, memorable y lista para cobrar mejor.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {sellingPoints.map(({ icon: Icon, mobile, desktop }) => (
              <div
                key={desktop}
                className="rounded-2xl border border-border bg-background/80 backdrop-blur-md px-4 py-4 shadow-elegant"
              >
                <Icon className="text-primary mb-3" size={18} />
                <p className="text-sm font-semibold leading-snug text-foreground">
                  <span className="sm:hidden">{mobile}</span>
                  <span className="hidden sm:inline">{desktop}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-glow hover:brightness-95 transition-all flex items-center justify-center gap-2 text-base whitespace-nowrap"
            >
              <span className="sm:hidden">Quiero dejar de verme basico</span>
              <span className="hidden sm:inline">Quiero dejar de perder clientes</span>
              <ArrowRight size={20} />
            </motion.button>
            <div className="flex items-center gap-4 px-2 sm:px-6 text-sm font-medium text-muted-foreground">
              <Plane className="text-primary" size={20} /> Envios nacionales e internacionales
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={targetRef}
          style={{ y: isMobile ? 0 : y }}
          className="relative mt-1 md:mt-0 aspect-[5/6] sm:aspect-square bg-card/70 backdrop-blur-sm rounded-[2rem] md:rounded-4xl flex items-center justify-center overflow-hidden border border-white/10 shadow-elegant max-md:order-1"
        >
          <motion.img
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            src={heroProduct}
            alt="Empaque de papel de calidad personalizable"
            className="absolute inset-0 h-full w-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/28 via-black/8 to-black/30 pointer-events-none" />
          <div className="absolute left-4 right-4 top-4 z-20 rounded-[1.6rem] border border-white/12 bg-black/62 px-4 py-3 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.35)] sm:left-6 sm:right-auto sm:top-6 sm:max-w-[20rem] sm:px-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_rgba(34,197,94,0.65)]" />
              Lo primero que juzgan
            </div>
            <p className="mt-2 text-sm sm:text-[15px] font-semibold leading-tight text-white">
              <span className="sm:hidden">Tu caja ya no hace ver tu marca barata</span>
              <span className="hidden sm:inline">Tu cliente nota desde el empaque si tu marca cuida detalles o solo despacha por salir del paso</span>
            </p>
          </div>
          <div className="hidden md:grid absolute bottom-5 left-5 right-5 z-20 grid-cols-2 gap-3 md:w-64 md:left-auto md:right-6 md:bottom-6">
            <div className="rounded-2xl bg-background/85 px-4 py-3 backdrop-blur-md shadow-elegant">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Icopor</div>
              <div className="mt-1 text-sm font-semibold">Se olvida rapido</div>
            </div>
            <div className="rounded-2xl bg-secondary px-4 py-3 text-secondary-foreground shadow-elegant">
              <div className="text-xs uppercase tracking-[0.18em] text-primary/80">Papel de calidad</div>
              <div className="mt-1 text-sm font-semibold">Hace ver lo que cobras</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
