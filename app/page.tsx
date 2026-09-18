import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowRight,
  CircleCheck,
  Earth,
  HeartHandshake,
  HeartPulse,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Healthecy | Healthcare, Made Easier",
  },
  description:
    "From medical consultation and treatment coordination to rehabilitation, clinical nutrition, mental wellbeing and lifestyle support, Healthecy brings the right care together around your healthcare journey.",
};

const services = [
  {
    href: "/doctor-consultation",
    title: "Doctor Consultation",
    body: "Access and coordination for appropriate medical consultations based on your healthcare requirements.",
    icon: Stethoscope,
  },
  {
    href: "/physiotherapy-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    body: "Structured recovery support following surgery, injury, illness or medical treatment.",
    icon: Activity,
  },
  {
    href: "/clinical-nutrition",
    title: "Clinical Nutrition",
    body: "Evidence-based nutrition and dietetic support tailored to individual needs.",
    icon: Apple,
  },
  {
    href: "/mental-health-support",
    title: "Mental Health Support",
    body: "Professional support for mental and emotional wellbeing as part of your health journey.",
    icon: HeartPulse,
  },
  {
    href: "/lifestyle-coaching",
    title: "Lifestyle Coaching",
    body: "Practical guidance for healthier routines, sustainable habits and long-term wellbeing.",
    icon: Sparkles,
  },
  {
    href: "/international-patients",
    title: "International Patient Support",
    body: "Healthcare journey coordination for people travelling to India for medical treatment.",
    icon: Earth,
  },
];

const steps = [
  ["01", "Tell Us What You Need", "Share your healthcare requirement with our care team."],
  ["02", "We Understand Your Journey", "We understand your needs and identify appropriate support."],
  ["03", "We Coordinate Your Care", "We help coordinate relevant healthcare professionals and services."],
  ["04", "We Support Your Recovery", "We stay focused on continuity, rehabilitation, wellbeing and recovery."],
];

const philosophy = [
  ["Patient-centred", "Care designed around the individual and the journey ahead."],
  ["Connected", "Different services brought together with a clear point of support."],
  ["Professional", "Appropriate healthcare professionals and clinical partners, coordinated responsibly."],
  ["Continuous", "Support that can extend beyond a single consultation."],
  ["Accessible", "A simpler way to navigate healthcare services."],
  ["International", "Guidance for patients travelling to India for medical treatment."],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-[32rem] w-[32rem] rounded-full bg-secondary blur-3xl lg:block" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-bold text-primary">
              <HeartHandshake size={16} className="text-accent" />
              Connected healthcare support
            </p>
            <h1 className="mt-6 max-w-xl whitespace-pre-line text-5xl font-extrabold leading-[1.02] tracking-[-0.065em] text-primary sm:text-6xl lg:text-7xl">
              Healthcare, made easier.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              From medical consultation and treatment coordination to rehabilitation, clinical nutrition, mental wellbeing and lifestyle support, Healthecy brings the right care together around your healthcare journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 py-6 text-sm font-bold text-primary-foreground"
              >
                Talk to Healthecy
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-full border border-primary bg-background px-6 py-6 text-sm font-bold text-primary hover:bg-secondary"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/hero.jpg"
              alt="Patient receiving thoughtful healthcare support at home"
              className="aspect-[1.15/1] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute bottom-5 left-5 max-w-[230px] rounded-2xl border border-border bg-card p-4 shadow-lg">
              <p className="text-sm font-bold text-primary">Your care, connected</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Consultation, recovery and wellbeing support in one clearer journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">A connected approach</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-primary sm:text-5xl">
              One healthcare journey. Connected support.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Healthcare rarely happens in one appointment. Your needs can change from consultation and treatment to recovery, nutrition, wellbeing and everyday routines. Healthecy helps bring the right support together around you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["Built around your needs", "Support shaped around your healthcare journey, not a one-size-fits-all pathway."],
              ["Connected by design", "Relevant services and professionals coordinated with clarity and care."],
              ["Focused on continuity", "Practical support that can continue beyond a single consultation."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6">
                <CircleCheck size={21} className="text-accent" />
                <h3 className="mt-8 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-accent">Our services</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
              Care that meets you where you are.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.href} className="group rounded-[1.5rem] border border-border bg-card p-7 transition-transform hover:-translate-y-1">
                <item.icon size={25} className="text-accent" />
                <h3 className="mt-10 text-2xl font-bold tracking-[-0.03em] text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.body}</p>
                <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent">
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">Physiotherapy & rehabilitation</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
              Recovery doesn&apos;t end when treatment ends.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground">
              After surgery, injury, hospitalisation or medical treatment, recovery can need structured support. Healthecy works alongside your medical care through physiotherapy, clinical nutrition, lifestyle guidance and wellbeing support where appropriate.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Consultation", "Treatment", "Rehabilitation", "Nutrition", "Wellbeing", "Recovery"].map((label) => (
                <span key={label} className="rounded-full border border-primary-foreground px-3 py-2 text-sm font-semibold">
                  {label}
                </span>
              ))}
            </div>
            <Link
              href="/physiotherapy-rehabilitation"
              className="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-accent px-6 py-6 text-sm font-bold text-accent-foreground"
            >
              Explore Rehabilitation
              <ArrowRight size={17} />
            </Link>
          </div>
          <img
            src="/images/doctor.jpg"
            alt="Doctor consulting with a patient about their care plan"
            className="aspect-[1.2/1] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-secondary p-8 sm:p-12 lg:p-16">
          <p className="text-sm font-bold text-accent">For doctors and healthcare professionals</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
            Helping extend care beyond the consultation room.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Doctors and healthcare professionals can refer appropriate patients to Healthecy for physiotherapy, rehabilitation, clinical nutrition, mental wellbeing, lifestyle support and continuity-of-care assistance. Healthecy complements—not replaces—the referring clinician&apos;s medical care.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Doctor / Hospital", "Patient Referral", "Healthecy", "Specialist Support", "Progress", "Recovery"].map(
              (label) => (
                <span key={label} className="rounded-full bg-card px-3 py-2 text-sm font-semibold text-primary">
                  {label}
                </span>
              ),
            )}
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary bg-background px-6 py-6 text-sm font-bold text-primary hover:bg-card"
          >
            Discuss a Patient Referral
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-accent">International patients</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-primary sm:text-5xl">
              Coming to India for treatment? We&apos;ll help make the journey easier.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From medical coordination and travel support to treatment, rehabilitation and recovery, Healthecy helps international patients navigate their healthcare journey in India.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Your Country",
              "Medical Coordination",
              "Travel",
              "Stay",
              "Consultation",
              "Treatment",
              "Rehabilitation",
              "Recovery",
              "Follow-up",
            ].map((label, index) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold text-primary">{label}</span>
              </div>
            ))}
          </div>
          <Link
            href="/international-patients"
            className="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 py-6 text-sm font-bold text-primary-foreground"
          >
            Plan Your Care in India
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold text-accent">How it works</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
                A clearer way to move forward.
              </h2>
            </div>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">
              Start Your Care Journey
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([num, title, body]) => (
              <article key={num} className="border-t-2 border-accent pt-5">
                <span className="text-sm font-bold text-accent">{num}</span>
                <h3 className="mt-6 text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold text-accent">Our philosophy</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">Why Healthecy</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-secondary p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.05em] text-primary sm:text-5xl">
              You don&apos;t have to figure it all out alone.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Start with a conversation. We’ll help you understand the next step in your healthcare journey.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-6 text-sm font-bold text-primary-foreground"
          >
            Talk to Healthecy
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
