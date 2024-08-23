import React from "react";
import TeachingMd from "@/data/home/Teaching.mdx";

export default function TeachingSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Teaching</h1>
      <TeachingMd />
    </section>
  );
}
