import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { DarkCtaBand, PageIntro } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Clear answers for your healthcare journey. Learn how Healthecy supports patients, families, healthcare professionals and international visitors.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="Frequently asked questions"
        title="Clear answers for your healthcare journey."
        titleClassName="max-w-3xl"
        body="Learn how Healthecy supports patients, families, healthcare professionals and international visitors with coordinated, patient-centred care."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">Explore</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary">Helpful information, without the jargon.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Every healthcare journey is personal. These answers explain how Healthecy can help you navigate the next step with more clarity.
            </p>
          </div>
          <FaqList />
        </div>
      </section>
      <DarkCtaBand
        title="Still have a question?"
        body="Talk to our care team about your healthcare requirement and the support you are looking for."
        href="/contact"
        cta="Talk to Healthecy"
        variant="accent"
      />
    </>
  );
}
