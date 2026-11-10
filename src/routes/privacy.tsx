import { createFileRoute, Link } from '@tanstack/react-router';

function Privacy() {
  return (
    <main id="main-content" className="site-shell privacy-page">
      <header className="site-header">
        <Link to="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true">SD</span><span>Spencer Duncan<span className="wordmark-period">.</span></span></Link>
        <Link to="/" className="privacy-back">← Back to website</Link>
      </header>
      <article className="privacy-content">
        <p className="eyebrow"><span className="eyebrow-line" /> Site information</p>
        <h1>Privacy <em>notice.</em></h1>
        <p className="privacy-updated">Last updated: September 22, 2026</p>
        <div className="privacy-copy">
          <section><h2>What this site collects</h2><p>This portfolio does not currently use advertising cookies, behavioral tracking, user accounts, or a database. Choosing the email link opens your email application; this site does not submit or store a contact form.</p></section>
          <section><h2>Third-party services</h2><p>External links, such as LinkedIn, are optional. Their privacy practices apply when you leave this site. No analytics or non-essential third-party scripts are intentionally loaded by this portfolio.</p></section>
          <section><h2>Your choices</h2><p>If you contact Spencer by email, your message is processed by your email provider. For privacy questions or requests about an email you sent, use the same email address shown on the portfolio: <a href="mailto:hello@spencerduncan.design">hello@spencerduncan.design</a>.</p></section>
          <section><h2>Changes</h2><p>This notice will be updated if the site begins using analytics, forms, cookies, or other data processing.</p></section>
        </div>
      </article>
      <footer className="site-footer"><Link to="/" className="footer-wordmark">Spencer Duncan<span>.</span></Link><p>© {new Date().getFullYear()} Spencer Duncan. All rights reserved.</p><Link to="/">Return to home ↗</Link></footer>
    </main>
  );
}

export const Route = createFileRoute('/privacy')({
  component: Privacy,
  head: () => ({ meta: [{ title: 'Privacy notice — Spencer Duncan' }, { name: 'description', content: 'Privacy information for the Spencer Duncan portfolio.' }] }),
});
