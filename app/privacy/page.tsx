import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { displayEmail, displayPhone, inquiryEmail } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Healthecy, a healthcare brand of Welsphere Global Private Limited, collects and uses personal information from website visitors and enquiries.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your information."
      intro="Healthecy is a healthcare brand of Welsphere Global Private Limited. This sample privacy policy explains how we handle information you share when you visit this website or contact us."
      sections={[
        {
          title: "Who we are",
          body: (
            <>
              <p>
                Healthecy coordinates supportive healthcare services such as consultation access, rehabilitation, clinical nutrition, mental wellbeing, lifestyle support and international patient assistance. We do not replace your treating doctor.
              </p>
              <p>
                For privacy questions, email <a className="font-semibold text-accent" href={`mailto:${inquiryEmail}`}>{inquiryEmail}</a> or {displayEmail}, or call {displayPhone}.
              </p>
            </>
          ),
        },
        {
          title: "Information we collect",
          body: (
            <p>
              When you use the contact form or write to us, we collect the details you provide — such as your name, phone number, email, location, the service you are interested in, preferred contact method and a brief description of your healthcare requirement. We may also collect basic technical data such as browser type and pages visited through cookies, if you accept them.
            </p>
          ),
        },
        {
          title: "How we use your information",
          body: (
            <p>
              We use this information only to understand your enquiry, respond to you, coordinate an appropriate next step with relevant care partners where needed, and keep a record of the conversation. Website cookies, where accepted, help the site work and help us understand how visitors use it.
            </p>
          ),
        },
        {
          title: "Sharing",
          body: (
            <p>
              We do not sell personal information. Where we work with clinical or operational partners, we share only what is needed to coordinate support, and only with your knowledge. Website enquiries submitted through the contact form are delivered to {inquiryEmail}.
            </p>
          ),
        },
        {
          title: "Storage and security",
          body: (
            <p>
              We keep enquiry details for as long as needed to respond and to maintain a responsible record of the conversation. Access is limited to the care and operations team. Please do not send emergency medical information or unnecessary sensitive health records through this website.
            </p>
          ),
        },
        {
          title: "Your choices",
          body: (
            <p>
              You may ask us what information we hold about an enquiry you made, request a correction, or ask us to delete details that we no longer need. Contact {inquiryEmail} to make a request. You can also decline non-essential cookies using the cookie banner on this site.
            </p>
          ),
        },
        {
          title: "Important medical note",
          body: (
            <p>
              Healthecy coordinates supportive care and does not replace your treating doctor. For urgent symptoms, contact local emergency services or your treating team.
            </p>
          ),
        },
      ]}
    />
  );
}
