import { lion } from "../../assets";
import { VisitHere } from "../../components/index";

const Projects = () => {
  return (
    <div className="scroll-mt-20" id="projects">
      {/* Project Title */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-6xl md:text-7xl font-semibold w-3/5 mx-auto">
          PROJECTS
        </h1>
      </div>

      {/* Project Grid */}
      <div className="border-b grid grid-cols-1 lg:grid-cols-2 mx-auto">
        {/* Project 01 */}
        <div className="border-b lg:border-r">
          <h1 className="text-portfolio py-8 px-6 lg:px-12 font-montserrat font-semibold text-7xl md:text-8xl flex justify-end">
            01
          </h1>
          <div className="project_content py-8 px-6 lg:px-12 border-t">
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={lion}
              alt="Project 1"
            />
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="Explore Project" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
          </div>
        </div>

        {/* Project 02 */}
        <div className="border-b lg:border-r-0">
          <h1 className="py-8 px-6 lg:px-12 font-montserrat font-semibold text-7xl md:text-8xl flex">
            02
          </h1>
          <div className="project_content py-8 px-6 lg:px-12 border-t">
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="Explore Project" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={lion}
              alt="Project 2"
            />
          </div>
        </div>

        {/* Project 03 */}
        <div className="border-b lg:border-r">
          <h1 className="text-portfolio py-8 px-6 lg:px-12 font-montserrat font-semibold text-7xl md:text-8xl flex justify-start">
            03
          </h1>
          <div className="project_content py-8 px-6 lg:px-12 border-t">
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={lion}
              alt="Project 3"
            />
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="Explore Project" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
          </div>
        </div>

        {/* Project 04 */}
        <div className="">
          <h1 className="py-8 px-6 lg:px-12 font-montserrat font-semibold text-7xl md:text-8xl flex justify-end">
            04
          </h1>
          <div className="project_content py-8 px-6 lg:px-12 border-t">
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="Explore Project" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
            <img
              className="my-6 w-auto h-[300px] object-cover rounded-lg"
              src={lion}
              alt="Project 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
