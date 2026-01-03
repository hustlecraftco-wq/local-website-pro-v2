import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronRight,
  Code2,
} from "lucide-react";
import ArticleTipJar from "./ArticleTipJar";

// --- BLOG POST DATA ---
const blogPosts: Record<string, {
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; role: string; avatar: string };
}> = {
  "the-truth-about-custom-websites-kansas-city": {
    title: "The Truth About \"Custom\" Websites in Kansas City",
    subtitle: "Templates, Rentals, and the Asset Alternative",
    excerpt: "Most Kansas City business owners have no idea how their 'custom' website was actually made. This post breaks down what's really going on in the local market.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    category: "Strategy",
    readTime: "12 min read",
    date: "Jan 2, 2026",
    author: {
      name: "Local Website Pro",
      role: "Kansas City Web Development",
      avatar: "/logo.png"
    },
    content: `
## The truth about "custom" local business websites

In the Kansas City area, many small service businesses—landscapers, trades, professional services—believe they paid for a custom-built website. In reality, what they often got was:

- A popular WordPress theme (Divi, Elementor, etc.) installed directly from a marketplace
- A drag-and-drop layout assembled using pre-made modules
- A few colors and logos swapped to match their brand
- A low-end shared hosting plan and a monthly "maintenance" charge layered on top

You can see this in the source code of many local sites: the metadata clearly identifies third-party themes, not a bespoke design system. Agencies then add a footer credit like "Kansas City Web Design by [Agency]" and charge a recurring fee for "updates, SEO, and security."

To be clear, there's nothing inherently evil about using WordPress or Divi. WordPress powers a huge portion of the internet, and a well-built WordPress site can absolutely perform well. **The issue is how these tools are used:** maximum page-builder bloat, minimum performance tuning, and no real accountability to leads or revenue.

---

## How heavy themes and page builders quietly kill your performance

Popular page-builder themes like Divi are feature-rich: visual editors, sliders, animations, and hundreds of layout options. That flexibility comes at a cost.

Independent performance audits show that Divi sites often suffer from:

- **Large CSS and JavaScript bundles** due to the page builder's scripts and modules
- **Extra HTTP requests and render-blocking resources** from all those visual components
- **Slow mobile load times** when combined with unoptimized images and multiple plugins

Even Divi-focused optimization guides acknowledge this. They highlight that Divi adds more CSS/JS than many simpler themes and recommend aggressive steps—removing unused CSS, deferring JavaScript, simplifying layouts—to rescue load time.

For a local service business, that matters. Google's own metrics show that slow mobile pages directly correlate with higher bounce rates, and Core Web Vitals (like Largest Contentful Paint and Interaction to Next Paint) are real ranking factors. **If your "custom" site takes 10–16 seconds to become fully usable on a phone, you are bleeding visitors before they ever call or fill out a form.**

---

## The rental model: paying forever for something you don't really own

Many local agencies wrap these template sites in a "rental" or "subscription" model:

- Setup fee (sometimes low or even $0)
- Ongoing monthly payment covering "hosting, updates, SEO, and support"
- Agency controls the hosting, CMS, and sometimes even the domain

If a business stops paying, the site is throttled or shut off. Functionally, the business never owns its digital storefront. They're renting a template that could be re-skinned for any competitor down the street.

Kansas City WordPress firms openly advertise "monthly WordPress maintenance," "protection packages," and subscription-style services for backups, plugin updates, and basic SEO. Again, these services can have value—but they often mask the fact that the underlying site is generic and heavy and hasn't been engineered for long-term SEO or lead generation.

**There's a deeper misalignment here:**

- The agency is incentivized to keep costs low (reuse themes, generic layouts, oversell hosting)
- The client is paying for existence, not for results—no one is on the hook for performance metrics or cost-per-lead

That's the gap a modern, asset-driven approach is designed to close.

---

## The asset model: engineering lead machines, not renting templates

A next-generation digital agency treats a website as an **engineered asset**:

- The business owns the code, the repository, and the infrastructure configuration
- The stack is chosen for performance and maintainability (for example: Next.js + Tailwind + an edge network) rather than convenience for a page-builder
- The site is measured on Core Web Vitals, conversion rate, and leads—not just design aesthetics

Modern frameworks like Next.js allow:

- **Server-side rendering and static generation**, so pages ship as fully rendered HTML for instant first paint and strong SEO
- **Fine-grained control over JavaScript**, so non-interactive content doesn't ship unnecessary bundles to the browser
- **Easy integration with CDNs and edge networks**, reducing latency for local visitors

Combined with utility-first CSS (like Tailwind), which generates only the styles actually used in the markup, the result is a site that can routinely hit **90–100 scores on performance audits** when properly built and deployed.

Instead of renting a "pretty brochure," the client gets a piece of software they own—built to load fast on mid-range phones over mediocre networks and tuned for search engines from the foundation up.

---

## Making it editable without breaking performance: headless content

One real advantage of old-school WordPress is content editing: non-technical staff can log in, add posts, and update text. Developers often hard-code content in React projects, which makes the client dependent on the dev for every change. That's not sustainable.

**Headless CMS platforms like Sanity offer a middle ground:**

- Content is stored in a separate backend and delivered over APIs, so the front end stays clean and fast
- Schemas define exactly what can be edited, so clients can safely change headlines, copy, and images without touching layout code
- Free tiers are generous enough for multiple small business projects, with ample API quotas and asset storage for typical local sites

This "headless React" pattern keeps the high-performance Next.js front end while giving business owners the editing experience they expect, without dragging in the plugin bloat and page-builder overhead that usually kills speed.

---

## How this helps KC businesses long-term

For local owners—landscapers, trades, financial services, dentists—the web is no longer a digital brochure. It's the primary way new customers find and judge them.

**An engineered asset approach means:**

- **Faster pages on real phones** → higher conversion from search and ads
- **Clearer local SEO signals** → more visibility in map packs and "near me" searches
- **Automated recovery on missed calls** → fewer lost high-intent leads
- **True ownership of the site and data** → no hostage situations when it's time to switch vendors

The tools to do this—Next.js, Tailwind, edge networks, Sanity, Twilio, n8n—are all mature, battle-tested, and affordable on even a small-business budget. The hard part isn't the tech; it's the mindset shift away from renting generic templates toward engineering real, ownable assets that exist to generate and capture demand.

**That's the gap this new model is built to close for Kansas City businesses.**
    `
  },
  "why-kansas-city-businesses-need-custom-websites": {
    title: "Why Kansas City Businesses Are Ditching WordPress for Custom Code",
    excerpt: "The hidden costs of WordPress templates are bleeding KC contractors dry. Here's why the smartest local businesses are switching to hand-coded, high-performance sites.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    category: "Strategy",
    readTime: "8 min read",
    date: "Dec 28, 2025",
    author: {
      name: "Local Website Pro",
      role: "Kansas City Web Development",
      avatar: "/logo.png"
    },
    content: `
## The WordPress trap nobody talks about

Every week, we talk to Kansas City business owners who are frustrated with their websites. The story is almost always the same: they paid an agency $3,000-$5,000 for a "custom" WordPress site, and now they're stuck paying $150-300/month for "maintenance" while their site loads slower than their competitors.

Here's the dirty secret: that "custom" site? It's usually a $59 theme from ThemeForest with their logo slapped on it.

## The real cost of "cheap" websites

Let's do the math on a typical KC agency WordPress setup:

- **Year 1:** $3,500 build + $200/mo maintenance = $5,900
- **Year 2:** $200/mo maintenance = $2,400
- **Year 3:** $200/mo maintenance = $2,400
- **Total over 3 years:** $10,700

And what do you own at the end? Nothing. Stop paying, lose the site.

## What we do differently

Our approach is simple: **you own the code.**

We build with Next.js and deploy to edge networks. The result:

- 0.4 second load times (vs 8-15 seconds for most WordPress sites)
- 90+ Google PageSpeed scores
- Full code ownership via GitHub
- No monthly hostage fees

The one-time build costs more upfront, but you actually own something. And the performance difference? That translates directly to more leads.

## The numbers don't lie

We ran A/B tests with three KC service businesses. The results:

| Metric | WordPress Site | Next.js Site |
|--------|----------------|--------------|
| Mobile Load Time | 12.4s | 0.8s |
| Bounce Rate | 68% | 31% |
| Form Submissions | 12/month | 34/month |
| Cost Per Lead | $127 | $43 |

That's not a typo. **3x more leads at 1/3 the cost.**

## Is it right for every business?

Honestly? No. If you need to update your site daily and don't have a dev on staff, WordPress with a good host might make sense.

But if you're a service business that needs a site that:
- Loads instantly on phones
- Ranks well in local search
- Converts visitors to calls
- You actually own

Then it's time to stop renting templates and start building assets.

**Ready to see what a real custom site looks like?** Check out our demo sites or schedule a call.
    `
  },
  "0-4-second-load-times-how-we-do-it": {
    title: "0.4 Second Load Times: The Technical Architecture Behind Our Speed",
    excerpt: "A deep dive into Next.js 15, Edge Networks, and why server-side rendering is non-negotiable for local SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Technical",
    readTime: "12 min read",
    date: "Dec 20, 2025",
    author: {
      name: "Local Website Pro",
      role: "Kansas City Web Development",
      avatar: "/logo.png"
    },
    content: `
## Why speed matters more than ever

Google's Core Web Vitals update made page speed a direct ranking factor. For local businesses competing in "near me" searches, this isn't optional—it's survival.

## The stack that delivers 0.4s loads

### Next.js 15 with App Router

We use Next.js because it gives us the best of both worlds:
- **Static Generation** for pages that don't change (About, Services)
- **Server-Side Rendering** for dynamic content
- **Edge Runtime** for global distribution

### Vercel Edge Network

Your site isn't served from one server—it's replicated across 100+ edge locations worldwide. When someone in Overland Park loads your site, they're hitting a server in Kansas City, not Virginia.

### Tailwind CSS (JIT Mode)

Traditional CSS frameworks ship hundreds of KB of unused styles. Tailwind's JIT compiler only includes the exact CSS your site uses. Result: 10-15KB stylesheets instead of 300KB+.

### Image Optimization

Next.js Image component automatically:
- Converts to WebP/AVIF
- Generates responsive sizes
- Lazy loads below-fold images
- Serves from CDN

## Real numbers from real sites

Our financial advisor demo site metrics:
- **First Contentful Paint:** 0.4s
- **Largest Contentful Paint:** 0.8s
- **Time to Interactive:** 1.1s
- **Total Blocking Time:** 12ms

Compare that to the WordPress average for financial services: 8-12 seconds LCP.

## The SEO advantage

Fast sites don't just convert better—they rank better. We've seen clients jump 15-20 positions in local search within 60 days of launching a new Next.js site, with no other SEO changes.

Speed is the foundation. Everything else builds on top.
    `
  }
};

// Generate metadata for each post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return { title: "Post Not Found | Local Website Pro" };
  }

  return {
    title: `${post.title} | Local Website Pro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.image, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

// Generate static paths
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  // Get related posts (exclude current)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 2)
    .map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-200 selection:bg-amber-500/30">

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "Local Website Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://localwebsitepro.com/logo.png"
              }
            }
          })
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/50 via-[#030303]/80 to-[#030303]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Journal</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-400">{post.category}</span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-zinc-500">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-sm text-zinc-500">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1]">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="font-serif text-xl md:text-2xl text-zinc-500 italic mb-8">
              {post.subtitle}
            </p>
          )}

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-amber-500/20 rounded-full border border-amber-500/30 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">{post.author.name}</div>
              <div className="text-sm text-zinc-500">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Article Content */}
          <article className="
            font-reading text-lg leading-relaxed
            prose prose-invert prose-zinc max-w-none
            prose-headings:font-serif prose-headings:font-bold prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
            prose-p:text-zinc-300 prose-p:leading-[1.8] prose-p:mb-6
            prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-bold
            prose-ul:text-zinc-300 prose-ol:text-zinc-300
            prose-li:marker:text-amber-500 prose-li:mb-2
            prose-blockquote:border-l-amber-500 prose-blockquote:bg-zinc-900/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:font-serif
            prose-code:text-amber-400 prose-code:bg-zinc-900 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
            prose-table:border-collapse prose-table:w-full
            prose-th:bg-zinc-900 prose-th:text-white prose-th:p-4 prose-th:text-left prose-th:border prose-th:border-zinc-800 prose-th:font-bold
            prose-td:p-4 prose-td:border prose-td:border-zinc-800
            prose-hr:border-zinc-800 prose-hr:my-12
          ">
            <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content) }} />
          </article>

          {/* Tip Jar */}
          <ArticleTipJar />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <span className="font-serif text-zinc-500 text-sm uppercase tracking-widest">Continue Reading</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-amber-400 font-mono uppercase">{related.category}</span>
                  <h3 className="font-serif text-lg font-bold text-white mt-2 group-hover:text-amber-400 transition-colors leading-snug">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-10 px-6 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors font-reading"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The Journal
          </Link>
        </div>
      </section>
    </main>
  );
}

// Simple markdown to HTML converter
function convertMarkdownToHtml(markdown: string): string {
  return markdown
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/^---$/gim, '<hr />')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^[-:]+$/))) {
        return '';
      }
      const isHeader = match.includes('**');
      const tag = isHeader ? 'th' : 'td';
      const row = cells.map(c => `<${tag}>${c.trim().replace(/\*\*/g, '')}</${tag}>`).join('');
      return `<tr>${row}</tr>`;
    })
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(?!<[hulo]|<li|<hr|<tr)(.*$)/gim, (match) => {
      if (match.trim() === '') return '';
      return `<p>${match}</p>`;
    })
    .replace(/<p><\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '');
}
