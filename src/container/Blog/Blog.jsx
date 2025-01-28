import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OtherBlogs from "./OtherBlogs";
import LatestBlogs from "./LatestBlogs";

const Blog = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <LatestBlogs />
      </div>
      <div className="">
        <OtherBlogs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
