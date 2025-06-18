import Image from "next/image";

const ourValues = [
  {
    id: "1",
    title: "Integrity",
    description:
      "We do what’s right—always. Ethics, honesty, and transparency drive every decision we make.",
    image: "/assets/images/about/integrity-icon.png",
  },
  {
    id: "2",
    title: "Innovation",
    description:
      "We challenge the norm to deliver forward-thinking digital solutions that create long-term value.",
    image: "/assets/images/about/innovation-icon.png",
  },
  {
    id: "3",
    title: "Collaboration",
    description:
      "We partner closely with clients to build scalable strategies and achieve shared success.",
    image: "/assets/images/about/collaboration-icon.png",
  },
  {
    id: "4",
    title: "Excellence",
    description:
      "From web design to SEO, we hold ourselves to high standards—refining every detail to deliver outstanding results.",
    image: "/assets/images/about/excellence-icon.png",
  },
  {
    id: "5",
    title: "Passion",
    description:
      "We love what we do. That passion fuels creative thinking, consistent delivery, and impact-driven results.",
    image: "/assets/images/about/passion-icon.png",
  },
  {
    id: "6",
    title: "Responsibility",
    description:
      "We take ownership of your outcomes—whether it’s improving digital visibility or automating business processes.",
    image: "/assets/images/about/responsibility-icon.png",
  },
];

const ourApproach = [
  {
    id: "1",
    title: "Strategic Vision",
    description: "We align digital roadmaps with business goals.",
    icon: "/assets/images/about/strategic-vision.png",
  },
  {
    id: "2",
    title: "Practical Execution",
    description: "Our solutions work in the real world—not just in theory.",
    icon: "/assets/images/about/practical-execution.png",
  },
  {
    id: "3",
    title: "Measuraable Results",
    description: "We focus on outcomes that drive impact.",
    icon: "/assets/images/about/measuraable-results.png",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section>
        <div className="bg-white/15 py-16">
          <div className="container mx-auto px-4 flex items-center justify-between flex-col md:flex-row">
            <div className="text-left mb-12 w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Driving Growth Through Digital Marketing & Innovation
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Strategybyte helps organizations navigate the complex digital
                landscape with strategic consulting and cutting- edge technology
                solutions.
              </p>

              <button className="bg-secondary hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors mt-4">
                Get in Touch
              </button>
            </div>

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

        <div className="container px-4 py-16 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 md:max-w-xl mx-auto !leading-tight">
              Who We Are
            </h2>
          </div>

          <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-10 md:gap-2">
            <div className="text-left mb-12 w-full">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                StrategyByte was founded to help businesses grow in a
                digital-first world. Starting as a digital consultancy,
                we&apos;ve become a leading digital marketing and transformation
                agency in Australia, serving clients locally and globally.
              </p>
              <p className="text-gray-300">
                With expertise in SEO, website development, and business process
                automation, we help organizations enhance their online presence,
                streamline operations, and scale with confidence. Our approach
                combines strategy, innovation, and insight to deliver meaningful
                results—at every stage of the digital journey.
              </p>
            </div>
            {/* Service Illustrations */}
            <div className="w-full">
              <Image
                src="/assets/images/about/our-story.png"
                alt="banner"
                width={783}
                height={519}
              />
            </div>
          </div>

          <div className="flex items-center justify-between flex-col-reverse mt-24 md:flex-row-reverse gap-10 md:gap-2">
            <div className="text-left mb-12 w-full">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-300 mb-4">
                We craft tailored digital strategies that bridge the gap between
                technology and business growth—helping you stay ahead in a
                digital-first world.
              </p>
              <div className="my-3 flex flex-col gap-5">
                {ourApproach.map((item) => (
                  <div key={item.id} className="flex items-start gap-2">
                    <Image
                      className="size-8"
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <div className="space-y-1">
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-300">
                Collaboration is at the core of everything we do. As your
                digital marketing partner, we work alongside your team to help
                you grow, adapt, and lead with confidence.
              </p>
            </div>
            {/* Service Illustrations */}
            <div className="w-full">
              <Image
                src="/assets/images/about/our-approach.png"
                alt="banner"
                width={783}
                height={519}
              />
            </div>
          </div>
        </div>

        <div className="container px-4 py-16 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:max-w-xl mx-auto !leading-tight">
              Our Core Value
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These values define who we are and how we work at StrategyByte. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
              {ourValues.map((card, index) => (
                <div
                  className="bg-white/15 backdrop-blur-md border border-white/20 rounded-lg p-6 lg:p-8 xl:p-10 transition-all duration-500 hover:bg-white/20 hover:border-white/30 group shadow-lg"
                  key={index}
                >
                  <div className="size-16 p-4 rounded-full bg-[#2F3F61]/50">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mt-4">{card.title}</h3>
                    <p className="text-gray-300 mt-4">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
