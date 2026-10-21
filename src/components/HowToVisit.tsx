import { HOURS_NOTE, PHONE_DISPLAY, PHONE_HREF } from '../data/site';
import { CallButton, SmsButton } from './CallButton';

const steps = [
  { title: 'Pokliči ali pošlji SMS', text: 'Povej, kaj si želiš – novo barvo, keratin, drugačno pričesko ali samo osvežitev.' },
  { title: 'Dogovorimo se za termin', text: `${HOURS_NOTE}: prilagodimo se tvojemu urniku, ne obratno.` },
  { title: 'Pridi na Ljubljansko 20 a', text: 'Najprej posvet, potem čarovnija. Za domov dobiš še nasvete za nego.' },
];

/**
 * Kako priti na vrsto. Salon namenoma nima spletnega naročanja – osebni dogovor je del izkušnje.
 */
export function HowToVisit() {
  return (
    <section className="bg-leaf py-24 text-ink lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow mb-5 !text-ink/70">Brez obrazcev in čakalnih vrst</p>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[64px]">
            Termin se dogovorimo <span className="accent">osebno.</span>
          </h2>
          <a href={PHONE_HREF} className="mt-10 block text-[46px] font-extrabold leading-none tracking-[-0.05em] sm:text-[64px] lg:text-[76px]">
            {PHONE_DISPLAY}
          </a>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton variant="dark" short />
            <SmsButton className="!border-ink/30 hover:!bg-ink" />
          </div>
        </div>
        <ol className="self-end border-t border-ink/20">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties} className="grid grid-cols-[56px_1fr] gap-4 border-b border-ink/20 py-7">
              <span className="text-[15px] font-semibold tabular-nums">0{i + 1}</span>
              <div>
                <h3 className="text-[24px] tracking-[-0.025em]">{s.title}</h3>
                <p className="mt-2 text-[16px] text-ink/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
