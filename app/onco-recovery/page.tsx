import type { Metadata } from "next";
import { StructuredProgramme } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Onco-Recovery Programme",
  description:
    "Healthecy coordinates appropriate physiotherapy, clinical nutrition and supportive-care pathways alongside your oncologist’s treatment plan.",
};

export default function OncoRecoveryPage() {
  return (
    <StructuredProgramme
      intro={{
        eyebrow: "Structured programme",
        title: "Onco-Recovery: coordinated support during and after treatment.",
        body: "Cancer treatment can affect strength, appetite, movement, energy and emotional wellbeing. Healthecy coordinates appropriate physiotherapy, clinical nutrition and supportive-care pathways alongside your oncologist’s treatment plan.",
      }}
      approachTitle="Protecting nutrition, function and quality of life."
      approachBody="The Onco-Recovery programme is designed to help patients and families navigate the practical recovery needs that can arise during and after treatment. Your treating oncologist remains central to medical decisions; Healthecy helps coordinate complementary support around the wider journey."
      pillars={[
        { title: "Clinical nutrition", body: "Support for appetite, weight, treatment-related nutrition needs and practical meal planning, coordinated with clinical guidance." },
        { title: "Physiotherapy & movement", body: "Appropriate movement and rehabilitation support to help maintain mobility, strength and functional confidence." },
        { title: "Wellbeing support", body: "Respectful support for the emotional and behavioural side of treatment, recovery and caregiving." },
        { title: "Care coordination", body: "A clearer connection between relevant professionals, progress conversations and next-step support." },
      ]}
      journey={[
        { title: "Understand the journey", body: "We begin with your treatment context, current needs and the support you are looking for." },
        { title: "Coordinate appropriate support", body: "We help identify relevant rehabilitation, nutrition and wellbeing pathways alongside your treating team." },
        { title: "Build a practical plan", body: "Support is shaped around your energy, function, routines and recovery goals." },
        { title: "Review and adapt", body: "As needs change, the plan can be reviewed with appropriate professionals and clinical partners." },
      ]}
      noteTitle="For oncologists and treating teams"
      noteBody="Healthecy can support appropriate referrals for rehabilitation, clinical nutrition and wellbeing coordination. Our role is complementary: we do not replace oncology care, prescribe cancer treatment or make treatment-outcome promises."
      ctaTitle="Talk through your recovery needs."
      ctaBody="Share a brief overview of your treatment journey and the support you are looking for."
      ctaLabel="Discuss Onco-Recovery"
    />
  );
}
