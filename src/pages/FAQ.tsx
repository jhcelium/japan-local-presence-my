import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";

export default function FAQ() {
  const title = "FAQ — Japan Local Presence & On-the-Ground Support | NeoiDigital";
  const description =
    "Answers about Japan local presence — what on-the-ground support includes, how follow-up works, what deliverables you receive, and how we reduce post-introduction drop-off.";

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed mb-3">
            Direct answers about Japan local presence, on-the-ground support,
            meeting coordination, and follow-up cadence.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            These answers are written to be factual and concise. Each addresses
            a specific operational question about how local presence works in
            Japan B2B.
          </p>
        </section>

        {/* All FAQs */}
        <section className="border-t border-neutral-200 pt-2">
          <FAQList items={siteConfig.faq} />
        </section>

        {/* Internal navigation */}
        <section className="border-t border-neutral-200 pt-8">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              ← Japan Local Presence — Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              About — How We Operate →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not answered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Reach out directly. We respond to all enquiries within one
              business day.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
