import { useEffect, useRef } from "react";
import { animateWithGsap } from "../../utils/animations";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    animateWithGsap(
      headerRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      },
      {
        start: "top 90%"
      }
    );
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 md:px-16 px-6 border-b">
      <h1
        ref={headerRef}
        className="font-bold font-montserrat text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight opacity-0 translate-y-10"
      >
        CRAFTING SCALABLE WEB SOLUTIONS THAT DRIVE BUSINESS GROWTH
      </h1>
    </div>
  );
};

export default Header;
