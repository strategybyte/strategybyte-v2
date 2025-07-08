import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
// import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Quote from "@/components/Quote";
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <CaseStudies /> */}
      <Testimonials />
      <Quote />
      <Blog />
      <Faq />
      <CTA />
    </div>
  );
}
