// No filesystem imports here — this module is pulled into client components.
export const LOCALES = ['en', 'zh'];
export const DEFAULT_LOCALE = 'en';

/**
 * UI strings, grouped by key with the languages side by side — so a wording
 * change is always made to both at once rather than drifting apart.
 */
export const strings = {
  experiences: { en: 'Experiences', zh: '经历' },
  teaching: { en: 'Teaching', zh: '教学' },
  talks: { en: 'Talks', zh: '演讲' },
  publications: { en: 'Publications', zh: '论文' },
  switchLanguage: { en: '中', zh: 'EN' },
  switchLanguageLabel: { en: '切换到中文', zh: 'Switch to English' },
};

/** Returns a `t('experiences')` lookup bound to one language. */
export function translator(lang) {
  const locale = LOCALES.includes(lang) ? lang : DEFAULT_LOCALE;
  return (key) => strings[key]?.[locale] ?? strings[key]?.[DEFAULT_LOCALE] ?? key;
}

/** Pick a field from a `{ en, zh }` pair used in website.config.js and alike. */
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value[DEFAULT_LOCALE];
  }
  return value;
}
