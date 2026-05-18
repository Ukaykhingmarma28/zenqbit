const BASE_URL = "https://zenqbit.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zenqbit",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    foundingDate: "2025",
    description:
      "Zenqbit builds custom software, AI solutions, IoT systems, mobile apps, and automation for startups and enterprises in Malaysia, Bangladesh, and globally.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+601168295384",
        contactType: "sales",
        areaServed: "MY",
        availableLanguage: ["English", "Malay"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+8801805650587",
        contactType: "sales",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Cyberjaya",
        addressRegion: "Selangor",
        postalCode: "63000",
        addressCountry: "MY",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/zenqbit",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zenqbit",
    url: BASE_URL,
    publisher: {
      "@type": "Organization",
      name: "Zenqbit",
      logo: `${BASE_URL}/logo.svg`,
    },
  };
}

export function getWebPageSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${BASE_URL}${path}`,
    publisher: {
      "@type": "Organization",
      name: "Zenqbit",
    },
  };
}

export function getServiceSchema(service: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Zenqbit",
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Bangladesh" },
    ],
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Zenqbit",
    description:
      "Get in touch with Zenqbit for custom software, AI, IoT, and mobile app development projects.",
    url: `${BASE_URL}/contact`,
    publisher: {
      "@type": "Organization",
      name: "Zenqbit",
    },
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Zenqbit",
    description:
      "Learn about Zenqbit — a technology solutions company building custom software, AI, and IoT systems from Malaysia and Bangladesh.",
    url: `${BASE_URL}/about`,
    publisher: {
      "@type": "Organization",
      name: "Zenqbit",
    },
  };
}
