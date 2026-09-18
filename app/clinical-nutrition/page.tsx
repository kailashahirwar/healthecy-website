import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { CtaLink, PageIntro } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Clinical Nutrition Support",
  description:
    "Healthecy helps coordinate evidence-based clinical nutrition and dietetic support tailored to individual healthcare requirements.",
};

const processSteps = ["Assessment", "Nutrition Strategy", "Implementation", "Monitoring", "Adjustment"];

export default function ClinicalNutritionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Clinical nutrition"
        title="Nutrition designed around your health."
        body="Healthecy helps coordinate evidence-based clinical nutrition and dietetic support that is tailored to individual healthcare requirements, recovery needs and sustainable daily routines."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-primary">Nutrition support that fits your journey</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Medical nutrition", body: "Dietetic support shaped around individual healthcare requirements and clinical guidance." },
              { title: "Recovery and post-surgical nutrition", body: "Practical nutrition support during recovery, rehabilitation and return to everyday routines." },
              { title: "Digestive-health nutrition", body: "Individualised support for gastrointestinal and digestive-health nutrition needs." },
              { title: "Lifestyle-related nutrition", body: "Sustainable meal planning and nutrition habits where clinically appropriate." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <CircleCheck size={22} className="text-accent" />
                <h3 className="mt-8 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em]">A considered nutrition process</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {processSteps.map((label, index) => (
              <span key={label} className="rounded-full border border-primary-foreground px-4 py-3 text-sm font-semibold">
                <span className="mr-2 text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-secondary p-8 text-lg leading-8 text-primary sm:p-12">
          Clinical nutrition support is designed to complement appropriate medical care. Healthecy does not make disease-cure claims or promise specific outcomes.
        </div>
      </section>
      <section className="px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em]">Make nutrition part of your care plan.</h2>
          <p className="mt-4 max-w-xl text-lg leading-8">Speak with our team about clinical nutrition support for your needs.</p>
          <CtaLink href="/contact" variant="accent" className="mt-7">
            Speak to a Clinical Dietitian
          </CtaLink>
        </div>
      </section>
    </>
  );
}
