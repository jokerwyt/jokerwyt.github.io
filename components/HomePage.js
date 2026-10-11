import AboutSection from '@/components/AboutSection';
import PublicationsSection from '@/components/SelectedPublicationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TeachingSection from '@/components/TeachingSection';
import TalksSection from '@/components/TalksSection';
import { homepageSection } from '@/website.config';
import { translator, DEFAULT_LOCALE } from '@/lib/i18n';

export default function HomePage({ lang = DEFAULT_LOCALE }) {
  const t = translator(lang);

  return (
    <main className="md:w-[64rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      {homepageSection.AboutSection && <AboutSection lang={lang} />}
      {homepageSection.ExperienceSection && (
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">{t('experiences')}</h1>
          <ExperienceSection lang={lang} />
        </div>
      )}
      {homepageSection.TeachingSection && <TeachingSection lang={lang} />}
      {homepageSection.TalksSection && <TalksSection lang={lang} />}
      {homepageSection.SelectedPublicationsSection && (
        <PublicationsSection lang={lang} />
      )}
    </main>
  );
}
