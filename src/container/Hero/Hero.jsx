import { lion } from "../../assets/index";
import { VisitHere } from "../../components/index";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section (Image) */}
      <div className="border-t md:border-t md:border-b md:border-r p-8 md:p-16 w-full md:w-2/5">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src={lion}
          alt="hero"
        />
      </div>

      {/* Right Section (Text) */}
      <div className="border-b md:border-t md:border-b p-8 md:p-16 w-full md:w-3/5 text-xl space-y-6">
        <h3 className="text-2xl font-montserrat font-medium text-accent">
          &quot;Hello World&quot;
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          My name is <span className="text-portfolio">Ovilash Jalui</span>, and
          I am a Full Stack Developer.
        </h1>
        <p className="text-lg md:text-xl">
          I specialize in creating visually stunning and user-friendly digital
          products such as applications, websites, and other digital platforms.
        </p>
        <p className="text-lg md:text-xl">
          My goal is to design digital experiences that are not only visually
          appealing but also easy to navigate and intuitive for users.
        </p>
        <p className="py-12">
          <a
            href="https://www.linkedin.com/in/jaluiovilash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VisitHere title="Say hii!" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
