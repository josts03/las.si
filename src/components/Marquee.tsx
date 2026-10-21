const WORDS = ['Striženje', 'Pramenčki', 'Balayage', 'Keratin Cocochoco', 'Naravne barve', 'Hair botox', 'Detox lasišča', 'Barvne korekcije', 'Joico', 'Olaplex'];

/** Tekoči trak storitev pod uvodom. */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {WORDS.map((w) => (
        <li key={w} className="flex items-center whitespace-nowrap">
          <span className="px-6 text-[22px] font-semibold tracking-[-0.025em] sm:text-[26px]">{w}</span>
          <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-ink/10 py-5">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
