import { Link, Navigate, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { faqAnswerPreview, faqNeighbors, getFaqBySlug } from "../lib/faqAssets";

export default function FAQAnswer() {
  const { slug } = useParams<{ slug: string }>();
  const item = getFaqBySlug(siteConfig.faq, slug);

  if (!item) {
    return <Navigate to="/faq/" replace />;
  }

  const title = `${item.question} | FAQ | NeoiDigital`;
  const description = faqAnswerPreview(item.answer, 158);
  const path = `/faq/${item.slug}/`;
  const { prev, next } = faqNeighbors(siteConfig.faq, item.slug);

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        faqSingleItem={{ question: item.question, answer: item.answer }}
      />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <nav className="text-xs text-neutral-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/faq/" className="hover:text-neutral-900">
            FAQ
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-400">Answer</span>
        </nav>

        <article>
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ answer
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-8 max-w-3xl">
            {item.question}
          </h1>
          <div className="max-w-3xl border-t border-neutral-200 pt-8">
            <p className="faq-answer-lead text-sm text-neutral-700 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </article>

        <nav
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-neutral-200 text-sm"
          aria-label="Adjacent questions"
        >
          <div>
            {prev ? (
              <Link
                to={`/faq/${prev.slug}/`}
                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
              >
                ← Previous: {prev.question}
              </Link>
            ) : (
              <span className="text-neutral-400">← Previous</span>
            )}
          </div>
          <div className="text-right">
            {next ? (
              <Link
                to={`/faq/${next.slug}/`}
                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
              >
                Next: {next.question} →
              </Link>
            ) : (
              <span className="text-neutral-400">Next →</span>
            )}
          </div>
        </nav>

        <section className="border-t border-neutral-200 pt-10 space-y-4">
          <Link
            to="/faq/"
            className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
          >
            ← All questions (FAQ hub)
          </Link>
          <div>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              Japan Market Hub (intake) →
            </a>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-10 max-w-xl">
          <h2 className="text-base font-semibold text-neutral-900 mb-2">
            Need a different angle?
          </h2>
          <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
            If your situation is not covered here, use the hub intake. We route
            practical questions to the right contact.
          </p>
          <CTA />
        </section>
      </main>
    </>
  );
}
