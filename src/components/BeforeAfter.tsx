import { useId, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { postUrl, transformations } from '../data/services';
import { Img } from './Img';

const label = 'absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em]';

/**
 * Pregledovalnik »prej / potem« iz objav na Instagramu: zavihki za primere, dve fotografiji
 * drugo ob drugi in opis. Prerenderan je prvi primer; ostale zamenja klient.
 */
export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const baseId = useId();
  const item = transformations[index];
  const go = (delta: number) => setIndex((i) => (i + delta + transformations.length) % transformations.length);

  return (
    <div>
      <div role="tablist" aria-label="Primeri prej in potem" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {transformations.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === index}
            aria-controls={`${baseId}-panel`}
            onClick={() => setIndex(i)}
            className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
              i === index ? 'border-ink bg-ink text-paper' : 'border-ink/15 hover:border-ink/40'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${index}`}
        className="mt-8 grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-end lg:gap-14"
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <figure className="relative">
            <Img key={item.before} name={item.before} className="aspect-[3/4] rounded-[20px] sm:rounded-[26px]" sizes="(min-width: 1024px) 30vw, 50vw" />
            <figcaption className={`${label} bg-paper/90 text-ink backdrop-blur`}>Prej</figcaption>
          </figure>
          <figure className="relative">
            <Img key={item.after} name={item.after} className="aspect-[3/4] rounded-[20px] sm:rounded-[26px]" sizes="(min-width: 1024px) 30vw, 50vw" />
            <figcaption className={`${label} bg-leaf text-ink`}>Potem</figcaption>
          </figure>
        </div>

        <div className="lg:pb-4">
          <p className="text-[13px] font-medium tabular-nums text-stone">
            {String(index + 1).padStart(2, '0')} / {String(transformations.length).padStart(2, '0')}
          </p>
          <h3 className="mt-3 text-[30px] sm:text-[36px]">{item.title}</h3>
          <p className="mt-4 text-[17px] text-stone">{item.text}</p>
          {item.by && (
            <p className="mt-4 text-[15px]">
              Delo: <span className="font-semibold">{item.by}</span>
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Prejšnji primer" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Naslednji primer" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <a href={postUrl(item.post)} target="_blank" rel="noopener" className="link-arrow">
              Objava na Instagramu <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
