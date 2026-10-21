/** Osnovni podatki o salonu – en vir za glavo, nogo, kontakt, SEO in schemo. */
export const SITE_URL = 'https://las.si';
export const SITE_NAME = 'LAS lasni atelje suzana';
export const SITE_TAGLINE = 'Prvi eko frizerski salon';
/** Slogan s Facebooka, z zavitimi oklepaji vred. */
export const SITE_MOTTO = '{razvajamo te, skrbimo za okolje}';
export const FOUNDED = 2004;

export const ADDRESS = {
  street: 'Ljubljanska cesta 20 a',
  postalCode: '3000',
  city: 'Celje',
} as const;
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.city}`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`LAS lasni atelje suzana, ${ADDRESS_LINE}`)}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&output=embed`;

/** Mobilna številka (Facebook); stacionarna je na izložbi in na stari strani las.si. */
export const PHONE_DISPLAY = '041 720 551';
export const PHONE_HREF = 'tel:+38641720551';
export const SMS_HREF = 'sms:+38641720551';
export const LANDLINE_DISPLAY = '03 490 16 67';
export const LANDLINE_HREF = 'tel:+38634901667';
export const EMAIL = 'suzana.bajec@gmail.com';

export const INSTAGRAM_URL = 'https://www.instagram.com/lasni_atelje_suzana/';
export const INSTAGRAM_HANDLE = '@lasni_atelje_suzana';
export const INSTAGRAM_DM_URL = 'https://ig.me/m/lasni_atelje_suzana';
export const FACEBOOK_URL = 'https://www.facebook.com/LasniAteljeSuzana/';
export const MESSENGER_URL = 'https://m.me/LasniAteljeSuzana';

/**
 * Salon NIMA spletnega naročanja (želja stranke). Termin se dogovori po telefonu ali v
 * sporočilu, delovni čas je po dogovoru (stara stran las.si, kontakt).
 */
export const HOURS_NOTE = 'Delovni čas po dogovoru';

/** Ocena s Facebooka (21. 10. 2026). */
export const FB_RECOMMEND = { percent: 100, count: 16 } as const;

/** Profesionalna kozmetika, ki jo salon omenja na Instagramu in na stari strani. */
export const BRANDS = ['Joico', 'Olaplex', 'Cocochoco', 'Etnobotanika'] as const;
