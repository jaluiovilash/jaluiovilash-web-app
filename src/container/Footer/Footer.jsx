/* eslint-disable react/prop-types */
import { useState } from "react";
import { Helmet } from "react-helmet";
import { db } from "../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaProjectDiagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const exploreLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/#services" },
  { label: "Pricing", to: "/#pricing" },
];

const resourcesLinks = [
  { label: "Blog", to: "https://jaluiovilashblogs.hashnode.dev/" },
  {
    label: "Repositories",
    to: "https://github.com/jaluiovilash?tab=repositories",
  },
  { label: "Quick Chat", to: "/contact" },
];

const legalNoticeLinks = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Ethics", to: "/ethics" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/jaluiovilash/",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/jaluiovilash/",
    label: "LinkedIn",
  },
  {
    icon: <FaProjectDiagram />,
    link: "https://colossalcodes.vercel.app/",
    label: "Company",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/jaluiovilash/",
    label: "Twitter",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/jaluiovilash/",
    label: "Instagram",
  },
];

// Clean internal/external link handler
const FooterLink = ({ to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (e) => {
    e.preventDefault();

    if (to.startsWith("/#")) {
      const sectionId = to.replace("/#", "");
      if (location.pathname === "/") {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(to);
    }
  };

  if (to.startsWith("http")) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
      >
        {children}
      </a>
    );
  }

  // Internal routes handled by React Router
  return (
    <Link
      to={to}
      onClick={to.startsWith("/#") ? handleScrollOrNavigate : undefined}
      className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
    >
      {children}
    </Link>
  );
};

// Accessible social icons
const SocialIcon = ({ icon, link, label }) => (
  <a
    href={link}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    isSubmitting: false,
    success: null,
    error: null,
  });

  const resetStatus = () =>
    setStatus({ isSubmitting: false, success: null, error: null });

  const setError = (message) => {
    setStatus({ isSubmitting: false, success: null, error: message });
    setTimeout(resetStatus, 3000);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, success: null, error: null });

    if (!email) return setError("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid email.");

    try {
      if (!db) throw new Error("Firestore is not initialized.");
      await addDoc(collection(db, "newsletter"), {
        email,
        timestamp: new Date(),
      });
      setEmail("");
      setStatus({
        isSubmitting: false,
        success: "Subscribed successfully!",
        error: null,
      });
      setTimeout(resetStatus, 3000);
    } catch (err) {
      console.error("Firestore subscription error:", err);
      const message = err.code
        ? `Failed to subscribe: ${err.code}`
        : "Failed to subscribe. Try again!";
      setStatus({ isSubmitting: false, success: null, error: message });
      setTimeout(resetStatus, 5000);
    }
  };

  return (
    <footer className="text-white border-t py-16 px-6 lg:px-20">
      {/* SEO Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "jaluiovilash",
            url: "https://jaluiovilash.web.app",
            sameAs: [
              "https://github.com/jaluiovilash",
              "https://linkedin.com/in/jaluiovilash",
              "https://x.com/jaluiovilash",
              "https://instagram.com/jaluiovilash",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "ovilashjalui@gmail.com",
                contactType: "customer support",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.5fr_0.5fr_0.5fr_0.8fr_1.1fr] gap-6 md:gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-4xl font-bold font-montserrat bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent mb-3 tracking-wide">
            <FooterLink to="/">JO</FooterLink>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Systems-driven Software Engineer crafting scalable, user-centric web
            solutions through clean UIs, optimized APIs, and holistic
            architecture.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">Explore</h2>
          <ul className="space-y-3">
            {exploreLinks.map(({ label, to }) => (
              <li key={label}>
                <FooterLink to={to}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">
            Resources
          </h2>
          <ul className="space-y-3">
            {resourcesLinks.map(({ label, to }) => (
              <li key={label}>
                <FooterLink to={to}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Notice */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">
            Legal Notice
          </h2>
          <ul className="space-y-3">
            {legalNoticeLinks.map(({ label, to }) => (
              <li key={label}>
                <FooterLink to={to}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">Connect</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:ovilashjalui@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
                ovilashjalui@gmail.com
              </a>
            </li>
            <li className="flex gap-5 text-2xl pt-2">
              {socialLinks.map(({ icon, link, label }, idx) => (
                <SocialIcon key={idx} icon={icon} link={link} label={label} />
              ))}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">
            Stay Updated
          </h2>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to receive the latest insights, code drops, and updates.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center bg-gray-900 rounded-lg overflow-hidden border border-gray-700 focus-within:border-gray-500 transition-all duration-300"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-grow bg-black text-gray-300 text-sm px-3 py-2 outline-none placeholder-gray-500 ${
                status.success ? "ring-green-400" : ""
              } ${status.error ? "ring-red-500" : ""}`}
            />
            <button
              type="submit"
              className="bg-portfolio px-4 py-2 text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed border-0 focus:outline-none focus:ring-0"
              disabled={status.isSubmitting}
            >
              {status.isSubmitting ? "Submitting..." : "Join"}
            </button>
          </form>

          {status.error && (
            <p className="text-red-500 mt-2 text-sm animate-fade-in">
              {status.error}
            </p>
          )}
          {status.success && (
            <p className="text-green-500 mt-2 text-sm animate-fade-in">
              {status.success}
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="relative mt-14">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent animate-pulse"></div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-gray-500 text-sm tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">jaluiovilash</span>. Built
        with precision, discipline, and vision.
      </div>
    </footer>
  );
};

export default Footer;
