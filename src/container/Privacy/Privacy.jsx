import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const sections = [
  {
    id: "info",
    title: "Information I Collect",
    type: "paragraph",
    content: (
      <>
        <p>
          <strong>Personal Information:</strong> When you contact me via email
          or forms, I collect your name, email, and any extra details you
          provide.
        </p>
        <p>
          <strong>Usage Data:</strong> Non-personal info like browser type,
          device details, pages visited, and time spent on site.
        </p>
        <p>
          <strong>Technical Data:</strong> IP addresses, device identifiers, and
          error logs for security.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How I Use Your Information",
    type: "list",
    content: [
      "To respond to inquiries and requests.",
      "To analyze and improve website performance.",
      "To secure the website and prevent unauthorized access.",
      "To send updates or notifications (with your consent).",
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    type: "paragraph",
    content:
      "I do not sell, trade, or share your personal info with third parties, except as required by law or with your consent. I may use third-party providers for analytics, hosting, or communication, who are required to protect your data.",
  },
  {
    id: "cookies",
    title: "Cookies",
    type: "list",
    content: [
      "Essential Cookies: Required for basic functionality.",
      "Performance Cookies: Monitor site usage and performance.",
      "Functional Cookies: Save preferences and login info.",
    ],
    extra:
      "You can manage or disable cookies in browser settings, but some features may not work properly.",
  },
  {
    id: "thirdparty",
    title: "Third-Party Links",
    type: "paragraph",
    content:
      "This site may contain external links. I am not responsible for their privacy practices or content. Please review their policies before sharing personal info.",
  },
  {
    id: "security",
    title: "Security Measures",
    type: "paragraph",
    content:
      "I use encryption, secure servers, and regular updates to protect your data. However, no online transmission is 100% secure.",
  },
  {
    id: "retention",
    title: "Data Retention",
    type: "paragraph",
    content:
      "I retain personal data only as long as necessary for this policy. Once no longer needed, data is deleted or anonymized unless law requires retention.",
  },
  {
    id: "rights",
    title: "Your Rights",
    type: "list",
    content: [
      "Access, update, or delete your personal info.",
      "Withdraw consent for processing.",
      "Request a portable copy of your data.",
      "Object to or restrict processing of your data.",
      "File complaints with local data authorities.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    type: "paragraph",
    content:
      "This site is not intended for children under 13, and I do not knowingly collect their data. If submitted, please contact me so I can remove it immediately.",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    type: "paragraph",
    content:
      "I may update this policy due to legal, technical, or practice changes. Updates will be posted here with a revised date.",
  },
  {
    id: "contact",
    title: "Contact",
    type: "paragraph",
    content:
      "For any questions or requests regarding this Privacy Policy, please contact me via the website contact form or at ovilashjalui@gmail.com.",
    extra: "Last updated: January 30, 2025",
    isFooter: true,
  },
];

const PrivacySection = ({ id, title, type, content, extra, isFooter }) => {
  const Component = isFooter ? "footer" : "article";
  return (
    <Component
      id={id}
      className="bg-secondary/10 p-6 rounded-2xl shadow-sm scroll-mt-40"
    >
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      {type === "list" ? (
        <ul className="list-disc pl-6 text-light_white leading-relaxed space-y-1">
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="text-light_white leading-relaxed">{content}</div>
      )}
      {extra && <p className="text-light_white mt-3">{extra}</p>}
    </Component>
  );
};

const Privacy = () => {
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
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-light_white">
                Welcome to my portfolio website. This Privacy Policy outlines
                the types of information I collect, how I use it, and the steps
                I take to protect your privacy.
              </p>
            </header>

            {sections.map((section) => (
              <PrivacySection key={section.id} {...section} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
