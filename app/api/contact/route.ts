import { inquiryEmail } from "@/lib/site-contact";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  service?: string;
  message?: string;
  contactMethod?: string;
};

function text(value: unknown, max = 500) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const name = text(body.name, 120);
  const phone = text(body.phone, 40);
  const email = text(body.email, 120);
  const location = text(body.location, 120);
  const service = text(body.service, 120);
  const message = text(body.message, 4000);
  const contactMethod = text(body.contactMethod, 80);

  if (!name || !phone || !email || !message) {
    return Response.json({ ok: false, message: "Please complete the required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const destination = process.env.CONTACT_INBOX || inquiryEmail;
  const payload = {
    _subject: `New Healthecy enquiry from ${name}`,
    _template: "table",
    _captcha: "false",
    name,
    phone,
    email,
    location: location || "Not provided",
    service: service || "Not specified",
    message,
    preferred_contact_method: contactMethod || "Not specified",
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destination)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`FormSubmit responded with ${response.status}`);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return Response.json(
      { ok: false, message: "We could not send your enquiry. Please email us directly." },
      { status: 502 },
    );
  }
}
