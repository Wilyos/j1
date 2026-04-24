declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

/**
 * Dispara un evento estándar de Meta Pixel.
 * Solo se ejecuta si el pixel ya fue cargado en el navegador.
 */
export const trackEvent = (
  event: string,
  params?: Record<string, unknown>,
) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
};

/**
 * Dispara un evento personalizado de Meta Pixel.
 */
export const trackCustomEvent = (
  event: string,
  params?: Record<string, unknown>,
) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, params);
  }
};
