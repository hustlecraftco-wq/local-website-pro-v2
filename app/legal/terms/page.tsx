import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Local Website Pro",
  description: "Read the terms and conditions governing your use of Local Website Pro's website development and automation services.",
  robots: "noindex, follow"
};

export default function TermsOfServicePage() {
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
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">Terms of Service</h1>
              <p className="text-zinc-500 text-sm">Last updated: January 1, 2026</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-blue-500/50 via-zinc-800 to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Local Website Pro ("Company," "we," "us," or "our"), concerning your access to and use of the localwebsitepro.com website as well as any other media form, channel, or service related thereto.
            </p>
            <p>
              You agree that by accessing the Site and/or Services, you have read, understood, and agree to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
            <p>Local Website Pro provides the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Custom Website Development:</strong> Hand-coded websites using Next.js, React, and modern web technologies</li>
              <li><strong>Managed Hosting:</strong> Edge network hosting and maintenance services</li>
              <li><strong>Missed Call Text Back:</strong> Automated SMS response system for missed business calls</li>
              <li><strong>Review Automation:</strong> Automated review request and management systems</li>
              <li><strong>Growth Hunter:</strong> OSINT-based lead generation services</li>
              <li><strong>CRM Integration:</strong> GoHighLevel and other CRM platform integrations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. Code Ownership & Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Client-Owned Code</h3>
            <p>
              Upon full payment of the agreed project fee, the Client shall own 100% of the custom website code developed specifically for them. This includes all HTML, CSS, JavaScript, and React components created for the project. The Client will receive access to a GitHub repository containing the source code.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Company-Retained IP</h3>
            <p>
              Local Website Pro retains ownership of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proprietary frameworks, boilerplates, and starter templates</li>
              <li>Internal tools and automation systems</li>
              <li>Third-party integrations and API connectors</li>
              <li>The "Local Website Pro" brand, logo, and marketing materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Third-Party Licenses</h3>
            <p>
              Websites may include open-source software subject to their respective licenses (MIT, Apache 2.0, etc.). The Client agrees to comply with all such third-party license terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">One-Time Development Fees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% deposit required to commence work</li>
              <li>50% balance due upon project completion, before code handoff</li>
              <li>All fees are non-refundable once work has commenced</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Monthly Subscription Fees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Billed monthly in advance</li>
              <li>First payment due upon service activation</li>
              <li>Automatic renewal unless cancelled with 30 days notice</li>
              <li>No refunds for partial months</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Late Payments</h3>
            <p>
              Invoices not paid within 30 days may result in service suspension. A 1.5% monthly late fee may be applied to overdue balances.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Service Level Agreements</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Managed Hosting (The Engine / Total Command)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>99.9% uptime guarantee (excluding scheduled maintenance)</li>
              <li>Response time: 24 hours for standard issues, 4 hours for critical outages</li>
              <li>Monthly hosting credit for SLA breaches</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Development Services</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Typical project timeline: 2-4 weeks (varies by scope)</li>
              <li>Up to 2 rounds of revisions included</li>
              <li>Additional revisions billed at $150/hour</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Client Responsibilities</h2>
            <p>The Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide all necessary content, images, and materials in a timely manner</li>
              <li>Respond to communications within 5 business days</li>
              <li>Ensure all provided content does not infringe on third-party rights</li>
              <li>Maintain accurate contact and billing information</li>
              <li>Comply with all applicable laws regarding their business operations</li>
              <li>Not use services for illegal, fraudulent, or harmful purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL LOCAL WEBSITE PRO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="mt-4">
              Our total liability shall not exceed the amounts paid by you to us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">By Client</h3>
            <p>
              You may terminate monthly services at any time with 30 days written notice. No refunds will be provided for prepaid periods.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">By Company</h3>
            <p>
              We may terminate or suspend your access immediately, without prior notice, for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Breach of these Terms</li>
              <li>Non-payment of fees</li>
              <li>Illegal or fraudulent activity</li>
              <li>Conduct harmful to other clients or our business</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Post-Termination</h3>
            <p>
              Upon termination of managed hosting services, you will have 30 days to migrate your website and data. After 30 days, all data may be deleted. Code ownership remains with the client for fully paid projects.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Missouri, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Kansas City, Missouri.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mt-4">
              <p className="font-bold text-white">Local Website Pro</p>
              <p>Kansas City, MO</p>
              <p>Email: <a href="mailto:legal@localwebsitepro.com" className="text-blue-400 hover:underline">legal@localwebsitepro.com</a></p>
              <p>Phone: (816) 555-1234</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
