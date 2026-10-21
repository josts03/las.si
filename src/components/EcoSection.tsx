import { Droplets, Lamp, Leaf, Recycle, Sprout, Zap, type LucideIcon } from 'lucide-react';
import { ecoPractices } from '../data/content';
import { Img } from './Img';

const ICONS: Record<(typeof ecoPractices)[number]['icon'], LucideIcon> = {
  zap: Zap,
  droplets: Droplets,
  leaf: Leaf,
  recycle: Recycle,
  lamp: Lamp,
  sprout: Sprout,
};

/** Eko zgodba salona (las.si, Naša zgodba) na temnem ozadju. */
export function EcoSection() {
  return (
    <section className="overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative" data-reveal>
          <Img name="naravno-pigment" className="aspect-[4/5] rounded-[28px]" sizes="(min-width: 1024px) 40vw, 100vw" />
          <p className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-paper/90 px-5 py-4 text-[14px] leading-snug text-ink backdrop-blur sm:right-auto sm:max-w-[300px]">
            <span className="font-semibold">Narava v laseh.</span> Mešanica 100 % rastlinskih pigmentov Etnobotanika – brez kemije, dišeča.
          </p>
        </div>

        <div className="lg:pt-6">
          <div data-reveal>
            <p className="eyebrow mb-5 !text-leaf">Prvi eko frizerski salon v Sloveniji</p>
            <h2 className="text-[40px] sm:text-[52px] lg:text-[64px]">
              Razvajanje <span className="accent text-leaf">brez slabe vesti.</span>
            </h2>
            <p className="mt-6 max-w-[560px] text-[17px] text-paper/75">
              Na izzive sodobnega časa smo odgovorili kot prvi: okolju prijazni izdelki in tehnologije, brez popuščanja pri
              kakovosti ali razvajanju. Ker verjamemo, da je prava pot le z roko v roki – z naravo.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {ecoPractices.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <li key={p.title} data-reveal style={{ '--reveal-delay': `${(i % 2) * 80}ms` } as React.CSSProperties} className="flex gap-4 border-t border-paper/15 py-6">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-leaf" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <h3 className="text-[18px] tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-1 text-[15px] text-paper/65">{p.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
