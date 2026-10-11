'use client';

import { useEffect } from 'react';

/**
 * The root layout is a server component and can't see the current route, so the
 * localized page sets <html lang> itself.
 */
export default function HtmlLang({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
