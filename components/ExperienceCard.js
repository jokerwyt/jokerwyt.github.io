import React from 'react';
import Image from 'next/image';
import { CustomMDX } from '@/components/mdx';

export default function ExperienceCard({
  institution,
  role,
  description,
  date,
  img,
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-5 min-h-[150px]">
      <div className="flex items-center justify-center md:w-1/4">
        <Image src={img} alt={institution} width={120} height={120} />
      </div>
      <div className="flex flex-col gap-3 md:w-3/4">
        <p className="text-xl font-semibold">
          <span style={{ color: 'rgb(222, 147, 8)' }}> {institution} </span>
          <br />
          <span className="p">{date}</span>
          <br />
          {role}
        </p>

        <article className="flex flex-col gap-2 text-justify">
          <CustomMDX source={description} />
        </article>
      </div>
    </div>
  );
}
