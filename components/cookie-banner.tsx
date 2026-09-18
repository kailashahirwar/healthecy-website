"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "healthecy-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card px-5 py-4 shadow-lg lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="mb-1 text-sm font-semibold text-[#0a0a0a]">Cookie Consent</p>
          <p className="text-sm text-muted-foreground">
            We serve cookies. We use tools, such as cookies, to enable essential services and functionality on our site and to collect data on how visitors interact with our site, products and services. By clicking Accept, you agree to our use of these tools for advertising, analytics and support. Read our{" "}
            <a href="/privacy" className="font-semibold text-primary underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-primary"
            onClick={() => choose("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            onClick={() => choose("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
