import { square, collaborate_grey, about_us } from "../../assets/index";
import { ButtonUsage } from "../../components/index";
import { FadeContent } from "../../components/react-bits/index";

const About_Me = () => {
  return (
    <div className="about">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section (Text) */}
        <div className="left lg:w-3/5 w-full py-8 lg:py-16 px-6 lg:px-28 border-b lg:border-b-0">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-[39px] font-semibold leading-relaxed lg:leading-[1.6] font-montserrat text-light_white">
            Empowering businesses with technology. Development isn&apos;t just
            about writing code, it&apos;s about creating value and delivering
            results that matter. I focus on building applications that are fast,
            secure, and optimized for growth.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="right lg:w-2/5 mx-auto w-full flex justify-center items-center p-6 lg:p-16 lg:border-t-0 lg:border-l lg:border-b-0">
          <img
            className="w-[350px] md:w-[450px] h-auto object-cover rounded-lg"
            src={about_us}
            alt="About Us"
          />
        </div>
      </div>

      {/* Call-to-Action (CTA) Section */}
      <div className="cta flex flex-col md:flex-row border-y">
        <div className="md:w-3/6 md:px-16 flex">
          {/* First Image */}
          <div className="w-full p-6 md:p-8 border-b md:border-b-0 flex justify-center items-center overflow-hidden">
            <img
              className="w-full max-w-[300px] h-auto object-cover rounded-lg mx-8"
              src={collaborate_grey}
              alt="CTA Image"
            />
          </div>

          {/* Centered Image */}
          <div className="w-full flex justify-center items-center border-b md:border-b-0 border-l lg:border-r overflow-hidden">
            <img
              className="w-2/3 md:w-full max-w-[200px] h-auto"
              src={square}
              alt="Centered Image"
            />
          </div>
        </div>

        {/* Text & Button Section */}
        <div className="lg:w-3/6 mx-auto flex flex-col justify-center items-start px-12 py-8 md:p-16">
          <FadeContent
            blur={true}
            duration={500}
            easing="ease-out"
            initialOpacity={0}
          >
            <p className="my-6 text-base sm:text-lg font-medium">
              &quot;Let’s collaborate and bring your digital vision to life,
              transforming ideas into solutions that drive success and
              growth!&quot;
            </p>
          </FadeContent>
          <a
            href="https://calendly.com/ovilashjalui/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUsage title="Schedule Your First Meet" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About_Me;
