"use client";

import { FormEvent, useState } from "react";
import { inquiryEmail } from "@/lib/site-contact";

const fieldClass =
  "h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-primary outline-none focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          location: data.get("location"),
          service: data.get("service"),
          message: data.get("message"),
          contactMethod: data.get("contact-method"),
        }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send enquiry.");
      }
      form.reset();
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send enquiry.");
    }
  }

  return (
    <>
      <form className="rounded-[2rem] border border-border bg-card p-7 shadow-sm sm:p-10" onSubmit={onSubmit}>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-primary">Start a conversation</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Enquiries are sent to {inquiryEmail}. Our care team will follow up with you.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-primary">
              Name
            </label>
            <input id="name" name="name" autoComplete="name" required className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-primary">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClass} />
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-medium text-primary">
              Country / City
            </label>
            <input id="location" name="location" className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="service" className="text-sm font-medium text-primary">
              Service required
            </label>
            <input id="service" name="service" placeholder="For example, rehabilitation" className={fieldClass} />
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-primary">
            Brief description
          </label>
          <textarea id="message" name="message" rows={6} required className={`${fieldClass} min-h-[80px] h-auto py-2`} />
        </div>
        <div className="mt-5 grid gap-2">
          <label htmlFor="contact-method" className="text-sm font-medium text-primary">
            Preferred contact method
          </label>
          <input id="contact-method" name="contact-method" placeholder="Phone or email" className={fieldClass} />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-7 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 py-6 text-sm font-bold text-primary-foreground disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Talk to Us"}
        </button>
        {status === "error" ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      </form>
      <div className={`toast text-sm${status === "success" ? " is-visible" : ""}`} role="status">
        {status === "success" ? "Thank you. Our care team will be in touch shortly." : ""}
      </div>
    </>
  );
}
