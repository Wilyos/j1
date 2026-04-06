const WHATSAPP_NUMBER = '573116111687';

export const buildWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message: string) => {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
};