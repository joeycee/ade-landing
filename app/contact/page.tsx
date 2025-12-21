// app/contact/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          size: "invisible";
        }
      ) => number;
      execute: (widgetId: number) => void;
      reset: (widgetId: number) => void;
    };
  }
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const formDataRef = useRef<{
    name: string;
    email: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (widgetIdRef.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const onRecaptchaLoad = () => {
    if (!RECAPTCHA_SITE_KEY) {
      setError("reCAPTCHA is not configured.");
      return;
    }
    if (!window.grecaptcha) {
      setError("reCAPTCHA failed to load.");
      return;
    }
    if (!recaptchaRef.current) {
      setError("reCAPTCHA container not found.");
      return;
    }

    window.grecaptcha.ready(() => {
      if (!window.grecaptcha || !recaptchaRef.current) return;

      try {
        // Render invisible widget explicitly
        widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: handleRecaptchaCallback,
          size: "invisible",
        });

        setRecaptchaReady(true);
      } catch (e) {
        console.error("reCAPTCHA render error:", e);
        setError("Failed to initialize reCAPTCHA.");
      }
    });
  };

  const handleRecaptchaCallback = async (token: string) => {
    const payload = formDataRef.current;

    if (!payload) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          recaptchaToken: token,
        }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {
        // ignore
      }

      if (res.ok && data?.success) {
        setSent(true);
        setError("");

        const form = document.querySelector("form") as HTMLFormElement | null;
        form?.reset();
      } else {
        setError(data?.error || data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
      formDataRef.current = null;

      // Reset reCAPTCHA for next submission
      if (widgetIdRef.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch {
          // ignore
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSent(false);

    if (!RECAPTCHA_SITE_KEY) {
      setError("reCAPTCHA is not configured.");
      return;
    }

    if (!recaptchaReady || !window.grecaptcha || widgetIdRef.current === null) {
      setError("Please wait for reCAPTCHA to load.");
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    formDataRef.current = { name, email, message };

    try {
      window.greccaptcha?.execute(widgetIdRef.current); // (typo guard, won't run)
      window.grecaptcha.execute(widgetIdRef.current);
    } catch (err) {
      console.error("reCAPTCHA execute error:", err);
      setError("reCAPTCHA error. Please refresh and try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Load reCAPTCHA v2 script with explicit render */}
      {RECAPTCHA_SITE_KEY ? (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={onRecaptchaLoad}
        />
      ) : null}

      <div className="max-w-xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-3">Contact us</h1>
        <p className="text-sm text-slate-600 mb-8">
          Questions, feedback or ideas? Flick us a message and we&apos;ll come back to you.
        </p>

        {sent && (
          <div
            className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg"
            role="alert"
          >
            <p className="text-sm font-semibold text-emerald-700">
              ✓ Message sent! We&apos;ll get back to you shortly.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Your email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message"
              rows={5}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-y"
            />
          </div>

          {/* Invisible reCAPTCHA container */}
          <div
            id="recaptcha-container"
            ref={recaptchaRef}
            className="h-0 overflow-hidden"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={loading || !recaptchaReady}
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          <p className="mt-2 text-[11px] text-slate-400 text-center">
            Protected by reCAPTCHA. Google&apos;s{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-600"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-600"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>
    </main>
  );
}
