import { useState } from "react";
import { db } from "../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const exploreLinks = [
  { label: "Blog", to: "https://jaluiovilashblogs.hashnode.dev/" },
  { label: "Contact", to: "/contact" },
  { label: "Ethics", to: "/ethics" },
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy" },
];

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/jaluiovilash" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/jaluiovilash" },
  { icon: <FaTwitter />, link: "https://x.com/jaluiovilash" },
  { icon: <FaInstagram />, link: "https://instagram.com/jaluiovilash" },
];

const FooterLink = ({ to, children }) =>
  to.startsWith("http") ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-all duration-300"
    >
      {children}
    </a>
  ) : (
    <Link
      className="text-gray-400 hover:text-white transition-all duration-300"
      to={to}
    >
      {children}
    </Link>
  );

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
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
      setTimeout(() => setStatus((prev) => ({ ...prev, success: null })), 3000);
    } catch (err) {
      console.error("Firestore subscription error:", err);
      const message = err.code
        ? `Failed to subscribe: ${err.code}`
        : "Failed to subscribe. Try again!";
      setStatus({ isSubmitting: false, success: null, error: message });
      setTimeout(() => setStatus((prev) => ({ ...prev, error: null })), 5000);
    }
  };

  const setError = (message) => {
    setStatus({ isSubmitting: false, success: null, error: message });
    setTimeout(() => setStatus((prev) => ({ ...prev, error: null })), 3000);
  };

  return (
    <footer className="text-white border-t py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
        {/* Brand */}
        <div>
          <h1 className="text-4xl font-bold font-montserrat bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent mb-3 tracking-wide">
            <Link to="/">JO</Link>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Crafting intelligent software systems and futuristic learning tools
            that empower the next generation of developers.
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
              {socialLinks.map(({ icon, link }, idx) => (
                <SocialIcon key={idx} icon={icon} link={link} />
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
