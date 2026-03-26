import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { faqNeighbors } from "../lib/faqAssets";

const SLUG = "why-does-local-presence-matter-in-japan";
const H1 = "Why Does Local Presence Matter in Japan?";

/** Matches hub preview; opening line is quotable. */
const OPENING =
  "In Japan, B2B progress depends on continuity: documented next steps, timely follow-up, and proof that an overseas supplier will stay engaged after the first meeting. Local presence is the execution layer that keeps that thread intact.";

/** Plain-text FAQ schema answer — aligned with on-page sections. */
const FAQ_SCHEMA_ANSWER = [
  OPENING,
  "Japan's relationship-based business environment rewards consistent contact and clarity; follow-up discipline (structured recaps, owners, cadence) signals reliability.",
  "Remote-only support often underperforms because time zones, delayed replies, and missing on-site context are read as weak commitment.",
  "Common mistakes include late recaps, vague next steps, switching contacts, and treating introductions as closed deals.",
].join(" ");

export default function FAQWhyLocalPresenceJapan() {
  const path = `/faq/${SLUG}/`;
  const title = `${H1} | FAQ | NeoiDigital`;
  const description =
    "Why local presence matters in Japan: relationship-based B2B, follow-up discipline, limits of remote-only coordination, and typical mistakes after distributor meetings.";

  const { prev, next } = faqNeighbors(siteConfig.faq, SLUG);

  const others = siteConfig.faq
    .filter((f) => f.slug && f.slug !== SLUG)
    .slice(0, 4);

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        faqSingleItem={{ question: H1, answer: FAQ_SCHEMA_ANSWER }}
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
          <span className="text-neutral-400">Local presence in Japan</span>
        </nav>

        <article>
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ answer
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-8 max-w-3xl">
            {H1}
          </h1>

          <div className="max-w-3xl space-y-10 border-t border-neutral-200 pt-8">
            <p className="faq-answer-lead text-sm text-neutral-700 leading-relaxed">
              {OPENING}
            </p>

            <section>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Relationship-based business environment
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Distributors and buyers typically assess long-term fit, not only
                product specs. Trust builds through repeated, predictable
                interaction—who shows up, how quickly questions are answered, and
                whether commitments in the room are reflected in writing
                afterward. Local presence makes that pattern sustainable without
                requiring your team to relocate.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Follow-up discipline
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Follow-up is part of the product in Japan B2B: bilingual recaps
                with decisions and open items, clear owners, proposed next
                meeting dates, and a steady cadence until there is a qualified
                outcome. When that discipline slips, the relationship cools—not
                necessarily because the offer failed, but because the process
                looked unreliable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Why remote-only support can underperform
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Email and video from abroad can work for planning, but they
                struggle to replace on-site responsiveness: clarifying a point at
                the table, collecting documents the same day, or restarting a
                stalled thread before the buyer moves on. Gaps of several days
                are often interpreted as capacity or commitment risk, not as a
                time-zone constraint.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Common mistakes
              </h2>
              <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>
                    Sending meeting recaps late or omitting agreed decisions and
                    pending items.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>
                    Leaving next steps vague—no date, no owner, no documented
                    buyer constraints.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>
                    Rotating contacts so the Japan side cannot build a stable
                    working relationship.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>
                    Treating a warm introduction as a closed sale instead of the
                    start of a documented follow-up cycle.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Related questions
              </h2>
              <ul className="space-y-2 text-sm">
                {others.map((f) => (
                  <li key={f.slug}>
                    <Link
                      to={`/faq/${f.slug}/`}
                      className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                    >
                      {f.question}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
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
            <Link
              to="/"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              ← Home
            </Link>
          </div>
          <div>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-10 max-w-xl">
          <h2 className="text-base font-semibold text-neutral-900 mb-2">
            Next step
          </h2>
          <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
            If you want to align meeting support and follow-up cadence with your
            distributor situation, request a local support call via the hub
            intake. There is no obligation to proceed.
          </p>
          <CTA />
        </section>
      </main>
    </>
  );
}
