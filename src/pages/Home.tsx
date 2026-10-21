import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { BeforeAfter } from '../components/BeforeAfter';
import { CallButton } from '../components/CallButton';
import { EcoSection } from '../components/EcoSection';
import { HowToVisit } from '../components/HowToVisit';
import { Img } from '../components/Img';
import { InstagramStrip } from '../components/InstagramStrip';
import { LocationSection } from '../components/LocationSection';
import { LogoSquare } from '../components/Logo';
import { Marquee } from '../components/Marquee';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { TeamGrid } from '../components/TeamGrid';
import { Testimonials } from '../components/Testimonials';
import { services } from '../data/services';
import { FB_RECOMMEND, FOUNDED, SITE_MOTTO } from '../data/site';

export function Home() {
  return (
    <>
      <SEO
        title="LAS lasni atelje suzana – eko frizerski salon v Celju"
        description="Prvi eko frizerski salon v Sloveniji. Striženje, pramenčki in balayage, keratin Cocochoco, naravno barvanje Etnobotanika. Ljubljanska cesta 20 a, Celje, tel. 041 720 551."
        path="/"
      />

      {/* Uvod */}
      <section className="container-x grid gap-12 pb-20 pt-6 lg:min-h-[calc(100svh-84px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:pb-16 lg:pt-4">
        <div>
          <p className="font-serif text-[19px] italic text-moss sm:text-[21px]">{SITE_MOTTO}</p>
          <h1 className="mt-6 text-[52px] leading-[0.95] sm:text-[76px] lg:text-[92px] xl:text-[104px]">
            Lepi lasje, <span className="accent text-moss">brez slabe vesti.</span>
          </h1>
          <p className="mt-8 max-w-[520px] text-[18px] text-stone sm:text-[19px]">
            LAS lasni atelje suzana je prvi eko frizerski salon v Sloveniji. Od leta {FOUNDED} na Ljubljanski cesti v Celju –
            z vrhunsko kozmetiko, naravnimi barvami in veliko srca.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <a href="#prej-potem" className="btn-outline">
              Poglej prej in potem <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <dl className="mt-12 grid max-w-[560px] grid-cols-3 border-t border-ink/10 pt-6">
            <div>
              <dt className="text-[13px] text-stone">Odprto od</dt>
              <dd className="mt-1 text-[24px] font-bold tracking-[-0.03em]">{FOUNDED}</dd>
            </div>
            <div className="border-l border-ink/10 pl-4 sm:pl-6">
              <dt className="text-[13px] text-stone">Priporočila</dt>
              <dd className="mt-1 text-[24px] font-bold tracking-[-0.03em]">{FB_RECOMMEND.percent}&nbsp;%</dd>
            </div>
            <div className="border-l border-ink/10 pl-4 sm:pl-6">
              <dt className="text-[13px] text-stone">Delovni čas</dt>
              <dd className="mt-1 text-[17px] font-semibold leading-tight tracking-[-0.02em] sm:text-[20px]">po dogovoru</dd>
            </div>
          </dl>
        </div>

        <div className="relative pb-10 pl-8 sm:pl-16 lg:pb-12">
          <Img name="pramen" priority className="aspect-[4/5] rounded-[30px]" sizes="(min-width: 1024px) 46vw, 92vw" />
          <Img
            name="keratin-2-po"
            priority
            className="!absolute bottom-0 left-0 aspect-[3/4] w-[40%] rounded-[22px] ring-[6px] ring-paper sm:ring-8"
            imgClassName="object-[30%_50%]"
            sizes="(min-width: 1024px) 18vw, 38vw"
          />
          <LogoSquare className="absolute -top-3 right-4 w-[92px] rounded-[18px] shadow-[0_20px_40px_-20px_rgba(29,33,22,0.5)] sm:w-[120px] lg:-right-4" />
        </div>
      </section>

      <Marquee />

      {/* Odnos je vse */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <figure data-reveal>
            <p className="eyebrow mb-6">Lasni atelje Suzana</p>
            <blockquote className="text-[34px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[54px]">
              »Zame je najpomembnejši odnos. <span className="accent text-moss">Do sebe, do drugega, do narave, do las.«</span>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-ink/30" aria-hidden="true" />
              <span className="text-[15px]">
                <span className="font-semibold">Suzana Bajec</span>, frizerska mojstrica in lastnica
              </span>
            </figcaption>
          </figure>
          <div data-reveal className="lg:pt-14">
            <Img name="salon" className="aspect-[3/2] rounded-[26px]" imgClassName="object-[60%_50%]" sizes="(min-width: 1024px) 40vw, 92vw" />
            <p className="mt-8 text-[17px] text-stone">
              Celosten, individualen pristop, strokovno svetovanje in storitev, po kateri se počutiš sproščeno in lepo.
              Delamo s profesionalno kozmetiko Joico, Olaplex in Cocochoco, za naravno barvanje pa z rastlinskimi pigmenti
              Etnobotanika.
            </p>
            <Link to="/nasa-zgodba" className="link-arrow mt-6">
              Naša zgodba <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Storitve */}
      <section className="pb-24 lg:pb-32">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Storitve"
              title={
                <>
                  Vse za zdrave, <span className="accent text-moss">lepe lase.</span>
                </>
              }
              intro="Od striženja do detoksa lasišča. Cena je odvisna od dolžine in gostote las – okvirno ti jo povemo že po telefonu."
            />
            <Link to="/storitve" className="btn-outline self-start lg:self-auto" data-reveal>
              Vse storitve <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Prej in potem */}
      <section id="prej-potem" className="bg-linen py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="Prej in potem"
              title={
                <>
                  Rezultati govorijo <span className="accent text-moss">sami zase.</span>
                </>
              }
              intro="Primeri iz naših tedenskih objav na Instagramu. Izberi primer in primerjaj."
            />
            <Link to="/prej-potem" className="link-arrow self-start lg:self-auto" data-reveal>
              Vsi primeri <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12" data-reveal>
            <BeforeAfter />
          </div>
        </div>
      </section>

      <EcoSection />

      {/* Ekipa */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ekipa"
            title={
              <>
                Suzana, Romana <span className="accent text-moss">in Nuša.</span>
              </>
            }
            intro="Spoštovanje, prijaznost, pripadnost in poštenost – pravila, ki v našem malem ateljeju veljajo v obe smeri. Zato se med delom razumemo brez besed."
          />
          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>

      <Testimonials />

      <HowToVisit />

      <div className="pt-24 lg:pt-32">
        <InstagramStrip />
      </div>

      <LocationSection />

    </>
  );
}
