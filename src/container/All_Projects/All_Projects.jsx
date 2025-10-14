import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    "Data Analytics",
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
      {/* 🧭 SEO Metadata */}
      <Helmet>
        <title>
          Ovilash Jalui - Project Section | Intelligent Systems & Scalable
          Interfaces
        </title>
        <meta
          name="description"
          content="Explore the professional project collection of Ovilash Jalui — intelligent, scalable, and creative solutions built using React, TypeScript, Node.js, and modern architecture."
        />
        <meta
          name="keywords"
          content="Ovilash Jalui, Ovilash Jalui Projects, Software Engineer Projects, React, TypeScript, Node.js, ColossalCodes, Intelligent Systems, UI/UX, Full Stack Developer"
        />
        <meta name="author" content="Ovilash Jalui" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Ovilash Jalui - Projects" />
        <meta
          property="og:description"
          content="Discover innovative software projects by Ovilash Jalui — building intelligent, scalable, and creative interfaces."
        />
        <meta
          property="og:image"
          content="https://jaluiovilash.web.app/dodo.jpg"
        />
        <meta
          property="og:url"
          content="https://jaluiovilash.web.app/projects"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects by Ovilash Jalui - Intelligent Systems & Scalable Interfaces"
        />
        <meta
          name="twitter:description"
          content="Explore Ovilash Jalui's innovative, scalable, and creative projects in React, TypeScript, and Node.js."
        />
        <meta
          name="twitter:image"
          content="https://jaluiovilash.web.app/dodo.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://jaluiovilash.web.app/projects" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects by Ovilash Jalui",
            url: "https://jaluiovilash.web.app/projects",
            image: "https://jaluiovilash.web.app/dodo.jpg",
            author: {
              "@type": "Person",
              name: "Ovilash Jalui",
              url: "https://jaluiovilash.web.app",
              sameAs: [
                "https://www.linkedin.com/in/jaluiovilash/",
                "https://x.com/jaluiovilash",
                "https://github.com/jaluiovilash",
              ],
            },
            description:
              "Explore Ovilash Jalui’s professional software engineering projects — intelligent, scalable, and designed to create real impact.",
          })}
        </script>
      </Helmet>

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
