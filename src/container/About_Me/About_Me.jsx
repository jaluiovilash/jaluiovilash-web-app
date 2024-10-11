import { lion } from "../../assets/index";
import { ButtonUsage } from "../../components/index";

const About_Me = () => {
  return (
    <div className="about">
      <div className="flex flex-col lg:flex-row">
        <div className="left lg:w-3/5 w-full py-8 lg:py-16 px-6 lg:px-28 border-b lg:border-b-0">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-[1.6] font-montserrat">
            EMPOWERING BUSINESSES WITH TECHNOLOGY DEVELOPMENT ISN&apos;T JUST
            ABOUT WRITING CODE—IT&apos;S ABOUT CREATING VALUE AND DELIVERING
            RESULTS THAT TRULY MATTER. I FOCUS ON BUILDING APPLICATIONS THAT ARE
            FAST, SECURE, SCALABLE, AND OPTIMIZED FOR GROWTH.
          </p>
        </div>

        <div className="right lg:w-2/5 w-full flex justify-center p-6 lg:p-16 border-t lg:border-t-0 lg:border-l border-b lg:border-b-0">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={lion}
            alt="Lion image"
          />
        </div>
      </div>

      {/* Call-to-Action (CTA) Section */}
      <div className="cta flex flex-col md:flex-row border-y">
        {/* First Image */}
        <div className="md:w-2/6 w-full p-6 md:p-8 border-b md:border-b-0 ">
          <img
            src={lion}
            alt="CTA Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Centered Image */}
        <div className="md:w-1/6 w-full flex justify-center items-center p-8 border-b md:border-b-0 md:border-l md:border-r">
          <img
            src={lion}
            alt="Centered Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text & Button Section */}
        <div className="md:w-3/6 w-full flex flex-col justify-end items-start p-6 md:p-16 border-b md:border-b-0">
          <p className="my-4 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, natus laudantium officiis maxime omnis cupiditate,
            debitis a veniam blanditiis.
          </p>
          <a
            href="https://calendly.com/ovilashjalui/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUsage title="LET'S COLLABORATE" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About_Me;
