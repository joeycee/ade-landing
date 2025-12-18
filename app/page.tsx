import Link from "next/link";

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
      <div className="absolute top-40 -left-24 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-3xl" />
      <div className="absolute top-60 -right-28 h-[520px] w-[520px] rounded-full bg-black/[0.04] blur-3xl" />
    </div>
  );
}

function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium backdrop-blur",
        dark
          ? "border border-white/15 bg-white/10 text-white/85"
          : "border border-black/10 bg-white/70 text-black/70",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function Icon({
  name,
}: {
  name:
    | "bolt"
    | "shield"
    | "doc"
    | "spark"
    | "clock"
    | "link"
    | "chart"
    | "wand"
    | "check"
    | "gift";
}) {
  const common = "h-5 w-5";
  switch (name) {
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 20 6v7c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "doc":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M7 3h7l3 3v15H7V3Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M9 12h6M9 16h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l1.3 5.2L18 9l-4.7 1.8L12 16l-1.3-5.2L6 9l4.7-1.8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 13l.8 3 3 1-3 1-.8 3-.8-3-3-1 3-1 .8-3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 7v6l4 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "link":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M8 16v-6M12 16V7M16 16v-9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "wand":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path d="M4 20 16.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M15 6l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M19 4l.8 2.2L22 7l-2.2.8L19 10l-.8-2.2L16 7l2.2-.8L19 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "gift":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12v9H4v-9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M22 7H2v5h20V7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M12 7v14" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 7c-1.6 0-3-1.2-3-2.7S10.4 2 12 4c1.6-2 3-.8 3 .3S13.6 7 12 7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-black/10 bg-black/[0.02] p-2 text-[#051947]">
          <Icon name={icon} />
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <p className="mt-2 text-sm text-black/60">{desc}</p>
        </div>
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
      <div className="text-2xl font-semibold tracking-tight text-white">{v}</div>
      <div className="mt-1 text-xs text-white/70">{k}</div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}

export default function Home() {
  // For now: static “spots left”
  // Later: we can fetch this from your API and show real-time.
  

  return (
    <main className="relative">
      <Glow />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#051947]">
        <div className="absolute inset-0 ade-hero-grid opacity-100" />
        <div className="absolute inset-0 ade-hero-sheen" />
        <div className="absolute inset-0 ade-hero-vignette" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="flex flex-col items-start gap-6">
            {/* Launch offer pill */}
            <div className="flex flex-wrap items-center gap-2">
              <Pill dark>
                <span className="h-2 w-2 rounded-full bg-white/80" />
                Built for tradies • quotes → invoices → PDFs
              </Pill>

              <Pill dark>
                <Icon name="gift" />
                Launch offer: <span className="font-semibold text-white">Free for the first 30 customers</span>
              </Pill>

              
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
              Quoting that looks premium.
              <span className="block text-white/75">Sent in minutes.</span>
            </h1>

            <p className="max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              Ade helps you create clean, professional quotes and invoices with beautiful PDFs and a modern workflow—so you can
              win jobs, get paid faster, and spend less time in admin.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Primary CTA becomes “claim free spot” */}
              <a
                href="https://app.ade.co.nz"
                className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#051947] hover:bg-white/90 transition"
              >
                Claim a free spot
              </a>

              <a
                href="#pricing"
                className="inline-flex justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition backdrop-blur"
              >
                See pricing
              </a>
            </div>

            <div className="text-sm text-white/70">
              No lock-in. If you’re one of the first 30, you’re free while we launch.
            </div>

            {/* hero stats */}
            <div className="mt-3 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              <MiniStat k="From quote to PDF" v="~60s" />
              <MiniStat k="Client-ready layouts" v="A+ PDFs" />
              <MiniStat k="Workflow" v="Simple" />
            </div>

            {/* product visual row */}
            <div className="mt-10 w-full">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-2 text-white">
                    <span className="rounded-xl bg-white/10 p-2">
                      <Icon name="wand" />
                    </span>
                    <div className="text-sm font-semibold">Feels like you run a bigger operation</div>
                  </div>

                  <p className="mt-3 text-sm text-white/70">
                    Clients judge quality fast. Ade makes your quoting feel confident, consistent, and trustworthy.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="text-xs text-white/70">Templates</div>
                      <div className="mt-1 text-sm font-semibold text-white">Clean & branded</div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="text-xs text-white/70">On-site</div>
                      <div className="mt-1 text-sm font-semibold text-white">Mobile friendly</div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="text-xs text-white/70">Clarity</div>
                      <div className="mt-1 text-sm font-semibold text-white">GST + totals</div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <div className="text-xs text-white/70">Speed</div>
                      <div className="mt-1 text-sm font-semibold text-white">Reuse items</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Pill dark>
                      <Icon name="doc" /> PDFs
                    </Pill>
                    <Pill dark>
                      <Icon name="link" /> Convert
                    </Pill>
                    <Pill dark>
                      <Icon name="bolt" /> Fast
                    </Pill>
                    <Pill dark>
                      <Icon name="shield" /> Reliable
                    </Pill>
                  </div>

                  {/* extra mini offer strip */}
                  <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="flex items-center gap-2 text-white">
                      <span className="rounded-xl bg-white/10 p-2">
                        <Icon name="gift" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold">Launch deal</div>
                        <div className="text-xs text-white/70">
                          First 30 customers get Ade free during launch.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* mock app window */}
                <div className="relative rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 px-2 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="ml-2 text-xs text-white/70">Ade • Quote Preview</div>
                  </div>

                  <div className="mt-2 rounded-2xl bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs text-black/50">Quote</div>
                        <div className="text-lg font-semibold tracking-tight text-[#051947]">
                          Jims Property Services
                        </div>
                        <div className="mt-1 text-xs text-black/50">
                          Client: Nadia • Job: Hedge Trim + Lawn
                        </div>
                      </div>

                      <div className="rounded-xl bg-black/5 px-3 py-2 text-xs text-black/60 whitespace-nowrap">
                        Total: <span className="font-semibold text-black">$1,240</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2">
                        <div className="text-sm font-medium">Lawn Mow</div>
                        <div className="text-sm text-black/60">$280</div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2">
                        <div className="text-sm font-medium">Hedge Trim</div>
                        <div className="text-sm text-black/60">$720</div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-black/10 px-3 py-2">
                        <div className="text-sm font-medium">Travel + Waste</div>
                        <div className="text-sm text-black/60">$240</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-black/50">GST included</div>
                      <div className="flex gap-2">
                        <div className="rounded-lg bg-[#051947] px-3 py-2 text-xs font-semibold text-white">
                          Generate PDF
                        </div>
                        <div className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-black/70">
                          Convert to invoice
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[#F6F8FC]" />
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF */}
      <section className="mx-auto max-w-6xl px-4 mt-16">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-b from-black/[0.02] to-transparent p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-sm font-semibold">Designed to feel trustworthy</div>
              <p className="mt-2 text-sm text-black/60 max-w-2xl">
                Clients decide fast. A clean quote layout signals professionalism before you’ve even arrived on site.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill>Clean branding</Pill>
              <Pill>Clear totals</Pill>
              <Pill>GST-ready</Pill>
              <Pill>Instant PDFs</Pill>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Everything you need. Nothing you don’t.
            </h2>
            <p className="mt-2 text-sm md:text-base text-black/60 max-w-2xl">
              Ade stays fast by keeping your workflow simple: create, send, track, and invoice.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard icon="doc" title="Pro PDFs that close" desc="Clean templates that look trustworthy instantly." />
          <FeatureCard icon="bolt" title="Fast quoting on-site" desc="Build and send quotes while you’re still there." />
          <FeatureCard icon="clock" title="Less back-and-forth" desc="Clear line items and totals so clients say yes." />
          <FeatureCard icon="link" title="Quote → invoice in a click" desc="Convert approved work without duplicating." />
          <FeatureCard icon="chart" title="Cleaner pricing" desc="Reuse items and keep pricing consistent." />
          <FeatureCard icon="shield" title="Modern foundation" desc="Built to grow into payments, teams, and automation." />
        </div>
      </section>

      <Divider />

      {/* HOW IT WORKS */}
      <section id="how" className="relative overflow-hidden bg-[#051947] py-16">
        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
              <p className="mt-2 text-sm md:text-base text-black/60 max-w-2xl">
                The simplest workflow that still feels premium.
              </p>
            </div>
            <Pill>
              <Icon name="bolt" /> Done while on-site
            </Pill>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { step: "STEP 01", title: "Create the quote", desc: "Add the job details and items." },
              { step: "STEP 02", title: "Send the PDF", desc: "Generate a clean PDF instantly." },
              { step: "STEP 03", title: "Convert to invoice", desc: "Approved? Convert and get paid faster." },
            ].map((x) => (
              <div key={x.step} className="rounded-2xl border border-black/10 p-6">
                <div className="text-xs font-semibold text-black/60">{x.step}</div>
                <div className="mt-2 text-sm font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-black/60">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-black/10 bg-white p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-[#051947]">Launch offer</div>
              <div className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
                Free for the first 30 customers
              </div>
              <p className="mt-2 text-sm text-black/60 max-w-2xl">
                We’re onboarding a small group to perfect the product. Grab a free spot while they last.
              </p>
            </div>

            <a
              href="https://app.ade.co.nz"
              className="inline-flex justify-center rounded-xl bg-[#051947] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
            >
              Claim a free spot
            </a>
          </div>
        </div>

        {/* <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <div className="text-sm font-semibold">Launch</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight text-[#051947]">$0</div>
            <div className="mt-1 text-sm text-black/60">First 30 customers</div>
            <ul className="mt-6 space-y-2 text-sm text-black/70">
              <li>• Quotes & invoices</li>
              <li>• PDF export</li>
              <li>• Onboarding support</li>
              <li>• You help shape the roadmap</li>
            </ul>
            <a
              href="https://app.ade.co.nz"
              className="mt-7 inline-flex w-full justify-center rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/5 transition"
            >
              Get the free deal
            </a>
          </div>

          <div className="rounded-3xl border border-black bg-black p-7 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Pro</div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                After launch
              </span>
            </div>
            <div className="mt-2 text-4xl font-semibold tracking-tight">$29</div>
            <div className="mt-1 text-sm text-white/70">Per month, per business</div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Everything in Launch</li>
              <li>• Advanced templates</li>
              <li>• Better item reuse</li>
              <li>• Priority support</li>
            </ul>
            <a
              href="https://app.ade.co.nz"
              className="mt-7 inline-flex w-full justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
            >
              Start Pro
            </a>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <div className="text-sm font-semibold">Team</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight">$79</div>
            <div className="mt-1 text-sm text-black/60">For crews & admin support</div>
            <ul className="mt-6 space-y-2 text-sm text-black/70">
              <li>• Multi-user access</li>
              <li>• Roles & permissions (roadmap)</li>
              <li>• Shared pricing library</li>
              <li>• Onboarding help</li>
            </ul>
            <a
              href="mailto:enquiries@ade.co.nz?subject=Ade%20Team%20plan"
              className="mt-7 inline-flex w-full justify-center rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/5 transition"
            >
              Talk to us
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-black/50">
          Pricing is placeholder — we’ll set final plans when you’re ready.
        </p> */}
      </section>

      <Divider />

      {/* FAQ + CTA */}
      <section id="faq" className="relative overflow-hidden bg-[#051947] py-16">
        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
              <p className="mt-2 text-sm md:text-base text-black/60 max-w-2xl">
                Quick answers. Want onboarding help? Email us.
              </p>
            </div>
            <Pill>
              <Icon name="shield" /> Built to be simple
            </Pill>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "What does 'free for the first 30' mean?",
                a: "If you’re one of the first 30 customers, you’ll get access free during launch while we refine the product together.",
              },
              {
                q: "Can I use Ade on my phone?",
                a: "Yep. It’s built for modern browsers—quote on-site, send the PDF immediately.",
              },
              {
                q: "Does it handle GST?",
                a: "Yes—clean subtotals, GST, totals, and consistent invoice formatting.",
              },
              {
                q: "Is this separate from my app?",
                a: "Yes. This is the public site. The app sits on a separate subdomain for clarity and security.",
              },
            ].map((x) => (
              <div key={x.q} className="rounded-2xl border border-black/10 p-6">
                <div className="text-sm font-semibold">{x.q}</div>
                <p className="mt-2 text-sm text-black/60">{x.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-black/10 p-6 bg-gradient-to-b from-black/[0.02] to-transparent">
            <div>
              <div className="text-sm font-semibold">Want one of the free spots?</div>
              <div className="mt-1 text-sm text-black/60">
                Claim a spot now, or email us for onboarding.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.ade.co.nz"
                className="inline-flex justify-center rounded-xl bg-[#051947] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
              >
                Claim a free spot
              </a>
              <a
                href="mailto:enquiries@ade.co.nz?subject=Ade%20free%20spot"
                className="inline-flex justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5 transition"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </main>
  );
}
