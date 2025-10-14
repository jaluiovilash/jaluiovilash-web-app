import VisitHere from "./VisitHere";

const ProjectCard = ({ project, variant = "small" }) => {
  const isBig = variant === "big";

  return (
    <article
      className={`bg-card rounded-xl p-4 sm:p-5 border border-gray-300 shadow-sm transition-none w-full overflow-hidden
        ${
          isBig
            ? "min-h-[360px] sm:min-h-[440px]"
            : "min-h-[300px] sm:min-h-[360px]"
        } 
        m-2 sm:m-3`}
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden"
        aria-label={`Open ${project.title} in new tab`}
      >
        <img
          src={project.image || "/placeholder.png"}
          alt={project.title || "project image"}
          loading="lazy"
          className={`w-full object-cover rounded-md mb-3 sm:mb-4
            ${isBig ? "h-48 sm:h-64 md:h-80" : "h-40 sm:h-48 md:h-64"}`}
        />
      </a>

      {/* Title */}
      <h3
        id={`project-${project.id}-title`}
        className={`font-semibold text-foreground mb-1 sm:mb-2
          ${
            isBig
              ? "text-xl sm:text-2xl md:text-3xl"
              : "text-base sm:text-lg md:text-xl"
          }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={`text-muted-foreground mt-1 sm:mt-2
          ${
            isBig ? "line-clamp-3 text-sm sm:text-base" : "line-clamp-2 text-sm"
          }`}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={`text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-md font-medium
                ${
                  isBig
                    ? "bg-secondary/25 text-secondary-foreground"
                    : "bg-secondary/20 text-secondary-foreground"
                }`}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-5 gap-2 sm:gap-0">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-mono"
        >
          <VisitHere title="Explore Project" />
        </a>
        {project.code ? (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-medium text-portfolio hover:text-white transition-colors"
          >
            Source Code
          </a>
        ) : (
          <span className="text-xs sm:text-sm text-muted-foreground">
            No repo
          </span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
