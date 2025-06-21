export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://www.strategybyte.com.au/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.strategybyte.com.au/about",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://www.strategybyte.com.au/news",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.strategybyte.com.au/ndis-marketing",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://www.strategybyte.com.au/contact",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://www.strategybyte.com.au/career",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Services
    {
      url: "https://www.strategybyte.com.au/our-services/digital-marketing",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/seo",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/website-development",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/participant-portal-development",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/business-process-setup",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/analytics-and-reporting",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
