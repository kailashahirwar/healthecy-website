import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { CtaLink, PageIntro } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Physiotherapy & Rehabilitation",
  description:
    "Physiotherapy and rehabilitation can be a structured part of recovery after surgery, injury, illness, hospitalisation or medical treatment.",
};

const approachSteps = [
  "Assessment",
  "Goal Setting",
  "Individualised Programme",
  "Guided Rehabilitation",
  "Progress Monitoring",
  "Functional Recovery",
];

export default function PhysiotherapyRehabilitationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Physiotherapy & rehabilitation"
        title="Move better. Recover stronger."
        body="Physiotherapy and rehabilitation can be a structured part of recovery after surgery, injury, illness, hospitalisation or medical treatment. Healthecy helps coordinate support around the goals that matter to you."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-primary">Support across the recovery journey</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Post-surgical rehabilitation", body: "Guided support as you work toward mobility, strength and everyday function after surgery." },
              { title: "Orthopaedic rehabilitation", body: "Recovery support following orthopaedic procedures, injuries and musculoskeletal concerns." },
              { title: "Sports injury rehabilitation", body: "A structured approach to movement, conditioning and return-to-activity goals." },
              { title: "Mobility and functional recovery", body: "Support for reduced mobility, loss of strength, chronic pain and functional confidence." },
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
          <h2 className="text-4xl font-extrabold tracking-[-0.05em]">Our approach</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {approachSteps.map((label, index) => (
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
          Healthecy can work alongside patients referred by orthopaedic doctors, surgeons, gastroenterologists and other medical professionals where appropriate. Our support complements—not replaces—medical care.
        </div>
      </section>
      <section className="px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12">
          <h2 className="text-4xl font-extrabold tracking-[-0.05em]">Recovery deserves a clear plan.</h2>
          <p className="mt-4 max-w-xl text-lg leading-8">Talk to our team about the rehabilitation support you are looking for.</p>
          <CtaLink href="/contact" variant="accent" className="mt-7">
            Talk to Our Rehabilitation Team
          </CtaLink>
        </div>
      </section>
    </>
  );
}
