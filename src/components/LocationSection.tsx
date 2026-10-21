import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_URL,
  HOURS_NOTE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LANDLINE_DISPLAY,
  LANDLINE_HREF,
  MAPS_EMBED_URL,
  MAPS_URL,
  MESSENGER_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../data/site';
import { CallButton } from './CallButton';

const row = 'flex items-start gap-4 border-b border-ink/10 py-5';
const icon = 'mt-1 h-4 w-4 shrink-0 text-moss';

/** Naslov, kontakt in zemljevid (domača stran in kontakt). */
export function LocationSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-linen py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal>
          {heading && (
            <>
              <p className="eyebrow mb-5">Obišči nas</p>
              <h2 className="text-[40px] sm:text-[52px] lg:text-[60px]">
                Mali atelje <span className="accent text-moss">na Ljubljanski cesti.</span>
              </h2>
            </>
          )}
          <ul className={`${heading ? 'mt-10' : ''} border-t border-ink/10 text-[16px]`}>
            <li className={row}>
              <MapPin className={icon} aria-hidden="true" />
              <a href={MAPS_URL} target="_blank" rel="noopener" className="hover:text-moss">
                {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
                <span className="mt-0.5 block text-[14px] text-stone underline underline-offset-4">Odpri v Google Maps</span>
              </a>
            </li>
            <li className={row}>
              <Clock className={icon} aria-hidden="true" />
              <span>
                {HOURS_NOTE}
                <span className="mt-0.5 block text-[14px] text-stone">Termin uskladimo s tvojim urnikom.</span>
              </span>
            </li>
            <li className={row}>
              <Phone className={icon} aria-hidden="true" />
              <span>
                <a href={PHONE_HREF} className="font-semibold hover:text-moss">{PHONE_DISPLAY}</a>
                <span className="text-stone"> · </span>
                <a href={LANDLINE_HREF} className="hover:text-moss">{LANDLINE_DISPLAY}</a>
              </span>
            </li>
            <li className={row}>
              <Mail className={icon} aria-hidden="true" />
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-moss">{EMAIL}</a>
            </li>
            <li className={row}>
              <Instagram className={icon} aria-hidden="true" />
              <span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-moss">{INSTAGRAM_HANDLE}</a>
                <span className="mt-0.5 flex items-center gap-1.5 text-[14px] text-stone">
                  <Facebook className="h-3.5 w-3.5" aria-hidden="true" />
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-moss">Facebook</a>
                  ·
                  <a href={MESSENGER_URL} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-moss">piši v Messengerju</a>
                </span>
              </span>
            </li>
          </ul>
          <CallButton className="mt-10" />
        </div>
        <div data-reveal className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-sage lg:min-h-[560px]">
          <iframe
            title={`Zemljevid: LAS lasni atelje suzana, ${ADDRESS.street}, ${ADDRESS.city}`}
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[40%]"
          />
        </div>
      </div>
    </section>
  );
}
