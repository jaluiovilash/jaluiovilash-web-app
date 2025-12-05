/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonUsage } from "../../components";
import { ResumePDF } from "../../assets/index";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const menuItems = [
  { name: "Resume", to: ResumePDF, isExternal: true, isDownload: true },
  {
    name: "Projects",
    to: "/projects",
  },
  { name: "Services", to: "/#services" },
  { name: "Pricing", to: "/#pricing" },
  {
    name: "Source Code",
    to: "https://github.com/jaluiovilash/jaluiovilash-web-app/",
    isExternal: true,
  },
  {
    name: "Let's Talk",
    to: import.meta.env.VITE_MEET_ON,
    isExternal: true,
    isButton: true,
  },
];

const Menu = ({ isMobile, setToggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (to) => {
    if (to.startsWith("/#")) {
      const sectionId = to.replace("/#", "");
      if (location.pathname === "/") {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(to);
    }
    if (isMobile) setToggleMenu(false);
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <li key={index} className="mx-6">
          {item.isExternal ? (
            <a
              href={item.to}
              className={`hover:text-accent transition-all ${
                item.isButton ? "text-accent hover:underline" : ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
              download={
                item.isDownload ? "Associate Software Engineer.pdf" : undefined
              }
            >
              {item.isButton ? <ButtonUsage title={item.name} /> : item.name}
            </a>
          ) : (
            <a
              onClick={() => handleNavigation(item.to)}
              className="hover:text-accent transition-all cursor-pointer"
            >
              {item.name}
            </a>
          )}
        </li>
      ))}
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className="flex justify-between items-center p-6 md:p-5 md:px-10 border-b bg-primary fixed top-0 w-full z-50">
      <h1 className="text-4xl md:text-5xl font-bold font-montserrat tracking-wide">
        <a href="/" className="hover:text-accent transition-all">
          JO
        </a>
      </h1>

      <div className="hidden md:flex">
        <ul className="flex justify-center items-center text-lg">
          <Menu setToggleMenu={setToggleMenu} />
        </ul>
      </div>

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

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          toggleMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggleMenu(false)}
      ></div>

      <div
        className={`absolute top-0 right-0 h-screen w-3/4 bg-primary p-6 flex flex-col items-center shadow-lg transform transition-transform duration-500 ease-in-out md:hidden ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <RiCloseLine
          size={27}
          onClick={() => setToggleMenu(false)}
          className="self-end cursor-pointer text-portfolio transition-transform duration-200 hover:scale-110"
        />
        <ul className="flex flex-col items-center space-y-6 mt-8">
          <Menu isMobile setToggleMenu={setToggleMenu} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
