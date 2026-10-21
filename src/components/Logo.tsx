interface LogoProps {
  className?: string;
  /** Svetla različica za temno ozadje (noga). */
  light?: boolean;
}

/**
 * Ležeči znak kot na stari strani las.si: krepki, tesno postavljeni »LAS« in ob njem
 * tri vrstice »lasni / atelje / suzana«.
 */
export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <span className={`flex items-center gap-2 leading-none ${light ? 'text-paper' : 'text-ink'} ${className}`}>
      <span className="text-[38px] font-extrabold tracking-[-0.085em] sm:text-[42px]" aria-hidden="true">
        LAS
      </span>
      <span className="flex flex-col text-[10.5px] font-normal leading-[1.08] tracking-[0.01em] sm:text-[11.5px]" aria-hidden="true">
        <span>lasni</span>
        <span>atelje</span>
        <span>suzana</span>
      </span>
      <span className="sr-only">LAS lasni atelje suzana</span>
    </span>
  );
}

/** Kvadratni znak v olivno zeleni – profilna slika na Facebooku in Instagramu. */
export function LogoSquare({ className = '' }: { className?: string }) {
  return (
    // Velikost pisave sledi širini kvadrata (cqw); zato je kvadrat vsebnik, notranji ovoj pa ima odmike.
    <span className={`block aspect-square bg-leaf text-white ${className}`} aria-hidden="true" style={{ containerType: 'inline-size' }}>
      <span className="flex h-full flex-col justify-center px-[13cqw]">
        <span className="text-[34cqw] font-extrabold leading-[0.85] tracking-[-0.085em]">LAS</span>
        <span className="mt-[7cqw] flex flex-col text-[10.5cqw] font-light leading-[1.12]">
          <span>lasni</span>
          <span>atelje</span>
          <span>suzana</span>
        </span>
      </span>
    </span>
  );
}
