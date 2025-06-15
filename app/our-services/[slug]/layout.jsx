import { SERVICES_META } from "./resources/meta-data";

export function generateMetadata({ params: { slug } }) {
  const { title } = SERVICES_META[slug];

  return {
    title,
  };
}

const ServiceDetailsLayout = ({ children }) => {
  return children;
};

export default ServiceDetailsLayout;
