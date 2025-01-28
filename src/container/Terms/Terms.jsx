import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Terms = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bg-primary text-secondary font-montserrat p-8 py-14 sm:py-16 md:py-20 pt-28 lg:pt-36">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
          <p className="mb-4 text-light_white">
            Welcome to my portfolio website. These terms and conditions outline
            the rules and regulations for the use of my website and services. By
            accessing or using this website, you agree to comply with these
            terms. If you disagree with any part of these terms, you must not
            use this website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            1. Use of Website
          </h2>
          <p className="mb-4">
            The content on this website is for informational purposes only. You
            may use the website to explore my portfolio and services but must
            not use it for any illegal or unauthorized purposes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            2. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this website, including text, images, graphics, and
            code, is my intellectual property unless otherwise stated. You may
            not reproduce, distribute, or use any part of this website without
            my prior written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            3. User Responsibilities
          </h2>
          <p className="mb-4">
            You are responsible for ensuring that your use of this website
            complies with all applicable laws and regulations. You must not
            engage in any behavior that could harm the website or its users.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="mb-4">
            I am not liable for any damages arising from your use of this
            website or any linked external sites. This includes, but is not
            limited to, direct, indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            5. Third-Party Links
          </h2>
          <p className="mb-4">
            This website may include links to third-party websites for your
            convenience. I am not responsible for the content or practices of
            these external sites and encourage you to review their respective
            terms and policies.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            6. Modifications to Terms
          </h2>
          <p className="mb-4">
            I reserve the right to update or modify these terms at any time.
            Changes will be posted on this page, and it is your responsibility
            to review them periodically. Your continued use of the website after
            any changes signifies your acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Governing Law</h2>
          <p className="mb-4">
            These terms are governed by and construed in accordance with the
            laws of [Your Country/State]. Any disputes arising from these terms
            shall be subject to the exclusive jurisdiction of the courts in
            [Your Location].
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            8. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about these terms, please contact me at{" "}
            <a
              href="mailto:jaluiovilash@outlook.com"
              className="text-yellow-100 underline"
            >
              jaluiovilash@outlook.com
            </a>
            .
          </p>

          <p className="text-sm text-light_white mt-6">
            Last updated: January 25, 2025
          </p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Terms;
