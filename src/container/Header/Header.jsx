import { ShinyText } from "../../components/react-bits/index";

const Header = () => {
  return (
    <div className="py-10 sm:py-8 md:py-10 md:px-12 lg:py-14 px-6 border-b">
      <h1 className="font-bold font-montserrat text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto leading-tight md:w-4/5">
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
