import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import MOQSection from '@/components/MOQSection';
import GallerySection from '@/components/GallerySection';
import QuoteModal from '@/components/QuoteModal';
import FAQSection from '@/components/FAQSection';
import VisualComparisonSection from '@/components/VisualComparisonSection';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowMobileCta(true);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <VisualComparisonSection />
      {!isMobile && <FeaturesSection />}
      <MOQSection />
      <GallerySection />
      {!isMobile && <FAQSection />}
      <footer className="py-12 pb-32 md:pb-12 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">© 2026 Sistemas Litograficos. Todos los derechos reservados.</p>
      </footer>

      <div
        className={`mobile-safe-bottom fixed inset-x-4 bottom-4 z-50 md:hidden transition-all duration-500 ${
          showMobileCta ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full rounded-[1.75rem] bg-secondary px-5 py-4 text-left text-secondary-foreground shadow-[0_20px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/10 backdrop-blur-md"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">No sigas viendote generico</p>
              <p className="mt-1 text-xs sm:text-sm font-semibold leading-tight pr-2">Pasa de icopor a empaque de papel y deja de entregar un producto bueno en una caja que le baja valor</p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4.5c-6.2 0-11.2 4.8-11.2 10.8c0 1.9.5 3.7 1.5 5.3L4.5 27.5l7.1-1.8c1.4.8 2.9 1.2 4.4 1.2c6.2 0 11.2-4.8 11.2-10.8S22.2 4.5 16 4.5Z" />
                <path d="M12.2 11.4c.2-.4.4-.4.7-.4h.6c.2 0 .5.1.6.4l1.1 2.6c.1.2.1.5-.1.7l-.9 1.1c-.1.2-.2.4-.1.6c.5 1 1.4 1.9 2.3 2.5c.2.1.5.1.7 0l1.1-.8c.2-.2.5-.2.7-.1l2.5 1.1c.2.1.4.4.4.6v.7c0 .3-.1.5-.4.7c-.6.4-1.4.6-2.2.5c-1.4-.2-3-.9-4.6-2.4c-1.9-1.7-3.1-3.7-3.4-5.5c-.1-.7 0-1.5.4-2.1Z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;
