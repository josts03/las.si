import { Check } from 'lucide-react';
import { CallButton } from '../components/CallButton';
import { Faq, faqSchema } from '../components/Faq';
import { HowToVisit } from '../components/HowToVisit';
import { Img } from '../components/Img';
import { SEO } from '../components/SEO';
import { services } from '../data/services';
import { BRANDS } from '../data/site';

export function Services() {
  return (
    <>
      <SEO
        title="Storitve – striženje, barvanje, keratin | LAS Celje"
        description="Striženje, pramenčki in balayage, barvne korekcije, naravno barvanje Etnobotanika, keratin Cocochoco, hair botox, detox lasišča in pričeske v LAS lasnem ateljeju v Celju."
        path="/storitve"
        schema={faqSchema}
      />

      <section className="container-x pb-14 pt-10 lg:pb-20 lg:pt-16">
        <p className="eyebrow mb-5">Storitve</p>
        <h1 className="max-w-[980px] text-[50px] leading-[0.95] sm:text-[72px] lg:text-[96px]">
          Kaj delamo <span className="accent text-moss">z ljubeznijo do las.</span>
        </h1>
        <p className="mt-8 max-w-[620px] text-[18px] text-stone">
          Vsaki stranki se posvetimo celostno, strokovno in individualno. Poleg klasičnih frizerskih storitev zanj in zanjo
          ponujamo tudi posebne nege – vse z vrhunsko kozmetiko {BRANDS.slice(0, -1).join(', ')} in {BRANDS[BRANDS.length - 1]}.
        </p>
        <nav aria-label="Storitve na tej strani" className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border border-ink/15 px-4 py-2 text-[14px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper">
              {s.name}
            </a>
          ))}
        </nav>
      </section>

      <div className="border-t border-ink/10">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="border-b border-ink/10 py-16 lg:py-24">
            <div className={`container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-20`}>
              <div className={i % 2 ? 'lg:order-2' : ''} data-reveal>
                {s.image ? (
                  <Img name={s.image} className="aspect-[4/5] rounded-[28px] lg:aspect-[5/6]" sizes="(min-width: 1024px) 44vw, 92vw" />
                ) : (
                  <div className="flex aspect-[4/5] flex-col justify-between rounded-[28px] bg-leaf p-8 lg:aspect-[5/6] lg:p-12">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.22em]">Mikrokamera · eterična olja · kura</span>
                    <p className="font-serif text-[34px] italic leading-[1.15] sm:text-[44px]">»Od zdravega lasišča je odvisno zdravje las.«</p>
                  </div>
                )}
              </div>
              <div data-reveal>
                <p className="text-[14px] font-semibold tabular-nums text-moss">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 text-[40px] sm:text-[52px]">{s.name}</h2>
                <p className="mt-2 font-serif text-[21px] italic text-moss">{s.tagline}</p>
                <p className="mt-6 max-w-[560px] text-[17px] text-stone">{s.intro}</p>
                <ul className="mt-8 max-w-[560px] border-t border-ink/10">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 border-b border-ink/10 py-3.5 text-[16px]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-moss" strokeWidth={2.25} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                {s.note && <p className="mt-6 max-w-[560px] rounded-[16px] bg-sage px-5 py-4 text-[15px]">{s.note}</p>}
                <CallButton className="mt-8" variant="dark" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-5">Pogosta vprašanja</p>
            <h2 className="text-[40px] sm:text-[52px]">
              Preden <span className="accent text-moss">pokličeš.</span>
            </h2>
          </div>
          <Faq />
        </div>
      </section>

      <HowToVisit />
    </>
  );
}
