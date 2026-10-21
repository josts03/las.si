import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileContactBar } from './MobileContactBar';
import { useReveal } from './useReveal';

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  useReveal();

  // Ob menjavi strani na vrh (razen pri sidrih, npr. /storitve#keratin).
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col pb-[76px] lg:pb-0">
      <a href="#vsebina" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper">
        Preskoči na vsebino
      </a>
      <Header />
      <main id="vsebina" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
