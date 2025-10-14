import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="text-white border-t py-14 px-6 lg:px-24">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
      {/* Logo */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-wide transition-all duration-500">
          <a href="/">JO</a>
        </h1>
      </div>

      {/* Contact */}
      <div className="text-center lg:text-left">
        <a
          href="mailto:ovilashjalui@gmail.com"
          className="text-lg sm:text-xl text-gray-300 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
        >
          ovilashjalui@gmail.com
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm sm:text-base font-medium">
        {[
          { label: "Blogs", to: "https://jaluiovilashblogs.hashnode.dev/" },
          { label: "Contact", to: "/contact" },
          { label: "Terms", to: "/terms" },
          { label: "Privacy", to: "/privacy" },
          { label: "Ethics", to: "/ethics" },
        ].map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="relative text-gray-400 hover:text-white transition-all duration-300 group"
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl">
        {[
          { icon: <FaGithub />, link: "https://github.com/jaluiovilash" },
          {
            icon: <FaLinkedin />,
            link: "https://linkedin.com/in/jaluiovilash",
          },
          { icon: <FaTwitter />, link: "https://x.com/jaluiovilash" },
          { icon: <FaInstagram />, link: "https://instagram.com/jaluiovilash" },
        ].map(({ icon, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>

    {/* Refined Divider */}
    <div className="relative mt-12">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-70"></div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-6 text-sm text-gray-500 tracking-wide">
      &copy; {new Date().getFullYear()}{" "}
      <span className="text-white font-semibold">jaluiovilash</span> — All
      Rights Reserved.
    </div>
  </footer>
);

export default Footer;
