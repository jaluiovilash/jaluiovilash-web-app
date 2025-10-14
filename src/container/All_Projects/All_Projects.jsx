import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProjectCard from "../../components/ProjectCard";
import FilterDropdown from "../../components/FilterDropdown";
import Pagination from "../../components/Pagination";
import { ShinyText } from "../../components/react-bits";
import { allProjects } from "../../assets/data/all_projects";

const All_Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "Machine Learning",
    "Data Analyst",
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  // 🔍 Filter Logic
  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === activeFilter);

  // 📄 Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  // 🧠 Build layered pairs
  const layers = [];
  for (let i = 0; i < currentProjects.length; i += 2) {
    const left = currentProjects[i];
    const right = currentProjects[i + 1];
    const layerIndex = Math.floor(i / 2);
    const isEvenLayer = layerIndex % 2 === 0;

    layers.push(
      <div
        key={`layer-${i}`}
        className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10"
      >
        {/* Left Card */}
        {left && (
          <div
            className={`w-full ${
              isEvenLayer ? "md:w-3/5" : "md:w-2/5"
            } transition-all duration-300`}
          >
            <ProjectCard
              project={left}
              variant={isEvenLayer ? "big" : "small"}
            />
          </div>
        )}

        {/* Right Card */}
        {right && (
          <div
            className={`w-full ${
              isEvenLayer ? "md:w-2/5" : "md:w-3/5"
            } transition-all duration-300`}
          >
            <ProjectCard
              project={right}
              variant={isEvenLayer ? "small" : "big"}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <div className="navbar mb-20">
        <Navbar />
      </div>

      {/* Projects Section */}
      <div className="scroll-mt-20" id="all-projects">
        {/* Header + Filter */}
        <div className="pt-16 pb-12 border-b flex flex-col lg:flex-row items-center justify-around px-6 lg:px-24 mx-auto">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold">
            <ShinyText text="PROJECT SECTION" />
          </h1>

          {/* Filter Dropdown */}
          <div className="mt-6 lg:mt-0 ml-auto">
            <FilterDropdown
              categories={categories}
              active={activeFilter}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Layered Projects */}
        <div className="px-6 md:px-24 max-w-[1700px] mx-auto py-16">
          {layers.length > 0 ? (
            layers
          ) : (
            <p className="h-[40vh] flex justify-center items-center text-muted-foreground mt-10 text-xl text-gray-300">
              No projects found for this category.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default All_Projects;
