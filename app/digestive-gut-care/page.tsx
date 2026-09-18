import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Advanced Digestive & Gut Care",
  description:
    "Healthecy helps coordinate appropriate consultation, clinical nutrition and supportive-care pathways around digestive-health needs.",
};

export default function DigestiveGutCarePage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Advanced Digestive & Gut Care.",
        body: "Persistent digestive symptoms and complex nutrition needs can affect every part of daily life. Healthecy helps coordinate appropriate consultation, clinical nutrition and supportive-care pathways around your individual journey.",
      }}
      approachTitle="A clearer path for complex digestive-health needs."
      approachBody="Our role is to help patients navigate relevant support with care and clarity. We work alongside appropriate treating clinicians and clinical partners; Healthecy does not diagnose, prescribe or replace specialist medical care."
      pillars={[
        { title: "Consultation coordination", body: "Guidance toward appropriate medical consultation pathways based on your needs and existing care." },
        { title: "Clinical nutrition", body: "Evidence-based dietetic support for digestive-health nutrition needs where clinically appropriate." },
        { title: "Practical routines", body: "Support for sustainable food, hydration and daily-routine changes that fit your care plan." },
        { title: "Continuity of care", body: "A coordinated approach to follow-up, recovery support and next-step conversations." },
      ]}
      journeyTitle="How we can help"
      journey={[
        { title: "Share your concern", body: "Tell us about your symptoms, existing care and the support you are looking for." },
        { title: "Clarify the pathway", body: "We help identify the consultation and support pathways that may be relevant." },
        { title: "Coordinate support", body: "We can help coordinate appropriate clinical nutrition and recovery support." },
        { title: "Stay connected", body: "Your needs can be reviewed as your treatment and recovery journey evolves." },
      ]}
      noteTitle="Support that complements specialist care"
      noteBody="Healthecy can coordinate supportive services around a treating gastroenterologist or physician’s plan. Urgent or severe symptoms should always be assessed by an appropriate medical professional."
      ctaTitle="Talk through your digestive-health support needs."
      ctaBody="Start with a conversation about your current care and the support you are looking for."
      ctaLabel="Discuss Digestive & Gut Care"
    />
  );
}
