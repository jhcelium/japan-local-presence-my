import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";

const OPERATIONAL_CAPABILITIES = [
  {
    title: "Meeting Support",
    body: "Agenda alignment, pre-meeting briefing packs, on-site facilitation, note-taking, decision capture, and next-step clarification before leaving the room.",
  },
  {
    title: "Follow-Up Cadence",
    body: "Bilingual recap within 48 hours covering decisions, open items, and action assignments. Weekly cadence maintained until a decision threshold is reached.",
  },
  {
    title: "Document Handoffs",
    body: "Samples, specs, compliance notes, buyer requirements, and decision logs tracked and handed off in structured format — not as ad-hoc emails.",
  },
  {
    title: "Drop-Off Prevention",
    body: "Most overseas supplier relationships stall after initial introduction. We hold the thread between meetings and prevent communication gaps from becoming disqualifications.",
  },
];

export default function About() {
  const title = "About — Japan Local Presence Operations | NeoiDigital";
  const description =
    "On-the-ground Japan coordination from Osaka: meeting support, follow-up discipline, and relationship continuity for Malaysia exporters entering Japan B2B.";

  return (
    <>
      <SEOHead path="/about" title={title} description={description} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Local Presence — Operational Overview
          </h1>
          <p className="hero-lead text-base text-neutral-600 leading-relaxed">
            {siteConfig.primaryIntent}
          </p>
        </section>

        {/* What local presence means here */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            What Local Presence Means in Practice
          </h2>
          <div className="max-w-3xl space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              Local presence is not a registered office or a forwarding address.
              It is execution capacity — the ability to be in the room, capture
              what happened, and maintain the relationship after the meeting
              ends.
            </p>
            <p>
              For Malaysia exporters working with Japan distributors, the gap
              between a first meeting and a commercial relationship is filled
              with follow-through: recaps, document handoffs, next-step
              scheduling, and consistent availability. That is what this service
              provides.
            </p>
            <p>
              We do not replace your sales process. We support the Japan-side
              execution layer — the part that requires someone physically present
              and operationally consistent.
            </p>
          </div>
        </section>

        {/* Japan relationship context */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Japan's Relationship-Based Business Culture
          </h2>
          <div className="max-w-3xl space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              Japan's B2B environment operates on documented continuity and
              in-person trust. Distributors assess not just the product but the
              supplier's reliability as a long-term partner. Consistency of
              communication — its speed, accuracy, and format — is part of the
              evaluation.
            </p>
            <p>
              Remote-only communication carries a structural disadvantage in
              this context. When a distributor has a question and the response
              takes three days, the gap is interpreted as operational capacity
              risk, not a time-zone inconvenience. Local presence closes that
              gap.
            </p>
            <p>
              Introductions in Japan's B2B market are formal, often facilitated
              through a trusted intermediary, and carry implicit expectations
              about what happens next. The post-introduction phase — follow-up,
              documentation, meeting scheduling — is where most overseas
              suppliers lose momentum.
            </p>
          </div>
        </section>

        {/* Follow-up discipline */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Follow-Up as a Managed System
          </h2>
          <div className="max-w-3xl space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              Follow-up in the Japan B2B context is not a single email after a
              meeting. It is a system: structured recaps, assigned action items,
              scheduled next touchpoints, and escalation protocols when
              communication stalls.
            </p>
            <p>
              Our process: a bilingual recap is prepared within 48 hours of each
              meeting. It covers decisions made, open items, agreed next steps,
              and action owners. A next meeting date is proposed at the point of
              recap distribution — not left as a follow-up item.
            </p>
            <p>
              Weekly cadence is maintained until the engagement reaches a
              threshold: a commercial agreement, a qualified no, or a defined
              pause. When silence occurs on the distributor side, we trigger
              re-engagement rather than waiting.
            </p>
            <p>
              This discipline is what converts introductions into active
              relationships. Without it, the default outcome is drop-off within
              4–6 weeks of the first meeting.
            </p>
          </div>
        </section>

        {/* Operational capabilities */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPERATIONAL_CAPABILITIES.map((item) => (
              <div key={item.title} className="border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Osaka base */}
        {siteConfig.localPresence && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Operational Base: Osaka, Japan
            </h2>
            <div className="max-w-3xl space-y-3 text-sm text-neutral-700 leading-relaxed">
              <p>
                Coordination operates from{" "}
                <strong className="text-neutral-900">Osaka, Japan</strong> —
                providing practical access to Kansai-region distributor
                networks, with direct travel routes to Tokyo and Nagoya for
                broader coverage.
              </p>
              <p>
                Osaka is Japan's second commercial hub, with strong distribution
                infrastructure across food and beverage, industrial, and
                consumer goods categories. For Malaysia exporters, an
                Osaka-based coordinator reduces response time and logistics
                friction compared to remote coordination.
              </p>
              <p>
                Malaysia-side planning and briefing are handled remotely, with
                structured reporting back to your team after each Japan-side
                engagement. No Japanese entity or relocation is required.
              </p>
            </div>
          </section>
        )}

        {/* Regulatory and institutional framework */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Regulatory and Institutional Context
          </h2>
          <div className="max-w-3xl space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              Foreign companies doing business in Japan operate within a
              framework overseen by several government bodies.{" "}
              <strong className="text-neutral-900">JETRO</strong> (Japan
              External Trade Organization) is the primary agency that facilitates
              inward investment and trade support for overseas companies. JETRO
              provides market reports, business matching support, and advisory
              services for companies establishing operations or partnerships in
              Japan.
            </p>
            <p>
              On the Malaysia side,{" "}
              <strong className="text-neutral-900">MATRADE</strong> (Malaysia
              External Trade Development Corporation) supports Malaysian
              exporters through market access programmes, trade missions, and
              export incentive frameworks — including those targeting the Japan
              corridor.
            </p>
            <p>
              The{" "}
              <strong className="text-neutral-900">
                Malaysia–Japan Economic Partnership Agreement (MJEPA)
              </strong>{" "}
              governs preferential tariff treatment. Exporters must meet rules of
              origin criteria and submit certification through MITI or an
              approved body. Category-specific requirements — including food
              safety (under Japan's Food Sanitation Act), labelling (Food
              Labelling Standards Act), and pharmaceutical regulations — are
              enforced at the importer level.
            </p>
            <p>
              Our coordination operates within this framework. We do not provide
              legal or regulatory certification services, but we ensure that
              documentation, timelines, and stakeholder communication align with
              what Japan-side importers and distributors require.
            </p>
          </div>
        </section>

        {/* Internal navigation */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-5">
            Related Pages
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              ← Japan Local Presence — Home
            </Link>
            <Link
              to="/faq"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              Frequently Asked Questions →
            </Link>
          </div>
        </section>

        {/* Hub link */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Part of NeoiDigital Japan Market Hub
          </h2>
          <p className="text-sm text-neutral-600 mb-5 max-w-xl leading-relaxed">
            This site is part of a broader set of Japan market resources for
            Malaysian companies. The hub covers distributor search, trade show
            support, export readiness, and market entry strategy.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Visit Japan Market Hub →
          </a>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Discuss your Japan coordination needs.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Tell us your distributor situation, meeting cadence requirements,
              or where follow-up has stalled. We work from a brief, not a
              template.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
