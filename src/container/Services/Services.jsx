import { useState } from "react";
import { lion } from "../../assets/index";

const servicesArr = [
  {
    id: "01",
    image: lion, // Placeholder image path
    title: "UI/UX Design",
    hoverText:
      "Designing user-friendly interfaces and enhancing user experiences."
  },
  {
    id: "02",
    image: lion, // Placeholder image path
    title: "Mobile App Design",
    hoverText:
      "Crafting intuitive mobile applications for a seamless user journey."
  },
  {
    id: "03",
    image: lion, // Placeholder image path
    title: "Landing Page Design UX",
    hoverText:
      "Building high-converting landing pages optimized for user engagement."
  },
  {
    id: "04",
    image: lion, // Placeholder image path
    title: "Research Website Design",
    hoverText:
      "Creating research-oriented websites to deliver content efficiently."
  },
  {
    id: "05",
    image: lion, // Placeholder image path
    title: "Development",
    hoverText:
      "Developing responsive and scalable web applications tailored to your needs."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="services" className="scroll-mt-20 border-b">
      {/* Services Heading */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl font-semibold w-4/5 mx-auto">
          SERVICES
        </h1>
      </div>

      {/* Desktop Version: Left Side - Image, Right Side - Services List */}
      <div className="hidden md:flex flex-row">
        {/* Left Side: Image (Desktop View) */}
        <div className="md:w-2/5 flex justify-center md:justify-end items-center p-8 md:p-20">
          <img
            className={`w-[450px] transition-transform duration-500 ease-in-out transform ${
              hoveredIndex !== null
                ? "rotate-[0deg] scale-100 opacity-100"
                : "rotate-[30deg] scale-90 opacity-0"
            }`}
            src={hoveredIndex !== null ? servicesArr[hoveredIndex].image : ""}
            alt=""
          />
        </div>

        {/* Right Side: Services List */}
        <div className="pt-8 pb-16 w-full md:w-3/5 border-t md:border-l px-8">
          <ul>
            {servicesArr.map((service, index) => (
              <li key={service.id}>
                <h2
                  className={`hover:text-portfolio text-4xl md:text-5xl font-medium py-4 cursor-pointer transition-transform duration-500 ease-in-out ${
                    hoveredIndex === index ? "translate-x-16" : "translate-x-0"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {service.title}
                </h2>
              </li>
            ))}
          </ul>

          {/* Hover Text */}
          <p
            className={`text-xl pt-16 transition-all duration-500 ease-in-out transform ${
              hoveredIndex !== null
                ? "opacity-100 translate-x-16"
                : "opacity-0 translate-x-0"
            }`}
          >
            {hoveredIndex !== null ? servicesArr[hoveredIndex].hoverText : ""}
          </p>
        </div>
      </div>

      {/* Mobile View: Card Layout (width < 400px) */}
      <div className="md:hidden">
        <div className="flex flex-col">
          {servicesArr.map((service, index) => (
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
