import type { Metadata } from "next";
import { CircleCheck, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-chrome";
import { displayEmail, displayPhone, inquiryEmail, phoneHref } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Contact Healthecy",
  description:
    "Tell us what you need. Our team will help you understand an appropriate next step for your healthcare journey.",
};

const nextSteps = [
  ["We review your enquiry", "We start by understanding the support you are looking for and any relevant care context."],
  ["We help clarify the next step", "Where appropriate, we can help identify relevant consultation, recovery or support pathways."],
  ["Your treating team remains central", "Medical decisions and treatment remain with appropriately qualified healthcare professionals."],
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Talk to Healthecy"
        title="Let’s make your next healthcare step easier."
        body="Tell us what you need. Our team will help you understand an appropriate next step for your healthcare journey."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <ContactForm />
          <aside className="rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-10">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em]">Contact details</h2>
            <div className="mt-8 flex flex-col gap-6 text-base">
              <a href={`mailto:${inquiryEmail}`} className="flex items-start gap-4 hover:text-accent">
                <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
                <span>{inquiryEmail}</span>
              </a>
              <a href={`mailto:${displayEmail}`} className="flex items-start gap-4 hover:text-accent">
                <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
                <span>{displayEmail}</span>
              </a>
              <a href={phoneHref} className="flex items-start gap-4 hover:text-accent">
                <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
                <span>{displayPhone}</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                <span>India</span>
              </div>
            </div>
            <p className="mt-10 border-t border-primary-foreground pt-6 text-sm leading-6">
              For international patients, you can share your country of residence, treatment requirement and preferred city in India. We will guide you through the next steps.
            </p>
          </aside>
        </div>
      </section>
      <section className="bg-secondary px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold text-accent">Support with clarity</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">What happens next?</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {nextSteps.map(([title, body]) => (
              <article key={title} className="rounded-2xl bg-card p-7">
                <CircleCheck size={22} className="text-accent" />
                <h3 className="mt-7 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
