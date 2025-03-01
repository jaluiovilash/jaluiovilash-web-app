import { ButtonUsage } from "../../components";
import { motion } from "framer-motion";

const flipUpVariants = {
  hidden: { rotateX: 180, opacity: 0 },
  visible: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } }
};

const flipDownVariants = {
  hidden: { rotateX: -180, opacity: 0 },
  visible: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } }
};

const CTA = () => {
  return (
    <div className="pt-20 font-montserrat">
      {/* First Section */}
      <section className="py-12 px-8 md:px-52 flex justify-start items-center border-y">
        <motion.h2
          className="text-2xl md:text-5xl font-semibold"
          initial="hidden"
          animate="visible"
          variants={flipDownVariants}
        >
          DESIGN DREAMS
        </motion.h2>
      </section>

      {/* Second Section */}
      <section className="py-12 px-8 md:pr-52 flex justify-start md:justify-center items-center">
        <motion.h2
          className="text-portfolio text-2xl md:text-5xl font-semibold"
          initial="hidden"
          animate="visible"
          variants={flipUpVariants}
        >
          INTO REALITY?
        </motion.h2>
      </section>

      {/* Third Section */}
      <section className="py-12 px-8 md:px-52 flex flex-col md:flex-row justify-between items-start border-t">
        <motion.h2
          className="text-2xl md:text-5xl font-semibold md:mb-0 mb-10"
          initial="hidden"
          animate="visible"
          variants={flipDownVariants}
        >
          LET&apos;S DO IT TOGETHER!
        </motion.h2>
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
