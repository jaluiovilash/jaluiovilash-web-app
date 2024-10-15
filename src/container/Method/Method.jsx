import { useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "DEFINING PRODUCT",
    hoverText:
      "During the initial client meeting, we discuss the project's purpose and goals. A project plan, timeline, and scope are clearly defined to align expectations."
  },
  {
    id: "02",
    title: "RESEARCH",
    hoverText:
      "I analyze similar projects, research competitors, and conduct competitive analysis. I also study consumer behavior and market trends to inform the product direction."
  },
  {
    id: "03",
    title: "IDEATION",
    hoverText:
      "We outline the product's development strategy using personas, scenarios, and storyboards to create a comprehensive vision for the product."
  },
  {
    id: "04",
    title: "SKETCHING",
    hoverText:
      "I visualize the general layout and create the first low-fidelity wireframe, usually using Figma. This stage helps refine the product structure."
  },
  {
    id: "05",
    title: "DEFINING VISUAL MOOD",
    hoverText:
      "I develop mood boards and establish the visual style to ensure the product’s aesthetic aligns with the brand and user expectations."
  },
  {
    id: "06",
    title: "CREATING PROTOTYPE",
    hoverText:
      "A high-fidelity prototype is created with responsive design. I document interactions, states, and styles for a fully functional representation of the product."
  },
  {
    id: "07",
    title: "USABILITY TESTING",
    hoverText:
      "Conduct usability tests, followed by thorough data analysis. Insights from this testing help refine and improve the product’s usability."
  },
  {
    id: "08",
    title: "DESIGN IMPROVEMENTS",
    hoverText:
      "Research and testing data are analyzed to implement design improvements, ensuring the final product is both functional and user-friendly."
  }
];

const Method = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="method" className="scroll-mt-20 border-b">
      <div className="py-16 text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl font-semibold w-4/5 mx-auto">
          MY DEVELOPMENT PROCESS
        </h1>
      </div>

      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-t p-8 md:px-64"
        >
          {/* Title Section */}
          <div
            role="button"
            tabIndex={0}
            className="text-3xl md:text-5xl font-montserrat font-medium hover:text-portfolio cursor-pointer mb-4 md:mb-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onKeyPress={(e) => {
              if (e.key === "Enter") setHoveredIndex(index);
            }}
          >
            <span className="text-portfolio">{step.id}</span> {step.title}
          </div>

          {/* Description Section */}
          <div
            className={`md:w-1/3 w-full text-lg transition-opacity duration-500 ease-in-out ${
              hoveredIndex === index || window.innerWidth < 768
                ? "opacity-100"
                : "opacity-0"
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
