import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { BeforeAfter } from '../components/BeforeAfter';
import { CallButton } from '../components/CallButton';
import { EcoSection } from '../components/EcoSection';
import { HeroVideo } from '../components/HeroVideo';
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

      {/* Uvod: zanka salona. Na računalniku je besedilo čez video (levo spodaj),
          na telefonu je video samostojen (pokončen izrez rok in folij), besedilo pa pod njim. */}
      <section className="container-x pb-14 pt-1 lg:pb-16">
        <div className="relative lg:flex lg:min-h-[calc(100svh-84px-112px)] lg:items-end lg:overflow-hidden lg:rounded-[32px] lg:bg-ink">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-ink sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none">
            <HeroVideo className="object-[76%_50%] lg:object-center" />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-linear-to-r from-ink/90 via-ink/60 via-45% to-ink/0 lg:block"
            />
            <LogoSquare className="absolute right-4 top-4 w-[76px] rounded-[16px] sm:right-6 sm:top-6 sm:w-[108px]" />
          </div>
          <div className="relative z-10 pt-9 lg:max-w-[760px] lg:p-14 lg:text-paper">
            <p className="font-serif text-[19px] italic text-moss sm:text-[21px] lg:text-leaf">{SITE_MOTTO}</p>
            <h1 className="mt-5 text-[50px] leading-[0.95] sm:text-[72px] lg:text-[88px] xl:text-[100px]">
              Lepi lasje, <span className="accent text-moss lg:text-leaf">brez slabe vesti.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] text-stone sm:text-[19px] lg:text-paper/80">
              LAS lasni atelje suzana je prvi eko frizerski salon v Sloveniji. Od leta {FOUNDED} na Ljubljanski cesti v Celju –
              z vrhunsko kozmetiko, naravnimi barvami in veliko srca.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton className="lg:bg-paper lg:text-ink lg:hover:bg-sage" />
              <a
                href="#prej-potem"
                className="btn border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper lg:border-paper/40 lg:text-paper lg:hover:border-paper lg:hover:bg-paper lg:hover:text-ink"
              >
                Poglej prej in potem <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-6 grid max-w-[640px] grid-cols-3">
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
