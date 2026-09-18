import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { displayPhone, inquiryEmail } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for the Healthecy website, a Welsphere Global Private Limited healthcare brand.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Using the Healthecy website."
      intro="These sample terms apply to your use of this website and to enquiries made through Healthecy, a healthcare brand of Welsphere Global Private Limited."
      sections={[
        {
          title: "About this website",
          body: (
            <p>
              The information on this website is for general guidance. It is not medical advice, diagnosis or treatment. Healthecy coordinates supportive services such as consultation access, rehabilitation, clinical nutrition, mental wellbeing, lifestyle support and international patient assistance.
            </p>
          ),
        },
        {
          title: "Medical responsibility",
          body: (
            <p>
              Your treating doctor or specialist remains responsible for medical decisions. Healthecy does not guarantee doctor availability, hospital admission, treatment outcomes or specific results. Programme and service descriptions explain possible pathways; suitability depends on your health context and treating-team guidance.
            </p>
          ),
        },
        {
          title: "Enquiries",
          body: (
            <p>
              By contacting us you confirm that the details you share are accurate to the best of your knowledge. Website enquiries are routed to {inquiryEmail}. We may decline or redirect an enquiry where a service is not clinically appropriate or is outside the support we coordinate.
            </p>
          ),
        },
        {
          title: "International patients",
          body: (
            <p>
              Travel, visa, accommodation and treatment arrangements for international patients are coordinated case by case. Healthecy does not guarantee visas, travel documents, hospital admission or any particular clinical outcome.
            </p>
          ),
        },
        {
          title: "Website use",
          body: (
            <p>
              You may use this website for lawful personal or professional enquiries. You must not misuse the site, attempt to disrupt it, or submit false or harmful information. All website content, branding and materials remain the property of Welsphere Global Private Limited unless otherwise stated.
            </p>
          ),
        },
        {
          title: "Liability",
          body: (
            <p>
              This website is provided as-is. To the extent permitted by law, Healthecy and Welsphere Global Private Limited are not liable for decisions made solely on the basis of website content, or for delays, partner availability or outcomes outside our control.
            </p>
          ),
        },
        {
          title: "Changes",
          body: (
            <p>
              We may update these terms from time to time. The latest version will be published on this page. Continued use of the website after changes means you accept the updated terms.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              For questions about these terms, email{" "}
              <a className="font-semibold text-accent" href={`mailto:${inquiryEmail}`}>
                {inquiryEmail}
              </a>{" "}
              or call {displayPhone}.
            </p>
          ),
        },
      ]}
    />
  );
}
