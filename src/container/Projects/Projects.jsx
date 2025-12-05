// src/sections/Projects/Projects.jsx

import { ShinyText } from "../../components/react-bits/index";
import VisitHere from "../../components/VisitHere";
import { allProjects } from "../../assets/data/all_projects";

// mode can be: "glass" | "parallax" | "split" | "cinematic"
const Projects = ({ mode = "glass" }) => {
  // 👉 Choose which 4 projects to show
  const visibleProjectIds = [1, 3, 4, 6];

  // 👉 Fetch only selected projects
  const selectedProjects = allProjects.filter((project) =>
    visibleProjectIds.includes(project.id)
  );

  const renderCard = (project, index) => {
    const isEven = index % 2 === 0;

    // 🌫️ 1) GLASS MODE
    if (mode === "glass") {
      return (
        <article className="relative group">
          {/* subtle glow behind */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/10 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 backdrop-blur-xl p-6 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            {/* Bigger Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-72 md:h-96 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>

            <div className="mt-5 space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                {project.title}
              </h2>

              {project.description && (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* Type */}
              {project.type && (
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-gray-100/80">
                  {project.type}
                </span>
              )}

              {/* Links – stacked */}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono"
                >
                  <VisitHere title="Explore Project" />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium text-portfolio hover:text-white transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      );
    }

    // 🎚️ 2) PARALLAX MODE
    if (mode === "parallax") {
      return (
        <article className="group perspective-[1200px]">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 backdrop-blur-xl p-6 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.4)] transform-gpu transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
            {/* Bigger Image */}
            <div className="relative overflow-hidden rounded-xl transform-gpu transition-transform duration-500 group-hover:rotate-[0.7deg] group-hover:scale-[1.03]">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-72 md:h-96 object-cover"
                />
              </a>
            </div>

            <div className="mt-5 space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                {project.title}
              </h2>

              {project.description && (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* Links – stacked */}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono"
                >
                  <VisitHere title="Explore Project" />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium text-portfolio hover:text-white transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      );
    }

    // 🪟 3) SPLIT MODE
    if (mode === "split") {
      const imageFirst = isEven;
      return (
        <article className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.4)]">
          <div
            className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${
              imageFirst ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Bigger Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-1/2 block overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-72 md:h-96 object-cover rounded-xl transform transition-transform duration-500 hover:scale-[1.03]"
              />
            </a>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {project.title}
              </h2>

              {project.description && (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.type && (
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-gray-100/80">
                  {project.type}
                </span>
              )}

              {/* Links – stacked */}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono"
                >
                  <VisitHere title="Explore Project" />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium text-portfolio hover:text-white transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      );
    }

    // 🎬 4) CINEMATIC MODE
    return (
      <article className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_22px_70px_rgba(0,0,0,0.7)]">
        <div className="relative">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {/* Bigger cinematic height here */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-96 md:h-[30rem] object-cover transform-gpu transition-transform duration-[900ms] hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </a>

          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-8 md:right-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white drop-shadow-lg">
              {project.title}
            </h2>

            {project.type && (
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-300/90">
                {project.type}
              </p>
            )}
          </div>
        </div>

        {/* Bottom panel: description → links stacked */}
        <div className="px-6 md:px-8 py-5 md:py-6 flex flex-col gap-4 bg-gradient-to-r from-white/5 via-white/3 to-white/5">
          {project.description && (
            <p className="text-sm md:text-base text-gray-200/90 md:max-w-xl">
              {project.description}
            </p>
          )}

          <div className="flex flex-col gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-mono"
            >
              <VisitHere title="Explore Project" />
            </a>

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium text-portfolio hover:text-white transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="scroll-mt-20" id="projects">
      {/* Project Title */}
      <div className="py-16 border-b text-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold w-3/5 mx-auto">
          <ShinyText text="PROJECTS" />
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        {selectedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`border-b lg:border-r ${
              index % 2 === 0 ? "lg:border-r" : "lg:border-r-0"
            }`}
          >
            {/* Big index number */}
            <h1
              className={`py-8 px-6 lg:px-24 font-montserrat font-bold text-7xl md:text-8xl ${
                index % 2 === 0
                  ? "text-portfolio flex justify-end"
                  : "text-white flex justify-start"
              }`}
            >
              {`0${index + 1}`}
            </h1>

            {/* Render card */}
            <div className="project_content py-8 px-6 lg:px-24 border-t">
              {renderCard(project, index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
