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
          src={lion}
          alt="hero"
        />
      </div>

      {/* Right Section (Text) */}
      <div className="w-full md:w-3/5 p-8 md:p-16 text-lg md:text-xl space-y-6">
        <h3
          className="text-2xl font-montserrat font-medium text-accent"
          data-aos="fade-up"
        >
          &quot;Hello World&quot;
        </h3>
        <h1
          className="text-3xl md:text-4xl font-medium leading-tight"
          data-aos="flip-down"
        >
          My name is Ovilash Jalui, and I am a Full Stack Developer.
        </h1>
        <p
          className="text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I specialize in creating visually stunning and user-friendly web
          applications that help businesses thrive in the digital world.
        </p>
        <p
          className="text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Whether it’s designing custom websites, building MVPs for startups, or
          renovating outdated sites, my mission is to deliver solutions that
          reflect both creativity and technical mastery.
        </p>
        <div className="py-12">
          <a
            href="https://www.linkedin.com/in/jaluiovilash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VisitHere title="Say hii!" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
