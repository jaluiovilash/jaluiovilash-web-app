import { useState } from "react";
import { fswd, custom, api, po, seo, dgtl } from "../../assets/index";

const servicesArr = [
  {
    id: "01",
    image: fswd,
    title: "CUSTOM UX/UI DESIGN",
    hoverText:
      "We create easy-to-use and attractive designs that match your brand and make your website or app enjoyable for users."
  },
  {
    id: "02",
    image: custom,
    title: "INTERACTIVE FRONT-END SOLUTIONS",
    hoverText:
      "We build fast and responsive websites that look great and work perfectly on all devices, like phones, tablets, and computers."
  },
  {
    id: "03",
    image: api,
    title: "SCALABLE BACK-END ARCHITECTURE",
    hoverText:
      "We set up strong and secure systems to make sure your website or app runs smoothly and can grow with your business."
  },
  {
    id: "04",
    image: po,
    title: "STARTUP MVP DEVELOPMENT",
    hoverText:
      "We help startups by quickly creating a basic version of their product to test ideas and show them to users."
  },
  {
    id: "05",
    image: seo,
    title: "END-TO-END FULL-STACK DEVELOPMENT",
    hoverText:
      "We handle everything from design to coding for your website or app, making sure it works perfectly from start to finish."
  },
  {
    id: "06",
    image: dgtl,
    title: "DIGITAL MARKETING & STRATEGY",
    hoverText:
      "We help your business grow online with smart strategies, including managing social media, creating content, and improving SEO."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="services" className="scroll-mt-20 md:border-b">
      {/* Services Heading */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-semibold w-4/5 mx-auto">
          SERVICES
        </h1>
      </div>

      {/* Desktop Version: Left Side - Image, Right Side - Services List */}
      <div className="hidden md:flex flex-row">
        {/* Left Side: Image (Desktop View) */}
        <div className="md:w-2/5 h-[600px] flex flex-col justify-start md:justify-center items-center p-8 md:p-20">
          <img
            className={`w-auto h-[350px] rounded-lg transition-transform duration-500 ease-in-out ${
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
                    transition: "padding-left 0.5s ease-in-out"
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
                className="w-auto h-[250px] object-cover mb-4"
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
