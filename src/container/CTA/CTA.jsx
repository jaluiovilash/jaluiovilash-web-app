import { ButtonUsage } from "../../components";

const CTA = () => {
  return (
    <div className="pt-20">
      <div className="py-12 px-52 flex justify-start items-center border-y">
        <h2 className="text-7xl font-semibold font-montserrat">
          DESIGN DREAMS
        </h2>
      </div>
      <div className="py-12 pr-52 flex justify-center items-center">
        <h2 className="text-portfolio text-7xl font-semibold font-montserrat">
          INTO REALITY?
        </h2>
      </div>
      <div className="py-12 px-52 flex justify-end items-center border-y">
        <h2 className="text-7xl font-semibold font-montserrat mr-16">
          LET`S DO IT TOGETHER!
        </h2>
        <a href="https://calendly.com/ovilashjalui/30min" target="_blank">
          <ButtonUsage title="MAKE IT HAPPEN" />
        </a>
      </div>
      <div className="py-12 flex justify-center items-center"></div>
    </div>
  );
};

export default CTA;
