import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { ButtonUsage } from "../../components/index";

const Menu = ({ isMobile, setToggleMenu }) => (
  <>
    <li className="mx-6">
      <a
        href="../../../public/resume/Full-Stack-Developer.pdf"
        download=""
        className="hover:text-accent transition-all"
        onClick={() => isMobile && setToggleMenu(false)}
      >
        Resume
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
          Let&apos;s Talk
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
    <div className="flex justify-between items-center p-5 md:px-10 border-b bg-primary fixed top-0 w-full z-50">
      <h1 className="text-5xl font-semibold font-montserrat tracking-wide">
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
            className="cursor-pointer text-portfolio hover:scale-105 transition-transform"
          />
        ) : (
          <RiMenu3Line
            size={27}
            onClick={() => setToggleMenu(true)}
            className="cursor-pointer text-portfolio hover:scale-105 transition-transform"
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {toggleMenu && (
        <div className="absolute top-16 right-0 bg-primary p-8 w-[40%] flex justify-center items-center md:hidden z-50 rounded-lg list-none shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            {/* Pass `setToggleMenu` to the Menu for mobile functionality */}
            <Menu isMobile={true} setToggleMenu={setToggleMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
