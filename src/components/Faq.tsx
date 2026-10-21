import { PHONE_DISPLAY } from '../data/site';

export const FAQ = [
  {
    q: 'Se lahko naročim prek spleta?',
    a: `Spletnega naročanja nimamo – raje se slišimo. Pokliči ali pošlji SMS na ${PHONE_DISPLAY} ali nam piši na Instagramu ali Facebooku, termin pa uskladimo s tvojim urnikom.`,
  },
  {
    q: 'Kakšen je delovni čas?',
    a: 'Delamo po dogovoru. Živimo v hitrem tempu, zato se ti s terminom prilagodimo tako, da je zate najugodneje.',
  },
  {
    q: 'Koliko stane storitev?',
    a: 'Cena je odvisna od dolžine in gostote las ter od tega, kaj si želiš. Okvirno ceno ti povemo že po telefonu, natančno pa ob posvetu v salonu.',
  },
  {
    q: 'Koliko časa drži keratinsko ravnanje?',
    a: 'Običajno od 3 do 5 mesecev. Da bo rezultat zdržal čim dlje, doma uporabljaj šampon brez sulfatov in regenerator brez silikonov.',
  },
  {
    q: 'Ali naravna barva prekrije sive lase?',
    a: 'Rastlinski pigmenti Etnobotanika sive lase obarvajo, ne prekrijejo pa jih v celoti. Tudi vseh odtenkov ne zmorejo – zato se pred barvanjem vedno pogovorimo.',
  },
  {
    q: 'Zakaj »eko« salon?',
    a: 'Uporabljamo zeleno elektriko, varčne armature, biorazgradljiva čistila, ločujemo odpadke in izbiramo dobavitelje s certificiranimi naravnimi izdelki. Razvajanje brez slabe vesti.',
  },
];

/** Pogosta vprašanja (storitve, kontakt). Odgovori temeljijo na las.si in objavah na Instagramu. */
export function Faq() {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {FAQ.map((item) => (
        <details key={item.q} className="group py-1" data-reveal>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[19px] font-semibold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
              <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
              <span className="absolute left-1/2 top-0 h-4 w-px bg-ink transition-transform group-open:scale-y-0" />
            </span>
          </summary>
          <p className="max-w-[680px] pb-6 text-[16.5px] text-stone">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};
