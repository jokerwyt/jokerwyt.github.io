import React from 'react';
import ExperienceCard from './ExperienceCard';
import { getLocalizedCollection } from '@/lib/content';
import { DEFAULT_LOCALE } from '@/lib/i18n';

export default function ExperienceSection({ lang = DEFAULT_LOCALE }) {
  const exps = getLocalizedCollection('data/experiences', lang).sort(
    (a, b) => new Date(b.metadata.sortdate) - new Date(a.metadata.sortdate)
  );

  return (
    <section className="grid gap-5 transition-all h-auto">
      {exps.map((exp) => (
        <ExperienceCard
          key={exp.slug}
          institution={exp.metadata.institution}
          role={exp.metadata.role}
          description={exp.content}
          date={exp.metadata.date}
          img={exp.metadata.image}
        />
      ))}
    </section>
  );
}
