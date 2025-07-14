import { BlurText } from "../../components/react-bits/index";

const Header = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 md:px-16 px-6 border-b">
      <h1 className="font-bold font-montserrat text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto leading-tight md:w-4/5">
        <BlurText
          text="CRAFTING SCALABLE WEB SOLUTIONS THAT DRIVE BUSINESS GROWTH"
          delay={150}
          animateBy="words"
          direction="top"
        />
      </h1>
    </div>
  );
};

export default Header;
