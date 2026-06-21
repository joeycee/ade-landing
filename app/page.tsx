"use client";
import { useEffect, useRef, useState } from "react";

/* ─── GLOW / BG ─────────────────────────────────────── */
function HeroGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />
      <div className="absolute top-60 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="absolute top-80 -right-32 h-[600px] w-[600px] rounded-full bg-cyan-400/8 blur-[120px]" />
    </div>
  );
}

/* ─── ANIMATED COUNTER ───────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil(to / 40);
        if (start >= to) { setVal(to); return; }
        setVal(start);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── ICONS ──────────────────────────────────────────── */
type IconName = "bolt"|"shield"|"doc"|"spark"|"clock"|"link"|"chart"|"wand"|"check"|"gift"|"mail"|"receipt"|"gst"|"template"|"auto"|"arrow";
function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  switch (name) {
    case "bolt": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
    case "shield": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 2 20 6v7c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8"/><path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "doc": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M7 3h7l3 3v15H7V3Z" stroke="currentColor" strokeWidth="1.8"/><path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8"/><path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "spark": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 2l1.3 5.2L18 9l-4.7 1.8L12 16l-1.3-5.2L6 9l4.7-1.8L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M19 13l.8 3 3 1-3 1-.8 3-.8-3-3-1 3-1 .8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>;
    case "clock": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "link": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "chart": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M8 16v-6M12 16V7M16 16v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "wand": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M4 20 16.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M15 6l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M19 4l.8 2.2L22 7l-2.2.8L19 10l-.8-2.2L16 7l2.2-.8L19 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>;
    case "check": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "gift": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M20 12v9H4v-9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M22 7H2v5h20V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 7v14" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7c-1.6 0-3-1.2-3-2.7S10.4 2 12 4c1.6-2 3-.8 3 .3S13.6 7 12 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>;
    case "mail": return <svg className={className} viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "receipt": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M4 2h16v20l-3-2-3 2-3-2-3 2-4-2V2Z" stroke="currentColor" strokeWidth="1.8"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "gst": return <svg className={className} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M8 7l8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2"/></svg>;
    case "template": return <svg className={className} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.8"/><path d="M9 9v12" stroke="currentColor" strokeWidth="1.8"/></svg>;
    case "auto": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
    case "arrow": return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
}

/* ─── PILL ───────────────────────────────────────────── */
function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={["inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur", dark ? "border border-white/15 bg-white/10 text-white/85" : "border border-black/10 bg-white/70 text-black/70"].join(" ")}>
      {children}
    </span>
  );
}

/* ─── FEATURE CARD ───────────────────────────────────── */
function FeatureCard({ icon, title, desc, accent }: { icon: IconName; title: string; desc: string; accent?: string }) {
  return (
    <div className="group relative rounded-2xl border border-black/10 bg-white p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,25,71,0.12)]">
      <div className={["absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl", accent || "bg-gradient-to-br from-[#051947]/3 to-transparent"].join(" ")} />
      <div className="relative flex items-start gap-4">
        <div className="shrink-0 rounded-xl border border-black/10 bg-gradient-to-br from-[#051947]/5 to-[#051947]/10 p-2.5 text-[#051947] group-hover:scale-110 transition-transform duration-300">
          <Icon name={icon} />
        </div>
        <div>
          <div className="text-sm font-semibold tracking-tight">{title}</div>
          <p className="mt-1.5 text-sm leading-relaxed text-black/55">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── STAT CARD ──────────────────────────────────────── */
function MiniStat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur hover:bg-white/15 transition-colors">
      <div className="text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-xs font-medium text-white/80">{label}</div>
      {sub && <div className="mt-0.5 text-xs text-white/50">{sub}</div>}
    </div>
  );
}

/* ─── DIVIDER ────────────────────────────────────────── */
function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="my-16 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}

/* ─── FLOATING BADGE ─────────────────────────────────── */
function FloatingBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={["absolute rounded-xl border border-white/20 bg-white/95 px-3 py-2 shadow-xl backdrop-blur text-xs font-medium text-[#051947] flex items-center gap-2", className].join(" ")}>
      {children}
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function Home() {
  const [spotsLeft] = useState(23);

  return (
    <main className="relative bg-[#F6F8FC]" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatAlt { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.2)} 50%{box-shadow:0 0 0 8px rgba(255,255,255,0)} }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes grid-scroll { 0%{background-position:0 0} 100%{background-position:60px 60px} }
        @keyframes sheen-slide { 0%{transform:translateX(-100%) rotate(20deg)} 100%{transform:translateX(300%) rotate(20deg)} }

        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.4s ease both; }
        .fade-up-5 { animation: fadeUp 0.7s 0.5s ease both; }
        .float-1 { animation: float 5s ease-in-out infinite; }
        .float-2 { animation: floatAlt 6s ease-in-out infinite; }
        .float-3 { animation: float 7s 1s ease-in-out infinite; }

        /* ── Moving grid (matches original ade-hero-grid feel) ── */
        .hero-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: grid-scroll 6s linear infinite;
        }

        /* ── Diagonal sheen sweep ── */
        .hero-sheen::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%);
          animation: sheen-slide 8s ease-in-out infinite;
          pointer-events: none;
        }

        /* ── Radial vignette so grid fades at edges ── */
        .hero-vignette {
          background: radial-gradient(ellipse 80% 70% at 50% 0%, transparent 30%, rgba(5,25,71,0.85) 100%);
        }
        .shimmer-text {
          background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, white 40%, rgba(255,255,255,0.7) 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .ticker-wrap { overflow: hidden; }
        .ticker-inner { display: flex; width: max-content; animation: ticker 22s linear infinite; }

        .spot-dot { animation: pulse-glow 2s ease infinite; }

        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-3px); }

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 16px;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 17px;
          background: linear-gradient(135deg, rgba(5,25,71,0.2), rgba(100,150,255,0.2), rgba(5,25,71,0.1));
          z-index: -1;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#051947] min-h-[100svh] flex flex-col">
        {/* animated moving grid */}
        <div className="hero-grid absolute inset-0" />
        {/* diagonal sheen sweep */}
        <div className="hero-sheen absolute inset-0 overflow-hidden" />
        {/* edge vignette so grid fades naturally */}
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <HeroGlow />

        <div className="relative mx-auto w-full max-w-6xl px-4 pt-16 pb-20 md:pt-24 flex-1 flex flex-col justify-center">

          {/* top badges */}
          <div className="flex flex-wrap items-center gap-2 fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
              <span className="spot-dot h-2 w-2 rounded-full bg-emerald-400" />
              {spotsLeft} free spots remaining
            </span>
            <Pill dark>
              <Icon name="bolt" className="h-3.5 w-3.5" /> Built for NZ tradies
            </Pill>
          </div>

          {/* headline */}
          <div className="mt-8 max-w-4xl fade-up-1">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              <span className="text-white">Quote. Invoice.</span>
              <br />
              <span className="shimmer-text">Get paid.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed fade-up-2">
              Ade gives tradies a proper back-office — beautiful PDFs, auto-sent quotes, GST reporting, and receipt scanning — so you spend your time on the tools, not the paperwork.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 fade-up-3">
            <a href="https://app.ade.co.nz" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#051947] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Claim your free spot
              <Icon name="arrow" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/12 transition backdrop-blur">
              See what's included
            </a>
          </div>
          <p className="mt-3 text-xs text-white/40 fade-up-3">No lock-in. Free during launch while we build alongside you.</p>

          {/* stats row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 fade-up-4">
            <MiniStat value="~60s" label="Quote to PDF" sub="While you're still on-site" />
            <MiniStat value="15%" label="Avg. win rate lift" sub="Clean quotes close faster" />
            <MiniStat value="100%" label="GST-ready" sub="Proper NZ tax formatting" />
            <MiniStat value="0" label="Hours in admin" sub="That's the goal" />
          </div>

          {/* mock app + notification toasts */}
          <div className="mt-16 fade-up-5 flex flex-col lg:flex-row gap-4 items-start">

            {/* app window */}
            <div className="relative rounded-3xl border border-white/15 bg-white/8 p-5 backdrop-blur w-full lg:max-w-xl">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <div className="ml-3 text-xs text-white/40 font-mono">ade.co.nz/quotes/Q-00412</div>
                <div className="ml-auto text-xs text-emerald-400 font-medium">● Live</div>
              </div>
              <div className="mt-4 rounded-2xl bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-black/40 font-mono">Quote #Q-00412</div>
                    <div className="mt-1 text-xl font-semibold tracking-tight text-[#051947]">Stonework & Paving</div>
                    <div className="mt-1 text-xs text-black/50">Client: Mark Holloway · Due: 14 Mar 2026</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-black/40">Total incl. GST</div>
                    <div className="text-2xl font-semibold text-[#051947]">$4,830</div>
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                  {[["Concrete paving (18m²)","$2,160"],["Labour (2 days)","$1,600"],["Materials & freight","$640"],["GST (15%)","$630"]].map(([l,v]) => (
                    <div key={l} className="flex justify-between rounded-lg border border-black/6 px-3 py-2 text-sm">
                      <span className="text-black/70">{l}</span>
                      <span className="font-medium text-black">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <button className="rounded-lg bg-[#051947] px-4 py-2 text-xs font-semibold text-white">Generate PDF</button>
                  <button className="rounded-lg border border-black/10 px-4 py-2 text-xs font-semibold text-black/70">Convert to invoice</button>
                  <button className="rounded-lg border border-black/10 px-4 py-2 text-xs font-semibold text-black/70">Auto-send</button>
                </div>
              </div>
            </div>

            {/* notification toasts — tidy stacked column */}
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-2.5 lg:pt-6 w-full lg:w-auto">
              <div className="float-1 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex-1 lg:flex-none lg:w-56">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-400">
                  <Icon name="auto" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white leading-tight">Quote sent</div>
                  <div className="text-[11px] text-white/50 mt-0.5 truncate">Delivered to Mark Holloway</div>
                </div>
                <span className="ml-auto shrink-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/25" />
              </div>

              <div className="float-2 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex-1 lg:flex-none lg:w-56">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-400/15 text-blue-300">
                  <Icon name="receipt" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white leading-tight">Receipt filed</div>
                  <div className="text-[11px] text-white/50 mt-0.5 truncate">PlaceMakers · $438 · Q-00412</div>
                </div>
                <span className="ml-auto shrink-0 h-2 w-2 rounded-full bg-blue-400 ring-2 ring-blue-400/25" />
              </div>

              <div className="float-3 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex-1 lg:flex-none lg:w-56">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                  <Icon name="gst" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white leading-tight">GST report ready</div>
                  <div className="text-[11px] text-white/50 mt-0.5 truncate">Q1 2026 · IRD-ready</div>
                </div>
                <span className="ml-auto shrink-0 h-2 w-2 rounded-full bg-amber-400 ring-2 ring-amber-400/25" />
              </div>
            </div>

          </div>
        </div>

        {/* scroll nudge */}
        <div className="relative pb-8 flex justify-center">
          <div className="flex flex-col items-center gap-1 text-white/30 text-xs">
            <span>scroll</span>
            <div className="h-6 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="bg-[#051947]/95 border-y border-white/8 py-3 ticker-wrap">
        <div className="ticker-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              {["Professional PDFs","Auto-send quotes","GST reporting","Receipt parsing","Editable templates","Email templates","Quote → invoice","Mobile-ready","NZ GST-compliant","Clean line items"].map(item => (
                <span key={item} className="flex items-center gap-2 text-xs font-medium text-white/60 whitespace-nowrap">
                  <span className="text-white/30">◆</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── TRUST ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 mt-16">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-white to-white/60 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#051947]/60">Why it matters</div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">Clients decide before you open your mouth.</h2>
              <p className="mt-2 text-sm text-black/55 max-w-xl">
                A clean quote layout signals you run a tight operation. Ade makes sure your paperwork matches the quality of your work.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Clean branding</Pill>
              <Pill><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Clear totals</Pill>
              <Pill><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />GST-ready</Pill>
              <Pill><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Instant PDFs</Pill>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section id="features" className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#051947]/50">Features</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Everything a tradie needs.<br />
            <span className="text-black/40">Nothing they don't.</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-black/55 leading-relaxed">
            From your first quote to your annual GST return — Ade has it covered.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <FeatureCard icon="doc" title="Pro PDFs that close jobs" desc="Branded, clean templates that look expensive. Clients see quality instantly." />
          <FeatureCard icon="auto" title="Auto-send quotes" desc="Set it and forget it — quotes fire automatically when a job is created. No more copy-pasting emails." />
          <FeatureCard icon="mail" title="Email templates" desc="Craft once, send forever. Your follow-up emails look professional every single time." />
          <FeatureCard icon="template" title="Editable PDF templates" desc="Your branding, your layout. Adjust colours, fonts and content blocks to match your business." />
          <FeatureCard icon="gst" title="GST reporting" desc="Pull a proper NZ GST report in seconds. Know exactly what you owe at end of quarter." />
          <FeatureCard icon="receipt" title="Receipt parsing" desc="Snap a photo of a receipt. Ade reads it and files the expense against the right job automatically." />
          <FeatureCard icon="link" title="Quote → invoice in one click" desc="Approved? Convert without re-entering a thing. Totals, line items, GST — all carry across." />
          <FeatureCard icon="clock" title="Less back-and-forth" desc="Clear line items and proper totals mean clients say yes without the phone tag." />
          <FeatureCard icon="shield" title="Built to grow" desc="Payments, multi-user teams, Xero sync — on the roadmap. You're building on solid ground." />
        </div>

        {/* feature highlight: receipt parsing */}
        <div className="mt-6 rounded-3xl border border-black/10 bg-gradient-to-br from-[#051947] to-[#0a2d6e] p-8 text-white overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Pill dark><Icon name="receipt" className="h-3.5 w-3.5" /> New · Receipt Parsing</Pill>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Snap a receipt. Done.</h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">
                Point your phone at any receipt — fuel, materials, hire gear — and Ade extracts the vendor, amount, GST, and date. It files it against the right job and rolls it into your GST report.
              </p>
              <ul className="mt-5 space-y-2">
                {["Reads handwritten & printed receipts","Auto-categorises by job","Counted in your GST report instantly","No more lost paper receipts"].map(i => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-white/75">
                    <span className="shrink-0 rounded-full bg-emerald-400/20 p-0.5 text-emerald-400"><Icon name="check" className="h-3.5 w-3.5" /></span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur">
              <div className="text-xs text-white/50 font-mono mb-3">Receipt → Expense</div>
              <div className="space-y-2">
                {[
                  { label: "Vendor", value: "PlaceMakers Te Rapa", icon: "📦" },
                  { label: "Amount", value: "$438.00 incl. GST", icon: "💰" },
                  { label: "GST", value: "$57.13", icon: "🧾" },
                  { label: "Job", value: "Q-00412 · Stonework", icon: "🔨" },
                  { label: "Filed", value: "Q1 GST Report", icon: "✅" },
                ].map(r => (
                  <div key={r.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/6 px-3 py-2.5">
                    <span className="text-xs text-white/50">{r.icon} {r.label}</span>
                    <span className="text-xs font-medium text-white">{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl bg-emerald-500/15 border border-emerald-400/20 px-3 py-2 flex items-center gap-2">
                <span className="text-emerald-400"><Icon name="check" className="h-4 w-4" /></span>
                <span className="text-xs text-emerald-300 font-medium">Parsed & filed automatically</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section id="how" className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#051947]/50">Workflow</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Simple enough to use on-site.</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { step: "01", icon: "doc" as IconName, title: "Create the quote", desc: "Add line items, attach notes. Takes 60 seconds." },
            { step: "02", icon: "auto" as IconName, title: "Auto-send it", desc: "Quote emails itself while you get back to work." },
            { step: "03", icon: "link" as IconName, title: "Convert on approval", desc: "One click turns a quote into a proper invoice." },
            { step: "04", icon: "gst" as IconName, title: "GST at end of quarter", desc: "Pull the report. File with IRD. Done." },
          ].map((x, i) => (
            <div key={x.step} className="relative rounded-2xl border border-black/10 bg-white p-6 card-hover shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full border border-black/10 bg-white p-1.5"><Icon name="arrow" className="h-3.5 w-3.5 text-black/30" /></div>}
              <div className="text-xs font-mono font-semibold text-[#051947]/40">{x.step}</div>
              <div className="mt-3 rounded-xl border border-black/8 bg-[#051947]/4 p-2.5 w-fit text-[#051947]"><Icon name={x.icon} /></div>
              <div className="mt-3 text-sm font-semibold">{x.title}</div>
              <p className="mt-1.5 text-sm text-black/55">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── PRICING ───────────────────────────────────────── */}
      <section id="pricing" className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#051947]/50">Pricing</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Launch deal.</h2>
          <p className="mt-2 text-sm text-black/55">We're onboarding a small group to perfect Ade together.</p>
        </div>

        <div className="mt-8 max-w-lg mx-auto">
          <div className="gradient-border p-8 shadow-[0_8px_40px_rgba(5,25,71,0.1)]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#051947] p-2.5 text-white"><Icon name="gift" /></div>
              <div>
                <div className="text-sm font-semibold text-[#051947]">Launch offer</div>
                <div className="text-xs text-black/50">First 30 customers only</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
                <span className="spot-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-emerald-700">{spotsLeft} left</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-5xl font-semibold tracking-tight text-[#051947]">$0</div>
              <div className="text-sm text-black/50 mt-1">Free while we launch — no catch, no lock-in.</div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {["Quotes & invoices","Beautiful PDF generation","Editable PDF templates","Email templates","Auto-send quotes","Receipt parsing","GST reporting","Quote → invoice conversion","Onboarding support","You help shape the roadmap"].map(f => (
                <li key={f} className="flex items-center gap-2.5 text-sm">
                  <span className="shrink-0 rounded-full bg-[#051947]/8 p-0.5 text-[#051947]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                  <span className="text-black/70">{f}</span>
                </li>
              ))}
            </ul>

            <a href="https://app.ade.co.nz" className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#051947] py-3.5 text-sm font-semibold text-white hover:opacity-90 transition group shadow-[0_4px_20px_rgba(5,25,71,0.25)]">
              Claim your free spot
              <Icon name="arrow" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#051947]/50">FAQ</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Quick answers.</h2>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            { q: "What does 'free for the first 30' mean?", a: "You get full access free during our launch phase. No trial limits, no credit card required. In exchange, we ask for honest feedback to help us build something great." },
            { q: "Can I use Ade on my phone?", a: "Absolutely. It's built for modern mobile browsers — quote on-site, send the PDF immediately." },
            { q: "How does receipt parsing work?", a: "Take a photo of any receipt. Ade reads the vendor, amount, and GST automatically, then files it against the correct job and includes it in your GST report." },
            { q: "Does it handle NZ GST correctly?", a: "Yes — proper subtotals, GST at 15%, and totals. GST reports show exactly what you owe at end of quarter, IRD-ready." },
            { q: "Can I edit the PDF templates?", a: "Yes. You can customise colours, logo, fonts, and layout sections so every quote looks like you, not like a generic template." },
            { q: "What's auto-send for quotes?", a: "When a quote is created, Ade can fire it straight to the client via a professional branded email — without you touching it again." },
          ].map(x => (
            <div key={x.q} className="rounded-2xl border border-black/8 bg-white p-6 card-hover">
              <div className="text-sm font-semibold">{x.q}</div>
              <p className="mt-2 text-sm text-black/55 leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#051947] p-10 md:p-16 text-center">
          <div className="hero-grid absolute inset-0 opacity-70" />
          <div className="hero-sheen absolute inset-0 overflow-hidden" />
          <HeroGlow />
          <div className="relative">
            <Pill dark><Icon name="gift" className="h-3.5 w-3.5" /> {spotsLeft} free spots left</Pill>
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Stop losing jobs<br />to messier paperwork.
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Get Ade free while we launch. No lock-in, no risk. Just clean quotes, auto-sending, and proper GST tracking from day one.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://app.ade.co.nz" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#051947] hover:bg-white/90 transition shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                Claim a free spot
                <Icon name="arrow" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:enquiries@ade.co.nz" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/12 transition backdrop-blur">
                <Icon name="mail" className="h-4 w-4" />
                Request onboarding
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}