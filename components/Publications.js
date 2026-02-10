import bibtexParse from 'bibtex-parse-js';
import Image from 'next/image';
import { personalInfo } from '@/website.config';
import { CustomMDX } from '@/components/mdx';

function authorProcess(authorsStr, personalInfo) {
  const authors = authorsStr.split('and');

  const boldedAuthors = authors.map((author) => {
    author = author.trim().split(', ').reverse().join(' ').trim();

    if (author === personalInfo) {
      // console.log(author);
      return `**${personalInfo}**`;
    }

    return author;
  });

  return boldedAuthors.join(', ');
}

export default function Publications({ bibtex }) {
  const parsed = bibtexParse.toJSON(bibtex);

  // Manually add DeepSeek-V3.2 as the first item
  const deepseekItem = {
    entryTags: {
      title: 'DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models',
      url: 'https://arxiv.org/abs/2512.02556',
      journal: 'arXiv preprint arXiv:2512.02556',
      year: '2025',
      date: '2025-12',
      isDeepSeek: true // Flag to identify this special item
    }
  };

  const allItems = [deepseekItem, ...parsed];

  return (
    <ol className="flex flex-col gap-4">
      {allItems.map((item) => {
        const processedAuthors = item.entryTags.author
        const description = item.entryTags.description;
        const isDeepSeek = item.entryTags.isDeepSeek;
        // authorProcess(
        //   item.entryTags.author,
        //   personalInfo.name
        // );
        return (
          <li key={item.entryTags.title} className=" list-decimal">
            <h2 className="text-base font-medium dark:text-neutral-50">
              {item.entryTags.title.replace(/{|}/g, '')}
            </h2>

            <div className=" font-light text-neutral-600 dark:text-neutral-300">
              {!isDeepSeek && <CustomMDX source={processedAuthors} />}

              <span className=" mr-2 italic font-normal">
                {isDeepSeek ? (
                  <>
                    <a href={item.entryTags.url} className="underline">
                      [arxiv]
                    </a>
                    <span className="ml-2">{item.entryTags.date}</span>
                  </>
                ) : (
                  item.entryTags.journal?.replace(/{|}/g, '') ||
                  item.entryTags.booktitle?.replace(/{|}/g, '')
                )}
              </span>
              {!isDeepSeek && <span className="mr-2 italic">{item.entryTags.conference}</span>}
              {<CustomMDX source={description} />}
              {item.entryTags.award &&
                (item.entryTags.award === 'Honorable Mention' ? (
                  <Image
                    src="/honor.jpg"
                    alt="Honorable Mention"
                    width={20}
                    height={20}
                    className=" h-5 w-5 inline-block mr-2"
                  />
                ) : (
                  <Image
                    src="/best.jpg"
                    alt="Honorable Mention"
                    width={20}
                    height={20}
                    className="h-5 w-5 inline-block mr-2"
                  />
                ))}
              <span className="font-bold h-5">{item.entryTags.award}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
