import { createFileRoute, Link } from '@tanstack/react-router';

const projects = [
  { title: 'Signal Studio', tag: 'Design system', description: 'A documentation and experimentation platform for teams shipping product faster.', metrics: ['+38% launch velocity', '12 product squads'] },
  { title: 'Northstar Commerce', tag: 'E-commerce', description: 'A conversion-focused storefront for premium accessories with strong editorial storytelling.', metrics: ['+27% conversion', '4-week sprint'] },
  { title: 'Atlas Notes', tag: 'AI workflow', description: 'An internal workspace for summarising user interviews, research, and product decisions.', metrics: ['90% faster synthesis', '3 teams onboarded'] },
];

const experience = [
  ['Senior Product Designer', 'Northstar Labs', '2022 — Present'],
  ['Lead Frontend Engineer', 'Signal Studio', '2019 — 2022'],
  ['UX Engineer', 'Gravity Works', '2016 — 2019'],
];

function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8 lg:px-10">
      <header className="flex items-center justify-between border-b border-white/10 pb-6">
        <a href="#main-content" className="flex items-center gap-3" aria-label="Spencer Duncan home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200 ring-1 ring-violet-400/40" aria-hidden="true">SD</span>
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-slate-300">Spencer Duncan</span>
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm text-slate-300 sm:gap-8">
          <a href="#work" className="focus-ring transition hover:text-white">Work</a>
          <a href="#about" className="focus-ring transition hover:text-white">About</a>
          <a href="#contact" className="focus-ring transition hover:text-white">Contact</a>
          <Link to="/privacy" className="focus-ring hidden transition hover:text-white sm:inline">Privacy</Link>
        </nav>
      </header>

      <section className="grid items-center gap-10 pb-18 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:pb-24 lg:pt-20" aria-labelledby="hero-title">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-200">Product designer • Frontend engineer</p>
          <h1 id="hero-title" className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">Building calm, useful digital experiences.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">I design and build polished product experiences for teams that care about clarity, performance, and human-first detail.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="focus-ring rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">View projects</a>
            <a href="#contact" className="focus-ring rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-white/25 hover:bg-white/10">Say hello</a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-8 text-left">
            <div><dt className="text-3xl font-semibold text-white">8+</dt><dd className="mt-1 text-sm text-slate-400">years crafting digital products</dd></div>
            <div><dt className="text-3xl font-semibold text-white">35</dt><dd className="mt-1 text-sm text-slate-400">launches across SaaS and commerce</dd></div>
            <div><dt className="text-3xl font-semibold text-white">94%</dt><dd className="mt-1 text-sm text-slate-400">client retention and referrals</dd></div>
          </dl>
        </div>
        <aside className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/70 p-6 shadow-2xl shadow-violet-950/25" aria-label="Availability summary">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400"><span>Today</span><span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">Open to work</span></div>
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Primary focus</p><p className="mt-3 text-xl font-medium text-white">Product strategy + design systems</p></div>
            <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Tools</p><p className="mt-3 text-sm text-slate-200">Figma, React, TypeScript, Framer</p></div><div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p><p className="mt-3 text-sm text-slate-200">Remote • US / Europe</p></div></div>
          </div>
        </aside>
      </section>

      <section id="work" className="scroll-mt-8 pt-8 lg:pt-10" aria-labelledby="work-title"><div className="mb-8"><p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-300">Selected work</p><h2 id="work-title" className="mt-3 text-3xl font-semibold text-white">Recent engagements</h2></div><div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-900"><div className="mb-6 flex items-center justify-between"><span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">{project.tag}</span><span className="text-xl text-violet-300" aria-hidden="true">→</span></div><h3 className="text-2xl font-semibold text-white">{project.title}</h3><p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p><ul className="mt-6 space-y-2 text-sm text-slate-200">{project.metrics.map((metric) => <li key={metric} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" aria-hidden="true" />{metric}</li>)}</ul></article>)}</div></section>

      <section id="about" className="grid scroll-mt-8 gap-10 pb-20 pt-20 lg:grid-cols-[0.8fr_1.2fr]" aria-labelledby="about-title"><div><p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-300">About</p><h2 id="about-title" className="mt-3 text-3xl font-semibold text-white">Designing digital products that feel easy.</h2></div><div className="space-y-6 text-base leading-8 text-slate-300"><p>I work at the intersection of product thinking and thoughtful execution. My process starts with understanding why a product matters, then shaping the interface, content, and system so the experience feels intuitive from the first interaction.</p><p>Across design, UX, and frontend engineering, I care most about reducing friction — especially in workflows, onboarding, and decision-making. The best interfaces are the ones that make complex work feel effortless.</p></div></section>
      <section className="pb-20" aria-labelledby="experience-title"><p className="mb-8 text-xs font-medium uppercase tracking-[0.24em] text-violet-300" id="experience-title">Experience</p><div className="space-y-4">{experience.map(([title, company, timeline]) => <div key={`${title}-${company}`} className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-5 sm:flex-row sm:items-center"><div><p className="text-lg font-medium text-white">{title}</p><p className="text-sm text-slate-400">{company}</p></div><p className="text-sm text-slate-300">{timeline}</p></div>)}</div></section>
      <section id="contact" className="scroll-mt-8 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-slate-900 p-8 text-center shadow-xl shadow-violet-900/10" aria-labelledby="contact-title"><p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-300">Let’s build</p><h2 id="contact-title" className="mt-4 text-3xl font-semibold text-white">Need a product that feels as good as it works?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">I partner with teams to clarify strategy, sharpen product direction, and deliver polished digital experiences from concept to launch.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><a href="mailto:hello@spencerduncan.design" className="focus-ring rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white hover:bg-violet-400">Email Spencer</a><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/10">LinkedIn <span className="sr-only">(opens in a new tab)</span></a></div></section>
      <footer className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Spencer Duncan</p><Link to="/privacy" className="focus-ring hover:text-white">Privacy notice</Link></footer>
    </main>
  );
}

export const Route = createFileRoute('/')({ component: Home });
