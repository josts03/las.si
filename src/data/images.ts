import manifest from './image-manifest.json';

/**
 * Slike z Instagrama @lasni_atelje_suzana in s Facebook strani (originali v image-originals/,
 * WebP v public/images/, generira `npm run images`). Ključ = ime datoteke. Alt besedila so tukaj.
 */
const ALT: Record<string, string> = {
  salon: 'Frizerka med nanašanjem folij za pramene v salonu LAS, zadaj lesene police z izdelki Joico',
  pramen: 'Gladki svetli lasje s prelivom pramenov, od strani',
  'pramen-2': 'Stranka s svetlimi pramenčki med pregledom rezultata',
  'pramen-3': 'Dolgi lasje s toplimi svetlimi prameni, od zadaj',
  'blond-po': 'Nasmejana stranka s svetlimi blond prameni pred izložbo salona',
  'blond-prej': 'Lasje pred osvežitvijo pramenov: temen izrastek in porumeneli konci',
  'keratin-po': 'Ravni, sijoči rjavi lasje po keratinskem ravnanju',
  'keratin-prej': 'Skodrani, našopirjeni lasje pred keratinskim ravnanjem',
  'keratin-2-po': 'Gladki črni lasje po keratinskem ravnanju, zadaj zeleni napis LAS na izložbi',
  'keratin-2-prej': 'Zelo kodrasti, suhi lasje pred keratinskim ravnanjem',
  'keratin-3-po': 'Dolgi gladki lasje s prameni po keratinu, od strani',
  'keratin-3-prej': 'Valoviti, našopirjeni lasje pred keratinom',
  'korekcija-po': 'Topli zlati valovi po barvni korekciji',
  'korekcija-prej': 'Oranžno-rdeči toni pred barvno korekcijo',
  'strizenje-po': 'Raven bob do brade po striženju',
  'strizenje-prej': 'Dolgi rjavi lasje pred striženjem',
  'sprememba-po': 'Valovit bob s prameni po spremembi pričeske',
  'sprememba-prej': 'Lasje do ramen pred striženjem in pramenčki',
  'naravno-po': 'Kratka rjava pričeska po barvanju z rastlinskimi pigmenti',
  'naravno-pigment': 'Zelena mešanica rastlinskih pigmentov Etnobotanika v posodici med nanosom',
  romana: 'Romana med likanjem las po nanosu keratina',
  kodrcki: 'Navijanje kodrčkov z bigudiji v salonu',
};

interface ManifestEntry {
  width: number;
  height: number;
  sizes: number[];
}

export interface ImageAsset {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

export function getImage(key: string): ImageAsset | null {
  const entry = (manifest as Record<string, ManifestEntry>)[key];
  if (!entry) return null;
  const largest = entry.sizes[entry.sizes.length - 1];
  return {
    src: `/images/${key}-${largest}.webp`,
    srcSet: entry.sizes.map((w) => `/images/${key}-${w}.webp ${Math.min(w, entry.width)}w`).join(', '),
    width: entry.width,
    height: entry.height,
    alt: ALT[key] ?? 'LAS lasni atelje suzana, frizerski salon v Celju',
  };
}
