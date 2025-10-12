import { useState } from "react";
import { ShinyText } from "../../components/react-bits/index";

const processSteps = [
  {
    id: "01",
    title: "CLIENT INSIGHT",
    hoverText:
      "We dive deep into understanding your goals, target audience, and project needs to build a solution tailored to your vision.",
  },
  {
    id: "02",
    title: "PROJECT PLANNING",
    hoverText:
      "We create a strategic roadmap, outlining objectives, timelines, budgets, and the best technologies to ensure project success.",
  },
  {
    id: "03",
    title: "DESIGN CREATION",
    hoverText:
      "We develop interactive wireframes and detailed mockups, shaping the visual identity and user experience of your solution.",
  },
  {
    id: "04",
    title: "CONTENT DEVELOPMENT",
    hoverText:
      "We craft engaging and high-quality content, including text, images, and media, that resonates with your target audience.",
  },
  {
    id: "05",
    title: "CODE EXECUTION",
    hoverText:
      "We build a robust, scalable, and responsive web solution with clean and efficient code, ensuring top-notch performance.",
  },
  {
    id: "06",
    title: "QUALITY TESTING",
    hoverText:
      "We rigorously test the application to ensure flawless functionality, refining it based on feedback for a perfect final product.",
  },
  {
    id: "07",
    title: "FINAL LAUNCH",
    hoverText:
      "We seamlessly launch your project and provide ongoing support, maintenance, and updates to keep it optimized and successful.",
  },
];

const Method = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div id="method" className="scroll-mt-20 border-b">
      <div className="py-16 text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl font-bold w-4/5 mx-auto">
          <ShinyText text="MY DEVELOPMENT PROCESS" />
        </h1>
      </div>

      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-t p-8 md:p-6 md:px-64 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer font-mono"
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          role="button"
          tabIndex={0}
          aria-label={`Step ${step.id}: ${step.title}`}
        >
          {/* Title Section */}
          <div className="text-3xl md:text-5xl font-medium hover:text-portfolio transition-colors duration-300 ease-in-out mb-4 md:mb-0">
            <span className="text-portfolio font-semibold">{step.id}</span>{" "}
            {step.title}
          </div>

          {/* Description Section */}
          <div
            className={`md:w-1/3 w-full text-lg transition-all duration-500 ease-in-out transform ${
              // Show description by default on mobile/tablet and on click or hover on desktop
              window.innerWidth < 768 || clickedIndex === index
                ? "opacity-100 translate-y-0"
                : hoveredIndex === index || clickedIndex === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            } md:block`}
          >
            <p className="text-secondary">{step.hoverText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Method;
