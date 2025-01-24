import { project1, project2, project3, coming_soon_grey } from "../../assets";
import { VisitHere } from "../../components/index";

const Projects = () => {
  return (
    <div className="scroll-mt-20" id="projects">
      {/* Project Title */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-semibold w-3/5 mx-auto">
          PROJECTS
        </h1>
      </div>

      {/* Project Grid */}
      <div className="border-b grid grid-cols-1 lg:grid-cols-2 mx-auto">
        {/* Project 01 */}
        <div className="border-b lg:border-r">
          <h1 className="text-portfolio py-8 px-6 lg:px-24 font-montserrat font-semibold text-7xl md:text-8xl flex justify-end">
            01
          </h1>
          <div className="project_content py-8 px-6 lg:px-24 border-t">
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={project1}
              alt="Project 1"
            />
            <a
              href="https://apple-iphone15.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <VisitHere title="Explore Project" />
            </a>
            <h2 className="text-xl font-medium py-4">
              iPhone 15 Website Clone
            </h2>
            <p className="descp text-xl py-4">
              This is a clone of Apple&apos;s iPhone 15 Pro website using
              React.js and TailwindCSS. It highlights the effective use of GSAP
              (Greensock Animations) and Three.js for displaying iPhone 15 Pro
              models in various colors and shapes.
            </p>
          </div>
        </div>

        {/* Project 02 */}
        <div className="border-b lg:border-r-0">
          <h1 className="py-8 px-6 lg:px-24 font-montserrat font-semibold text-7xl md:text-8xl flex">
            02
          </h1>
          <div className="project_content py-8 px-6 lg:px-24 border-t">
            <a
              href="https://github.com/jaluiovilash/ChirpNet.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <VisitHere title="Explore Project" />
            </a>
            <h2 className="text-xl font-medium py-4">ChirpNet</h2>
            <p className="descp text-xl py-4">
              Twitter clone enabling secure CRUD operations for posts. Built
              with Django backend and Bootstrap frontend. A demonstration of
              social media platform development.
            </p>
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={project2}
              alt="Project 2"
              loading="lazy"
            />
          </div>
        </div>

        {/* Project 03 */}
        <div className="border-b lg:border-r">
          <h1 className="text-portfolio py-8 px-6 lg:px-24 font-montserrat font-semibold text-7xl md:text-8xl flex justify-start">
            03
          </h1>
          <div className="project_content py-8 px-6 lg:px-24 border-t">
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={project3}
              alt="Project 3"
              loading="lazy"
            />
            <a
              href="https://github.com/jaluiovilash/RaktSetu-Backend.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <VisitHere title="Explore Project" />
            </a>
            <h2 className="text-xl font-medium py-4">
              RaktSetu - Blood Bank Management System Backend
            </h2>
            <p className="descp text-xl py-4">
              RaktSetu backend, a Node.js-powered Blood Bank Management System,
              streamlines donor registrations, blood stock, hospital requests,
              and emergency notifications using Express and MongoDB for
              efficient inventory and request handling.
            </p>
          </div>
        </div>

        {/* Project 04 */}
        <div className="border-b lg:border-r-0">
          <h1 className="py-8 px-6 lg:px-24 font-montserrat font-semibold text-7xl md:text-8xl flex justify-end">
            04
          </h1>
          <div className="project_content py-8 px-6 lg:px-24 border-t">
            <a
              href="/#projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <VisitHere title="Coming Soon..." />
            </a>
            <h2 className="text-xl font-medium py-4">Renovated Web App</h2>
            <p className="descp text-xl py-4">
              Ongoing redesign of an outdated web app using React. Soon to be
              deployed. Transforming legacy systems with modern design.
            </p>
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={coming_soon_grey}
              alt="Project 4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
