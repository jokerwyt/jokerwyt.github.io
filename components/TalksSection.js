import React from 'react';
import { translator, pick, DEFAULT_LOCALE } from '@/lib/i18n';

// Keep each talk's languages side by side so both get updated together.
const talks = [
  {
    title: {
      en: 'An Introduction to LLM Inference Acceleration (in Chinese)',
      zh: '大模型推理系统加速技术简介',
    },
    url: 'https://www.bilibili.com/video/BV1MCquBvEj6/',
    platform: 'bilibili',
    date: '2025-04',
  },
];

export default function TalksSection({ lang = DEFAULT_LOCALE }) {
  const t = translator(lang);

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">{t('talks')}</h1>
      <ul className="flex flex-col gap-3">
        {talks.map((talk, index) => (
          <li key={index} className="text-base">
            [{talk.date}] [
            <a
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
            >
              {talk.platform}
            </a>
            ] {pick(talk.title, lang)}
          </li>
        ))}
      </ul>
    </section>
  );
}
