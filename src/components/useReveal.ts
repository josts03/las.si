import { useEffect } from 'react';

/**
 * Elementom z atributom data-reveal doda razred .is-visible, ko pridejo v pogled.
 * MutationObserver ujame tudi vsebino, ki se izriše kasneje (lazy rute, menjava strani).
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0 },
    );
    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
