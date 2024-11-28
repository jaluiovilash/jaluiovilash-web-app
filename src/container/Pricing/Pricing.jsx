import { ButtonUsage } from "../../components/index";
import { square, circle, triangle } from "../../assets/index";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div id="pricing" className="scroll-mt-20">
      {/* Title Section */}
      <div className="py-16 text-center">
        <h1
          className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-semibold w-4/5 md:w-3/5 mx-auto"
          data-aos="zoom-in"
        >
          PRICING
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center text-lg space-y-8 md:space-y-0 md:space-x-8">
        {/* Card 1 */}
        <div className="px-8 text-center">
          <img
            src={square}
            alt="Illustration representing design solutions"
            className="w-[250px] h-[250px] max-w-[300px] mx-auto"
            loading="lazy"
          />
          <h3 className="py-8 text-3xl md:text-4xl font-medium">DESIGN</h3>
          <ul>
            <li className="border-t py-4 md:py-4 px-8 md:px-12">
              Designs via Figma
            </li>
            <li className="border-t py-4 md:py-4 px-8 md:px-12">
              Weekly feedback
            </li>
            <li className="border-y py-4 md:py-4 px-8 md:px-12">
              Dedicated support
            </li>
          </ul>
          <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
            ₹ 5,000+
          </h4>
          <a
            href="mailto:jaluiovilash@outlook.com?subject=Design Services Inquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="px-8 py-8 text-center border-t border-b md:border-t-0 md:border-b-0 md:border-x">
          <img
            src={circle}
            alt="Illustration representing development services"
            className="w-[250px] h-[250px] max-w-[300px] mx-auto"
            loading="lazy"
          />
          <h3 className="py-8 text-3xl md:text-4xl font-medium">BUILD</h3>
          <ul>
            <li className="border-t py-4 md:py-4 px-8 md:px-12">
              Fully operational website
            </li>
            <li className="border-t py-4 md:py-4 px-8 md:px-12">
              Weekly project reviews
            </li>
            <li className="border-y py-4 md:py-4 px-8 md:px-12">
              Support and maintenance ongoing
            </li>
          </ul>
          <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
            ₹ 25,000+
          </h4>
          <a
            href="mailto:jaluiovilash@outlook.com?subject=Development Services Inquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>

        {/* Card 3 */}
        <div className="px-8 text-center">
          <img
            src={triangle}
            alt="Illustration representing growth services"
            className="w-[250px] h-[250px] max-w-[300px] mx-auto"
            loading="lazy"
          />
          <h3 className="py-8 text-3xl md:text-4xl font-medium">GROW</h3>
          <ul>
            <li className="border-t py-4 md:py-4 px-8 md:px-12">
              Business development strategies
            </li>
            <li className="border-t py-4 md:py-4 px-8 md:px-12">
              SEO and traffic analytics
            </li>
            <li className="border-y py-4 md:py-4 px-8 md:px-12">
              Content and ad campaigns
            </li>
          </ul>
          <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
            ₹ 45,000+
          </h4>
          <a
            href="https://calendly.com/ovilashjalui/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonUsage title="BOOK YOUR SESSION" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
