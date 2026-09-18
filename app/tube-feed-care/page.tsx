import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Tube-Feed Care Support",
  description:
    "Healthecy helps coordinate appropriate clinical nutrition support and clearer day-to-day guidance alongside the treating medical team.",
};

export default function TubeFeedCarePage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Tube-Feed Care Support.",
        body: "Tube feeding can bring complex clinical and practical questions for patients and caregivers. Healthecy helps coordinate appropriate clinical nutrition support and clearer day-to-day guidance alongside the treating medical team.",
      }}
      approachTitle="Support for patients and caregivers."
      approachBody="Care needs can include feed planning, routine support and questions that arise at home. Healthecy coordinates appropriate dietetic and clinical support; urgent concerns, tube complications or acute symptoms must be addressed by the treating medical team or emergency services."
      pillars={[
        { title: "Clinical nutrition coordination", body: "Support for appropriate dietetic pathways and feed-related nutrition conversations." },
        { title: "Caregiver guidance", body: "Practical support for routines, questions and confidence around day-to-day care." },
        { title: "Continuity support", body: "A clearer connection between home routines and appropriate clinical follow-up." },
        { title: "Recovery coordination", body: "Support that can sit alongside rehabilitation and wider recovery needs." },
      ]}
      journeyTitle="How we can support"
      journey={[
        { title: "Understand the care context", body: "Share the patient’s current care plan, treating team and the support you need." },
        { title: "Coordinate appropriate support", body: "We help identify relevant clinical nutrition and caregiver-support pathways." },
        { title: "Support daily routines", body: "Guidance is shaped around practical questions and the realities of care at home." },
        { title: "Stay connected", body: "We help coordinate next-step conversations and follow-up support where appropriate." },
      ]}
      noteTitle="Important safety note"
      noteBody="Tube blockage, dislodgement, breathing difficulty, severe pain, fever or other acute symptoms need urgent assessment by the treating medical team or emergency services."
      ctaTitle="Talk through tube-feed care support."
      ctaBody="Tell us about the patient’s current care context and the support you are looking for."
      ctaLabel="Discuss Tube-Feed Care"
    />
  );
}
