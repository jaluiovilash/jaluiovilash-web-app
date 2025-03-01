import { project1, project2, project3, coming_soon_grey } from "../../assets";
import { VisitHere } from "../../components/index";
import { BlurText } from "../../components/react-bits";

const Projects = () => {
  const projectDetails = [
    {
      id: 1,
      image: project1,
      link: "https://apple-iphone15.web.app/",
      title: "iPhone 15 Website Clone",
      description: `This is a clone of Apple’s iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.`
    },
    {
      id: 2,
      image: project2,
      link: "https://brainwave-in.web.app/",
      title: "Brainwave",
      description: `A sleek React.js and Tailwind CSS website showcasing modern UI/UX with seamless animations and exceptional user experience, setting a high standard and serving as inspiration for future applications and websites.`
    },
    {
      id: 3,
      image: project3,
      link: "https://github.com/jaluiovilash/RaktSetu-Backend.git",
      title: "RaktSetu - Blood Bank Management System Backend",
      description: `RaktSetu backend, a Node.js-powered Blood Bank Management System, streamlines donor registrations, blood stock, hospital requests, and emergency notifications using Express and MongoDB for efficient inventory and request handling.`
    },
    {
      id: 4,
      image: coming_soon_grey,
      link: "https://colossalcodes.vercel.app/",
      title: "Renovated Web App",
      description: `Ongoing redesign of an edtech web app using NextJS. Soon to be deployed. Transforming legacy systems with modern design.`
    }
  ];

  return (
    <div className="scroll-mt-20" id="projects">
      {/* Project Title */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-semibold w-3/5 mx-auto">
          <BlurText
            text="PROJECTS"
            delay={50}
            animateBy="words"
            direction="top"
          />
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        {projectDetails.map((project, index) => (
          <div
            key={project.id}
            className={`border-b lg:border-r ${
              index % 2 === 0 ? "lg:border-r" : "lg:border-r-0"
            }`}
          >
            <h1
              className={`py-8 px-6 lg:px-24 font-arial font-semibold text-7xl md:text-8xl ${
                index % 2 === 0
                  ? "text-portfolio flex justify-end"
                  : "text-white flex justify-start"
              }`}
            >
              {`0${project.id}`}
            </h1>
            <div className="project_content py-8 px-6 lg:px-24 border-t">
              <img
                className="my-6 w-auto h-[300px] object-cover rounded-lg"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
              >
                <VisitHere title="Explore Project" />
              </a>
              <h2 className="text-xl font-medium py-4">{project.title}</h2>
              <p className="descp text-xl py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
