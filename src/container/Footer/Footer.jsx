import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="flex flex-col lg:flex-row justify-center items-center border-t">
    <section className="w-3/5 lg:w-auto text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-semibold font-montserrat px-6 py-4 lg:py-10 lg:border-r text-primary">
        <a href="/">JO</a>
      </h1>
    </section>

    <section className="w-full lg:w-3/6 text-center lg:text-left flex flex-col lg:flex-row justify-between lg:items-center lg:gap-6 py-4 lg:py-0">
      <div className="px-6 py-4 border-t lg:border-t-0 lg:mr-14">
        <a
          href="mailto:ovilashjalui@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl hover:text-portfolio transition duration-300"
        >
          ovilashjalui@gmail.com
        </a>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 px-4 lg:px-0 py-4 text-sm sm:text-lg font-medium hover:text-portfolio">
        {[
          { label: "Blogs", to: "https://jaluiovilashblogs.hashnode.dev/" },
          { label: "Contact", to: "/contact" },
          { label: "Ethics", to: "/ethics" },
          { label: "Terms", to: "/terms" },
          { label: "Privacy", to: "/privacy" }
        ].map(({ label, to }) => (
          <Link key={label} to={to} target="_blank">
            {label}
          </Link>
        ))}
      </div>
    </section>
  </footer>
);

export default Footer;
