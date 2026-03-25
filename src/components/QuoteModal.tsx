import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '573116111687';

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    qty: '',
    material: '',
    printType: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Obligatorio';
    if (!formData.company.trim()) errs.company = 'Obligatorio';
    if (!formData.phone.trim()) errs.phone = 'Obligatorio';
    if (!formData.qty || parseInt(formData.qty) < 1000) errs.qty = 'Min. 1,000';
    if (!formData.material) errs.material = 'Selecciona una opcion';
    if (!formData.printType) errs.printType = 'Selecciona una opcion';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = `Hola, mi nombre es ${formData.name.trim()} y te contacto desde ${formData.company.trim()}. Quiero cotizar el cambio de cajas de icopor a empaques de papel de calidad personalizados que vi en la pagina. Material preferido: ${formData.material}. Tipo de impresion: ${formData.printType}. Me interesan ${formData.qty} unidades y mi numero de contacto es ${formData.phone.trim()}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  const inputClass = "w-full px-5 py-4 bg-muted border-none rounded-2xl focus:ring-2 ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground";
  const checkboxClass = "h-4 w-4 accent-[hsl(var(--primary))]";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-background rounded-4xl p-8 shadow-2xl overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-2">Cotiza tu empaque personalizado</h3>
            <p className="text-muted-foreground mb-8">Te ayudamos a cambiar tu caja de icopor por un empaque de papel kraft o maulle personalizado con tu marca. Pedido minimo: 1.000 unidades.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Nombre completo</label>
                <input required className={inputClass} placeholder="Juan Perez"
                  value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                {errors.name && <span className="text-xs text-destructive ml-1">{errors.name}</span>}
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Marca o negocio</label>
                <input required className={inputClass} placeholder="Tu marca"
                  value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                {errors.company && <span className="text-xs text-destructive ml-1">{errors.company}</span>}
              </div>
              <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">WhatsApp</label>
                  <input required className={inputClass} placeholder="+57..."
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  {errors.phone && <span className="text-xs text-destructive ml-1">{errors.phone}</span>}
                </div>
                <div className="w-1/3 space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Unidades</label>
                  <input required type="number" min="1000" className={inputClass} placeholder="1000"
                    value={formData.qty} onChange={e => setFormData({ ...formData, qty: e.target.value })} />
                  {errors.qty && <span className="text-xs text-destructive ml-1">{errors.qty}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Material</label>
                <div className="grid grid-cols-2 gap-3 px-1">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className={checkboxClass}
                      checked={formData.material === 'Papel kraft'}
                      onChange={() => setFormData({ ...formData, material: formData.material === 'Papel kraft' ? '' : 'Papel kraft' })}
                    />
                    Papel kraft
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className={checkboxClass}
                      checked={formData.material === 'Maulle'}
                      onChange={() => setFormData({ ...formData, material: formData.material === 'Maulle' ? '' : 'Maulle' })}
                    />
                    Maulle
                  </label>
                </div>
                {errors.material && <span className="text-xs text-destructive ml-1">{errors.material}</span>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Impresion</label>
                <div className="grid grid-cols-2 gap-3 px-1">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className={checkboxClass}
                      checked={formData.printType === 'Una tinta'}
                      onChange={() => setFormData({ ...formData, printType: formData.printType === 'Una tinta' ? '' : 'Una tinta' })}
                    />
                    Una tinta
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className={checkboxClass}
                      checked={formData.printType === 'Multicolor'}
                      onChange={() => setFormData({ ...formData, printType: formData.printType === 'Multicolor' ? '' : 'Multicolor' })}
                    />
                    Multicolor
                  </label>
                </div>
                {errors.printType && <span className="text-xs text-destructive ml-1">{errors.printType}</span>}
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 py-5 text-lg bg-primary text-primary-foreground rounded-full font-semibold shadow-glow hover:brightness-95 transition-all flex items-center justify-center gap-2"
              >
                Enviar por WhatsApp <MessageCircle size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
