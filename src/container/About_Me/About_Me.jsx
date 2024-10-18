import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { square, collaborate_grey, about_us } from "../../assets/index";
import { ButtonUsage } from "../../components/index";

const About_Me = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="about">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section (Text) */}
        <div className="left lg:w-3/5 w-full py-8 lg:py-16 px-6 lg:px-28 border-b lg:border-b-0">
          <p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed lg:leading-[1.6] font-montserrat"
            data-aos="fade-up"
          >
            EMPOWERING BUSINESSES WITH TECHNOLOGY. Development isn&apos;t just
            about writing code—it&apos;s about creating value and delivering
            results that matter. I focus on building applications that are fast,
            secure, and optimized for growth.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="right lg:w-2/5 mx-auto w-full flex justify-center items-center p-6 lg:p-16 lg:border-t-0 lg:border-l lg:border-b-0">
          <img
            className=" w-full h-[400px] object-cover rounded-lg"
            src={about_us}
            alt="about image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Call-to-Action (CTA) Section */}
      <div className="cta flex flex-col md:flex-row flex-wrap border-y">
        {/* First Image */}
        <div className="md:w-2/6 w-full p-6 md:p-8 border-b md:border-b-0 flex justify-center items-center overflow-hidden">
          <img
            src={collaborate_grey}
            alt="CTA Image"
            className="w-full max-w-[300px] h-auto object-cover rounded-lg"
          />
        </div>

        {/* Centered Image */}
        <div className="md:w-1/6 w-full flex justify-center items-center p-8 md:p-16 border-b md:border-b-0 md:border-l md:border-r overflow-hidden">
          <img
            src={square}
            alt="Centered Image"
            className="w-full max-w-[250px] h-auto"
            data-aos="zoom-in"
          />
        </div>

        {/* Text & Button Section */}
        <div className="md:w-3/6 w-full flex flex-col justify-center items-start p-6 md:p-16 md:border-b-0">
          <p className="my-6 text-base sm:text-lg" data-aos="zoom-in-down">
            &quot;Let’s collaborate and bring your digital vision to life,
            transforming ideas into solutions that drive success and
            growth!&quot;
          </p>
          <a
            href="https://calendly.com/ovilashjalui/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUsage title="BOOK YOUR FIRST MEET" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About_Me;
