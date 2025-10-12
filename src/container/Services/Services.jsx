import { useState } from "react";
import { ui_ux, front, bck, mvp, sde, cloud } from "../../assets/index";
import { ShinyText } from "../../components/react-bits/index";

const servicesArr = [
  {
    id: "01",
    image: ui_ux,
    title: "CUSTOM UX/UI DESIGN",
    hoverText:
      "I craft intuitive, visually engaging, and user-focused designs that perfectly reflect your brand identity and create enjoyable experiences for every user.",
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
      "I design and implement robust, secure, and scalable backend systems, ensuring your applications perform reliably while supporting future growth and complex functionalities.",
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
      "I provide comprehensive software development services from design to deployment, ensuring high-quality code, flawless functionality, and seamless integration across your platforms.",
  },
  {
    id: "06",
    image: cloud,
    title: "CLOUD ENGINEERING",
    hoverText:
      "I design, deploy, and manage scalable cloud infrastructures on AWS and GCP, optimizing security, performance, and reliability for mission-critical applications.",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="services" className="scroll-mt-20 md:border-b ">
      {/* Services Heading */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-semibold w-4/5 mx-auto">
          <ShinyText text="SERVICES" />
        </h1>
      </div>

      {/* Desktop Version: Left Side - Image, Right Side - Services List */}
      <div className="hidden md:flex flex-row">
        {/* Left Side: Image (Desktop View) */}
        <div className="md:w-2/5 h-[600px] flex flex-col justify-start md:justify-center items-center p-8 md:p-20">
          <img
            className={`grayscale w-auto h-[350px] rounded-lg transition-transform duration-500 ease-in-out ${
              hoveredIndex !== null
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-[60deg] scale-0 opacity-0"
            }`}
            src={hoveredIndex !== null ? servicesArr[hoveredIndex].image : ""}
            alt={hoveredIndex !== null ? servicesArr[hoveredIndex].title : ""}
            loading="lazy"
          />
          <p
            className={`text-xl mt-16 text-center transition-opacity duration-700 ease-in-out ${
              hoveredIndex !== null ? "opacity-100" : "opacity-0"
            }`}
          >
            {hoveredIndex !== null ? servicesArr[hoveredIndex].hoverText : ""}
          </p>
        </div>

        {/* Right Side: Services List */}
        <div className="pt-8 pb-16 w-full md:w-3/5 md:border-l px-8">
          <ul className="space-y-2">
            {servicesArr.map((service, index) => (
              <li
                key={service.id}
                className="relative flex flex-col justify-start items-start"
              >
                <span
                  className={`hover:text-portfolio text-4xl md:text-4xl font-normal my-5 cursor-pointer transition-all duration-700 ease-in-out`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    paddingLeft: hoveredIndex === index ? "4rem" : "0rem",
                    transition: "padding-left 0.5s ease-in-out",
                  }}
                  aria-label={`Service: ${service.title}`}
                >
                  {service.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile View: Card Layout (width < 400px) */}
      <div className="md:hidden">
        <div className="flex flex-col">
          {servicesArr.map((service) => (
            <div
              key={service.id}
              className="border-b p-6 flex flex-col items-center"
            >
              {/* Service Image (Increased width for mobile view) */}
              <img
                className="w-auto h-[250px] object-cover mb-4 grayscale"
                src={service.image}
                alt={service.title}
              />
              {/* Service Title */}
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {service.title}
              </h2>
              {/* Hover Text (Always visible in mobile view) */}
              <p className="text-lg text-center">{service.hoverText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
