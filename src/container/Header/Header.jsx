import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 md:px-16 px-6 border-b">
      <h1
        className="font-bold font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight"
        data-aos="fade-up"
      >
        CRAFTING SCALABLE SOLUTIONS THAT DRIVE BUSINESS GROWTH
      </h1>
    </div>
  );
};

export default Header;
