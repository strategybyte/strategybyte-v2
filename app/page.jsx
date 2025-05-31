import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
// import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

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
        {/* <CaseStudies /> */}
        <Testimonials />
        <Faq />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
