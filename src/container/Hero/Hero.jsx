import { tornado } from "../../assets/index";
import { VisitHere } from "../../components/index";
import { FadeContent } from "../../components/react-bits";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border-b">
      {/* Left Section (Image) */}
      <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r p-8 md:p-16">
        <img
          className="hero-img sm:w-2/3 md:w-4/5 mx-auto h-auto object-cover rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition duration-300"
          src={tornado}
          alt="hero"
        />
      </div>

      {/* Right Section (Text) */}
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="w-full md:w-[800px] text-accent p-8 md:p-16 text-xl space-y-6">
          <p className="mb-2">Hello !!</p>
          <h1 className="leading-tight text-xl">
            My name is Ovilash Jalui, and I am a Full Stack Developer.
          </h1>
          <p>
            I create web apps that are simple, user friendly, and help
            businesses grow online. My main focus is building websites for
            businesses and individuals who want to stand out and connect with
            more people.
          </p>
          <p>
            Whether it’s bringing a startup’s idea to life with apps and digital
            products or using AI to make them smarter, I use the latest
            technology and strategies to boost online presence and help
            businesses grow faster.
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
