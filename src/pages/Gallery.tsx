import { ArrowUpRight, Instagram } from 'lucide-react';
import { HowToVisit } from '../components/HowToVisit';
import { Img } from '../components/Img';
import { SEO } from '../components/SEO';
import { postUrl, transformations } from '../data/services';
import { INSTAGRAM_URL } from '../data/site';

const pill = 'absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em]';

/** Vsi primeri prej / potem, eden pod drugim. */
export function Gallery() {
  return (
    <>
      <SEO
        title="Prej in potem – rezultati | LAS lasni atelje suzana"
        description="Keratinsko ravnanje, barvne korekcije, striženje in pramenčki: primeri prej in potem iz LAS lasnega ateljeja v Celju, s fotografijami z našega Instagrama."
        path="/prej-potem"
      />

      <section className="container-x pb-14 pt-10 lg:pb-20 lg:pt-16">
        <p className="eyebrow mb-5">Prej in potem</p>
        <h1 className="max-w-[980px] text-[50px] leading-[0.95] sm:text-[72px] lg:text-[96px]">
          Ista stranka, <span className="accent text-moss">nov občutek.</span>
        </h1>
        <p className="mt-8 max-w-[600px] text-[18px] text-stone">
          Vsak teden na Instagramu pokažemo, kaj se je dogajalo v salonu. Tu so zbrani nekateri najlepši primeri – z zgodbo
          vred.
        </p>
      </section>

      <div className="container-x space-y-20 pb-24 lg:space-y-28 lg:pb-32">
        {transformations.map((t, i) => (
          <article key={t.id} id={t.id} className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[14px] font-semibold tabular-nums text-moss">
                {String(i + 1).padStart(2, '0')} · {t.label}
              </p>
              <h2 className="mt-3 text-[34px] sm:text-[44px]">{t.title}</h2>
              <p className="mt-5 text-[17px] text-stone">{t.text}</p>
              {t.by && (
                <p className="mt-4 text-[15px]">
                  Delo: <span className="font-semibold">{t.by}</span>
                </p>
              )}
              <a href={postUrl(t.post)} target="_blank" rel="noopener" className="link-arrow mt-6">
                Objava na Instagramu <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5" data-reveal>
              <figure className="relative">
                <Img name={t.before} className="aspect-[3/4] rounded-[20px] sm:rounded-[28px]" sizes="(min-width: 1024px) 28vw, 46vw" />
                <figcaption className={`${pill} bg-paper/90 text-ink backdrop-blur`}>Prej</figcaption>
              </figure>
              <figure className="relative">
                <Img name={t.after} className="aspect-[3/4] rounded-[20px] sm:rounded-[28px]" sizes="(min-width: 1024px) 28vw, 46vw" />
                <figcaption className={`${pill} bg-leaf text-ink`}>Potem</figcaption>
              </figure>
            </div>
          </article>
        ))}

        <div className="flex flex-col items-start gap-5 rounded-[28px] bg-linen p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12" data-reveal>
          <p className="max-w-[520px] text-[24px] font-bold leading-tight tracking-[-0.03em] sm:text-[30px]">
            Več primerov je na Instagramu – <span className="accent text-moss">vsak teden nov.</span>
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn-dark shrink-0">
            <Instagram className="h-4 w-4" aria-hidden="true" /> @lasni_atelje_suzana
          </a>
        </div>
      </div>

      <HowToVisit />
    </>
  );
}
