import VisitHere from "./VisitHere";

const ProjectCard = ({ project, variant = "small" }) => {
  const isBig = variant === "big";

  return (
    <article
      className={`bg-card rounded-xl p-5 border border-gray-300 shadow-sm transition-none w-full overflow-hidden
        ${isBig ? "md:min-h-[440px]" : "md:min-h-[360px]"} m-3`}
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
          className={`w-full object-cover rounded-md mb-4
            ${isBig ? "h-64 md:h-80" : "h-48 md:h-64"}`}
        />
      </a>

      {/* Title */}
      <h3
        id={`project-${project.id}-title`}
        className={`font-semibold text-foreground mb-2
          ${isBig ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={`text-muted-foreground mt-2
          ${isBig ? "line-clamp-3 text-lg" : "line-clamp-2 text-md"}`}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded-md font-medium
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
      <div className="flex items-center justify-between mt-5">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-mono"
        >
          <VisitHere title="Explore Project" />
        </a>
        {project.code ? (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-lg text-portfolio hover:text-white"
          >
            Source Code
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">No repo</span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
