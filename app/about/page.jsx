import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section>
        <div className="bg-white/15 py-16">
          <div className="container mx-auto px-4 flex items-center justify-between flex-col md:flex-row">
            {/* Services Header */}
            <div className="text-left mb-12 w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Driving Growth Through Digital Marketing & Innovation
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Strategybyte helps organizations navigate the complex digital
                landscape with strategic consulting and cutting- edge technology
                solutions.
              </p>

              <button
                className="bg-secondary hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors mt-4"
                // onClick={() => router.push(serviceDetails[slug].button.link)}
              >
                Get in Touch
              </button>
            </div>
            {/* Service Illustrations */}
            <div className="w-full">
              <Image
                src="/assets/images/about/about-us-banner.png"
                alt="banner"
                width={783}
                height={519}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
