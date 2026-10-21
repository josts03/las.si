import { testimonials } from '../data/content';
import { FACEBOOK_URL, FB_RECOMMEND } from '../data/site';
import { SectionHeading } from './SectionHeading';

/** Mnenja strank (stara stran las.si in priporočila na Facebooku). */
export function Testimonials({ limit = testimonials.length }: { limit?: number }) {
  const [first, ...rest] = testimonials.slice(0, limit);
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Mnenja strank"
            title={
              <>
                »Tukaj te ostrižejo tako, <span className="accent text-moss">da si lep.«</span>
              </>
            }
          />
          <a
            href={`${FACEBOOK_URL}reviews`}
            target="_blank"
            rel="noopener"
            data-reveal
            className="flex items-center gap-4 rounded-[20px] border border-ink/10 bg-linen px-6 py-5 transition-colors hover:border-ink/30"
          >
            <span className="text-[44px] font-extrabold leading-none tracking-[-0.05em]">{FB_RECOMMEND.percent}&nbsp;%</span>
            <span className="text-[14px] leading-snug text-stone">
              priporočil na Facebooku
              <br />
              {FB_RECOMMEND.count} mnenj
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <figure data-reveal className="flex flex-col justify-between rounded-[24px] bg-leaf p-8 md:row-span-2 lg:p-10">
            <blockquote className="font-serif text-[26px] italic leading-[1.3] lg:text-[30px]">»{first.text}«</blockquote>
            <figcaption className="mt-10 text-[15px] font-semibold">
              {first.name}
              <span className="block font-normal text-ink/70">{first.source === 'Facebook' ? 'Facebook' : 'stranka salona'}</span>
            </figcaption>
          </figure>
          {rest.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 70}ms` } as React.CSSProperties}
              className="flex flex-col justify-between rounded-[24px] border border-ink/10 p-7"
            >
              <blockquote className="text-[16.5px] leading-relaxed">»{t.text}«</blockquote>
              <figcaption className="mt-6 text-[14px] font-semibold">
                {t.name}
                {t.source === 'Facebook' && <span className="font-normal text-stone"> · Facebook</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
