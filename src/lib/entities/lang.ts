const langs = ["ja", "en", "de", "fr"] as const;
type TLang = typeof langs[number];

export { TLang, langs };
