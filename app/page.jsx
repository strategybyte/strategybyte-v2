import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Marquee from "@/components/Marquee";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
