import type { Metadata } from "next";
import { ServiceLayout } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Doctor Consultation Coordination",
  description:
    "Healthecy helps patients navigate appropriate medical consultations by understanding their healthcare requirement and coordinating access to relevant professionals.",
};

export default function DoctorConsultationPage() {
  return (
    <ServiceLayout
      intro={{
        eyebrow: "Doctor consultation",
        title: "The right consultation can be the first step toward better care.",
        body: "Healthecy helps patients navigate appropriate medical consultations by understanding their healthcare requirement and coordinating access to relevant healthcare professionals and clinical partners.",
      }}
      sectionTitle="How we can support your consultation journey"
      cards={[
        { title: "Understand your requirement", body: "We begin by listening to your healthcare concern, history and the support you are looking for." },
        { title: "Identify the appropriate specialty", body: "We help clarify the type of healthcare professional or clinical partner that may be relevant." },
        { title: "Coordinate the consultation", body: "We support consultation coordination and medical documentation sharing where appropriate." },
        { title: "Support the next step", body: "Where appropriate, we can help coordinate follow-up and related recovery support." },
      ]}
      panelNote="Healthecy does not replace doctors or provide every medical specialty. We help coordinate access to appropriate healthcare professionals and clinical partners."
      ctaTitle="Start with a conversation."
      ctaBody="Tell us what you need and we’ll help you understand the next step."
      ctaLabel="Request a Consultation"
    />
  );
}
