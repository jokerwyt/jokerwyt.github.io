import React from "react";

export default function TalksSection() {
  const talks = [
    {
      title: "大模型推理系统加速技术简介 (in Chinese!)",
      url: "https://www.bilibili.com/video/BV1MCquBvEj6/",
      platform: "bilibili",
      date: "2025-04"
    }
  ];

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Talks</h1>
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
            ] {talk.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
