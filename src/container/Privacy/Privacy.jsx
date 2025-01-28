import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Privacy = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bg-primary text-secondary font-montserrat p-8 py-14 sm:py-16 md:py-20 pt-28 lg:pt-36">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-6">Privacy Policy</h1>
          <p className="mb-4 text-light_white">
            Welcome to my portfolio website. This Privacy Policy explains how I
            collect, use, and protect your information when you interact with
            this site. By using this website, you agree to the practices
            described in this policy.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            Information I Collect
          </h2>
          <p className="mb-4">
            - <span className="font-medium">Personal Information:</span> If you
            contact me via email or forms, I may collect your name, email
            address, and any other details you provide.
            <br />- <span className="font-medium">Usage Data:</span>{" "}
            Non-personal information such as browser type, device information,
            and pages visited may be collected to improve the website.
            <br />- <span className="font-medium">Technical Data:</span>{" "}
            Information like IP addresses and error logs may be gathered to
            enhance the site's security and performance.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            How I Use Your Information
          </h2>
          <p className="mb-4">
            - To respond to your inquiries or requests in a timely and
            personalized manner.
            <br />
            - To analyze website performance and improve user experience by
            identifying trends and areas for enhancement.
            <br />
            - To ensure the website remains secure and protected from
            unauthorized access or cyber threats.
            <br />- To send occasional updates or notifications about changes to
            this website, with your consent.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            Sharing Your Information
          </h2>
          <p className="mb-4">
            I value your privacy. Your personal information will not be sold,
            traded, or shared with third parties unless required by law or with
            your explicit consent. However, I may use trusted third-party
            services for website analytics, hosting, or communication purposes.
            These providers are obligated to protect your data and use it solely
            for the agreed purposes.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Cookies</h2>
          <p className="mb-4">
            This site may use cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help me analyze
            site traffic and improve functionality. These cookies may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-medium">Essential Cookies:</span> Necessary
              for the website to function properly.
            </li>
            <li>
              <span className="font-medium">Performance Cookies:</span> Help
              monitor website performance and user behavior.
            </li>
            <li>
              <span className="font-medium">Functional Cookies:</span> Enable
              features such as saving your preferences or login information.
            </li>
          </ul>
          <p className="mb-4">
            You can disable cookies in your browser settings. However, doing so
            may limit the functionality of some website features.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Third-Party Links</h2>
          <p className="mb-4">
            My portfolio may contain links to third-party websites. These links
            are provided for your convenience and reference. Please note that I
            am not responsible for the privacy practices or content of these
            external sites. I recommend reviewing their policies before sharing
            information or engaging with them.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Security Measures</h2>
          <p className="mb-4">
            I take the security of your information seriously and implement
            industry-standard measures to safeguard it. These measures include
            data encryption, secure servers, and regular updates to website
            systems to prevent vulnerabilities. While I strive to protect your
            data, no online transmission is entirely secure, and I cannot
            guarantee absolute security.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal
            information collected on this site. To exercise these rights, please
            contact me using the details provided on the site. Additionally, you
            have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Withdraw your consent for data processing at any time.</li>
            <li>Request a copy of your personal data in a portable format.</li>
            <li>
              Raise concerns or file a complaint with your local data protection
              authority.
            </li>
          </ul>

          <h2 className="text-2xl font-medium mt-6 mb-4">Children's Privacy</h2>
          <p className="mb-4">
            This website is not directed at children under the age of 13, and I
            do not knowingly collect personal information from them. If I become
            aware that a child under 13 has provided personal information, I
            will take immediate steps to delete it. Parents or guardians are
            encouraged to monitor their children's online activities and contact
            me if they believe their child has shared personal information on
            this site.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            Changes to This Policy
          </h2>
          <p className="mb-4">
            I may update this Privacy Policy from time to time to reflect
            changes in legal requirements or website practices. Any updates will
            be posted on this page with a revised "Last Updated" date. I
            encourage you to review this policy periodically to stay informed
            about how your information is handled.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Contact</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, feel free to reach out to me using the contact form
            on my website or email me directly at [your-email@example.com].
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

export default Privacy;
