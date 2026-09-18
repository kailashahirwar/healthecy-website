"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["International Patients", "/international-patients"],
  ["How It Works", "/how-it-works"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Healthecy home">
          <img src="/images/logo.png" alt="Healthecy" className="block h-auto max-h-10 w-auto max-w-full self-center object-contain" />
          <span className="hidden border-l border-border pl-3 text-xs font-semibold text-muted-foreground sm:block">
            Healthcare, made easier.
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-secondary hover:text-primary ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Talk To Us
          </Link>
          <button
            type="button"
            className="rounded-full border border-border p-2.5 text-primary lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl px-4 py-3 text-lg font-semibold text-primary hover:bg-secondary"
              >
                {label}
              </Link>
            ))}
            <Link href="/faq" className="rounded-2xl px-4 py-3 text-lg font-semibold text-primary hover:bg-secondary">
              FAQs
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
