import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Local Website Pro",
  description: "Learn how Local Website Pro collects, uses, and protects your personal information. Your privacy is our priority.",
  robots: "noindex, follow"
};

export default function PrivacyPolicyPage() {
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
            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
              <p className="text-zinc-500 text-sm">Last updated: January 1, 2026</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-emerald-500/50 via-zinc-800 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Local Website Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website localwebsitepro.com or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Data</h3>
            <p>We may collect personally identifiable information, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business name and address</li>
              <li>Billing and payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Derivative Data</h3>
            <p>Our servers automatically collect information when you access our site, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Operating system</li>
              <li>Access times and pages viewed</li>
              <li>Referring website addresses</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase services. We store only very limited, if any, financial information that we collect. All financial information is stored by our payment processor, Stripe, and you are encouraged to review their privacy policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account</li>
              <li>Process your orders and deliver services</li>
              <li>Email you regarding your account or services</li>
              <li>Fulfill and manage purchases, orders, and payments</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Respond to product and customer service requests</li>
              <li>Deliver targeted advertising and other content</li>
              <li>Improve our website and services</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us, including payment processing (Stripe), data analysis, email delivery (SendGrid), hosting services (Vercel), marketing assistance, and customer service.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect, and no method of data transmission can be guaranteed against interception.
            </p>
            <p>
              Our website uses SSL/TLS encryption for all data transmission. We employ AES-256 encryption for data at rest. Regular security audits are performed quarterly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@localwebsitepro.com" className="text-emerald-400 hover:underline">privacy@localwebsitepro.com</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mt-4">
              <p className="font-bold text-white">Local Website Pro</p>
              <p>Kansas City, MO</p>
              <p>Email: <a href="mailto:privacy@localwebsitepro.com" className="text-emerald-400 hover:underline">privacy@localwebsitepro.com</a></p>
              <p>Phone: (816) 555-1234</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
