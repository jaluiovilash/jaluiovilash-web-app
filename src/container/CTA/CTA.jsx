import { ButtonUsage } from "../../components";

const CTA = () => {
  return (
    <div className="pt-20 font-montserrat">
      {/* First Section */}
      <section className="py-12 px-8 md:px-52 flex justify-start items-center border-y">
        <h2 className="text-2xl md:text-5xl font-semibold">DESIGN DREAMS</h2>
      </section>

      {/* Second Section */}
      <section className="py-12 px-8 md:pr-52 flex justify-start md:justify-center items-center">
        <h2 className="text-portfolio text-2xl md:text-5xl font-semibold">
          INTO REALITY?
        </h2>
      </section>

      {/* Third Section */}
      <section className="py-12 px-8 md:px-52 flex flex-col md:flex-row justify-between items-start border-t">
        <h2 className="text-2xl md:text-5xl font-semibold md:mb-0 mb-10">
          LET&apos;S DO IT TOGETHER!
        </h2>
        <a
          href="https://calendly.com/ovilashjalui/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonUsage title="MAKE IT HAPPEN" />
        </a>
      </section>
    </div>
  );
};

export default CTA;
