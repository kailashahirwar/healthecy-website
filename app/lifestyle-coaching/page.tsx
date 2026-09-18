import type { Metadata } from "next";
import { ServiceLayout } from "@/components/page-chrome";

export const metadata: Metadata = {
  title: "Lifestyle Coaching",
  description: "Lifestyle coaching offers practical, supportive guidance for the routines that shape everyday wellbeing.",
};

export default function LifestyleCoachingPage() {
  return (
    <ServiceLayout
      intro={{
        eyebrow: "Lifestyle coaching",
        title: "Build healthier habits that last.",
        body: "Lifestyle coaching offers practical, supportive guidance for the routines that shape everyday wellbeing. Healthecy helps coordinate a realistic approach that works alongside—not in place of—appropriate medical care.",
      }}
      sectionTitle="Practical support for everyday health"
      cards={[
        { title: "Daily routines", body: "Build a more consistent foundation for the habits that support your health." },
        { title: "Movement and activity", body: "Find practical ways to bring appropriate movement into your everyday routine." },
        { title: "Sleep and stress", body: "Support healthier sleep patterns and practical stress-management strategies." },
        { title: "Sustainable behaviour change", body: "Focus on small, realistic changes that can be maintained over time." },
      ]}
      panelNote="Lifestyle coaching is supportive guidance and is not a replacement for medical consultation, diagnosis or treatment."
      ctaTitle="Start with what is realistic."
      ctaBody="Talk to our team about lifestyle support that fits your health journey."
      ctaLabel="Start Your Lifestyle Journey"
    />
  );
}
