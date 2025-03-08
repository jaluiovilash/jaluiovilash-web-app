import { ButtonUsage } from "../../components/index";
import { square, circle, triangle } from "../../assets/index";
import { BlurText } from "../../components/react-bits";

const pricingData = [
  {
    id: 1,
    image: square,
    title: "DESIGN",
    features: ["Designs via Figma", "Weekly feedback", "Design & Code"],
    price: "₹ 5,000+",
    contactLink:
      "mailto:jaluiovilash@outlook.com?subject=Design Services Inquiry",
    buttonText: "CONTACT NOW"
  },
  {
    id: 2,
    image: circle,
    title: "BUILD",
    features: [
      "Fully operational website",
      "Weekly project reviews",
      "Support and maintenance ongoing"
    ],
    price: "₹ 15,000+",
    contactLink:
      "mailto:jaluiovilash@outlook.com?subject=Development Services Inquiry",
    buttonText: "GET IN TOUCH"
  },
  {
    id: 3,
    image: triangle,
    title: "GROW",
    features: [
      "Business development strategies",
      "SEO and traffic analytics",
      "Content and ad campaigns"
    ],
    price: "₹ 25,000+",
    contactLink: "https://calendly.com/ovilashjalui/30min",
    buttonText: "SCHEDULE NOW"
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="scroll-mt-20">
      {/* Title Section */}
      <div className="py-16 text-center">
        <h1 className="font-2 text-4xl md:text-6xl lg:text-7xl font-semibold w-4/5 md:w-3/5 mx-auto">
          PRICING
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center text-lg space-y-8 md:space-y-0 md:space-x-8">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`px-8 text-center ${
              plan.id === 2 ? "py-8 border-y md:border-x md:border-y-0" : ""
            }`}
          >
            <img
              src={plan.image}
              alt={`Illustration representing ${plan.title} services`}
              className="w-[250px] h-[250px] max-w-[300px] mx-auto"
              loading="lazy"
            />
            <h3 className="py-8 text-3xl md:text-4xl font-medium">
              {plan.title}
            </h3>
            <ul>
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`py-4 md:py-4 px-8 md:px-12 ${
                    index === 0
                      ? "border-t"
                      : index === plan.features.length - 1
                      ? "border-y"
                      : "border-t"
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <h4 className="text-portfolio text-4xl font-medium py-6 px-8 md:px-16">
              {plan.price}
            </h4>
            <a
              href={plan.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonUsage title={plan.buttonText} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
