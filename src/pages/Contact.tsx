import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { Faq, faqSchema } from '../components/Faq';
import { LocationSection } from '../components/LocationSection';
import { SEO } from '../components/SEO';
import {
  ADDRESS_LINE,
  EMAIL,
  FACEBOOK_URL,
  HOURS_NOTE,
  INSTAGRAM_DM_URL,
  MESSENGER_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SMS_HREF,
} from '../data/site';

const CHANNELS = [
  { icon: Phone, label: 'Pokliči', value: PHONE_DISPLAY, href: PHONE_HREF, primary: true },
  { icon: MessageCircle, label: 'Pošlji SMS', value: PHONE_DISPLAY, href: SMS_HREF },
  { icon: Instagram, label: 'Piši na Instagramu', value: '@lasni_atelje_suzana', href: INSTAGRAM_DM_URL, external: true },
  { icon: Facebook, label: 'Piši v Messengerju', value: 'LasniAteljeSuzana', href: MESSENGER_URL, external: true },
  { icon: Mail, label: 'Pošlji e-pošto', value: EMAIL, href: `mailto:${EMAIL}` },
];

export function Contact() {
  return (
    <>
      <SEO
        title="Kontakt – LAS lasni atelje suzana, Celje"
        description={`${ADDRESS_LINE}. ${HOURS_NOTE}: pokliči ali pošlji SMS na ${PHONE_DISPLAY} ali nam piši na Instagramu in Facebooku.`}
        path="/kontakt"
        schema={faqSchema}
      />

      <section className="container-x pb-20 pt-10 lg:pb-28 lg:pt-16">
        <p className="eyebrow mb-5">Kontakt</p>
        <h1 className="max-w-[900px] text-[50px] leading-[0.95] sm:text-[72px] lg:text-[96px]">
          Slišimo se? <span className="accent text-moss">Z veseljem.</span>
        </h1>
        <p className="mt-8 max-w-[600px] text-[18px] text-stone">
          Spletnega naročanja nimamo – termin se dogovorimo osebno. {HOURS_NOTE}, zato skupaj najdemo čas, ki ti ustreza.
        </p>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {CHANNELS.map(({ icon: Icon, label, value, href, primary, external }) => (
            <li key={label} data-reveal>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener' } : {})}
                className={`flex h-full flex-col justify-between gap-10 rounded-[22px] p-6 transition-colors ${
                  primary ? 'bg-moss text-paper hover:bg-ink' : 'border border-ink/10 hover:border-ink/40 hover:bg-linen'
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  <span className="block text-[19px] font-semibold tracking-[-0.02em]">{label}</span>
                  <span className={`mt-1 block break-all text-[14px] ${primary ? 'text-paper/80' : 'text-stone'}`}>{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <LocationSection heading={false} />

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-5">Pogosta vprašanja</p>
            <h2 className="text-[40px] sm:text-[52px]">
              Dobro <span className="accent text-moss">je vedeti.</span>
            </h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}
