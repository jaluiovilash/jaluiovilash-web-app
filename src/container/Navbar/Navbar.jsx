import { useState } from "react";
import { ButtonUsage } from "../../components/index";
import ResumePDF from "../../assets/Full-Stack-Developer.pdf";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Import icons directly

const Menu = ({ isMobile, setToggleMenu }) => (
  <>
    <li className="mx-6">
      <a
        href={ResumePDF}
        download="Full-Stack-Developer.pdf"
        className="hover:text-accent transition-all"
        rel="noopener noreferrer"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        Resume
      </a>
    </li>
    <li className="mx-6">
      <a
        href="https://github.com/jaluiovilash"
        className="hover:text-accent transition-all"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        GitHub
      </a>
    </li>
    <li className="mx-6">
      <a
        href="#projects"
        className="hover:text-accent transition-all"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        Projects
      </a>
    </li>
    <li className="mx-6">
      <a
        href="#services"
        className="hover:text-accent transition-all"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        Services
      </a>
    </li>
    <li className="mx-6">
      <a
        href="#method"
        className="hover:text-accent transition-all"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        Work Flow
      </a>
    </li>
    <li className="mx-6">
      <a
        href="#pricing"
        className="hover:text-accent transition-all"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        Pricing
      </a>
    </li>
    <li className="mx-6">
      {isMobile ? (
        <a
          href="https://calendly.com/ovilashjalui/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
          onClick={() => setToggleMenu(false)}
        >
          Let's Talk
        </a>
      ) : (
        <a
          href="https://calendly.com/ovilashjalui/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonUsage title="Let's Talk" />
        </a>
      )}
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center p-6 md:p-5 md:px-10 border-b bg-primary fixed top-0 w-full z-50">
      <h1 className="text-3xl md:text-5xl font-semibold font-montserrat tracking-wide">
        <a href="/" className="hover:text-accent transition-all">
          JO
        </a>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex justify-center items-center text-lg">
          <Menu setToggleMenu={setToggleMenu} />
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            onClick={() => setToggleMenu(false)}
            aria-label="Close menu"
            className="cursor-pointer text-portfolio transform transition-transform duration-200 hover:scale-110"
          />
        ) : (
          <RiMenu3Line
            size={27}
            onClick={() => setToggleMenu(true)}
            aria-label="Open menu"
            className="cursor-pointer text-portfolio transition-transform duration-500 hover:scale-110"
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 right-0 bg-primary p-8 w-[60%] md:w-[40%] flex justify-center items-center md:hidden z-50 rounded-lg list-none shadow-lg transition-all duration-500 ease-in-out transform ${
          toggleMenu ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
        }`}
        style={{ visibility: toggleMenu ? "visible" : "hidden" }}
      >
        <div className="flex flex-col items-center space-y-4">
          <Menu isMobile={true} setToggleMenu={setToggleMenu} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden ${
          toggleMenu ? "block" : "hidden"
        }`}
        onClick={() => setToggleMenu(false)}
      ></div>
    </div>
  );
};

export default Navbar;
