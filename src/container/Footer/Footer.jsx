const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-center items-center border-t">
      {/* Logo Section */}
      <section className="w-3/5 lg:w-auto text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-semibold font-montserrat px-6 py-4 lg:py-10 lg:border-r text-primary">
          <a href="/">JO</a>
        </h1>
      </section>

      {/* Contact Email and Links Section */}
      <section className="w-full lg:w-3/6 text-center lg:text-left flex flex-col lg:flex-row justify-between lg:items-center lg:gap-6 py-4 lg:py-0">
        {/* Contact Email */}
        <div className="mail lg:mr-14 px-6 py-4 border-t lg:border-t-0">
          <a
            href="mailto:jaluiovilash@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl hover:text-portfolio transition duration-300"
          >
            jaluiovilash@outlook.com
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 px-4 lg:px-0 py-4">
          <a
            href="/blog"
            target="_blank"
            className="text-sm sm:text-base text-gray-500 font-montserrat font-medium hover:text-portfolio transition duration-300"
          >
            Blogs
          </a>
          <a
            href="/contact"
            target="_blank"
            className="text-sm sm:text-base text-gray-500 font-montserrat font-medium hover:text-portfolio transition duration-300"
          >
            Contact
          </a>
          <a
            href="/ethics"
            className="text-sm sm:text-base text-gray-500 font-montserrat font-medium hover:text-portfolio transition duration-300"
          >
            Ethics
          </a>
          <a
            href="/terms"
            className="text-sm sm:text-base text-gray-500 font-montserrat font-medium hover:text-portfolio transition duration-300"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="text-sm sm:text-base text-gray-500 font-montserrat font-medium hover:text-portfolio transition duration-300"
          >
            Privacy
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
