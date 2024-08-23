import React from "react";
import ExperienceCard from "./ExperienceCard";
import path from 'path';
import { getMDXData } from "@/app/projects/utils";


function getExperiences() {
  return getMDXData(path.join(process.cwd(), 'data', 'experiences'));
}

export default function ExperienceSection() {
  const exps = getExperiences().sort((a, b) => {
    console.log(a.metadata.sortdate, b.metadata.sortdate);
    return new Date(b.metadata.sortdate) - new Date(a.metadata.sortdate);
  });

  return (
    <section className="grid gap-5 transition-all h-auto">
      {exps.map((project) => (
        <ExperienceCard
          key={project.slug}
          institution={project.metadata.institution}
          role={project.metadata.role}
          description={project.content}
          date={project.metadata.date}
          img={project.metadata.image}
          slug={project.slug}
        />
      ))}
    </section>
  );
}
