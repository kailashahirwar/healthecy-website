import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { CtaLink, PageIntro } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "How Healthecy Works | Coordinated Care",
  description:
    "Healthcare can feel fragmented after a diagnosis, procedure or hospital stay. Healthecy helps connect appropriate support around your existing medical care.",
};

const steps = [
  ["01", "Tell us what you need", "Share your current healthcare context, the support you are looking for and any relevant treating-team guidance."],
  ["02", "Understand your journey", "We take time to understand the practical recovery, nutrition, rehabilitation or wellbeing needs around your care."],
  ["03", "Coordinate the right support", "Where appropriate, we help identify and coordinate relevant professionals and supportive services."],
  ["04", "Build a practical pathway", "Your support pathway is shaped around clinical suitability, your goals and the recommendations of your treating doctor."],
  ["05", "Review and adapt", "As needs change, we can help coordinate follow-up conversations and appropriate next steps."],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="How Healthecy works"
        title="A clearer way to move forward."
        body="Healthcare can feel fragmented after a diagnosis, procedure or hospital stay. Healthecy helps connect appropriate support around your existing medical care, so the next step feels more manageable."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-accent">The journey</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
              Support, coordinated around you.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(([num, title, body]) => (
              <article key={num} className="rounded-2xl border border-border bg-card p-7">
                <span className="text-sm font-bold text-accent">{num}</span>
                <h3 className="mt-8 text-2xl font-bold tracking-[-0.03em] text-primary">{title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <CircleCheck size={28} className="text-accent" />
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Care that complements medical treatment.
          </h2>
          <p className="mt-6 text-lg leading-8">
            Healthecy does not replace your treating doctor, diagnose conditions or make medical decisions. Medical diagnosis and treatment remain with appropriately qualified healthcare professionals.
          </p>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-secondary p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.05em] text-primary">
              Your healthcare journey does not have to be complicated.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Start with a conversation about the support you need.
            </p>
          </div>
          <CtaLink href="/contact">Talk to Healthecy</CtaLink>
        </div>
      </section>
    </>
  );
}
