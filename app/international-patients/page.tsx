import type { Metadata } from "next";
import { ServiceLayout } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "International Patient Support",
  description:
    "Healthecy supports people travelling to India for medical treatment by helping coordinate the healthcare journey before travel, during treatment and through recovery.",
};

export default function InternationalPatientsPage() {
  return (
    <ServiceLayout
      intro={{
        eyebrow: "International Patient Support",
        title: "Healthcare in India, coordinated with clarity.",
        body: "Healthecy supports people travelling to India for medical treatment by helping coordinate and facilitate their healthcare journey — before travel, during treatment, through recovery and follow-up where appropriate.",
      }}
      sectionTitle="How we can support your journey to India"
      cards={[
        {
          title: "Understand your requirement",
          body: "Share your country of residence, medical need, preferred city in India and any treating-team notes so we can understand the next step.",
        },
        {
          title: "Clinical coordination",
          body: "We help coordinate access to appropriate healthcare professionals and clinical partners, and support medical document sharing where needed.",
        },
        {
          title: "Travel and stay guidance",
          body: "Where appropriate, we can help with guidance on travel timing, arrival, local transportation and stay arrangements around treatment.",
        },
        {
          title: "On-ground support",
          body: "Our team can help you navigate appointments, recovery support and practical questions while you are in India.",
        },
        {
          title: "Recovery and follow-up",
          body: "After treatment, we can help coordinate rehabilitation, nutrition, wellbeing support and follow-up conversations where suitable.",
        },
        {
          title: "Family communication",
          body: "We keep the journey easier to follow for patients and accompanying family members, with a clear point of contact.",
        },
      ]}
      panelNote="Healthecy does not guarantee doctor availability, hospital admission, visas, travel documents or treatment outcomes. Medical decisions remain with appropriately qualified healthcare professionals."
      ctaTitle="Planning treatment in India?"
      ctaBody="Tell us your healthcare requirement, home country and preferred city. We will guide you through the next steps."
      ctaLabel="Talk to International Support"
    />
  );
}
