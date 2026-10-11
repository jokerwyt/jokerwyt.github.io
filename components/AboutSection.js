import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '@/website.config';
import {
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiGoogleFill,
} from '@remixicon/react';
import { CustomMDX } from '@/components/mdx';
import { getLocalizedDoc } from '@/lib/content';
import { pick, DEFAULT_LOCALE } from '@/lib/i18n';
import { Button } from './ui/button';

export default function AboutSection({ lang = DEFAULT_LOCALE }) {
  const { content } = getLocalizedDoc('data/home/About.mdx', lang);

  return (
    <section className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {personalInfo.profilePicture && (
          // Fixed width + shrink-0: without it the figure is a flex item with
          // an auto basis, so its rendered size depends on how much room the
          // text column asks for — and that differs between en and zh.
          <figure className="md:w-[215px] md:shrink-0">
            <Image
              src={personalInfo.profilePicture}
              alt="profile image"
              width={400}
              height={500}
              className="hidden md:block object-cover w-full h-auto"
            />
            <figcaption className="mt-2 text-xs text-gray-400">
              {/* Mt Rainier, 08/2024 by{' '}
              <a href="https://web.cs.ucla.edu/~easonliu/" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                Yicheng Liu
              </a>. */}
            </figcaption>
          </figure>
        )}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">
            {pick(personalInfo.name, lang)}
          </h1>
          <h2 className="text-xl font-medium">
            {personalInfo.affiliations.map((affiliation, index) => (
              <span key={pick(affiliation.name, lang)}>
                {index > 0 && (
                  <span className="text-neutral-400 mx-1.5">·</span>
                )}
                <a
                  href={pick(affiliation.website, lang)}
                  className="hover:underline"
                >
                  @{pick(affiliation.name, lang)}
                </a>
              </span>
            ))}
          </h2>
          
          <div className="flex gap-3 text-neutral-600 hover:text-neutral-900">
            {personalInfo.socialMedia.map((social) => {
              return (
                <Button asChild variant="outline" key={social.name} size={'sm'}>
                  {social.name === 'Email' ? (
                    <span>{social.url.replace('mailto:', '')}</span>
                  ) : (
                    <Link href={social.url} target="_blank">
                      {social.name === 'GitHub' ? (
                        <RiGithubFill size={16} />
                      ) : social.name === 'Twitter' ? (
                        <RiTwitterXLine size={16} />
                      ) : social.name === 'Google Scholar' ? (
                        <RiGoogleFill size={16} />
                      ) : social.name === 'ORCID' ? (
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          width="16"
                          height="16"
                        >
                          <path d="m12 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm-4.631 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1 -.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041h-1.444zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722z" />
                        </svg>
                      ) : (
                        <RiLinkedinBoxFill size={16} />
                      )}
                    </Link>
                  )}
                </Button>
              );
            })}
          </div>


          <article className="flex flex-col gap-2 text-justify">
            <CustomMDX source={content} />
          </article>

        </div>
        
      </div>

    </section>
  );
}
