import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const sections = [
  {
    id: "use-of-website",
    title: "Use of Website",
    type: "paragraph",
    content:
      "The content on this website is for informational purposes only. You may use the website to explore my portfolio, blog posts, and services but must not use it for any illegal, unauthorized, or disruptive purposes. You are also prohibited from interfering with or disrupting the operation of the website.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    type: "paragraph",
    content:
      "All content on this website, including but not limited to text, images, logos, graphics, videos, and code, is protected by intellectual property laws and is owned by me unless otherwise stated. You may not reproduce, distribute, or create derivative works of any part of this website without my prior written consent.",
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    type: "paragraph",
    content:
      "As a user, you are responsible for ensuring that your use of this website complies with all applicable laws and regulations. You agree not to engage in any conduct that may harm the website, its users, or interfere with the functioning of any services provided.",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    type: "paragraph",
    content:
      "I shall not be liable for any damages arising from your use of this website or any linked external websites. This includes, but is not limited to, direct, indirect, incidental, or consequential damages, loss of profits, or business interruption, even if I have been advised of the possibility of such damages.",
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    type: "paragraph",
    content:
      "This website may contain links to third-party websites for your convenience or reference. I do not control or endorse these external sites and am not responsible for their content, practices, or policies. I encourage you to review their respective terms and privacy policies.",
  },
  {
    id: "modifications-to-terms",
    title: "Modifications to Terms",
    type: "paragraph",
    content:
      "I reserve the right to update or modify these terms and conditions at any time. Any changes will be posted on this page, and it is your responsibility to review them periodically. By continuing to use the website after any modifications, you agree to be bound by the updated terms.",
  },
  {
    id: "privacy-and-data-protection",
    title: "Privacy and Data Protection",
    type: "paragraph",
    content:
      "I value your privacy. Please review my Privacy Policy, which explains how I collect, use, and protect your personal information when you visit this website or interact with my services.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    type: "paragraph",
    content:
      "These terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising out of or related to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in [Your Location].",
  },
  {
    id: "contact-information",
    title: "Contact Information",
    type: "paragraph",
    content:
      "If you have any questions about these terms and conditions, please contact me at ",
    extra: "Last updated: January 30, 2025",
    isFooter: true,
  },
];

const TermsSection = ({ id, title, type, content, extra, isFooter }) => {
  const Component = isFooter ? "footer" : "article";
  return (
    <Component
      id={id}
      className="bg-secondary/10 p-6 rounded-2xl shadow-sm scroll-mt-40"
    >
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-light_white leading-relaxed">
        {content}
        {id === "contact-information" && (
          <a
            href="mailto:ovilashjalui@gmail.com"
            className="text-yellow-100 hover:underline"
          >
            ovilashjalui@gmail.com
          </a>
        )}
      </div>
      {extra && <p className="text-light_white mt-3">{extra}</p>}
    </Component>
  );
};

const Terms = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <main className="bg-primary text-secondary min-h-screen pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Sidebar Table of Contents */}
          <aside className="hidden lg:block bg-secondary/5 rounded-2xl p-6 sticky top-32 h-fit shadow-md">
            <h3 className="text-xl font-semibold mb-4">On this page</h3>
            <ul className="space-y-3 text-sm text-light_white">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="hover:text-white">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-3 space-y-10 pb-20">
            <header>
              <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
              <p className="text-lg text-light_white">
                Welcome to my portfolio website. These terms and conditions
                outline the rules and regulations for the use of my website and
                services. By accessing or using this website, you agree to
                comply with these terms. If you disagree with any part of these
                terms, you must not use this website.
              </p>
            </header>

            {sections.map((section) => (
              <TermsSection key={section.id} {...section} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
