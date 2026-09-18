import type { ReactNode } from "react";
import { PageIntro } from "@/components/page-chrome";

type Section = {
  title: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} body={intro} />
      <section className="mx-auto max-w-3xl space-y-10 px-5 py-16 leading-8 text-muted-foreground lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-primary">Last updated: 18 September 2026</p>
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-primary">{section.title}</h2>
            <div className="mt-4 space-y-4">{section.body}</div>
          </article>
        ))}
      </section>
    </>
  );
}
