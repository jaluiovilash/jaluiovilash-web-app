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
            Welcome to my portfolio website. This Privacy Policy outlines the
            types of information I collect, how I use it, and the steps I take
            to protect your privacy. By using this website, you consent to the
            practices described in this policy.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            Information I Collect
          </h2>
          <p className="mb-4">
            - <span className="font-medium">Personal Information:</span> When
            you contact me via email or forms, I collect personal details such
            as your name, email address, and any additional information you
            choose to provide.
            <br />- <span className="font-medium">Usage Data:</span> I collect
            non-personal information such as browser type, device information,
            pages visited, and time spent on the site to improve user experience
            and analyze site performance.
            <br />- <span className="font-medium">Technical Data:</span> To
            enhance security and performance, I may gather data like IP
            addresses, device identifiers, and error logs.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            How I Use Your Information
          </h2>
          <p className="mb-4">
            - To respond to your inquiries and requests in a timely and
            personalized manner.
            <br />- To analyze and improve the website’s performance, ensuring
            an optimized user experience.
            <br />- To secure the website, prevent unauthorized access, and
            protect against cyber threats.
            <br />- To send updates or notifications regarding changes or
            improvements to this website (with your consent).
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            Sharing Your Information
          </h2>
          <p className="mb-4">
            Your privacy is important to me. I do not sell, trade, or share your
            personal information with third parties, except as required by law
            or with your explicit consent. However, I may use third-party
            service providers for website analytics, hosting, or communication
            purposes. These providers are required to maintain the
            confidentiality and security of your data.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Cookies</h2>
          <p className="mb-4">
            This website uses cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help analyze site
            traffic, improve functionality, and remember your preferences. Types
            of cookies include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-medium">Essential Cookies:</span> Necessary
              for basic website functionality.
            </li>
            <li>
              <span className="font-medium">Performance Cookies:</span> Monitor
              website performance and user interactions.
            </li>
            <li>
              <span className="font-medium">Functional Cookies:</span> Enable
              features like saved preferences or login information.
            </li>
          </ul>
          <p className="mb-4">
            You can manage or disable cookies through your browser settings, but
            please note that doing so may impact certain website features.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Third-Party Links</h2>
          <p className="mb-4">
            This website may contain links to external websites for your
            convenience. I am not responsible for the privacy practices or
            content of these third-party sites. Please review their privacy
            policies before sharing any personal information with them.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Security Measures</h2>
          <p className="mb-4">
            I take your privacy seriously and implement industry-standard
            security measures to protect your data. These include encryption,
            secure servers, and regular system updates. However, while I make
            every effort to secure your data, no online transmission is
            completely secure, and I cannot guarantee absolute safety.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Data Retention</h2>
          <p className="mb-4">
            I retain your personal data only for as long as necessary to fulfill
            the purposes outlined in this Privacy Policy. When your data is no
            longer needed, it will be securely deleted or anonymized, unless
            legal obligations require its retention.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal
            information at any time. You can also withdraw consent for data
            processing. To exercise these rights, please contact me using the
            details provided on this website. Additionally, you have the right
            to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Request a copy of your personal data in a portable format.</li>
            <li>Object to or restrict processing of your personal data.</li>
            <li>
              File a complaint with your local data protection authority if you
              believe your rights have been violated.
            </li>
          </ul>

          <h2 className="text-2xl font-medium mt-6 mb-4">Children's Privacy</h2>
          <p className="mb-4">
            This website is not intended for children under the age of 13, and I
            do not knowingly collect personal information from them. If you
            believe that a child under 13 has provided personal information,
            please contact me immediately, and I will take steps to delete such
            information.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">
            Changes to This Policy
          </h2>
          <p className="mb-4">
            I may update this Privacy Policy from time to time to reflect
            changes in legal requirements, technology, or website practices. Any
            updates will be posted on this page with a revised "Last Updated"
            date. I encourage you to review this policy periodically to stay
            informed about how your information is handled.
          </p>

          <h2 className="text-2xl font-medium mt-6 mb-4">Contact</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please don't hesitate to contact me through the
            contact form on my website or email me directly at
            [your-email@example.com].
          </p>

          <p className="text-sm text-light_white mt-6">
            Last updated: January 30, 2025
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
