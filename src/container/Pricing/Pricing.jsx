import { ButtonUsage } from "../../components/index";
import { square, circle, triangle } from "../../assets/index";
import { ShinyText } from "../../components/react-bits";

// Single environment variable for contact link
const CONTACT_LINK = import.meta.env.VITE_MEET_ON;

const pricingData = [
  {
    id: 1,
    image: square,
    title: "DESIGN",
    features: [
      "Custom UX/UI interfaces",
      "Interactive Figma prototypes",
      "Responsive design across devices",
      "User-centric workflow optimization",
    ],
    price: "₹ 8,000+",
    buttonText: "BOOK A CALL",
  },
  {
    id: 2,
    image: circle,
    title: "BUILD",
    features: [
      "Frontend & backend development",
      "Scalable, maintainable code",
      "Weekly project reviews & testing",
      "Ongoing support & integration",
    ],
    price: "₹ 25,000+",
    buttonText: "GET IN TOUCH",
  },
  {
    id: 3,
    image: triangle,
    title: "DEPLOY",
    features: [
      "Startup MVP deployment",
      "Cloud hosting & CI/CD setup",
      "Performance monitoring & analytics",
      "Security & optimization best practices",
    ],
    price: "₹ 40,000+",
    buttonText: "SCHEDULE NOW",
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="scroll-mt-20">
      {/* Title Section */}
      <div className="py-16 text-center">
        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold w-4/5 md:w-3/5 mx-auto">
          <ShinyText text="PRICING" />
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
            <h3 className="py-8 text-3xl md:text-4xl font-semibold font-montserrat">
              {plan.title}
            </h3>
            <ul>
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`py-4 md:py-4 px-8 md:px-12 font-mono ${
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
            <h4 className="text-portfolio font-montserrat text-4xl font-medium py-6 px-8 md:px-16">
              {plan.price}
            </h4>
            <a href={CONTACT_LINK} target="_blank" rel="noopener noreferrer">
              <ButtonUsage title={plan.buttonText} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
