import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline";
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", className = "" }: CtaLinkProps) {
  const styles =
    variant === "accent"
      ? "bg-accent text-accent-foreground hover:bg-accent"
      : variant === "outline"
        ? "border border-primary bg-background text-primary hover:bg-secondary"
        : "bg-primary text-primary-foreground hover:bg-primary";

  return (
    <Link
      href={href}
      className={`inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full px-6 py-6 text-sm font-bold ${styles} ${className}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

type PageIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  titleClassName?: string;
};

export function PageIntro({ eyebrow, title, body, titleClassName = "max-w-4xl" }: PageIntroProps) {
  return (
    <section className="bg-secondary px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold text-accent">{eyebrow}</p>
        <h1 className={`mt-4 ${titleClassName} whitespace-pre-line text-5xl font-extrabold tracking-[-0.06em] text-primary sm:text-6xl`}>
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{body}</p>
      </div>
    </section>
  );
}

export function NotePanel({ title, body }: { title: string; body: string }) {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-secondary p-8 sm:p-12">
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-primary">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{body}</p>
      </div>
    </section>
  );
}

export function DarkCtaBand({
  title,
  body,
  href,
  cta,
  variant = "accent",
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
  variant?: "primary" | "accent";
}) {
  return (
    <section className="px-5 pb-16 lg:px-8 lg:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center lg:p-16">
        <div>
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.05em]">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8">{body}</p>
        </div>
        <CtaLink href={href} variant={variant} className="self-start">
          {cta}
        </CtaLink>
      </div>
    </section>
  );
}

type Card = { title: string; body: string };

export function StructuredProgramme({
  intro,
  approachEyebrow = "A coordinated approach",
  approachTitle,
  approachBody,
  pillars,
  journeyTitle = "How the programme works",
  journey,
  noteTitle,
  noteBody,
  ctaTitle,
  ctaBody,
  ctaLabel,
}: {
  intro: PageIntroProps;
  approachEyebrow?: string;
  approachTitle: string;
  approachBody: string;
  pillars: Card[];
  journeyTitle?: string;
  journey: Card[];
  noteTitle: string;
  noteBody: string;
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
}) {
  return (
    <>
      <PageIntro {...intro} />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">{approachEyebrow}</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">{approachTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{approachBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <CircleCheck size={22} className="text-accent" />
                <h3 className="mt-8 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold text-accent">Your care journey</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">{journeyTitle}</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => (
              <article key={item.title} className="border-t-2 border-accent pt-5">
                <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <NotePanel title={noteTitle} body={noteBody} />
      <DarkCtaBand title={ctaTitle} body={ctaBody} href="/contact" cta={ctaLabel} variant="accent" />
    </>
  );
}

export function ServiceLayout({
  intro,
  sectionTitle,
  cards,
  extra,
  panelNote,
  ctaTitle,
  ctaBody,
  ctaLabel,
}: {
  intro: PageIntroProps;
  sectionTitle: string;
  cards: Card[];
  extra?: ReactNode;
  panelNote?: string;
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
}) {
  const columns = cards.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-2";

  return (
    <>
      <PageIntro {...intro} />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-primary">{sectionTitle}</h2>
          <div className={`mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 ${columns}`}>
            {cards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <CircleCheck size={22} className="text-accent" />
                <h3 className="mt-8 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          {extra}
        </div>
      </section>
      <section className="px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12">
          {panelNote ? <p className="max-w-3xl text-lg leading-8">{panelNote}</p> : null}
          <h2 className={`${panelNote ? "mt-10" : ""} max-w-3xl text-4xl font-extrabold tracking-[-0.05em]`}>{ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-lg leading-8">{ctaBody}</p>
          <CtaLink href="/contact" variant="accent" className="mt-7">
            {ctaLabel}
          </CtaLink>
        </div>
      </section>
    </>
  );
}
