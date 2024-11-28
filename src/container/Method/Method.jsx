import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const processSteps = [
  {
    id: "01",
    title: "CLIENT VISION",
    hoverText:
      "In the first client meeting, I focus on understanding their business goals, target audience, and project objectives. A clear project plan, scope, and timeline are agreed upon to ensure alignment."
  },
  {
    id: "02",
    title: "MARKET RESEARCH",
    hoverText:
      "I dive deep into competitor analysis, market trends, and user behavior to understand the market landscape and to help shape the product’s direction."
  },
  {
    id: "03",
    title: "STRATEGY DESIGN",
    hoverText:
      "I develop a strategy by outlining user personas, use cases, and potential user journeys to visualize the product’s key features and functionalities."
  },
  {
    id: "04",
    title: "WIREFRAME CREATION",
    hoverText:
      "I build low-fidelity wireframes that map out the product structure and functionality. Using Figma or other design tools, I focus on usability and the overall user experience."
  },
  {
    id: "05",
    title: "VISUAL DESIGN",
    hoverText:
      "I establish the visual style by creating mood boards and designing high-fidelity UI elements. This stage ensures the design matches the brand's identity and appeals to the target audience."
  },
  {
    id: "06",
    title: "PROTOTYPE BUILD",
    hoverText:
      "I create an interactive, high-fidelity prototype that simulates the final product. This includes defining responsive layouts, UI interactions, and refining the product’s look and feel."
  },
  {
    id: "07",
    title: "USER TESTING",
    hoverText:
      "I conduct usability testing with real users and analyze the results. The feedback collected helps refine the user interface and improves the overall product experience."
  },
  {
    id: "08",
    title: "ITERATIVE IMPROVEMENTS",
    hoverText:
      "Based on testing results and client feedback, I implement design and functionality improvements to enhance the product’s usability and effectiveness."
  },
  {
    id: "09",
    title: "LAUNCH PREP",
    hoverText:
      "After the final prototype is approved, I prepare the product for deployment. I ensure that the site or application is optimized for performance and ready for launch."
  },
  {
    id: "10",
    title: "POST-LAUNCH",
    hoverText:
      "Once the project is live, I provide ongoing maintenance, updates, and support. I also assist with digital marketing, SEO, and social media strategy to help grow the product's presence."
  }
];

const Method = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div id="method" className="scroll-mt-20 border-b">
      <div className="py-16 text-center">
        <h1
          className="font-montserrat text-4xl md:text-6xl font-semibold w-4/5 mx-auto"
          data-aos="zoom-in"
        >
          MY DEVELOPMENT PROCESS
        </h1>
      </div>

      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-t p-8 md:px-64 transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => handleClick(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Title Section */}
          <div
            role="button"
            tabIndex={0}
            className="text-3xl md:text-5xl font-montserrat font-medium hover:text-portfolio cursor-pointer mb-4 md:mb-0 transition-colors duration-300 ease-in-out"
          >
            <span className="text-portfolio">{step.id}</span> {step.title}
          </div>

          {/* Description Section */}
          <div
            className={`md:w-1/3 w-full text-lg transition-all duration-500 ease-in-out transform ${
              hoveredIndex === index ||
              window.innerWidth < 768 ||
              clickedIndex === index
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
