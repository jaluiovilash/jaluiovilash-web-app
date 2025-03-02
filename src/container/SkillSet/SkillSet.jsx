import { BlurText } from "../../components/react-bits";

const skills = [
  "React JS",
  "Next JS",
  "Tailwind CSS",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Nest JS",
  "Django",
  "Firebase",
  "Vercel",
  "TypeScript",
  "JavaScript",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD Pipelines",
  "WebSockets"
];

const SkillSet = () => {
  return (
    <div className="py-12 flex items-center w-full flex-col border-b border-gray-700">
      <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold w-11/12 sm:w-4/5 mx-auto text-center">
        <BlurText
          text="SKILLSETS"
          delay={50}
          animateBy="words"
          direction="top"
        />
      </h1>

      <div className="flex flex-wrap justify-center gap-3 w-full p-6 sm:p-8 md:px-24 lg:px-48">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            <div className="text-white border border-gray-500 border-opacity-50 rounded-full px-5 py-2 text-sm sm:text-base md:text-lg font-medium hover:text-portfolio hover:border-portfolio hover:shadow-lg hover:bg-transparent cursor-pointer">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
