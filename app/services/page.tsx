import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { CtaLink, PageIntro } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Care Programmes",
  description:
    "Healthecy programmes bring appropriate rehabilitation, clinical nutrition, lifestyle and wellbeing support into a more connected pathway.",
};

const programmes = [
  {
    href: "/onco-recovery",
    img: "/images/onco-recovery.jpg",
    alt: "Onco-Recovery Programme",
    title: "Onco-Recovery Programme",
    body: "Supportive coordination around recovery, nutrition, rehabilitation and wellbeing during or after cancer treatment.",
  },
  {
    href: "/digestive-gut-care",
    img: "/images/digestive-gut-care.jpg",
    alt: "Advanced Digestive & Gut Care",
    title: "Advanced Digestive & Gut Care",
    body: "Appropriate nutrition and lifestyle support for people navigating digestive health needs.",
  },
  {
    href: "/metabolic-heart-care",
    img: "/images/metabolic-heart-care.jpg",
    alt: "Metabolic & Heart Care",
    title: "Metabolic & Heart Care",
    body: "Connected support around nutrition, movement, lifestyle and long-term health priorities.",
  },
  {
    href: "/physiotherapy-rehabilitation",
    img: "/images/physical-rehab-msk-care.jpg",
    alt: "Physical Rehab & MSK Care",
    title: "Physical Rehab & MSK Care",
    body: "Rehabilitation and movement support for mobility, function and recovery where appropriate.",
  },
  {
    href: "/tube-feed-care",
    img: "/images/tube-feed-care.jpg",
    alt: "Tube-Feed Care",
    title: "Tube-Feed Care",
    body: "Supportive coordination around clinically appropriate nutrition and feeding-care needs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Structured programmes"
        title="Support built around the journey you are on."
        body="Healthecy programmes bring appropriate rehabilitation, clinical nutrition, lifestyle and wellbeing support into a more connected pathway."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
            A coordinated approach to recovery and everyday health.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Each programme is designed to complement medical care, not replace it. The right pathway depends on your health context, treating team guidance and individual needs.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((item) => (
            <article key={item.href} className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <img src={item.img} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.body}</p>
                <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <CircleCheck size={28} className="text-accent" />
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Support that works alongside medical care.
          </h2>
          <p className="mt-6 text-lg leading-8">
            Healthecy does not diagnose, prescribe treatment or guarantee outcomes. Your treating doctor or specialist remains responsible for medical decisions and treatment.
          </p>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-secondary p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.05em] text-primary">
              Not sure which programme fits?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Talk to Healthecy about your current situation and the support you are looking for.
            </p>
          </div>
          <CtaLink href="/contact">Talk to Healthecy</CtaLink>
        </div>
      </section>
    </>
  );
}
