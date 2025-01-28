import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Ethics = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bg-primary text-secondary font-montserrat p-8 py-14 sm:py-16 md:py-20 pt-28 lg:pt-36">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Code of Ethics</h1>
          <p className="mb-4 text-light_white">
            As a Full Stack Developer and professional, I am committed to
            upholding the highest standards of ethical conduct in my work. This
            Code of Ethics outlines the principles that guide my actions and
            decisions in all aspects of my projects and interactions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Integrity</h2>
          <p className="mb-4">
            I strive to maintain honesty and transparency in all my dealings.
            Whether collaborating with clients, colleagues, or other
            stakeholders, I ensure that my actions are guided by trust and
            accountability.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Respect</h2>
          <p className="mb-4">
            I respect the ideas, values, and contributions of everyone I work
            with. By fostering an inclusive and supportive environment, I aim to
            promote collaboration and mutual understanding.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Quality</h2>
          <p className="mb-4">
            I am committed to delivering high-quality solutions that meet the
            needs of my clients and end-users. Through careful planning,
            attention to detail, and continuous improvement, I aim to exceed
            expectations in every project.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Privacy and Security
          </h2>
          <p className="mb-4">
            I prioritize the protection of sensitive data and ensure that all
            projects adhere to best practices for privacy and security. By
            implementing robust safeguards, I aim to maintain the trust of my
            clients and users.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Innovation</h2>
          <p className="mb-4">
            I embrace creativity and innovation in my work, leveraging
            cutting-edge technologies and techniques to deliver impactful
            solutions. I continuously learn and adapt to stay ahead in a rapidly
            changing digital landscape.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Responsibility</h2>
          <p className="mb-4">
            I take responsibility for the outcomes of my work and strive to make
            a positive impact. Whether it’s ensuring accessibility, minimizing
            environmental impact, or supporting social good, I aim to contribute
            meaningfully to the world.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Collaboration</h2>
          <p className="mb-4">
            I believe in the power of teamwork and collaboration. By working
            closely with clients, partners, and other professionals, I aim to
            achieve shared goals and create value for all stakeholders.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Continuous Learning
          </h2>
          <p className="mb-4">
            I am committed to personal and professional growth. By staying
            updated with industry trends, attending training, and seeking
            feedback, I strive to enhance my skills and deliver the best
            possible solutions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Fairness</h2>
          <p className="mb-4">
            I adhere to principles of fairness and equality in all my work. I
            avoid biases and ensure that my actions and decisions are impartial
            and just.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
          <p className="mb-4">
            This Code of Ethics serves as a foundation for my professional
            conduct. By adhering to these principles, I aim to build strong
            relationships, deliver exceptional results, and make a positive
            impact in the digital world.
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

export default Ethics;
