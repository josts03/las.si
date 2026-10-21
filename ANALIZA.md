# LAS lasni atelje suzana – analiza in demo

Pregled: Instagram [@lasni_atelje_suzana](https://www.instagram.com/lasni_atelje_suzana/), Facebook
[LasniAteljeSuzana](https://www.facebook.com/LasniAteljeSuzana/) in obstoječa stran [las.si](https://las.si), 22. 10. 2026.

## Povzetek v treh točkah

1. **Instagram živi, spletna stran ne.** Na Instagramu je 686 objav, vsak teden nova, večinoma pari
   prej/potem z osebno zgodbo. Stran las.si je WordPress iz leta 2020 (© 2020, PHP 7.1), zadnji zapis na blogu
   je iz junija 2022.
2. **Stara stran ima napake na vidnih mestih.** Stran *Storitve* namesto vsebine prikaže surovo kodo
   `[ultimate-faqs]`, *Produkti* so »v izdelavi«, storitev *Barvanje las* ima namesto opisa besedilo »Opis
   postopka.«, Detox lasišča je na naslovu `/stroeitev-4/` (tipkarska napaka), naslovnica pa uporablja slike iz
   fotobank.
3. **Najmočnejša zgodba ni izpostavljena.** »Prvi eko frizerski salon v Sloveniji«, salon od leta 2004 in
   rezultati prej/potem so raztreseni po FB, IG in podstraneh stare strani.

## Kaj prinaša demo

- **Brez spletnega naročanja (želja stranke).** Ni obrazca ne sistema za rezervacije. Glavni poziv je
  »Pokliči 041 720 551«, poleg so SMS, Instagram, Messenger in e-pošta. Razdelek »Termin se dogovorimo
  osebno« to predstavi kot prednost (delovni čas po dogovoru).
- **5 strani:** Domov, Storitve (8 storitev z opisi), Prej in potem (7 primerov), Naša zgodba, Kontakt.
- **Pregledovalnik prej/potem** s fotografijami iz objav in povezavo na vsako objavo.
- **Eko zgodba** z vsemi ukrepi s stare strani (zelena elektrika, do 50 % manj vode, biorazgradljiva čistila …).
- **Ekipa:** Suzana, Romana in Nuša. **Mnenja strank** s stare strani in s Facebooka (100 % priporočil, 16 mnenj).
- **Podoba iz logotipa:** olivno zelena `#91a254` s profilne slike in izložbe, krepki »LAS«, topla bela in hrast
  s polic v salonu.
- **Hitra statična stran:** vsaka podstran je vnaprej izrisana (dobro za Google), z naslovi, opisi, sitemapom in
  strukturiranimi podatki (HairSalon, FAQPage).

## Fotografije

22 fotografij: 21 iz zadnjih 12 objav na Instagramu (avgust–oktober 2026) in naslovna slika s Facebooka
(salon z lesenimi policami). Dve fotografiji z dopusta (Sardinija) sta izpuščeni. Originali so v
`image-originals/`, za objavo bi bilo smiselno od stranke dobiti še starejše in bolj »studijske« fotografije.

## Za potrditev s stranko

**Podatki**

- **Delovni čas:** povsod piše »po dogovoru« (tako je na stari strani). Na izložbi je napis z delovnim časom,
  a na fotografijah ni berljiv.
- **E-pošta:** demo uporablja `suzana.bajec@gmail.com` (Facebook). Stara stran navaja `narocanje@las.si`.
- **Stacionarni telefon** 03 490 16 67 (stara stran in izložba) – še velja?
- **Cene** niso objavljene nikjer, zato jih demo nima (»okvirno ceno povemo po telefonu«).

**Besedila, ki so na novo napisana** (v `src/data/services.ts` imajo `draft: true`)

- Striženje, Barvna korekcija, Pričeske in podaljški
- Pogosta vprašanja (`src/components/Faq.tsx`) in koraki »Termin se dogovorimo osebno«

**Odprta vprašanja**

- Ali salon še ponuja podaljške in pričeske za posebne priložnosti? (poudarek »Podaljški« na Instagramu)
- Fotografija Suzane za ekipo – zdaj je na njenem mestu zelena tipografska kartica.
- Na fotografiji pri Nuši je objava ob njenem prihodu (navijanje kodrčkov) – kdo je na sliki?
- Ali eko ukrepi s stare strani (2020) še veljajo v celoti?
- Ali še prodajate izdelke za nego doma (stara stran omenja dostavo na dom)? Demo omenja le priporočila za nego.
- Avtorstvo pri primerih prej/potem je navedeno samo, kjer piše v objavi (Romana, »S & R«).
- Zemljevid je Google Maps iframe; ob objavi preveri, ali je potrebna privolitev v piškotke.
