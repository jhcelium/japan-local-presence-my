import { Link } from "react-router-dom";
import type { FAQ } from "../content/site.config";
import { faqAnswerPreview, faqItemsWithSlug } from "../lib/faqAssets";

type Props = {
  items: FAQ[];
};

export default function FAQHubList({ items }: Props) {
  const withSlug = faqItemsWithSlug(items);

  return (
    <ol className="list-none space-y-0 divide-y divide-neutral-200 border-t border-neutral-200">
      {withSlug.map((item, index) => (
        <li key={item.slug} className="py-8">
          <p className="text-xs font-semibold text-neutral-400 mb-2">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-lg font-semibold text-neutral-900 leading-snug mb-3">
            <Link
              to={`/faq/${item.slug}/`}
              className="hover:text-neutral-600 underline-offset-2 hover:underline"
            >
              {item.question}
            </Link>
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-4 max-w-3xl">
            {faqAnswerPreview(item.answer)}
          </p>
          <Link
            to={`/faq/${item.slug}/`}
            className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
          >
            Read full answer →
          </Link>
        </li>
      ))}
    </ol>
  );
}
