import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="relative z-10 min-h-svh pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-foreground/30 uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-sentient font-extralight mb-4">
            Terms of <i className="font-light">Service</i>
          </h1>
          <p className="font-mono text-sm text-foreground/40">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 font-mono text-sm text-foreground/60 leading-relaxed">

          <section>
            <h2 className="text-foreground/90 text-base mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using 7on (&ldquo;the Service&rdquo;), you agree to be bound by these
              Terms of Service. If you do not agree, please do not use the Service.
              The Service is operated independently by the creator of 7on.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">2. Description of Service</h2>
            <p>
              7on provides AI-powered automation tools, including a personal AI assistant
              and integrations with third-party platforms such as Slack. The Service is
              currently in early access and features may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years old to use the Service. By using 7on,
              you represent that you meet this requirement and have the legal capacity
              to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">4. Your Account</h2>
            <p className="mb-3">You are responsible for:</p>
            <ul className="space-y-2 pl-4 border-l border-border">
              <li>Maintaining the security of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Ensuring your use complies with applicable laws</li>
              <li>Notifying us of any unauthorized access at ap@7on.ai</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to use the Service to:</p>
            <ul className="space-y-2 pl-4 border-l border-border">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Transmit harmful, offensive, or misleading content</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Resell or sublicense access to the Service without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">6. Third-Party Integrations</h2>
            <p>
              The Service connects with third-party platforms (e.g., Slack, Google) at your
              direction. You are responsible for complying with those platforms&rsquo; own terms of
              service. We are not liable for changes, outages, or policy violations on
              third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">7. Intellectual Property</h2>
            <p>
              All content, design, and code of the Service are owned by 7on. You retain
              ownership of any data you bring into the Service. You grant us a limited license
              to process your data solely to provide the Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">8. Early Access & Availability</h2>
            <p>
              The Service is in active development. We do not guarantee uninterrupted availability.
              Features may be added, changed, or removed. We will make reasonable efforts to
              communicate significant changes in advance.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">9. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.
              We do not warrant that the Service will be error-free, secure, or meet your
              specific requirements. Use of AI-generated outputs is at your own discretion
              and risk.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, 7on shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use
              of the Service, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at our
              discretion, particularly for violations of these Terms. You may also terminate
              your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material
              changes via email or a prominent notice on the Service. Continued use after
              changes constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground/90 text-base mb-3">13. Contact</h2>
            <p>
              For any questions regarding these Terms, contact us at{" "}
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
