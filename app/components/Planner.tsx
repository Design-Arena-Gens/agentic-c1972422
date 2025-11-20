"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";

type Workspace = "mobile" | "web" | "saas" | "shop";

const WORKSPACES: Record<Workspace, { label: string; tagline: string; focus: string[]; stack: string[] }> = {
  mobile: {
    label: "Mobile MVP",
    tagline: "Validate with a fast React Native or Expo build.",
    focus: ["Sketch the core flow", "Define 1-2 wow moments", "Ship to TestFlight/Play Store"],
    stack: ["Expo or React Native", "Supabase for auth + data", "Figma for prototyping"]
  },
  web: {
    label: "Marketing Site",
    tagline: "Launch a fast landing page that converts.",
    focus: ["Outline the customer story", "Create trust assets (testimonials, logos)", "Connect analytics + forms"],
    stack: ["Next.js + Tailwind CSS", "Vercel forms or Supabase", "Plausible for analytics"]
  },
  saas: {
    label: "SaaS Dashboard",
    tagline: "Ship a revenue-ready web product.",
    focus: ["Model the primary entities", "Secure auth & billing", "Automate onboarding"],
    stack: ["Next.js App Router", "Supabase or Prisma + Postgres", "Stripe Billing"]
  },
  shop: {
    label: "Commerce Experience",
    tagline: "Sell physical or digital goods quickly.",
    focus: ["Curate your catalog", "Design checkout flow", "Plan fulfillment + support"],
    stack: ["Next.js Commerce", "Stripe + Lemon Squeezy", "Shippo or Pirate Ship"]
  }
};

const timeline = [
  "Define the problem and audience",
  "Research similar products",
  "Map the smallest lovable feature set",
  "Design flows & wireframes",
  "Build iteratively with feedback",
  "Launch, measure, refine"
];

export function Planner() {
  const [workspace, setWorkspace] = useState<Workspace>("saas");

  const active = useMemo(() => WORKSPACES[workspace], [workspace]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-primary/5 backdrop-blur-md">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Build Navigator</p>
          <h3 className="text-2xl font-bold text-slate-900">Craft a plan in seconds</h3>
        </div>
        <nav className="flex gap-2 rounded-full bg-slate-100 p-1 text-sm">
          {Object.entries(WORKSPACES).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setWorkspace(key as Workspace)}
              className={clsx(
                "rounded-full px-4 py-1.5 font-medium transition",
                workspace === key
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              )}
            >
              {value.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
          <h4 className="text-lg font-semibold text-slate-900">Focus this week</h4>
          <p className="mt-1 text-sm text-slate-600">{active.tagline}</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {active.focus.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-5">
          <h4 className="text-lg font-semibold text-slate-900">Recommended stack</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {active.stack.map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <footer className="mt-6 rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-4">
        <p className="text-sm font-medium text-slate-800">Sprint outline</p>
        <ol className="mt-2 grid gap-2 text-sm text-slate-700 md:grid-cols-3">
          {timeline.map((item, index) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-white/70 p-3 shadow-sm">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </footer>
    </section>
  );
}
