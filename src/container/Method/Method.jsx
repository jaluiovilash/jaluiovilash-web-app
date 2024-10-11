import { useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "PROJECT DISCOVERY",
    hoverText:
      "We begin by understanding the scope and goals of your project. A roadmap is created based on your business needs, timeline, and budget."
  },
  {
    id: "01",
    title: "PROJECT DISCOVERY",
    hoverText:
      "We begin by understanding the scope and goals of your project. A roadmap is created based on your business needs, timeline, and budget."
  },
  {
    id: "01",
    title: "PROJECT DISCOVERY",
    hoverText:
      "We begin by understanding the scope and goals of your project. A roadmap is created based on your business needs, timeline, and budget."
  },
  {
    id: "01",
    title: "PROJECT DISCOVERY",
    hoverText:
      "We begin by understanding the scope and goals of your project. A roadmap is created based on your business needs, timeline, and budget."
  },
  {
    id: "01",
    title: "PROJECT DISCOVERY",
    hoverText:
      "We begin by understanding the scope and goals of your project. A roadmap is created based on your business needs, timeline, and budget."
  },
  {
    id: "01",
    title: "PROJECT DISCOVERY",
    hoverText:
      "We begin by understanding the scope and goals of your project. A roadmap is created based on your business needs, timeline, and budget."
  }
];

const Method = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="method" className="scroll-mt-20 border-b">
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl font-semibold w-4/5 mx-auto">
          MY DEVELOPMENT PROCESS
        </h1>
      </div>

      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-t p-8 md:px-64"
        >
          <div
            role="button"
            tabIndex={0} // Makes it focusable
            className="text-3xl md:text-5xl font-montserrat font-medium hover:text-portfolio cursor-pointer mb-4 md:mb-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onKeyPress={(e) => {
              if (e.key === "Enter") setHoveredIndex(index);
            }} // Handle keyboard interaction
          >
            <span className="text-portfolio">{step.id}</span> {step.title}
          </div>

          <div
            className={`md:w-1/3 w-full text-lg transition-opacity duration-500 ease-in-out ${
              hoveredIndex === index || window.innerWidth < 768
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <p className="text-secondary">{step.hoverText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Method;
