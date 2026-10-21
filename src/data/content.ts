/**
 * Besedila o salonu. Viri: stara stran las.si (Naša zgodba, mnenja strank), Facebook (opis,
 * priporočila) in Instagram (objave). Mnenja so dobesedna, popravljene so le tipkarske napake.
 */

export interface Testimonial {
  name: string;
  text: string;
  source: 'las.si' | 'Facebook';
}

export const testimonials: Testimonial[] = [
  {
    name: 'Saša Krajnc',
    text: 'Za vsako storitev se potrudita in opravita res odlično delo, saj v to vložita vse znanje in čas. Odkar ju obiskujem, imam končno zdrave ter sijoče lase.',
    source: 'las.si',
  },
  {
    name: 'Helena',
    text: 'Všeč mi je prijaznost in strokovnost. Odkar hodim sem, so moji lasje veliko bolj zdravi. Ne potrebujem več likalnika :)',
    source: 'las.si',
  },
  {
    name: 'Uroš B.',
    text: 'Vedno sem imel najbolj običajno frizuro. Svetovali so mi nekaj novega, sem riskiral in sem super zadovoljen! Drugje te ostrižejo, tukaj te pa ostrižejo tako, da si lep :)',
    source: 'las.si',
  },
  {
    name: 'Alja Doler',
    text: 'Priporočam. Prijazno, profesionalno osebje in čudoviti rezultati.',
    source: 'Facebook',
  },
  {
    name: 'Beatrice R.',
    text: 'Super mini salon, maxi prijaznost Suzane in Romane, top storitve, odlične vibracije in vedno prijetno vzdušje.',
    source: 'las.si',
  },
  {
    name: 'Janko',
    text: 'Izredno prijazni frizerki, vedno nasmejani, lepo urejeni in s kvalitetno storitvijo! Sem zvesta stranka že od začetka Suzanine poti.',
    source: 'las.si',
  },
  {
    name: 'Nejc',
    text: 'Pri Suzani se strižem že 10 let in vedno odidem zadovoljen s frizuro.',
    source: 'las.si',
  },
  {
    name: 'Lucija K.',
    text: 'Z veseljem obiščem LAS, ker je prijetno vzdušje, strokovno osebje in kakovostna storitev. Priporočam ❤️',
    source: 'las.si',
  },
];

/** Kako salon skrbi za okolje (las.si, Naša zgodba). */
export const ecoPractices = [
  { icon: 'zap', title: 'Zelena elektrika', text: 'Iz hidro, sončnih in vetrnih elektrarn. Naprave izklapljamo, ko niso v uporabi.' },
  { icon: 'droplets', title: 'Do 50 % manj vode', text: 'Varčne vodovodne armature in aparati.' },
  { icon: 'leaf', title: 'Biorazgradljiva čistila', text: 'Za salon, brisače in pregrinjala – prijazna okolju in koži.' },
  { icon: 'recycle', title: 'Ločujemo in recikliramo', text: 'Čim manj odpadkov, reciklirani papir, čim manjša poraba papirja.' },
  { icon: 'lamp', title: 'Varčna razsvetljava', text: 'In varčen plinski kotel za ogrevanje.' },
  { icon: 'sprout', title: 'Odgovorni dobavitelji', text: 'Sodelujemo s tistimi, ki se lahko pohvalijo s certificiranimi naravnimi izdelki.' },
] as const;

/** Zgodba salona (las.si, Naša zgodba; Instagram). */
export const story = [
  {
    year: 'Otroštvo',
    title: '»Ko bom velika, bom frizerja!«',
    text: 'Kot punčka je Suzana prosila sorodnike, če jih lahko počeše – in že takrat obvladala tupiranje. Po osnovni šoli je »iz prve« vedela, da gre na frizersko šolo.',
  },
  {
    year: 'Šolanje',
    title: 'Frizerska mojstrica',
    text: 'Strokovni izobrazbi sta sledila dodatna diploma in naziv frizerska mojstrica. Pa to je bil šele začetek: izobražuje se ves čas, od Bologne do domačih seminarjev.',
  },
  {
    year: '2004',
    title: 'Lasni atelje na Ljubljanski cesti',
    text: 'Suzana je kupila lokal na Ljubljanski cesti v Celju in ga poimenovala LAS lasni atelje suzana. Že od začetka je skrbno izbirala, kateri material je primeren za ljudi in okolje.',
  },
  {
    year: 'Romana',
    title: 'Desna roka od prvega letnika',
    text: 'Ko je bilo dela vse več, je v salon prišla dijakinja Romana – »svež veter je zavel«. Danes je samostojna frizerka in nepogrešljivi del ateljeja.',
  },
  {
    year: 'Danes',
    title: 'Prvi eko frizerski salon',
    text: 'Razvajanje brez slabe vesti: okolju prijazni izdelki in tehnologije, brez popuščanja pri kakovosti. In odnos – do sebe, do drugega, do narave, do las.',
  },
  {
    year: '2026',
    title: 'Pozdravljena, Nuša!',
    text: 'V salon je prišla nova dijakinja. »Na mladih svet stoji« – Suzana in Romana ji bosta predali vse, kar znata.',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  text: string;
  /** Brez slike se izriše zelena kartica z začetnico. */
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Suzana Bajec',
    role: 'Frizerska mojstrica in lastnica',
    text: 'Najraje barva: pramenčke, sunkiss in balayage. Preferira celosten, individualen pristop – in se ti prilagodi tudi s terminom.',
  },
  {
    name: 'Romana',
    role: 'Frizerka',
    text: 'V salonu od prvega letnika srednje šole. Keratin, barvne korekcije in mirna roka – tudi ko je treba likati na hodniku.',
    image: 'romana',
  },
  {
    name: 'Nuša',
    role: 'Dijakinja',
    text: 'Najmlajša v ekipi, od leta 2026. Uči se od najboljših – ne bo lahko, bo pa pestro.',
    image: 'kodrcki',
  },
];
