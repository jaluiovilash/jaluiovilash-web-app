import { lion } from "../../assets";
import { VisitHere } from "../../components/index";

const Projects = () => {
  return (
    <div className="scroll-mt-20" id="projects">
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-6xl md:text-7xl font-semibold w-3/5 mx-auto">
          PROJECTS
        </h1>
      </div>

      <div className="border-b grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="border-b lg:border-r">
          <h1 className="text-portfolio py-8 px-28 lg:px-52 font-montserrat font-semibold text-7xl md:text-8xl flex justify-end">
            01
          </h1>
          <div className="project_content py-8 px-6 lg:px-52 border-t">
            <img className="my-6" src={lion} alt="" />
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="hello" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
          </div>
        </div>

        <div className="border-b lg:border-r">
          <h1 className="py-8 px-28 lg:px-52 font-montserrat font-semibold text-7xl md:text-8xl flex">
            02
          </h1>
          <div className="project_content py-8 px-6 lg:px-52 border-t">
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="hello" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
            <img className="my-6" src={lion} alt="" />
          </div>
        </div>

        {/* Project 03 */}
        <div className="border-b lg:border-r">
          <h1 className="text-portfolio py-8 px-28 lg:px-52 font-montserrat font-semibold text-7xl md:text-8xl flex justify-start">
            03
          </h1>
          <div className="project_content py-8 px-6 lg:px-52 border-t">
            <img className="my-6" src={lion} alt="" />
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="hello" />
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
          <h1 className="py-8 px-28 lg:px-52 font-montserrat font-semibold text-7xl md:text-8xl flex justify-end">
            04
          </h1>
          <div className="project_content py-8 px-6 lg:px-52 border-t">
            <a href="/" target="_blank" className="text-xl">
              <VisitHere title="hello" />
            </a>
            <p className="text-xl py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur voluptas nesciunt laborum vel, ratione soluta culpa iste,
              corrupti repellendus animi quis! Ratione, obcaecati? In nihil,
              eligendi reiciendis explicabo enim facere exercitationem.
            </p>
            <img className="my-6" src={lion} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
