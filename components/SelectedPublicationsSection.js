import React from "react";
import Publications from "./Publications";
import bibtex from "../data/bib/SelectedPublications.bib";

export default function SelectedPublicationsSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Publications</h1>
      <Publications bibtex={bibtex} />
    </section>
  );
}
