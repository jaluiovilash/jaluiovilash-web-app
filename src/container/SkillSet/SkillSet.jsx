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
    <div className="py-16 flex items-center w-full flex-col border-b">
      <h1 className="font-montserrat text-4xl md:text-6xl font-semibold w-4/5 mx-auto text-center">
        <BlurText
          text="SKILLSETS"
          delay={50}
          animateBy="words"
          direction="top"
        />
      </h1>
      <div className="flex flex-row flex-wrap mt-6 items-center justify-center gap-x-2 w-full p-8 md:px-64">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="text-white hover:text-portfolio cursor-pointer border-2 border-gray-400 border-opacity-40 rounded-full px-6 py-2 my-2 flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-portfolio hover:bg-transparent">
              <h1 className="text-center text-base md:text-lg font-medium">
                {skill}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
