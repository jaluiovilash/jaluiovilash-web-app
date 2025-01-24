import { useState } from "react";
import { db } from "../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { Footer, Navbar } from "../index";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    success: null,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value
    }));
  };

  // Client-side validation
  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, success: null, error: null });

    const error = validateForm();
    if (error) {
      setFormStatus({ isSubmitting: false, error });
      setTimeout(() => {
        setFormStatus((prevStatus) => ({ ...prevStatus, error: null }));
      }, 3000);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date()
      });

      // Placeholder for file upload logic
      if (formData.file) {
        console.log("File to upload:", formData.file);
        // Here, integrate Firebase Storage or other file upload services
      }

      setFormData({ name: "", email: "", phone: "", message: "", file: null });
      setFormStatus({
        isSubmitting: false,
        success: "Message sent successfully!",
        error: null
      });

      setTimeout(() => {
        setFormStatus((prevStatus) => ({ ...prevStatus, success: null }));
      }, 2500);
    } catch (err) {
      console.error("Error adding document:", err);
      setFormStatus({
        isSubmitting: false,
        error: `Failed to send message: ${err.message}`,
        success: null
      });

      setTimeout(() => {
        setFormStatus((prevStatus) => ({ ...prevStatus, error: null }));
      }, 2500);
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div id="contact" className="py-14 sm:py-16 md:py-20 pt-20 lg:pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-[620px] md:max-w-[1060px] lg:max-w-[1200px] xl:max-w-[1400px]">
          <h2 className="text-arka text-center text-lg font-medium py-2 mb-10">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Section */}
            <div className="flex flex-col justify-start gap-10">
              <div className="location font-[800] max-w-full md:max-w-[400px] my-8">
                <p className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] mb-8 leading-snug font-time_roman">
                  Got a project in mind? Let&apos;s bring it to life together.
                </p>
                <p className="text-gray-500 text-[1.5rem] sm:text-2xl font-time_roman">
                  &quot;Your vision, our expertise — let&apos;s make it
                  happen.&quot;
                </p>
              </div>
              <div className="mail">
                <p className="text-2xl sm:text-2xl font-semibold mb-4 font-sans">
                  Need Assistance? We&apos;re Here to Help!
                </p>
                <a
                  href="mailto:jaluiovilash@outlook.com"
                  className="text-gray-500 break-all font-sans text-xl"
                >
                  jaluiovilash@outlook.com
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-1"
                  >
                    Full Name<span className="text-portfolio">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jon Snow"
                    required
                    className="w-full p-3 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-arka"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-1"
                  >
                    Email<span className="text-portfolio">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@yourmail.com"
                    required
                    className="w-full p-3 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-arka"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium mb-1"
                  >
                    Phone<span className="text-portfolio">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                    className="w-full p-3 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-arka"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-1"
                  >
                    Message<span className="text-portfolio">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    required
                    className="w-full p-3 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-arka"
                    rows="5"
                  ></textarea>
                </div>
                {formStatus.error && (
                  <div className="text-red-500 text-center">
                    {formStatus.error}
                  </div>
                )}
                {formStatus.success && (
                  <div className="text-green-500 text-center">
                    {formStatus.success}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-arka text-white py-3 rounded-md bg-portfolio hover:bg-black border-0 transition"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
