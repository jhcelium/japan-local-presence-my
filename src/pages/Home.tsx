import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { definedTermSetJsonLd, howToJsonLd } from "../lib/seo";

const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does local presence in Japan matter for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japan B2B relies on continuity, documentation, and consistent in-person contact. Remote communication alone increases drop-off after introductions. Local presence provides a reliable point of contact who maintains relationships on behalf of overseas companies.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support distributor meetings in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle pre-meeting alignment, agenda preparation, on-site facilitation, note-taking, and decision capture. We also schedule and coordinate follow-up touchpoints after each session.",
      },
    },
    {
      "@type": "Question",
      name: "How does follow-up work after meetings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bilingual recap is sent within 48 hours covering decisions, open items, and next steps. Action items are assigned, a next meeting date is proposed, and weekly cadence is maintained until a decision is reached.",
      },
    },
  ],
};

const LOCAL_PRESENCE_BULLETS = [
  "Local presence is execution capacity, not an address.",
  "It includes meeting support and decision capture in real time.",
  "It includes follow-up cadence that matches Japan buyer expectations.",
  "It includes document handoffs and issue tracking across stakeholders.",
  "It reduces post-introduction drop-off by maintaining continuity.",
];

const MEETING_SUPPORT_TASKS = [
  "Agenda alignment before the meeting.",
  "Pre-meeting briefing pack for all participants.",
  "Introductions and facilitation support on-site.",
  "Note-taking and decision capture during the session.",
  "Clarify next steps before leaving the room.",
  "Collect buyer requirements and constraints.",
  "Sample, spec, and document handoff coordination.",
  "Schedule follow-up touchpoint before session ends.",
];

const DELIVERABLES = [
  "Meeting recap memo (bilingual summary).",
  "Decision log (agreed / pending / blocked).",
  "Buyer requirements list.",
  "Risk and constraints notes (compliance, labelling, pricing).",
  "Follow-up cadence plan.",
  "Next-step decision memo (2–4 weeks).",
];

const DROP_OFF_BULLETS = [
  "Capture decisions immediately during the meeting.",
  "Clarify next steps before the meeting ends.",
  "Send recap within 48 hours of each session.",
  "Keep cadence consistent — weekly until decision.",
  "Maintain a single source of truth for documents and open questions.",
];

const OSAKA_BULLETS = [
  "Meeting support in Kansai region and travel coordination when needed.",
  "Continuity between meetings and follow-ups.",
  "Japan-side responsiveness for time-sensitive questions.",
  "Practical on-the-ground logistics support.",
];

const HOME_DEFINED_TERMS = definedTermSetJsonLd([
  {
    term: "Local Presence",
    description:
      "Execution capacity in Japan — meeting support, follow-up cadence, and document handoffs — not a registered office or forwarding address.",
  },
  {
    term: "Follow-Up Cadence",
    description:
      "A structured communication rhythm maintained after meetings: bilingual recaps within 48 hours, action-item assignment, next-meeting scheduling, and weekly contact until a decision threshold is reached.",
  },
  {
    term: "Drop-Off Reduction",
    description:
      "Preventing post-introduction silence by capturing decisions immediately, sending timely recaps, and maintaining consistent follow-up cadence with Japan distributors.",
  },
  {
    term: "Document Handoff",
    description:
      "Structured transfer of samples, specifications, compliance notes, buyer requirements, and decision logs between meeting participants and stakeholders.",
  },
]);

const HOME_HOWTO = howToJsonLd(
  "How to Coordinate a Distributor Meeting in Japan",
  "Step-by-step local presence process for supporting B2B distributor meetings in Japan, from agenda alignment through follow-up scheduling.",
  MEETING_SUPPORT_TASKS.map((task) => {
    const name = task.replace(/\.$/, "");
    return { name, text: name };
  }),
);

export default function Home() {
  const title = "Japan Local Presence — Osaka B2B Coordinator | NeoiDigital";
  const description =
    "NeoiDigital provides local presence in Japan from Osaka — meeting support, follow-up cadence, and document handoffs for Malaysia exporters in Japan B2B.";

  return (
    <>
      <SEOHead
        path="/"
        title={title}
        description={description}
        isHome={true}
        extraSchemas={[HOME_DEFINED_TERMS, HOME_HOWTO]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_JSONLD)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* A — Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Local Presence
          </h1>
          <p className="hero-lead text-sm text-neutral-600 leading-relaxed mb-8">
            NeoiDigital provides local presence in japan from Osaka — meeting
            support, follow-up cadence, and document handoffs to keep Japan B2B
            conversations moving.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        {/* B — What Local Presence Means (Operationally) */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            What Local Presence Means (Operationally)
          </h2>
          <ul className="space-y-3">
            {LOCAL_PRESENCE_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* C — Why Local Presence Matters for B2B */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Why Local Presence Matters for B2B
          </h2>
          <div className="space-y-3 text-sm text-neutral-600 leading-relaxed max-w-3xl">
            <p>
              Japan's B2B environment operates on documented continuity — not
              just initial introductions. Distributors expect follow-through,
              consistent communication, and someone who can respond on-site when
              questions arise.
            </p>
            <p>
              Remote-only communication increases drop-off after introductions
              because context is lost, response times lag, and distributors move
              on to suppliers who maintain contact. Every gap in communication is
              interpreted as lack of commitment.
            </p>
            <p>
              Local follow-up keeps the conversation alive by bridging time
              zones, translating context accurately, and maintaining the rhythm
              of engagement that Japan buyers require.
            </p>
            <p>
              Understanding why local presence in japan matters for b2b starts
              with recognising that Japan's buying process is relationship-driven
              and documentation-heavy. Speed of follow-up and accuracy of recaps
              are signals of operational seriousness.
            </p>
            <p>
              Without local follow-up capacity, most overseas exporters lose
              momentum within 4–6 weeks of a first meeting. With it, the cadence
              remains intact regardless of travel constraints or time-zone gaps.
            </p>
            <p>
              This applies across industries — food and beverage, industrial
              components, consumer goods, and professional services. The
              relationship management requirement is consistent across
              categories.
            </p>
          </div>
        </section>

        {/* D — Meeting Support Capability */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Meeting Support Capability
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-3xl">
            Effective local presence in japan for distributor meetings requires
            structured preparation, real-time support, and disciplined
            follow-through. The following tasks are covered for each session:
          </p>
          <ul className="space-y-3">
            {MEETING_SUPPORT_TASKS.map((task) => (
              <li key={task} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  {task}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* E — Follow-Up System */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Follow-Up System (Cadence Control)
          </h2>
          <div className="space-y-3 text-sm text-neutral-600 leading-relaxed max-w-3xl">
            <p>
              A structured japan follow up and relationship management service is
              what separates one-time meetings from commercial relationships. The
              system works as follows:
            </p>
            <p>
              Within 48 hours of each meeting, a bilingual recap is sent
              covering decisions made, open items, and agreed next steps. The
              recap is structured, not narrative — it is a working document both
              sides can act on.
            </p>
            <p>
              Action items are assigned to specific owners with deadlines. A
              next meeting date is proposed at the point of recap distribution,
              not after a follow-up cycle.
            </p>
            <p>
              Weekly cadence is maintained until a decision threshold is reached
              — either a commercial agreement, a qualified no, or a defined pause
              with clear resumption criteria.
            </p>
            <p>
              When silence occurs on the distributor side, escalation protocols
              are triggered: a direct outreach, a re-engagement brief, or
              escalation to a senior contact if previously identified.
            </p>
            <p>
              This system removes the ambiguity that causes most overseas
              supplier relationships to stall after initial introduction.
            </p>
          </div>
        </section>

        {/* F — Deliverables */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Deliverables
          </h2>
          <ul className="space-y-3">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* G — How We Reduce Drop-Off After Introductions */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            How We Reduce Drop-Off After Introductions
          </h2>
          <ul className="space-y-3">
            {DROP_OFF_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* H — Osaka-Based Coordination */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Osaka-Based Coordination
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-3xl">
            Coordination operates from Osaka, providing practical access to
            Kansai-region distributor networks and direct travel routes to Tokyo
            and Nagoya. Companies approaching japan market entry with osaka based
            team support benefit from proximity to key commercial hubs, which
            reduces response time and logistics friction.
          </p>
          <ul className="space-y-3">
            {OSAKA_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* I — Coverage Map */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
            Coverage Map
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            Common search topics this page addresses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Main Keywords
              </h3>
              <ul className="space-y-2">
                {siteConfig.mainKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-800 font-medium">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Supporting Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.supportingKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-600">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Long-tail Keywords
              </h3>
              <ul className="space-y-1">
                {siteConfig.longTailKeywords.slice(0, 6).map((kw) => (
                  <li key={kw} className="text-sm text-neutral-500">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* J — FAQ Preview */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <dl className="divide-y divide-neutral-200">
            {siteConfig.faq.slice(0, 3).map((item) => (
              <div key={item.question} className="py-6">
                <dt className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-neutral-600 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4">
            <Link
              to="/faq"
              className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
            >
              View all frequently asked questions →
            </Link>
          </div>
        </section>

        {/* K — Final CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to establish local presence in Japan?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Contact us to discuss meeting support, follow-up cadence, and what
              on-the-ground coordination looks like for your distributor
              situation.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
