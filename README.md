# LAS lasni atelje suzana – demo nove spletne strani

Demo strani frizerskega salona **LAS lasni atelje suzana** (Celje), »prvi eko frizerski salon«. Vsebina in
fotografije so z Instagrama @lasni_atelje_suzana, Facebook strani in stare strani las.si. Analiza in seznam
stvari za potrditev: [ANALIZA.md](ANALIZA.md).

**Brez spletnega naročanja** (želja stranke): vsi pozivi vodijo na klic, SMS ali sporočilo.

React 19, Vite 6, TypeScript, Tailwind CSS 4; vsaka ruta se ob buildu prerenderira v statični HTML.

## Zagon

```bash
npm install
npm run dev        # http://localhost:3001
npm run build      # dist/ (prerender vseh strani, sitemap.xml, robots.txt)
npm run preview    # predogled builda, http://localhost:4174
```

## Kje je kaj

- `src/data/site.ts` – naslov, telefon, e-pošta, Instagram, Facebook, delovni čas, znamke.
- `src/data/services.ts` – 8 storitev in 7 primerov prej/potem (z oznako objave na Instagramu).
  Na novo napisana besedila imajo `draft: true` (potrdi jih stranka).
- `src/data/content.ts` – mnenja strank, eko ukrepi, zgodba salona, ekipa.
- `src/routes.ts` – vse rute (Domov, Storitve, Prej in potem, Naša zgodba, Kontakt).
- Slike: originale (ime datoteke = ključ, npr. `keratin-po.jpg`) daš v `image-originals/`, nato
  `npm run images` → WebP v `public/images/` + `src/data/image-manifest.json`. Alt besedila so v
  `src/data/images.ts`. Iz `salon.jpg` nastane tudi `public/og.jpg`.

Pisave: Inter Tight (naslovi in besedilo, kot krepki »LAS« v logotipu) in Fraunces Italic (poudarki),
gostovani lokalno prek `@fontsource`. Barva logotipa: `#91a254`.

## Objava

Statična stran; `vercel.json` je pripravljen za Vercel (`cleanUrls`). Kanonični naslov je `https://las.si`
(nastavljen v `src/data/site.ts`, `scripts/prerender.mjs` in `index.html`).
