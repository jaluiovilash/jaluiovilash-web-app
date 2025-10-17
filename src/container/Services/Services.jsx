import { ui_ux, front, bck, mvp, sde } from "../../assets/index";
import { ShinyText } from "../../components/react-bits/index";
import { useEffect } from "react";

const servicesArr = [
  {
    id: "01",
    image: ui_ux,
    title: "CUSTOM UX/UI DESIGN",
    hoverText:
      "With years of designing for diverse industries, I create user-centric interfaces that boost engagement, streamline workflows, and translate brand vision into enjoyable digital experiences.",
  },
  {
    id: "02",
    image: front,
    title: "FRONTEND SOLUTIONS",
    hoverText:
      "I develop fast, responsive, and visually stunning websites that function seamlessly across devices, ensuring smooth user interactions and exceptional performance everywhere.",
  },
  {
    id: "03",
    image: bck,
    title: "BACKEND ARCHITECTURE",
    hoverText:
      "Having architected and deployed scalable backend systems for numerous enterprise-level projects, I ensure your applications are robust, secure, and optimized for high performance. I focus on maintainable code, seamless integration with complex services, and future scalability, delivering solutions that reliably support your business growth and evolving technological needs.",
  },
  {
    id: "04",
    image: mvp,
    title: "STARTUP MVP DEVELOPMENT",
    hoverText:
      "I help startups launch functional MVPs quickly, enabling rapid idea validation, user feedback collection, and early-stage product testing for successful market entry.",
  },
  {
    id: "05",
    image: sde,
    title: "SOFTWARE DEVELOPMENT",
    hoverText:
      "With hands-on experience across full-stack projects, I deliver end-to-end software solutions that combine clean code, reliability, and seamless functionality tailored to real-world business needs.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="services" className="scroll-mt-20">
      {/* Services Heading */}
      <div className="py-16 border-b text-center mb-14">
        <h1
          className="font-montserrat text-5xl md:text-7xl font-bold mx-auto"
          id="services"
        >
          <ShinyText text="SERVICES" />
        </h1>
      </div>

      {/* Layered Grid */}
      <div className="flex flex-col gap-8 px-6 md:px-32 max-w-[1700px] mx-auto">
        {/* Layer 1: Big + Small */}
        <div className="flex flex-col md:flex-row gap-8">
          {[0, 1].map((i) => (
            <div
              key={servicesArr[i].id}
              className="p-2 border border-gray-600 rounded-2xl"
            >
              <div className="bg-black rounded-2xl overflow-hidden">
                <img
                  src={servicesArr[i].image}
                  alt={servicesArr[i].title}
                  className="w-full h-64 object-cover filter grayscale"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    {servicesArr[i].title}
                  </h2>
                  <p className="text-gray-100">{servicesArr[i].hoverText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Layer 2: Full Width Big */}
        <div className="p-2 border border-gray-600 rounded-2xl">
          <div className="bg-black rounded-2xl overflow-hidden">
            <img
              src={servicesArr[2].image}
              alt={servicesArr[2].title}
              className="w-full h-80 object-cover filter grayscale"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">
                {servicesArr[2].title}
              </h2>
              <p className="text-gray-100">{servicesArr[2].hoverText}</p>
            </div>
          </div>
        </div>

        {/* Layer 3: Small + Big */}
        <div className="flex flex-col md:flex-row gap-8">
          {[3, 4].map((i) => (
            <div
              key={servicesArr[i].id}
              className="p-2 border border-gray-600 rounded-2xl"
            >
              <div className="bg-black rounded-2xl overflow-hidden">
                <img
                  src={servicesArr[i].image}
                  alt={servicesArr[i].title}
                  className="w-full h-64 object-cover filter grayscale"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    {servicesArr[i].title}
                  </h2>
                  <p className="text-gray-100">{servicesArr[i].hoverText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
