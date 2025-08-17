import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const sections = [
  {
    id: "integrity",
    title: "Integrity",
    type: "paragraph",
    content:
      "I strive to maintain honesty and transparency in all my dealings. Whether collaborating with clients, colleagues, or other stakeholders, I ensure that my actions are guided by trust, accountability, and clear communication.",
  },
  {
    id: "respect",
    title: "Respect",
    type: "paragraph",
    content:
      "I respect the ideas, values, and contributions of everyone I work with. By fostering an inclusive and supportive environment, I aim to promote collaboration and mutual understanding while recognizing the unique strengths of each individual.",
  },
  {
    id: "quality",
    title: "Quality",
    type: "paragraph",
    content:
      "I am committed to delivering high-quality solutions that meet the needs of my clients and end-users. By maintaining rigorous standards, engaging in thorough testing, and constantly improving my skills, I aim to exceed expectations in every project.",
  },
  {
    id: "privacy",
    title: "Privacy and Security",
    type: "paragraph",
    content:
      "I prioritize the protection of sensitive data and ensure that all projects adhere to best practices for privacy and security. By implementing robust safeguards, I strive to maintain the trust of my clients, users, and the broader community.",
  },
  {
    id: "innovation",
    title: "Innovation",
    type: "paragraph",
    content:
      "I embrace creativity and innovation in my work, leveraging cutting-edge technologies and techniques to deliver impactful solutions. I continuously learn and adapt to stay ahead in a rapidly changing digital landscape, embracing new challenges and opportunities for growth.",
  },
  {
    id: "responsibility",
    title: "Responsibility",
    type: "paragraph",
    content:
      "I take responsibility for the outcomes of my work and strive to make a positive impact. Whether it’s ensuring accessibility, minimizing environmental impact, or supporting social good, I aim to contribute meaningfully to the world and promote sustainability.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    type: "paragraph",
    content:
      "I believe in the power of teamwork and collaboration. By working closely with clients, partners, and other professionals, I aim to achieve shared goals and create value for all stakeholders, fostering an environment of mutual trust and respect.",
  },
  {
    id: "learning",
    title: "Continuous Learning",
    type: "paragraph",
    content:
      "I am committed to personal and professional growth. By staying updated with industry trends, attending training, and seeking feedback, I strive to enhance my skills and deliver the best possible solutions to my clients.",
  },
  {
    id: "fairness",
    title: "Fairness",
    type: "paragraph",
    content:
      "I adhere to principles of fairness and equality in all my work. I avoid biases and ensure that my actions and decisions are impartial, just, and inclusive, ensuring all parties involved are treated with respect.",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    type: "paragraph",
    content:
      "I am dedicated to promoting sustainable practices, both in the digital world and in my personal life. By considering the environmental impact of my work and encouraging responsible practices, I strive to help create a greener and more sustainable future for all.",
  },
  {
    id: "community",
    title: "Community Engagement",
    type: "paragraph",
    content:
      "I am deeply committed to supporting the communities in which I work and live. Through mentorship, volunteering, and collaboration, I aim to give back, share knowledge, and foster a sense of shared purpose.",
  },
  {
    id: "conclusion",
    title: "Conclusion",
    type: "paragraph",
    content:
      "This Code of Ethics serves as a foundation for my professional conduct. By adhering to these principles, I aim to build strong relationships, deliver exceptional results, and make a positive impact in the digital world, one project at a time.",
    extra: "Last updated: January 30, 2025",
    isFooter: true,
  },
];

const EthicsSection = ({ id, title, type, content, extra, isFooter }) => {
  const Component = isFooter ? "footer" : "article";
  return (
    <Component
      id={id}
      className="bg-secondary/10 p-6 rounded-2xl shadow-sm scroll-mt-40"
    >
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-light_white leading-relaxed">{content}</div>
      {extra && <p className="text-light_white mt-3">{extra}</p>}
    </Component>
  );
};

const Ethics = () => {
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
              <h1 className="text-4xl font-bold mb-4">Code of Ethics</h1>
              <p className="text-lg text-light_white">
                As a Full Stack Developer and professional, I am committed to
                upholding the highest standards of ethical conduct in my work.
                This Code of Ethics outlines the principles that guide my
                actions and decisions in all aspects of my projects and
                interactions.
              </p>
            </header>

            {sections.map((section) => (
              <EthicsSection key={section.id} {...section} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Ethics;
