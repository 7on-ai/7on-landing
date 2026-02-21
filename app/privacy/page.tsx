import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="relative z-10 min-h-svh pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-foreground/30 uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-sentient font-extralight mb-4">
            Privacy <i className="font-light">Policy</i>
          </h1>
          <p className="font-mono text-sm text-foreground/40">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 font-mono text-sm text-foreground/60 leading-relaxed">

          <section>
            <h2 className="text-foreground/90 text-base mb-3">1. Overview</h2>
            <p>
              7on (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is operated as an independent project.
              This Privacy Policy explains how we collect, use, and protect your information
              when you use our services at 7on.ai and related subdomains.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us:</p>
            <ul className="space-y-2 pl-4 border-l border-border">
              <li>Account information (name, email) when you sign up or join the waitlist</li>
              <li>OAuth data from third-party services (Slack, Google) when you connect them</li>
              <li>Usage data and interactions with our AI automation features</li>
              <li>Communications you send us via email or in-app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">3. How We Use Your Information</h2>
            <ul className="space-y-2 pl-4 border-l border-border">
              <li>To provide and improve our AI automation services</li>
              <li>To authenticate your identity and manage your account</li>
              <li>To connect and sync with third-party services you authorize</li>
              <li>To send important updates about the product (no marketing spam)</li>
              <li>To respond to your support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">4. Third-Party Services</h2>
            <p className="mb-3">
              We use the following third-party services that may have access to your data:
            </p>
            <ul className="space-y-2 pl-4 border-l border-border">
              <li><span className="text-foreground/80">Auth0</span> — Authentication and identity management</li>
              <li><span className="text-foreground/80">Vercel</span> — Hosting and infrastructure</li>
              <li><span className="text-foreground/80">Slack</span> — If you choose to connect your Slack workspace</li>
              <li><span className="text-foreground/80">n8n</span> — Workflow automation backend</li>
            </ul>
            <p className="mt-3">
              Each of these services has their own privacy policy. We only request the minimum
              permissions necessary to provide our service.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">5. Data Storage & Security</h2>
            <p>
              Your data is stored on secure servers. We do not sell your personal information
              to third parties. OAuth tokens are encrypted at rest. We retain your data only
              as long as necessary to provide the service or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2 pl-4 border-l border-border">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Disconnect any third-party integrations at any time</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:ap@7on.ai" className="text-foreground/90 hover:text-foreground transition-colors underline underline-offset-4">
                ap@7on.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">7. Cookies</h2>
            <p>
              We use essential cookies for authentication and session management only.
              We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We will notify you of significant
              changes via email or a notice on our website. Continued use of the service
              after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">9. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a href="mailto:ap@7on.ai" className="text-foreground/90 hover:text-foreground transition-colors underline underline-offset-4">
                ap@7on.ai
              </a>
            </p>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="font-mono text-xs text-foreground/30 hover:text-foreground/60 transition-colors uppercase tracking-widest"
          >
            ← Back to 7on
          </Link>
        </div>
      </div>
    </main>
  )
}
