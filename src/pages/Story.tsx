import { EcoSection } from '../components/EcoSection';
import { HowToVisit } from '../components/HowToVisit';
import { Img } from '../components/Img';
import { LogoSquare } from '../components/Logo';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { TeamGrid } from '../components/TeamGrid';
import { story } from '../data/content';
import { BRANDS, FOUNDED } from '../data/site';

export function Story() {
  return (
    <>
      <SEO
        title="Naša zgodba – Suzana Bajec in ekipa | LAS Celje"
        description={`Frizerska mojstrica Suzana Bajec je LAS lasni atelje suzana odprla leta ${FOUNDED} na Ljubljanski cesti v Celju. Danes je to prvi eko frizerski salon v Sloveniji.`}
        path="/nasa-zgodba"
      />

      <section className="container-x grid gap-12 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-28 lg:pt-16">
        <div>
          <p className="eyebrow mb-5">Naša zgodba</p>
          <h1 className="text-[50px] leading-[0.95] sm:text-[72px] lg:text-[92px]">
            Pozdravljen/a! <span className="accent text-moss">Sem Suzana.</span>
          </h1>
          <p className="mt-8 max-w-[580px] text-[18px] text-stone">
            Lastnica LAS lasnega ateljeja suzana in frizerska mojstrica. Hvala, ker si si vzel/a čas za mojo zgodbo – upam,
            da se kmalu vidimo tudi v salonu.
          </p>
        </div>
        <div className="relative" data-reveal>
          <Img name="salon" priority className="aspect-[4/3] rounded-[28px]" imgClassName="object-[62%_50%]" sizes="(min-width: 1024px) 40vw, 92vw" />
          <LogoSquare className="absolute -bottom-6 -left-4 w-[96px] rounded-[16px] sm:w-[120px]" />
        </div>
      </section>

      <section className="bg-linen py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Od tupiranja do eko salona"
            title={
              <>
                Ljubezen do las <span className="accent text-moss">se je pokazala zgodaj.</span>
              </>
            }
          />
          <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {story.map((s, i) => (
              <li key={s.title} data-reveal style={{ '--reveal-delay': `${(i % 3) * 80}ms` } as React.CSSProperties} className="border-t-2 border-ink pt-6">
                <p className="text-[34px] font-extrabold tracking-[-0.05em] text-moss">{s.year}</p>
                <h3 className="mt-3 text-[22px] tracking-[-0.025em]">{s.title}</h3>
                <p className="mt-3 text-[16px] text-stone">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ekipa"
            title={
              <>
                Mali salon, <span className="accent text-moss">maxi prijaznost.</span>
              </>
            }
            intro="Romana je v salonu od prvega letnika srednje šole, letos se nama je pridružila Nuša. Obe radi ustvarjava in se med delom dopolnjujeva brez besed."
          />
          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>

      <EcoSection />

      <section className="py-24 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <SectionHeading
            eyebrow="S čim delamo"
            title={
              <>
                Material je <span className="accent text-moss">ključen.</span>
              </>
            }
            intro="Za več kot dober rezultat. Znamkam, s katerimi delamo, zaupamo – in jih z veseljem priporočimo tudi za nego doma."
          />
          <ul className="grid grid-cols-2 gap-3" data-reveal>
            {BRANDS.map((b) => (
              <li key={b} className="flex aspect-[2/1] items-center justify-center rounded-[20px] border border-ink/10 text-[24px] font-bold tracking-[-0.03em] sm:text-[32px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowToVisit />
    </>
  );
}
