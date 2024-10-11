const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center border-t">
      <div className="w-full lg:w-auto">
        <h1 className="text-4xl lg:text-7xl font-semibold font-montserrat py-4 lg:py-8 px-6 lg:px-10 border-b lg:border-r lg:border-b-0 lg:mr-4">
          <a href="/">JO</a>
        </h1>
      </div>

      <div className="w-full lg:w-auto px-6 lg:px-10">
        <a
          href="mailto:ovilashjalui@gmail.com"
          target="_blank"
          className="text-lg lg:text-xl"
        >
          jaluiovilash@outlook.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
