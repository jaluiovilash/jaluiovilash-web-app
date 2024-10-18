import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ButtonUsage } from "../../components";

const CTA = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="pt-20 font-montserrat">
      {/* First Section */}
      <section className="py-12 px-8 md:px-52 flex justify-start items-center border-y">
        <h2 className="text-2xl md:text-6xl font-semibold" data-aos="flip-up">
          DESIGN DREAMS
        </h2>
      </section>

      {/* Second Section */}
      <section className="py-12 px-8 md:pr-52 flex justify-center items-center">
        <h2
          className="text-portfolio text-2xl md:text-6xl font-semibold"
          data-aos="flip-up"
        >
          INTO REALITY?
        </h2>
      </section>

      {/* Third Section */}
      <section className="py-12 px-8 md:px-52 flex justify-between items-center border-y">
        <h2 className="text-2xl md:text-6xl font-semibold" data-aos="flip-up">
          LET&apos;S DO IT TOGETHER!
        </h2>
        <a
          href="https://calendly.com/ovilashjalui/30min"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
        >
          <ButtonUsage title="MAKE IT HAPPEN" />
        </a>
      </section>
    </div>
  );
};

export default CTA;
