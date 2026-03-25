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
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.9-4.2a9 9 0 1 1 3.2 2.9L3 21" />
                <path d="M9.5 10a.5.5 0 0 0-.5.5a7 7 0 0 0 4.5 4.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.3-.46a2.7 2.7 0 0 1-1.24-1.24a.5.5 0 0 0-.46-.3h-1z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;
