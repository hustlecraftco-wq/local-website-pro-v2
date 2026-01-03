import { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Local Website Pro",
  description: "Learn about how Local Website Pro uses cookies and similar tracking technologies on our website.",
  robots: "noindex, follow"
};

export default function CookiePolicyPage() {
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
            <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <Cookie className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">Cookie Policy</h1>
              <p className="text-zinc-500 text-sm">Last updated: January 1, 2026</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-amber-500/50 via-zinc-800 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.
            </p>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve and analyze our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-2 text-white">Cookie</th>
                    <th className="text-left py-2 text-white">Purpose</th>
                    <th className="text-left py-2 text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-2 font-mono text-xs">__session</td>
                    <td className="py-2">User session management</td>
                    <td className="py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-xs">csrf_token</td>
                    <td className="py-2">Security protection</td>
                    <td className="py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-2 text-white">Cookie</th>
                    <th className="text-left py-2 text-white">Purpose</th>
                    <th className="text-left py-2 text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-2 font-mono text-xs">_ga</td>
                    <td className="py-2">Google Analytics - Distinguishes users</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-2 font-mono text-xs">_gid</td>
                    <td className="py-2">Google Analytics - Distinguishes users</td>
                    <td className="py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-xs">_vercel_insights</td>
                    <td className="py-2">Vercel Web Analytics</td>
                    <td className="py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Marketing Cookies</h3>
            <p>
              These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging.
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-2 text-white">Cookie</th>
                    <th className="text-left py-2 text-white">Purpose</th>
                    <th className="text-left py-2 text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-2 font-mono text-xs">_fbp</td>
                    <td className="py-2">Facebook Pixel - Ad tracking</td>
                    <td className="py-2">3 months</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-xs">_gcl_au</td>
                    <td className="py-2">Google Ads conversion tracking</td>
                    <td className="py-2">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Browser Settings</h3>
            <p>
              Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Edge</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Opt-Out Tools</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Facebook Ad Preferences</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mt-4">
              <p className="font-bold text-white">Local Website Pro</p>
              <p>Email: <a href="mailto:privacy@localwebsitepro.com" className="text-amber-400 hover:underline">privacy@localwebsitepro.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
