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
    <div className="flex items-center w-full flex-col border-b">
      <h1 className="py-16 text-center font-montserrat text-5xl md:text-7xl font-semibold w-4/5 mx-auto">
        SKILLSETS
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
