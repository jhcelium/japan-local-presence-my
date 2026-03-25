import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import FAQHubList from "../components/FAQHubList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { faqItemsWithSlug } from "../lib/faqAssets";

export default function FAQ() {
  const title =
    "Japan Local Presence FAQ — On-the-Ground Support & Follow-Up | NeoiDigital";
  const description =
    "Practical FAQ hub: local presence in Japan, on-the-ground meeting support, follow-up cadence, deliverables, and relationship continuity after distributor introductions.";

  const withSlug = faqItemsWithSlug(siteConfig.faq);
  const withoutSlug = siteConfig.faq.filter((f) => !f.slug);

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <section className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ hub
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Questions about Japan local presence
          </h1>
          <p className="hero-lead text-base text-neutral-600 leading-relaxed mb-3">
            This hub answers practical questions about local presence in Japan,
            on-the-ground support, follow-up discipline, and relationship
            management with distributors and buyers. Each linked page expands the
            full answer in one place.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Tone is operational, not promotional. Use these pages to align
            expectations before requesting coordination support.
          </p>
        </section>

        {withSlug.length > 0 && (
          <section aria-labelledby="faq-index-heading">
            <h2
              id="faq-index-heading"
              className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2"
            >
              All questions
            </h2>
            <p className="text-sm text-neutral-500 mb-2 max-w-2xl">
              Short previews below; follow the link for the complete answer.
            </p>
            <FAQHubList items={siteConfig.faq} />
          </section>
        )}

        {withoutSlug.length > 0 && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              Additional answers
            </h2>
            <FAQList items={withoutSlug} />
          </section>
        )}

        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-5">
            Site &amp; hub
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              to="/"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              ← Home — Japan local presence overview
            </Link>
            <Link
              to="/about/"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              About — how we operate →
            </Link>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              NeoiDigital Japan Market Hub →
            </a>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-10 max-w-xl">
          <h2 className="text-base font-semibold text-neutral-900 mb-2">
            Still unsure?
          </h2>
          <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
            Request a local support call through the hub intake. You will be
            routed to the right channel; there is no obligation to proceed.
          </p>
          <CTA />
        </section>
      </main>
    </>
  );
}
