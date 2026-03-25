import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-bold text-base sm:text-lg md:text-xl tracking-tighter min-w-0">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shrink-0">
            <Package size={18} className="text-primary" />
          </div>
          <div className="truncate leading-tight">
            Sistemas<span className="text-primary"> Litograficos</span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onOpenModal}
          className="py-2.5 px-4 sm:px-6 text-sm border border-border hover:bg-muted rounded-full font-semibold transition-all shadow-sm whitespace-nowrap"
        >
          <span className="sm:hidden">Dejar de perder marca</span>
          <span className="hidden sm:inline">Cotizar antes de seguir regalando percepcion</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Header;
