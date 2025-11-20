import { Planner } from "./components/Planner";

const foundations = [
  {
    title: "Clarify the problem",
    description:
      "Interview at least 3 potential users. Capture the exact pain, current workaround, and success criteria."
  },
  {
    title: "Define your promise",
    description:
      "Write a one-sentence value proposition and a simple story arc that frames the before/after transformation."
  },
  {
    title: "Decide success metrics",
    description:
      "Pick one primary metric (activation, retention, revenue) and 2 supporting metrics to guide trade-offs."
  }
];

const implementation = [
  {
    title: "Design flows that matter",
    bullets: [
      "Sketch the end-to-end happy path and one recovery path",
      "Translate sketches into high-fidelity mocks",
      "Validate with 3 quick usability tests"
    ]
  },
  {
    title: "Build in thin slices",
    bullets: [
      "Stand up your stack (Next.js, database, auth)",
      "Ship each feature with seed data + instrumentation",
      "Demo progress twice a week to stakeholders"
    ]
  },
  {
    title: "Launch and measure",
    bullets: [
      "Automate deploys (Vercel) and monitoring",
      "Collect qualitative feedback inside the product",
      "Review metrics weekly and adjust roadmap"
    ]
  }
];

const resourceLinks = [
  {
    title: "Idea Validation Interview Script",
    href: "https://www.notion.so/templates",
    description: "Run structured interviews that uncover root problems instead of surface-level wants."
  },
  {
    title: "Customer Journey Worksheet",
    href: "https://miro.com/app/board/",
    description: "Map the moments that matter and highlight friction before you write a single line of code."
  },
  {
    title: "Next.js Starter Repo",
    href: "https://github.com/vercel/nextjs-templates",
    description: "Clone a production-ready template with auth, database, and UI primitives included."
  }
];

const faqs = [
  {
    question: "How long should my first build take?",
    answer:
      "Plan for a 4-week sprint: 1 week discovery, 2 weeks implementation, 1 week polish + launch. Compress only if you already have validated research."
  },
  {
    question: "What stack is the safest bet?",
    answer:
      "Next.js (App Router) + React + Tailwind on Vercel covers 90% of web use cases. Pair it with Supabase or PlanetScale for data and Stripe for payments."
  },
  {
    question: "How do I avoid scope creep?",
    answer:
      "Lock scope around your narrative: what does the user need to believe before and after using your product? Any task that doesn't strengthen that story gets deferred."
  }
];

export default function Page() {
  return (
    <main className="container pb-24 pt-16">
      <section className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-primary/10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Start here</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Build an app people actually want
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-700">
          This playbook distills product discovery, design, and engineering into a repeatable flow. Follow the
          blueprint, use the interactive planner, and ship your next idea with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-semibold text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" /> No-code to pro-code guidance
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-700">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Templates & tool stack suggestions
          </span>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {foundations.map(({ title, description }) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
          </article>
        ))}
      </section>

      <div className="mt-12">
        <Planner />
      </div>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
        <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Implementation</p>
            <h2 className="text-3xl font-bold text-slate-900">Execute with clarity</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            Each phase is a thin slice—a full user story that delivers measurable value. Demo the slice, gather
            feedback, and iterate before moving on.
          </p>
        </header>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {implementation.map(({ title, bullets }) => (
            <article key={title} className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {bullets.map(bullet => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Key resources</h2>
        <p className="mt-2 text-sm text-slate-600">
          Use these templates to unblock research, planning, and engineering setup. Duplicate and adapt for your team.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map(resource => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-lg"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-primary/80">Template</span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary">{resource.title}</h3>
              <p className="text-sm text-slate-600">{resource.description}</p>
              <span className="mt-auto text-xs font-semibold text-primary">Open resource →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-primary/10 p-8">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqs.map(({ question, answer }) => (
            <article key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{question}</h3>
              <p className="mt-2 text-sm text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
