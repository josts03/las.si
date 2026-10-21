import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../data/services';
import { Img } from './Img';

/** Kartica storitve (domača stran); brez slike je zelena tipografska ploskev. */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to={`/storitve#${service.id}`}
      data-reveal
      style={{ '--reveal-delay': `${(index % 4) * 70}ms` } as React.CSSProperties}
      className="group block"
    >
      {service.image ? (
        <Img name={service.image} className="aspect-[4/5] rounded-[22px]" imgClassName="transition-transform duration-700 group-hover:scale-[1.04]" sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw" />
      ) : (
        <div className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[22px] bg-leaf p-6 text-ink">
          <span className="absolute -right-4 -top-8 select-none text-[180px] font-extrabold leading-none tracking-[-0.08em] text-ink/10" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="font-serif text-[26px] italic leading-tight">{service.tagline}</p>
        </div>
      )}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[22px] tracking-[-0.025em]">{service.name}</h3>
          <p className="mt-1 text-[15px] text-stone">{service.tagline}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-stone transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-moss" aria-hidden="true" />
      </div>
    </Link>
  );
}
