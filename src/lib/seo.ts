import { siteConfig } from "../content/site.config";

const SITE_LANG = "en";
const BASE_URL = `https://${siteConfig.domain}`;

/** Enforce trailing-slash canonical URLs */
export function canonicalUrl(path: string): string {
  let clean = path.startsWith("/") ? path : `/${path}`;
  if (clean !== "/" && !clean.endsWith("/")) clean += "/";
  return `${BASE_URL}${clean}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) return siteConfig.siteName;
  return `${subtitle} | ${siteConfig.siteName}`;
}

/** JSON-LD: Organization (with E-E-A-T signals) */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    ...(siteConfig.legalName && { legalName: siteConfig.legalName }),
    url: BASE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: SITE_LANG,
    areaServed: {
      "@type": "Country",
      name: "Japan",
      sameAs: "https://www.wikidata.org/wiki/Q17",
    },
    knowsAbout: [...siteConfig.mainKeywords, ...siteConfig.supportingKeywords],
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka Prefecture",
        addressCountry: "JP",
      },
    }),
  };
}

/** JSON-LD: ProfessionalService */
export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.company} — ${siteConfig.brandLine}`,
    description: siteConfig.primaryIntent,
    url: BASE_URL,
    serviceType: "On-the-ground business coordination",
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.company,
      ...(siteConfig.legalName && { legalName: siteConfig.legalName }),
    },
    ...(siteConfig.localPresence && {
      location: {
        "@type": "Place",
        name: "Osaka",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Osaka",
          addressRegion: "Osaka Prefecture",
          addressCountry: "JP",
        },
      },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local Presence Services",
      itemListElement: siteConfig.socialProofBullets.map((bullet) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          description: bullet,
        },
      })),
    },
  };
}

/** JSON-LD: WebSite (with about, publisher, inLanguage) */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: BASE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: SITE_LANG,
    about: {
      "@type": "Thing",
      name: siteConfig.brandLine,
      description: siteConfig.primaryIntent,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company,
      ...(siteConfig.legalName && { legalName: siteConfig.legalName }),
      url: BASE_URL,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-lead"],
    },
  };
}

/** JSON-LD: WebPage (with speakable + inLanguage) */
export function webPageJsonLd(
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: SITE_LANG,
    isPartOf: {
      "@type": "WebSite",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "main > section:first-of-type p"],
    },
  };
}

/** JSON-LD: FAQPage — FULL list, never truncated (with speakable) */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "main > section:first-of-type p"],
    },
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** JSON-LD: FAQPage — single Q&A answer asset */
export function faqPageSingleJsonLd(item: { question: string; answer: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".faq-answer-lead"],
    },
    mainEntity: [
      {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      },
    ],
  };
}

/**
 * JSON-LD: DefinedTermSet — key terminology definitions.
 * Use on pages that explicitly define domain terms.
 */
export function definedTermSetJsonLd(
  terms: { term: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Japan Local Presence — Key Terms",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.description,
    })),
  };
}

/**
 * JSON-LD: HowTo — step-by-step instructional content.
 * Use on pages with procedural/checklist sections.
 */
export function howToJsonLd(
  name: string,
  description: string,
  steps: { name: string; text: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
