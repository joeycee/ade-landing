import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">
                A
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">Ade</div>
                <div className="text-xs text-black/60">Quotes • Invoices • PDFs</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-black/60 max-w-sm">
              A modern quoting platform for tradies who want clean workflows, fast PDFs,
              and fewer admin headaches.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-semibold">Product</div>
              <ul className="mt-3 space-y-2 text-sm text-black/60">
                <li><a href="#features" className="hover:text-black">Features</a></li>
                <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
                <li><a href="#faq" className="hover:text-black">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-black/60">
                <li>
                  <a href="mailto:enquiries@ade.co.nz" className="hover:text-black">
                    enquiries@ade.co.nz
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-black">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-black">Terms</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 p-5 bg-gradient-to-b from-black/[0.02] to-transparent">
            <div className="text-sm font-semibold">Get early access</div>
            <p className="mt-2 text-sm text-black/60">
              Want Ade tailored to your workflow? Tell us your trade and we’ll onboard you.
            </p>
            <a
              href="mailto:hello@ade.co.nz?subject=Ade%20early%20access"
              className="mt-4 inline-flex w-full justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 transition"
            >
              Request access
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-black/50">
          <div>© {new Date().getFullYear()} Ade. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Built in NZ</span>
            <span className="hidden md:inline">•</span>
            <span>Fast PDFs, clean UX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
