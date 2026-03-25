import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿De verdad un empaque de papel mejora la percepcion de mi marca?',
    answer:
      'Si. Cuando el empaque se ve cuidado, el cliente asume que el negocio tambien lo esta. Cuando se ve generico, ocurre lo contrario: el producto arranca con una percepcion mas baja. Muchas marcas notan mejores comentarios, mas recordacion y mejor disposicion a recomprar cuando la entrega se ve de marca.',
  },
  {
    question: '¿Puedo imprimir mi logo, colores y mensajes?',
    answer:
      'Si. Podemos trabajar cajas en papel de calidad con tu logo, colores corporativos y frases clave. Asi logras que el empaque se vea coherente con tu identidad y se reconozca de inmediato.',
  },
  {
    question: '¿Sirve para domicilios y envios?',
    answer:
      'Diseñamos el empaque pensando en tu uso real. Para muchos productos, el papel de calidad ofrece una resistencia adecuada para domicilios y punto de venta, con la ventaja adicional de que no te obliga a seguir entregando en un formato que empobrece la percepcion de tu marca.',
  },
  {
    question: '¿Cual es el minimo para hacer un diseño a la medida?',
    answer:
      'Trabajamos con pedidos minimos desde 1.000 unidades. A partir de ahi puedes definir tamaño, material y tipo de impresion que mejor se ajuste a tu producto y a la experiencia que quieres dar a tus clientes.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background/80 border-t border-border/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preguntas frecuentes antes de dejar atras el empaque generico</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Resolvemos las dudas mas comunes sobre como cambiar el icopor por una caja de papel personalizada y por que ese cambio afecta directamente la percepcion, la recordacion y el valor que transmite tu marca.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-2xl px-4">
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
