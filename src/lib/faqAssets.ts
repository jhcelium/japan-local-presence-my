import type { FAQ } from "../content/site.config";

/** Short preview for hub cards (no trailing ellipsis if full answer fits). */
export function faqAnswerPreview(answer: string, maxLen = 155): string {
  const trimmed = answer.trim();
  if (trimmed.length <= maxLen) return trimmed;
  const slice = trimmed.slice(0, maxLen);
  const lastSentence = slice.lastIndexOf(". ");
  if (lastSentence > 50) return slice.slice(0, lastSentence + 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${lastSpace > 40 ? slice.slice(0, lastSpace) : slice}…`;
}

export function faqItemsWithSlug(faq: FAQ[]): (FAQ & { slug: string })[] {
  return faq.filter((item): item is FAQ & { slug: string } => Boolean(item.slug));
}

export function getFaqBySlug(
  faq: FAQ[],
  slug: string | undefined,
): (FAQ & { slug: string }) | undefined {
  if (!slug) return undefined;
  return faqItemsWithSlug(faq).find((item) => item.slug === slug);
}

export function faqNeighbors(
  faq: FAQ[],
  slug: string,
): {
  prev?: FAQ & { slug: string };
  next?: FAQ & { slug: string };
} {
  const list = faqItemsWithSlug(faq);
  const i = list.findIndex((item) => item.slug === slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i < list.length - 1 ? list[i + 1] : undefined,
  };
}
