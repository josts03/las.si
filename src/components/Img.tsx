import { getImage } from '../data/images';

interface ImgProps {
  name: string;
  /** Razredi ovoja (velikost, oblika – npr. "arch", razmerje). */
  className?: string;
  /** Razredi same slike (npr. object-position). */
  imgClassName?: string;
  sizes?: string;
  /** Slika nad pregibom (LCP): brez lazy loadinga. */
  priority?: boolean;
  alt?: string;
}

/**
 * Slika iz src/data/images.ts v ovoju, ki določa obliko. Če slike (še) ni,
 * izriše nevtralno ploskev v barvah palete, da postavitev ostane enaka.
 */
export function Img({ name, className = '', imgClassName = '', sizes = '(min-width: 1024px) 50vw, 100vw', priority = false, alt }: ImgProps) {
  const image = getImage(name);
  // Ovoj mora biti pozicioniran (slika je absolute); če ga klicatelj že pozicionira, ne dodamo relative.
  const position = /\b(absolute|fixed|sticky)\b/.test(className) ? '' : 'relative';
  return (
    <div className={`${position} overflow-hidden bg-linen ${className}`}>
      {image ? (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          width={image.width}
          height={image.height}
          alt={alt ?? image.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-linen via-sage to-linen" aria-hidden="true" />
      )}
    </div>
  );
}
