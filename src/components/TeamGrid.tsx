import { team } from '../data/content';
import { Img } from './Img';

/** Ekipa: Suzana, Romana, Nuša. Kdor nima fotografije, dobi zeleno kartico z začetnico. */
export function TeamGrid() {
  return (
    <ul className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((member, i) => (
        <li key={member.name} data-reveal style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}>
          {member.image ? (
            <Img name={member.image} className="aspect-[4/5] rounded-[24px]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
          ) : (
            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[24px] bg-leaf p-7">
              <span className="text-[13px] font-semibold uppercase tracking-[0.22em]">Frizerska mojstrica</span>
              <span className="absolute -bottom-10 -right-3 select-none text-[300px] font-extrabold leading-none tracking-[-0.08em] text-ink/10" aria-hidden="true">
                S
              </span>
              <p className="relative max-w-[260px] font-serif text-[30px] italic leading-[1.15]">»Najraje barvam lase.«</p>
            </div>
          )}
          <h3 className="mt-5 text-[26px] tracking-[-0.03em]">{member.name}</h3>
          <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.16em] text-moss">{member.role}</p>
          <p className="mt-3 max-w-[380px] text-[16px] text-stone">{member.text}</p>
        </li>
      ))}
    </ul>
  );
}
