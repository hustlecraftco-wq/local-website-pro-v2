import { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ArrowLeft, CheckCircle2, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | Local Website Pro",
  description: "Local Website Pro is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts and how to contact us with concerns.",
  robots: "noindex, follow"
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-zinc-300 py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <Accessibility className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">Accessibility Statement</h1>
              <p className="text-zinc-500 text-sm">Last updated: January 1, 2026</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-purple-500/50 via-zinc-800 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
            <p>
              Local Website Pro is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
            </p>
            <p>
              We believe that every business deserves a website that works for everyone, and we apply this same principle to our own digital presence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to meet WCAG 2.1 Level AA standards across our website.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mt-4">
              <h3 className="text-lg font-semibold text-white mb-4">Current Standards We Follow</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">WCAG 2.1 Level AA</strong> - Web Content Accessibility Guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Section 508</strong> - U.S. Federal Accessibility Requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">ADA Title III</strong> - Americans with Disabilities Act</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Navigation & Structure</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consistent navigation across all pages</li>
              <li>Skip-to-content links for keyboard users</li>
              <li>Logical heading hierarchy (H1-H6)</li>
              <li>ARIA landmarks for screen reader navigation</li>
              <li>Descriptive page titles and meta descriptions</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Visual Design</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sufficient color contrast ratios (minimum 4.5:1 for text)</li>
              <li>Text remains readable when zoomed to 200%</li>
              <li>No content relies solely on color to convey information</li>
              <li>Focus indicators for keyboard navigation</li>
              <li>Responsive design that works on all screen sizes</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Media & Content</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alternative text for all meaningful images</li>
              <li>Decorative images marked appropriately</li>
              <li>Video content includes captions where available</li>
              <li>No auto-playing media with audio</li>
              <li>Animations respect reduced-motion preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Forms & Interactions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All form fields have associated labels</li>
              <li>Error messages are clearly identified</li>
              <li>Input validation provides helpful feedback</li>
              <li>Sufficient time to complete forms</li>
              <li>All functionality available via keyboard</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Assistive Technologies</h2>
            <p>Our website is designed to be compatible with the following assistive technologies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Switch devices and alternative input devices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Browser Compatibility</h2>
            <p>We test our website with the latest versions of:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">Chrome</div>
                <div className="text-zinc-500 text-sm">Latest</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">Firefox</div>
                <div className="text-zinc-500 text-sm">Latest</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">Safari</div>
                <div className="text-zinc-500 text-sm">Latest</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">Edge</div>
                <div className="text-zinc-500 text-sm">Latest</div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Known Limitations</h2>
            <p>
              While we strive for full accessibility, some content may have limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Third-party content:</strong> Some embedded third-party content (maps, videos, widgets) may not meet all accessibility standards</li>
              <li><strong className="text-white">PDF documents:</strong> Older PDF documents may not be fully accessible; we are working to remediate these</li>
              <li><strong className="text-white">Complex animations:</strong> Some advanced scroll-based animations may not be fully accessible to all users; reduced-motion preferences are respected where possible</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Client Websites</h2>
            <p>
              As a web development company, we are committed to building accessible websites for our clients. All new websites we develop include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>WCAG 2.1 Level AA compliance as a baseline</li>
              <li>Semantic HTML structure</li>
              <li>Proper heading hierarchy</li>
              <li>Accessible forms and navigation</li>
              <li>Alt text for images</li>
              <li>Keyboard navigability</li>
              <li>Responsive design</li>
            </ul>
            <p className="mt-4">
              We also offer accessibility audits and remediation services for existing websites. <Link href="/#contact" className="text-purple-400 hover:underline">Contact us</Link> to learn more.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Feedback & Contact</h2>
            <p>
              We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please let us know:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mt-4">
              <p className="font-bold text-white mb-4">Local Website Pro - Accessibility Team</p>
              <div className="space-y-3">
                <a
                  href="mailto:accessibility@localwebsitepro.com"
                  className="flex items-center gap-3 text-purple-400 hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  accessibility@localwebsitepro.com
                </a>
                <a
                  href="tel:+18165551234"
                  className="flex items-center gap-3 text-purple-400 hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  (816) 555-1234
                </a>
              </div>
              <p className="mt-4 text-zinc-500 text-sm">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Continuous Improvement</h2>
            <p>
              Accessibility is an ongoing effort. We regularly:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduct accessibility audits of our website</li>
              <li>Train our team on accessibility best practices</li>
              <li>Test with assistive technologies</li>
              <li>Review and update this accessibility statement</li>
              <li>Incorporate user feedback into improvements</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
