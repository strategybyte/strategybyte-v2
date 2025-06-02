"use client";

import { Section, SectionTitle, BlogCard } from "./common";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/3PF7o4IPne1jBOUdIHeDYP/e97cb56dfdfb6b2605884fc25f364bf4/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "SEO Services",
      title:
        "How Can an SEO Optimization Agency Boost Your Organic Traffic & Visibility?",
      slug: "blog-details",
    },
    {
      id: 2,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/t6wIoqQtIB28qZwWPApnK/c8bb91e4e57598cccc09fd7b5096872e/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "Social Media Marketing",
      title:
        "How to Market NDIS Services in Australia: SEO, Lead Generation, and Digital Strategies for Providers",
      slug: "blog-details",
    },
    {
      id: 3,
      image:
        "https://images.ctfassets.net/3upqc2v7tlyy/2erEpJGipbra4TpgadUWgc/2facb45d15f72a0cc05d6e49e28c3dc5/Want_to_Win_inB2B_Marketing_Here-s_Everything_You_Should_Know_.webp",
      category: "Marketing",
      title:
        "Digital Marketing Services in Australia: A Step-by-Step Guide to Increasing Your Website Authority Score",
      slug: "blog-details",
    },
  ];

  return (
    <Section
      id="blog"
      containerProps={{
        bordered: true,
        padding: "pt-110 pb-70",
        px: "px-sm-0",
      }}
    >
      <div className="row justify-center">
        <div className="w-full xl:w-7/12 lg:w-9/12">
          <SectionTitle
            subtitle="Blog & News"
            title="Ultimate Guide to Boosting Engagement on Social Media"
            className="mb-50"
          />
        </div>
      </div>

      <div className="row justify-center px-4">
        {blogPosts.map((post, index) => (
          <div key={post.id} className="w-full xl:w-4/12 md:w-6/12">
            <BlogCard
              image={post.image}
              title={post.title}
              category={post.category}
              slug={post.slug}
              aosProps={{
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                "data-aos-offset": "50",
                "data-aos-delay": index * 50,
              }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
