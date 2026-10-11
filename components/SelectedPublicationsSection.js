import React from 'react';
import Publications from './Publications';
import bibtex from '../data/bib/SelectedPublications.bib';
import { translator, DEFAULT_LOCALE } from '@/lib/i18n';

export default function SelectedPublicationsSection({ lang = DEFAULT_LOCALE }) {
  const t = translator(lang);

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">{t('publications')}</h1>
      <Publications bibtex={bibtex} />
    </section>
  );
}
