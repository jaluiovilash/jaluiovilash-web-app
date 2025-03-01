import { useEffect, useState } from "react";
import { BlurText } from "../../components/react-bits";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);
  const publicationId = "67989a925886f609bf93f353";

  const fetchBlogs = async (cursor = null) => {
    setLoading(true);

    const query = {
      query: `
        query {
          publication(id: "${publicationId}") {
            posts(first: 6, after: ${cursor ? `"${cursor}"` : null}) {
              edges {
                node {
                  id
                  title
                  subtitle
                  slug
                  coverImage {
                  url  
              }
                  publishedAt
                  author {
                    name
                  }
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      `
    };

    try {
      const response = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query)
      });

      const json = await response.json();
      if (!json?.data?.publication?.posts?.edges) {
        throw new Error("❌ No blog posts found.");
      }

      const blogPosts = json.data.publication.posts.edges.map(
        (edge) => edge.node
      );
      setBlogs(cursor ? [...blogs, ...blogPosts] : blogPosts);
      setHasNextPage(json.data.publication.posts.pageInfo.hasNextPage);
      setEndCursor(json.data.publication.posts.pageInfo.endCursor);
    } catch (error) {
      console.error("🚨 Error fetching blogs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-12 py-14 sm:py-16 md:py-20 pt-28 lg:pt-36">
      <h1 className="text-3xl md:text-5xl font-medium text-center mb-14">
        <BlurText
          text="Insights & Inspiration: Discover the Latest Blogs"
          delay={50}
          animateBy="words"
          direction="top"
        />
      </h1>

      {/* Loading State */}
      {loading && blogs.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Blog Cover Image */}
              {blog.coverImage?.url ? (
                <img
                  src={blog.coverImage.url} // ✅ Corrected to use the actual image URL
                  alt={blog.coverImage?.photographer || "Blog Cover"}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">No Cover Image</span>
                </div>
              )}

              <div className="p-5 flex-grow flex flex-col">
                {/* Blog Title */}
                <a
                  href={`https://jaluiovilashblogs.hashnode.dev/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className="text-2xl font-semibold mb-3 text-black hover:underline cursor-pointer line-clamp-2"
                    title={blog.title}
                  >
                    {blog.title}
                  </h2>
                </a>

                {/* Blog Brief */}
                <p className="text-gray-500 mb-6 flex-grow line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                  {blog.subtitle}
                </p>

                {/* Blog Footer */}
                <div className="flex justify-between items-end mt-auto">
                  <a
                    href={`https://jaluiovilashblogs.hashnode.dev/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-white hover:text-gray-600 bg-orange-600 hover:bg-blue-200 rounded-lg text-sm transition-all"
                  >
                    Read More
                  </a>
                  <div className="text-gray-500 text-sm text-right">
                    <p>
                      <strong>Author:</strong> {blog.author?.name || "Unknown"}
                    </p>
                    <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasNextPage && !loading && (
        <button
          onClick={() => fetchBlogs(endCursor)}
          className="flex items-center px-6 py-3 border-0 text-white hover:text-gray-600 bg-orange-600 hover:bg-blue-200 rounded-md mx-auto my-8 transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg active:shadow-sm"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default LatestBlogs;
