import React from 'react';
import { CustomMDX } from '@/components/mdx';
import { getLocalizedDoc } from '@/lib/content';
import { translator, DEFAULT_LOCALE } from '@/lib/i18n';

export default function TeachingSection({ lang = DEFAULT_LOCALE }) {
  const t = translator(lang);
  const { content } = getLocalizedDoc('data/home/Teaching.mdx', lang);

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">{t('teaching')}</h1>
      <CustomMDX source={content} />
    </section>
  );
}
