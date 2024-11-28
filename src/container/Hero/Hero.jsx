import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { lion } from "../../assets/index";
import { VisitHere } from "../../components/index";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row border-b">
      {/* Left Section (Image) */}
      <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r p-8 md:p-16">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          data-aos="zoom-in"
          src={lion}
          alt="hero"
        />
      </div>

      {/* Right Section (Text) */}
      <div className="w-full md:w-[800px] text-accent p-8 md:p-16 text-xl space-y-6">
        <h3 data-aos="fade-up">Hello!</h3>
        <h1 className="leading-tight text-xl" data-aos="fade-up">
          My name is Ovilash Jalui, and I am a Full Stack Developer.
        </h1>
        <p data-aos="fade-up">
          I specialize in creating visually stunning and user-friendly digital
          products such as applications, websites, and other digital platforms.
        </p>
        <p data-aos="fade-up">
          Whether it’s designing custom websites, building MVPs for startups, or
          renovating outdated sites, my mission is to deliver solutions that
          reflect both creativity and technical mastery.
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
