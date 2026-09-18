import type { Metadata } from "next";
import { ServiceLayout } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Mental Health Support",
  description:
    "Healthecy helps coordinate professional mental and emotional wellbeing support with a calm, respectful and patient-centred approach.",
};

export default function MentalHealthSupportPage() {
  return (
    <ServiceLayout
      intro={{
        eyebrow: "Mental health support",
        title: "Your health includes your mind.",
        body: "Mental and emotional wellbeing can be an important part of recovery and everyday health. Healthecy helps coordinate professional support with a calm, respectful and patient-centred approach.",
      }}
      sectionTitle="Support for wellbeing, at your pace"
      cards={[
        { title: "Emotional wellbeing", body: "Professional support for the emotional side of health, treatment and recovery." },
        { title: "Stress management", body: "Practical support for managing stress and building healthier coping strategies." },
        { title: "Support during recovery", body: "Wellbeing support that can sit alongside rehabilitation and other healthcare needs." },
        { title: "Behaviour change support", body: "Guidance for sustainable changes that support long-term wellbeing." },
      ]}
      panelNote="Healthecy coordinates appropriate mental wellbeing support. This page is not an emergency-care service or a substitute for urgent medical assistance."
      ctaTitle="A more supported way forward."
      ctaBody="Talk to our care team about mental wellbeing support that may be right for you."
      ctaLabel="Talk to a Mental Health Professional"
    />
  );
}
