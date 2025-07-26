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
    // {
    //   url: "https://www.strategybyte.com.au/ndis-marketing",
    //   lastModified: now,
    //   changeFrequency: "yearly",
    //   priority: 0.9,
    // },
    {
      url: "https://www.strategybyte.com.au/contact",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    // {
    //   url: "https://www.strategybyte.com.au/career",
    //   lastModified: now,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },

    // Services
    {
      url: "https://www.strategybyte.com.au/our-services/website-development",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/digital-marketing",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/content-marketing",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.strategybyte.com.au/our-services/strategic-branding-management",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
