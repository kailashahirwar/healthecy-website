import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { displayEmail, displayPhone, inquiryEmail, phoneHref } from "@/lib/site-contact";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Healthecy home">
              <img
                src="/images/logo.png"
                alt="Healthecy"
                className="block h-auto max-h-12 w-auto max-w-full self-center object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xs text-lg font-semibold leading-8">Healthcare, made easier.</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground">
              A Welsphere Global Private Limited healthcare brand.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold">Explore</h2>
            <nav aria-label="Footer explore links" className="mt-4 flex flex-col gap-3 text-sm">
              <Link className="hover:text-accent" href="/services">
                Services
              </Link>
              <Link className="hover:text-accent" href="/international-patients">
                International Patients
              </Link>
              <Link className="hover:text-accent" href="/how-it-works">
                How It Works
              </Link>
              <Link className="hover:text-accent" href="/about">
                About Us
              </Link>
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-bold">Support</h2>
            <nav aria-label="Footer support links" className="mt-4 flex flex-col gap-3 text-sm">
              <Link className="hover:text-accent" href="/contact">
                Contact
              </Link>
              <Link className="hover:text-accent" href="/faq">
                FAQs
              </Link>
              <Link className="hover:text-accent" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="hover:text-accent" href="/terms">
                Terms & Conditions
              </Link>
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-bold">Talk to Healthecy</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href={`mailto:${inquiryEmail}`} className="flex items-center gap-2 hover:text-accent">
                <Mail size={16} />
                {inquiryEmail}
              </a>
              <a href={`mailto:${displayEmail}`} className="flex items-center gap-2 hover:text-accent">
                <Mail size={16} />
                {displayEmail}
              </a>
              <a href={phoneHref} className="flex items-center gap-2 hover:text-accent">
                <Phone size={16} />
                {displayPhone}
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="Healthecy on LinkedIn"
                className="rounded-full border border-primary-foreground p-2 hover:bg-primary-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Healthecy on Instagram"
                className="rounded-full border border-primary-foreground p-2 hover:bg-primary-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground pt-6 text-sm">
          © 2026 Welsphere Global Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
