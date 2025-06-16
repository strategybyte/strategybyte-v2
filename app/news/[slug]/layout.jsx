import client from "@/lib/contnetful";

export async function generateMetadata({ params: { slug } }) {
  const response = await client.getEntries({
    content_type: "news",
    "fields.slug": slug,
    limit: 1,
  });

  const newsDetails = response.items[0];

  return {
    title: newsDetails.fields.title,
    // description: newsDetails.fields.description,
    description:
      newsDetails.fields.metaDescription || newsDetails.fields.description,
  };
}

const NewsDetailsLayout = ({ children }) => {
  return children;
};

export default NewsDetailsLayout;
