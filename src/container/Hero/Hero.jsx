import { tornado } from "../../assets/index";
import { VisitHere } from "../../components/index";
import { FadeContent } from "../../components/react-bits";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border-b">
      {/* Left Section (Image) */}
      <div className="flex justify-center items-center w-full md:w-2/5 border-b md:border-b-0 md:border-r p-8 md:p-16">
        <img
          className="hero-img sm:w-2/3 md:w-4/5 mx-auto h-auto object-cover rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition duration-300"
          src={tornado}
          alt="3D tornado illustration representing cutting-edge technology"
        />
      </div>

      {/* Right Section (Text) */}
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="w-full md:w-[1000px] text-accent p-8 md:p-16 text-xl font-mono space-y-6">
          <p className="mb-2">Hello !!</p>
          <h1 className="leading-tight text-xl">
            I’m Ovilash Jalui — a Software Engineer who codes for fun,
            challenge, and impact.
          </h1>
          <p>
            I build systems and interfaces that are simple yet intelligent —
            designed not just to work, but to inspire. My work blends clean UI,
            solid architecture, and scalable design, making people think deeper
            about how software should be built.
          </p>
          <p>
            With a mindset of systems thinking and creative problem-solving, I
            dedicate my intelligence to crafting solutions that create real
            value and lasting inspiration.
          </p>
          <div className="my-8 w-1/2 md:w-1/6">
            <a
              href="https://www.linkedin.com/in/jaluiovilash/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisitHere title="Say Hi!" />
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Hero;
