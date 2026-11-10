import { createFileRoute, Link } from '@tanstack/react-router';

const projects = [
  {
    number: '01',
    title: 'Signal Studio',
    tag: 'Design system',
    description: 'A documentation and experimentation platform for teams shipping product faster.',
    metrics: ['+38% launch velocity', '12 product squads'],
    visual: 'signal',
  },
  {
    number: '02',
    title: 'Northstar Commerce',
    tag: 'E-commerce',
    description: 'A conversion-focused storefront for premium accessories with strong editorial storytelling.',
    metrics: ['+27% conversion', '4-week sprint'],
    visual: 'northstar',
  },
  {
    number: '03',
    title: 'Atlas Notes',
    tag: 'AI workflow',
    description: 'An internal workspace for summarising user interviews, research, and product decisions.',
    metrics: ['90% faster synthesis', '3 teams onboarded'],
    visual: 'atlas',
  },
];

const experience = [
  ['Senior Product Designer', 'Northstar Labs', '2022 — Present'],
  ['Lead Frontend Engineer', 'Signal Studio', '2019 — 2022'],
  ['UX Engineer', 'Gravity Works', '2016 — 2019'],
];

const capabilities = [
  ['01', 'Product direction', 'Turning complex requirements into clear priorities, useful roadmaps, and focused product experiences.'],
  ['02', 'Experience design', 'Building thoughtful interfaces, accessible journeys, and consistent design systems.'],
  ['03', 'Frontend delivery', 'Bringing designs to life with performant, maintainable interfaces and careful implementation.'],
];

function Home() {
  return (
    <main id="main-content" className="site-shell">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Spencer Duncan home">
          <span className="wordmark-mark" aria-hidden="true">SD</span>
          <span>Spencer Duncan<span className="wordmark-period">.</span></span>
        </a>
        <nav aria-label="Primary navigation" className="main-nav">
          <a href="#work">Selected work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-contact">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Independent product designer &amp; frontend engineer</p>
          <h1 id="hero-title">Thoughtful digital work.<br /><em>Built to move</em> business forward.</h1>
          <p className="hero-intro">I bring product thinking, considered design, and frontend craft together to make complex digital experiences feel clear, useful, and effortless.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore selected work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="text-link">Start a conversation <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract geometric composition representing connected ideas">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core"><span>SD</span></div>
          <span className="art-label art-label-top">Strategy</span>
          <span className="art-label art-label-right">Experience</span>
          <span className="art-label art-label-bottom">Technology</span>
          <span className="art-index">Independent practice / 01—03</span>
        </div>
        <div className="hero-footnote"><span>Based wherever good work happens</span><span>Product · Design · Engineering</span></div>
      </section>

      <section id="work" className="section work-section" aria-labelledby="work-title">
        <div className="section-heading">
          <div><p className="eyebrow">A selection of engagements</p><h2 id="work-title">Work with <em>purpose.</em></h2></div>
          <p className="section-aside">A few examples of the problems, systems, and experiences I enjoy shaping.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
                <span className="visual-kicker">{project.number} / Selected project</span>
                {project.visual === 'signal' && <div className="signal-window"><div className="window-top"><i /><i /><i /></div><div className="signal-lines"><b /><b /><b /><b /></div><div className="signal-blocks"><i /><i /><i /></div></div>}
                {project.visual === 'northstar' && <div className="northstar-object"><span>FORM<br />FOLLOWS<br />FEELING.</span><i /></div>}
                {project.visual === 'atlas' && <div className="atlas-stack"><i /><i /><i /><span>ATLAS<br /><b>NOTES</b></span></div>}
                <span className="visual-number">{project.number}</span>
              </div>
              <div className="project-content">
                <div className="project-meta"><span>{project.tag}</span><span>Case study</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-results">{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className="content-note">Project descriptions and outcome figures should be confirmed against approved case-study material before publication.</p>
      </section>

      <section id="approach" className="approach-section section" aria-labelledby="approach-title">
        <div className="approach-intro">
          <p className="eyebrow">What I bring to the table</p>
          <h2 id="approach-title">One connected process.<br /><em>From idea to impact.</em></h2>
          <p>Good digital products are rarely the result of one discipline working alone. I connect the dots between what a business needs, what people need, and what technology can deliver.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => <article className="capability-item" key={number}><span className="capability-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="capability-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section id="about" className="about-section section" aria-labelledby="about-title">
        <div className="about-heading"><p className="eyebrow">A little about me</p><h2 id="about-title">Curiosity, clarity,<br /><em>and the craft of making.</em></h2></div>
        <div className="about-body">
          <p className="about-lead">I work at the intersection of product thinking and thoughtful execution.</p>
          <p>My process starts with understanding why a product matters, then shaping the interface, content, and system so the experience feels intuitive from the first interaction.</p>
          <p>Across design, UX, and frontend engineering, I care most about reducing friction — especially in workflows, onboarding, and decision-making. The best interfaces are the ones that make complex work feel effortless.</p>
          <div className="experience-block"><p className="eyebrow">Experience</p>{experience.map(([title, company, timeline]) => <div className="experience-row" key={`${title}-${company}`}><div><strong>{title}</strong><span>{company}</span></div><time>{timeline}</time></div>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div><p className="eyebrow eyebrow-light">Have a good challenge?</p><h2 id="contact-title">Let's make something<br /><em>matter.</em></h2></div>
        <div className="contact-aside"><p>Have a product idea, a complex problem, or a team that needs a thoughtful partner? I'd be glad to hear what you're working on.</p><a className="button button-light" href="mailto:hello@spencerduncan.design">Email Spencer <span aria-hidden="true">↗</span></a><a className="contact-social" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>
      </section>

      <footer className="site-footer"><a href="#top" className="footer-wordmark">Spencer Duncan<span>.</span></a><p>© {new Date().getFullYear()} Spencer Duncan. All rights reserved.</p><Link to="/privacy">Privacy notice <span aria-hidden="true">↗</span></Link></footer>
    </main>
  );
}

export const Route = createFileRoute('/')({ component: Home });
