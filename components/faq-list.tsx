"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is Healthecy?",
    a: "Healthecy is a healthcare coordination and patient-support brand from Welsphere Global Private Limited. We help bring appropriate consultation coordination, rehabilitation, clinical nutrition, mental wellbeing and lifestyle support together around an individual’s healthcare journey.",
  },
  {
    q: "What services does Healthecy provide?",
    a: "Healthecy supports doctor consultation coordination, physiotherapy and rehabilitation, clinical nutrition, mental health support, lifestyle coaching and international patient assistance for people travelling to India for medical treatment.",
  },
  {
    q: "How does physiotherapy and rehabilitation work?",
    a: "Rehabilitation support is shaped around your needs after surgery, injury, illness, hospitalisation or medical treatment. Where appropriate, the journey can include assessment, goal setting, guided physiotherapy, progress monitoring and support for functional recovery.",
  },
  {
    q: "Can I be referred by my doctor?",
    a: "Yes. Doctors, hospitals and healthcare professionals can refer appropriate patients to Healthecy for ongoing support such as rehabilitation, physiotherapy, clinical nutrition, mental wellbeing and lifestyle guidance. Healthecy complements the referring clinician’s medical care.",
  },
  {
    q: "Do you provide clinical nutrition support?",
    a: "Yes. Healthecy can help coordinate evidence-based clinical nutrition and dietetic support for medical nutrition, recovery nutrition, post-surgical needs, digestive-health nutrition and lifestyle-related nutrition needs where clinically appropriate.",
  },
  {
    q: "Can international patients use Healthecy?",
    a: "Yes. Healthecy supports people travelling to India for medical treatment by helping coordinate and facilitate their healthcare journey before travel, during treatment, through recovery and follow-up where appropriate.",
  },
  {
    q: "Can Healthecy help coordinate treatment in India?",
    a: "Healthecy can help coordinate access to appropriate healthcare professionals and clinical partners, support medical document coordination and help patients navigate the treatment journey. We do not guarantee doctor availability, hospital admission or treatment outcomes.",
  },
  {
    q: "Can you help with accommodation and travel arrangements?",
    a: "For international patients, Healthecy may provide guidance and coordination support for travel, stay, local transportation and arrival arrangements where appropriate. Availability depends on the individual journey and requirements.",
  },
  {
    q: "How do I start?",
    a: "Start by contacting Healthecy and sharing a brief overview of your healthcare requirement. Our care team will help you understand the appropriate next step and the support that may be relevant to your journey.",
  },
];

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {faqs.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q} className="border-b border-border">
            <h3 className="flex">
              <button
                type="button"
                className="flex flex-1 items-center justify-between gap-5 py-6 text-left text-lg font-bold text-primary hover:no-underline"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.q}</span>
                <Plus size={20} className={`shrink-0 text-accent transition-transform ${open ? "rotate-45" : ""}`} />
              </button>
            </h3>
            {open ? <div className="overflow-hidden pb-6 text-sm leading-7 text-muted-foreground">{item.a}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
