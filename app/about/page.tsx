import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import { DarkCtaBand } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "About Healthecy",
  description:
    "Healthecy is a healthcare brand of Welsphere Global Private Limited, helping patients and families navigate support around medical treatment and recovery.",
};

const guides = [
  ["Patient-centred", "We begin with the person, their circumstances and the next step that feels most important."],
  ["Connected care", "We help bring relevant supportive services into a clearer, more coordinated pathway."],
  ["Clinical collaboration", "We work in a way that respects the central role of treating doctors and qualified professionals."],
  ["Recovery focused", "We focus on practical support for function, confidence, wellbeing and a return to daily life."],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">About Healthecy</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-[-0.06em] text-primary sm:text-6xl">
              Healthcare, made easier.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Healthecy is a healthcare brand of Welsphere Global Private Limited. We help patients and families navigate the support that can surround medical treatment, recovery and a return to everyday life.
            </p>
          </div>
          <img
            src="/images/about-clinical-lead.jpg"
            alt="Healthcare professional supporting coordinated patient care"
            width={720}
            height={560}
            className="w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">Our purpose</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
              One patient. One coordinated healthcare journey.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            A diagnosis, treatment or procedure can be only one part of a much wider journey. Healthecy exists to help connect appropriate consultation coordination, rehabilitation, clinical nutrition, wellbeing and lifestyle support around the patient.
          </p>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold text-accent">What guides us</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map(([title, body]) => (
              <article key={title} className="rounded-2xl bg-card p-7">
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 sm:p-12">
          <HeartHandshake size={30} className="text-accent" />
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.05em] text-primary">
            Supportive care, responsibly coordinated.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Healthecy supports and complements medical treatment. We do not replace treating doctors, make treatment-outcome promises or present supportive services as a substitute for diagnosis or medical care.
          </p>
        </div>
      </section>

      <DarkCtaBand
        title="Talk to Healthecy about your next step."
        body="Whether you are a patient, family member or healthcare professional, we are here to help make the journey clearer."
        href="/contact"
        cta="Contact Healthecy"
        variant="accent"
      />
    </>
  );
}
