import { ButtonUsage } from "../../components/index";
import { lion } from "../../assets/index";

const Pricing = () => {
  return (
    <div id="pricing" className="scroll-mt-20">
      {/* Title Section */}
      <div className="py-16 text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-semibold w-4/5 md:w-3/5 mx-auto">
          PRICING
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center text-lg space-y-8 md:space-y-0 md:space-x-8">
        {/* Card 1 */}
        <div className="px-8 text-center">
          <img
            src={lion}
            alt="Lion image representing Design services"
            className="w-full max-w-[300px] mx-auto h-auto"
          />
          <h3 className="py-8 text-3xl md:text-4xl font-medium">DESIGN</h3>
          <ul>
            <li className="border-t py-4 md:py-6 px-8 md:px-16">
              Designs in Figma
            </li>
            <li className="border-t py-4 md:py-6 px-8 md:px-16">
              Weekly reviews
            </li>
            <li className="border-y py-4 md:py-6 px-8 md:px-16">
              Ongoing support
            </li>
          </ul>
          <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
            Rs. 5 000+
          </h4>
          <a
            href="mailto:jaluiovilash@outlook.com?subject=Design Services Inquiry"
            target="_blank"
          >
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="px-8 py-8 text-center border-t border-b md:border-t-0 md:border-b-0 md:border-x">
          <img
            src={lion}
            alt="Lion image representing Development services"
            className="w-full max-w-[300px] mx-auto h-auto"
          />
          <h3 className="py-8 text-3xl md:text-4xl font-medium">DEVELOPMENT</h3>
          <ul>
            <li className="border-t py-4 md:py-6 px-8 md:px-16">
              Frontend Development
            </li>
            <li className="border-t py-4 md:py-6 px-8 md:px-16">
              Backend Integration
            </li>
            <li className="border-y py-4 md:py-6 px-8 md:px-16">
              Ongoing support
            </li>
          </ul>
          <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
            Rs. 10 000+
          </h4>
          <a
            href="mailto:jaluiovilash@outlook.com?subject=Development Services Inquiry"
            target="_blank"
          >
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>

        {/* Card 3 */}
        <div className="px-8 text-center">
          <img
            src={lion}
            alt="Lion image representing Maintenance services"
            className="w-full max-w-[300px] mx-auto h-auto"
          />
          <h3 className="py-8 text-3xl md:text-4xl font-medium">MAINTENANCE</h3>
          <ul>
            <li className="border-t py-4 md:py-6 px-8 md:px-16">
              Regular Updates
            </li>
            <li className="border-t py-4 md:py-6 px-8 md:px-16">
              Performance Tuning
            </li>
            <li className="border-y py-4 md:py-6 px-8 md:px-16">
              Ongoing support
            </li>
          </ul>
          <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
            Rs. 7 000+
          </h4>
          <a href="https://calendly.com/ovilashjalui/30min" target="_blank">
            <ButtonUsage title="BOOK YOUR SESSION NOW" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
