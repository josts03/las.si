import { ArrowUpRight, Instagram } from 'lucide-react';
import { postUrl, transformations } from '../data/services';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/site';
import { Img } from './Img';

const TILES = [
  { image: 'pramen-2', post: 'DcL4l4oCPvH' },
  { image: 'romana', post: 'DdCGpg_hNTs' },
  { image: 'naravno-po', post: 'Db6R8QFiANF' },
  { image: 'blond-po', post: transformations.find((t) => t.id === 'blond')!.post },
  { image: 'kodrcki', post: 'DceApc9ISQ5' },
  { image: 'pramen-3', post: 'DcL4l4oCPvH' },
];

/** Mreža zadnjih fotografij z Instagrama; vsaka vodi na svojo objavo. */
export function InstagramStrip() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-x">
        <div className="flex flex-col gap-5 border-t border-ink/10 pt-12 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div>
            <p className="eyebrow mb-4">Vsak teden nova zgodba</p>
            <h2 className="text-[34px] sm:text-[44px]">{INSTAGRAM_HANDLE}</h2>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn-outline self-start sm:self-auto">
            <Instagram className="h-4 w-4" aria-hidden="true" /> Sledi na Instagramu
          </a>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {TILES.map((tile, i) => (
            <li key={tile.image} data-reveal style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}>
              <a href={postUrl(tile.post)} target="_blank" rel="noopener" className="group relative block" aria-label={`Objava na Instagramu (${i + 1})`}>
                <Img name={tile.image} className="aspect-square rounded-[16px]" imgClassName="transition-transform duration-700 group-hover:scale-[1.05]" sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" />
                <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
