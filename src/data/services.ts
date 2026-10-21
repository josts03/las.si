/**
 * Storitve salona. Viri: stara stran las.si (Storitve, Naša zgodba, blog), objave na Instagramu
 * in poudarki (Podaljški, Cocochoco, Narava v laseh). Cen ni objavljenih nikjer, zato jih ni.
 * Besedila, ki so na novo napisana (v virih jih ni), imajo `draft: true` – potrdi jih stranka.
 */
export interface Service {
  id: string;
  name: string;
  /** Kratek opis pod imenom (kartice, meni). */
  tagline: string;
  /** Ključ slike iz src/data/images.ts; brez slike se izriše zelena tipografska kartica. */
  image?: string;
  intro: string;
  points: string[];
  /** Dodaten nasvet ali opozorilo. */
  note?: string;
  draft?: boolean;
}

export const services: Service[] = [
  {
    id: 'strizenje',
    name: 'Striženje',
    tagline: 'Za njo, zanj in za najmlajše',
    image: 'strizenje-po',
    intro:
      'Pričeska, ki ti pristaja in jo doma urediš brez muke. Preden primemo škarje, se pogovorimo, kaj si želiš – od osvežitve konic do odločne spremembe dolžine.',
    points: ['Žensko, moško in otroško striženje', 'Svetovanje o obliki, ki ustreza tvojim lasem', 'Sušenje in oblikovanje'],
    draft: true,
  },
  {
    id: 'barvanje',
    name: 'Barvanje in pramenčki',
    tagline: 'Pramenčki, sunkiss in balayage',
    image: 'pramen',
    intro:
      'Suzana najraje barva lase: dela pramenčke, sunkiss različice in balayage. Zato je izbira materiala ključna – uporabljamo profesionalno kozmetiko Joico, pri svetljenju pa las zaščitimo z Olaplexom.',
    points: ['Pramenčki, sunkiss in balayage', 'Barvanje in prelivi s kozmetiko Joico', 'Olaplex za zaščito las pri svetljenju'],
  },
  {
    id: 'korekcija',
    name: 'Barvna korekcija',
    tagline: 'Iz neželenih tonov v lepe',
    image: 'korekcija-po',
    intro:
      'Rumeni konci, oranžni ali rdeči odtenki? Barvo popravimo postopoma in premišljeno, las pa med korekcijo ščitimo z Olaplexom, da ostane močan in sijoč.',
    points: ['Odprava neželenih toplih tonov', 'Izenačenje izrastka in konic', 'Zaščita las z Olaplexom'],
    draft: true,
  },
  {
    id: 'naravno-barvanje',
    name: 'Naravno barvanje',
    tagline: '100 % rastlinski pigmenti Etnobotanika',
    image: 'naravno-pigment',
    intro:
      'Če ne želiš več kemije, ti pripravimo mešanico stoodstotno naravnih rastlinskih pigmentov Etnobotanika. Je naravno in dišeče – povemo pa ti tudi, česa ne zmore.',
    points: ['Brez kemije, iz rastlinskih pigmentov', 'Sive lase obarva, a jih ne prekrije v celoti', 'Na voljo ni čisto vsak odtenek'],
  },
  {
    id: 'keratin',
    name: 'Keratinsko ravnanje',
    tagline: 'Cocochoco – gladko in sijoče 3 do 5 mesecev',
    image: 'keratin-2-po',
    intro:
      'Keratin Cocochoco las napolni, zgladi in zaščiti pred vlago. Primeren je za suhe, barvane in poškodovane lase, strukture las pa ne spremeni.',
    points: [
      'Obnovi suhe, svetljene in barvane lase',
      'Zaščiti pred vlago in vročino fena ali likalnika',
      'Jutranje urejanje je do 80 % hitrejše',
      'Rezultat ob pravi negi drži 3 do 5 mesecev',
    ],
    note: 'Za dolgo obstojnost doma uporabljaj šampon brez sulfatov in regenerator brez silikonov.',
  },
  {
    id: 'nega',
    name: 'Nega in obnova las',
    tagline: 'Hair botox in globinska obnova',
    image: 'keratin-po',
    intro:
      'Hair botox je naravna nega proti staranju las: beljakovine, vitamini, antioksidanti in olja zapolnijo vrzeli v lasu in mu vrnejo sijaj. Globinska obnova Joico K-Pak pa v štirih korakih okrepi oslabele, izsušene lase.',
    points: [
      'Hair botox z UV zaščito, brez kemikalij',
      'Joico K-Pak: obnova v štirih korakih, približno 20 minut',
      'Priporočeno pred barvanjem in po morju',
      'Olaplex tudi kot samostojna nega',
    ],
  },
  {
    id: 'detox',
    name: 'Detox lasišča',
    tagline: 'Za mastno ali srbeče lasišče, prhljaj in izpadanje',
    intro:
      'Lasišče najprej pregledamo z mikrokamero, nato izberemo linijo z eteričnimi olji, ki ustreza tvoji težavi: mastnemu ali občutljivemu lasišču, prhljaju ali izpadanju las. Po tretmaju se boš počutila božansko.',
    points: [
      'Pregled lasišča z mikrokamero',
      'Kura: 8 obiskov, enkrat na teden',
      'Eterična olja kamilice, sivke, rožmarina, čajevca …',
      'Nasveti za nego doma',
    ],
  },
  {
    id: 'pricesk',
    name: 'Pričeske in podaljški',
    tagline: 'Kodri, kitke in več dolžine',
    image: 'kodrcki',
    intro:
      'Za poroko, maturantski ples ali rojstni dan: kodri, kitke in spete pričeske. Če si želiš več dolžine ali gostote, ti svetujemo tudi pri podaljških.',
    points: ['Pričeske za posebne priložnosti', 'Kodri in kitke', 'Podaljševanje las'],
    draft: true,
  },
];

/** Primeri prej / potem iz objav na Instagramu (ključ objave = povezava na objavo). */
export interface Transformation {
  id: string;
  label: string;
  title: string;
  text: string;
  before: string;
  after: string;
  /** Kdo je delal – samo, kjer to piše v objavi. */
  by?: string;
  post: string;
}

export const transformations: Transformation[] = [
  {
    id: 'keratin',
    label: 'Keratin',
    title: 'Las, ki je klical po negi',
    text: 'Nežka je prišla na priporočilo. Po keratinu Cocochoco je las gladek in sijoč, ob šamponu brez sulfatov pa tak ostane 3 do 5 mesecev.',
    before: 'keratin-prej',
    after: 'keratin-po',
    post: 'DcwKid6iBsB',
  },
  {
    id: 'korekcija',
    label: 'Barvna korekcija',
    title: 'Iz oranžno-rdečega v zlato',
    text: 'Še eno izredno delo Romane: iz trdovratnih oranžno-rdečih tonov do toplih, mehkih zlatih valov.',
    before: 'korekcija-prej',
    after: 'korekcija-po',
    by: 'Romana',
    post: 'DdUDd2eCFNZ',
  },
  {
    id: 'strizenje',
    label: 'Striženje',
    title: 'Odločila se je. Dokončno.',
    text: 'Lasje so bili lepi in dolgi, a Mia je vedela, kaj hoče. Primemo škarje in … raven bob do brade.',
    before: 'strizenje-prej',
    after: 'strizenje-po',
    post: 'DeKZYadiI41',
  },
  {
    id: 'sprememba',
    label: 'Sprememba',
    title: 'Za okroglo obletnico',
    text: 'Striženje, pramenčki, nega in preliv – za Tino, ki je praznovala okroglo in si zaželela spremembo.',
    before: 'sprememba-prej',
    after: 'sprememba-po',
    by: 'Suzana in Romana',
    post: 'Deb3P0niD0n',
  },
  {
    id: 'keratin-2',
    label: 'Zahteven las',
    title: 'Keratin na zelo kodrastem lasu',
    text: 'Ravnanje s keratinom, ki ga je izvedla Romana. Pri tako zahtevnem lasu bo po drugem nanosu obstojnost še daljša.',
    before: 'keratin-2-prej',
    after: 'keratin-2-po',
    by: 'Romana',
    post: 'Dd4UWomCCbm',
  },
  {
    id: 'blond',
    label: 'Blond',
    title: 'Poletje, ko si dovolimo več',
    text: 'Več morja, več svobode, več sladoleda in več blond pramenčkov. Za Aniko.',
    before: 'blond-prej',
    after: 'blond-po',
    post: 'DboJv_SCPfP',
  },
  {
    id: 'keratin-3',
    label: 'Sijaj',
    title: 'Napolnjen in zaščiten las',
    text: 'Keratin las napolni in mu vrne sijaj, pred vlago pa ga zaščiti tudi v deževnih dneh. (Pramenov tokrat nismo delale me.)',
    before: 'keratin-3-prej',
    after: 'keratin-3-po',
    post: 'Deug4dsCFpK',
  },
];

export const postUrl = (post: string) => `https://www.instagram.com/p/${post}/`;
