const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* Logo Section */}
      <div className="w-full lg:w-auto">
        <h1 className="text-4xl lg:text-5xl font-semibold font-montserrat px-6 py-4 lg:py-8 border-b lg:border-r lg:border-b-0 text-center lg:text-left">
          <a href="/">JO</a>
        </h1>
      </div>

      {/* Contact Email Section */}
      <div className="w-full lg:w-1/3 px-6 text-center lg:text-left py-4">
        <a
          href="mailto:jaluiovilash@outlook.com"
          target="_blank"
          className="text-lg lg:text-xl hover:text-portfolio transition duration-300"
        >
          jaluiovilash@outlook.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
