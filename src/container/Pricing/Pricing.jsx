import { ButtonUsage } from "../../components/index";
import { lion } from "../../assets/index";

const Pricing = () => {
  return (
    <div id="pricing" className="scroll-mt-20">
      <div className="py-16 text-center">
        <h1 className="font-montserrat text-6xl md:text-7xl font-semibold w-3/5 mx-auto">
          PRICING
        </h1>
      </div>

      <div className="flex justify-center items-center text-lg">
        <div className="px-8 text-center">
          <img src={lion} alt="" className="w-[300px]" />
          <h3 className="py-8 text-5xl font-medium">DESIGN</h3>
          <ul>
            <li className="border-t py-6 px-16">Designs in Figma</li>
            <li className="border-t py-6 px-16">Weekly reviews</li>
            <li className="border-y py-6 px-16">Ongoing support</li>
          </ul>
          <h4 className="text-portfolio py-6 px-16">Rs. 5000+</h4>
          <a href="mailto:jaluiovilash@outlook.com" target="_blank">
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>

        <div className="px-8 border-x text-center">
          <img src={lion} alt="" className="w-[300px]" />
          <h3 className="py-8 text-5xl font-medium">DESIGN</h3>
          <ul>
            <li className="border-t py-6 px-16">Designs in Figma</li>
            <li className="border-t py-6 px-16">Weekly reviews</li>
            <li className="border-y py-6 px-16">Ongoing support</li>
          </ul>
          <h4 className="text-portfolio py-6 px-16">Rs. 5000+</h4>
          <a href="mailto:jaluiovilash@outlook.com" target="_blank">
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>

        <div className="px-8 text-center">
          <img src={lion} alt="" className="w-[300px]" />
          <h3 className="py-8 text-5xl font-medium">DESIGN</h3>
          <ul>
            <li className="border-t py-6 px-16">Designs in Figma</li>
            <li className="border-t py-6 px-16">Weekly reviews</li>
            <li className="border-y py-6 px-16">Ongoing support</li>
          </ul>
          <h4 className="text-portfolio py-6 px-16">Rs. 5000+</h4>
          <a href="mailto:jaluiovilash@outlook.com" target="_blank">
            <ButtonUsage title="CONTACT ME" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
