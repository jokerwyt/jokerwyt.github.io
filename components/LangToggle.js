'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { strings } from '@/lib/i18n';

/** Shows the language you'd switch *to*, not the one you're on. */
export default function LangToggle() {
  const pathname = usePathname();
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  const current = isZh ? 'zh' : 'en';

  return (
    <Button asChild variant="ghost" size="icon">
      <Link
        href={isZh ? '/' : '/zh'}
        aria-label={strings.switchLanguageLabel[current]}
        className="text-sm font-medium"
      >
        {strings.switchLanguage[current]}
      </Link>
    </Button>
  );
}
