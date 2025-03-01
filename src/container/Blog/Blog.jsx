import { ClickSpark } from "../../components/react-bits";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import LatestBlogs from "./LatestBlogs";

const Blog = () => {
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="navbar">
          <Navbar />
        </div>
        <div className="">
          <LatestBlogs />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </ClickSpark>
    </>
  );
};

export default Blog;
