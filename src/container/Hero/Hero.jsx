import { useEffect } from "react";
import { animateWithGsap } from "../../utils/animations";
import { lion } from "../../assets/index";
import { VisitHere } from "../../components/index";

const Hero = () => {
  useEffect(() => {
    animateWithGsap(".hero-img", { opacity: 1 }, { start: "top 80%" });
    animateWithGsap(
      ".hero-text h1",
      { opacity: 1, y: 0 },
      { start: "top 90%" }
    );
    animateWithGsap(".hero-text p", { opacity: 1, y: 0 }, { start: "top 90%" });
    animateWithGsap(
      ".hero-text h2",
      { opacity: 1, y: 0 },
      { start: "top 90%" }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row border-b">
      {/* Left Section (Image) */}
      <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r p-8 md:p-16">
        <img
          className="hero-img w-full h-auto object-cover rounded-lg shadow-lg opacity-0"
          src={lion}
          alt="hero"
        />
      </div>

      {/* Right Section (Text) */}
      <div className="w-full md:w-[800px] text-accent p-8 md:p-16 text-xl space-y-6 hero-text">
        <h2 className="opacity-0 transform translate-y-10">Hello!</h2>
        <h1 className="leading-tight text-xl opacity-0 transform translate-y-10">
          My name is Ovilash Jalui, and I am a Full Stack Developer.
        </h1>
        <p className="opacity-0 transform translate-y-10">
          I create web-apps that are simple, user-friendly, and help businesses
          grow online. My main focus is building websites for businesses and
          individuals who want to stand out and connect with more people.
        </p>
        <p className="opacity-0 transform translate-y-10">
          Whether it’s bringing a startup’s idea to life with apps and digital
          products or using AI to make them smarter, I use the latest technology
          and strategies to boost online presence and help businesses grow
          faster.
        </p>
        <div className="py-8 w-1/2 md:w-1/6">
          <a
            href="https://www.linkedin.com/in/jaluiovilash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VisitHere title="Say Hi!" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
