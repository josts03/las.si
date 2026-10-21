import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Menu, Phone, X } from 'lucide-react';
import { EMAIL, FACEBOOK_URL, HOURS_NOTE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF } from '../data/site';
import { CallButton, SmsButton } from './CallButton';
import { Logo } from './Logo';

export const NAV = [
  { to: '/storitve', label: 'Storitve' },
  { to: '/prej-potem', label: 'Prej in potem' },
  { to: '/nasa-zgodba', label: 'Naša zgodba' },
  { to: '/kontakt', label: 'Kontakt' },
];

const navLink = ({ isActive }: { isActive: boolean }) =>
  `relative whitespace-nowrap py-2 text-[15px] font-medium transition-colors hover:text-moss after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-moss after:transition-transform ${
    isActive ? 'text-moss after:scale-x-100' : 'after:scale-x-0'
  }`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ob menjavi strani zapri meni.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? 'bg-paper/95 shadow-[0_1px_0_rgba(29,33,22,0.08)] backdrop-blur' : 'bg-paper'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-[84px]">
        <Link to="/" aria-label="LAS lasni atelje suzana – domov" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="hidden text-[13px] text-stone xl:block">{HOURS_NOTE}</span>
          <CallButton className="!min-h-11 !px-5 !text-[14px]" />
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Zapri meni' : 'Odpri meni'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobilni meni */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-paper transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobilna navigacija" className="container-x flex flex-col pb-36 pt-4">
          <ul className="border-b border-ink/10 pb-6">
            <li>
              <Link to="/" className="block py-2.5 text-[34px] font-bold tracking-[-0.035em]">
                Domov
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="block py-2.5 text-[34px] font-bold tracking-[-0.035em]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-7">
            <CallButton />
            <SmsButton />
          </div>
          <div className="mt-8 space-y-1.5 text-[15px] text-stone">
            <p>{HOURS_NOTE}</p>
            <a href={PHONE_HREF} className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="block">{EMAIL}</a>
            <div className="flex gap-5 pt-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="flex items-center gap-2 text-ink">
                <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="flex items-center gap-2 text-ink">
                <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
