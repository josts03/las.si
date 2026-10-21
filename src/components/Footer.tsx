import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_URL,
  HOURS_NOTE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LANDLINE_DISPLAY,
  LANDLINE_HREF,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_MOTTO,
} from '../data/site';
import { NAV } from './Header';
import { Logo } from './Logo';

const heading = 'mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-leaf';
const link = 'transition-colors hover:text-leaf';

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <Logo light />
          <p className="mt-6 max-w-[300px] font-serif text-[19px] italic leading-snug text-paper">{SITE_MOTTO}</p>
          <p className="mt-3 max-w-[300px] text-[14px]">Prvi eko frizerski salon v Sloveniji. V Celju od leta 2004.</p>
        </div>

        <div>
          <p className={heading}>Obišči nas</p>
          <a href={MAPS_URL} target="_blank" rel="noopener" className={`block text-[15px] leading-relaxed ${link}`}>
            {ADDRESS.street}
            <br />
            {ADDRESS.postalCode} {ADDRESS.city}
          </a>
          <p className="mt-4 text-[15px]">{HOURS_NOTE}</p>
        </div>

        <div>
          <p className={heading}>Pokliči</p>
          <ul className="space-y-1.5 text-[15px]">
            <li>
              <a href={PHONE_HREF} className={`text-[20px] font-semibold text-paper ${link}`}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={LANDLINE_HREF} className={link}>{LANDLINE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className={`break-all ${link}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>

        <div>
          <p className={heading}>Sledi nam</p>
          <ul className="space-y-2 text-[15px]">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={`flex items-center gap-2 ${link}`}>
                <Instagram className="h-4 w-4" aria-hidden="true" /> {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className={`flex items-center gap-2 ${link}`}>
                <Facebook className="h-4 w-4" aria-hidden="true" /> LasniAteljeSuzana
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-[14px]">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-x flex flex-col gap-2 py-6 text-[13px] text-paper/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} LAS lasni atelje suzana, Celje</p>
          <p>Fotografije: Instagram in Facebook salona</p>
        </div>
      </div>
    </footer>
  );
}
