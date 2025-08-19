import { ShinyText } from "../../components/react-bits/index";

const Header = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 md:px-16 px-6 border-b">
      <h1 className="font-bold font-montserrat text-3xl md:text-4xl lg:text-5xl xl:text-6xl mx-auto leading-tight md:w-4/5">
        <ShinyText
          text="BUILDING INTELLIGENT INTERFACES AND SYSTEMS THAT SCALE WITH LASTING IMPACT"
          disabled={false}
          speed={3}
          className="text-center"
        />
      </h1>
    </div>
  );
};

export default Header;
