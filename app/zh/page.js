import HomePage from '@/components/HomePage';
import HtmlLang from '@/components/HtmlLang';
import { personalInfo } from '@/website.config';

export const metadata = {
  title: personalInfo.name.zh,
  description: '个人主页',
};

export default function Page() {
  return (
    <>
      <HtmlLang lang="zh" />
      <HomePage lang="zh" />
    </>
  );
}
