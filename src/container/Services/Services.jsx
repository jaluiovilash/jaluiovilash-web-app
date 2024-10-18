import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { fswd, custom, api, po, seo, mentor } from "../../assets/index";

const servicesArr = [
  {
    id: "01",
    image: fswd,
    title: "FULL-STACK DEVELOPMENT",
    hoverText:
      "I create secure, scalable, and dynamic applications using technologies like React, Node.js, MongoDB, and Express. My focus is on delivering fast and robust solutions tailored to your business."
  },
  {
    id: "02",
    image: custom,
    title: "CUSTOM WEB APP DESIGN",
    hoverText:
      "I design bespoke web applications tailored to meet your unique business needs. Whether it's a startup or an established business, my goal is to help you scale efficiently."
  },
  {
    id: "03",
    image: api,
    title: "API DEVELOPMENT & INTEGRATION",
    hoverText:
      "I develop and integrate RESTful and GraphQL APIs, ensuring seamless communication between systems and third-party services. Your applications will be more connected, efficient, and powerful."
  },
  {
    id: "04",
    image: po,
    title: "PERFORMANCE OPTIMIZATION",
    hoverText:
      "I fine-tune your web applications for optimal performance, boosting speed, security, and scalability. My aim is to keep your business running smoothly as it grows over time."
  },
  {
    id: "05",
    image: seo,
    title: "SEO OPTIMIZATION",
    hoverText:
      "I implement effective SEO strategies to enhance your search engine visibility, driving more organic traffic to your website and helping your business rank higher in search results."
  },
  {
    id: "06",
    image: mentor,
    title: "MENTORSHIP & TRAINING",
    hoverText:
      "I offer personalized mentorship and training sessions for aspiring developers, guiding them through web development principles and best practices, helping them build their careers in tech."
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div id="services" className="scroll-mt-20 md:border-b">
      {/* Services Heading */}
      <div className="py-16 border-b text-center">
        <h1
          className="font-montserrat text-5xl md:text-7xl font-semibold w-4/5 mx-auto"
          data-aos="zoom-in"
        >
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
                data-aos="fade-left"
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
              data-aos="fade-up"
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
