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
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-accent">
            Terms and Conditions
          </h1>
          <p className="mb-6 text-light_white leading-relaxed text-lg">
            Welcome to my portfolio website. These terms and conditions outline
            the rules and regulations for the use of my website and services. By
            accessing or using this website, you agree to comply with these
            terms. If you disagree with any part of these terms, you must not
            use this website.
          </p>

          <div className="space-y-6">
            {/* 1. Use of Website */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              1. Use of Website
            </h2>
            <p className="text-light_white leading-relaxed">
              The content on this website is for informational purposes only.
              You may use the website to explore my portfolio, blog posts, and
              services but must not use it for any illegal, unauthorized, or
              disruptive purposes. You are also prohibited from interfering with
              or disrupting the operation of the website.
            </p>

            {/* 2. Intellectual Property */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              2. Intellectual Property
            </h2>
            <p className="text-light_white leading-relaxed">
              All content on this website, including but not limited to text,
              images, logos, graphics, videos, and code, is protected by
              intellectual property laws and is owned by me unless otherwise
              stated. You may not reproduce, distribute, or create derivative
              works of any part of this website without my prior written
              consent.
            </p>

            {/* 3. User Responsibilities */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              3. User Responsibilities
            </h2>
            <p className="text-light_white leading-relaxed">
              As a user, you are responsible for ensuring that your use of this
              website complies with all applicable laws and regulations. You
              agree not to engage in any conduct that may harm the website, its
              users, or interfere with the functioning of any services provided.
            </p>

            {/* 4. Limitation of Liability */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              4. Limitation of Liability
            </h2>
            <p className="text-light_white leading-relaxed">
              I shall not be liable for any damages arising from your use of
              this website or any linked external websites. This includes, but
              is not limited to, direct, indirect, incidental, or consequential
              damages, loss of profits, or business interruption, even if I have
              been advised of the possibility of such damages.
            </p>

            {/* 5. Third-Party Links */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              5. Third-Party Links
            </h2>
            <p className="text-light_white leading-relaxed">
              This website may contain links to third-party websites for your
              convenience or reference. I do not control or endorse these
              external sites and am not responsible for their content,
              practices, or policies. I encourage you to review their respective
              terms and privacy policies.
            </p>

            {/* 6. Modifications to Terms */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              6. Modifications to Terms
            </h2>
            <p className="text-light_white leading-relaxed">
              I reserve the right to update or modify these terms and conditions
              at any time. Any changes will be posted on this page, and it is
              your responsibility to review them periodically. By continuing to
              use the website after any modifications, you agree to be bound by
              the updated terms.
            </p>

            {/* 7. Privacy and Data Protection */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              7. Privacy and Data Protection
            </h2>
            <p className="text-light_white leading-relaxed">
              I value your privacy. Please review my Privacy Policy, which
              explains how I collect, use, and protect your personal information
              when you visit this website or interact with my services.
            </p>

            {/* 8. Governing Law */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              8. Governing Law
            </h2>
            <p className="text-light_white leading-relaxed">
              These terms are governed by and construed in accordance with the
              laws of [Your Country/State]. Any disputes arising out of or
              related to these terms and conditions shall be subject to the
              exclusive jurisdiction of the courts in [Your Location].
            </p>

            {/* 9. Contact Information */}
            <h2 className="text-2xl md:text-3xl font-medium text-accent">
              9. Contact Information
            </h2>
            <p className="text-light_white leading-relaxed">
              If you have any questions about these terms and conditions, please
              contact me at{" "}
              <a
                href="mailto:jaluiovilash@outlook.com"
                className="text-yellow-100 hover:underline"
              >
                jaluiovilash@outlook.com
              </a>
              .
            </p>

            {/* Last Updated Info */}
            <p className="text-sm text-light_white mt-12">
              Last updated: January 30, 2025
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Terms;
