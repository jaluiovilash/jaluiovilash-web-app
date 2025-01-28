import { useEffect, useState } from "react";

function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [endCursor, setEndCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  // Utility function to format date as DD-MM-YYYY
  const convertInDDMMYYYY = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB").split("/").join("-");
  };

  // Fetch blogs using Hashnode GraphQL API
  const fetchBlogs = async (cursor = null) => {
    const query = `
      query {
        user(username: "jaluiovilash") {
          publications(first: 1) {
            edges {
              node {
                posts(first: 6, after: "${cursor || ""}") {
                  edges {
                    node {
                      title
                      subtitle
                      slug
                      coverImage {
                        url
                      }
                      publishedAt
                      views
                      author {
                        username
                        name
                      }
                    }
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                }
              }
            }
          }
        }
      }
    `;

    setLoading(true);

    try {
      const response = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blogs.");
      }

      const { data } = await response.json();
      const posts = data.user.publications.edges[0].node.posts;

      // Prevent duplicate blogs
      setBlogs((prevBlogs) => {
        const newBlogs = posts.edges.filter(
          (newBlog) =>
            !prevBlogs.some(
              (existingBlog) => existingBlog.node.slug === newBlog.node.slug
            )
        );
        return [...prevBlogs, ...newBlogs];
      });

      setEndCursor(posts.pageInfo.endCursor);
      setHasNextPage(posts.pageInfo.hasNextPage);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-12 py-14 sm:py-16 md:py-20 pt-28 lg:pt-36">
      <h1 className="text-5xl font-semibold text-center mb-10">
        Insights & Inspiration: Discover the Latest Blogs
      </h1>

      {loading && blogs.length === 0 ? (
        // Loading state
        <div className="flex justify-center items-center h-[90vh]">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.node.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Blog cover image */}
              {blog.node.coverImage ? (
                <img
                  src={blog.node.coverImage.url}
                  alt={blog.node.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">No Cover Image</span>
                </div>
              )}
              <div className="p-5 flex-grow flex flex-col">
                {/* Blog title */}
                <a
                  href={`https://jaluiovilashblogs.hashnode.dev/${blog.node.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className="text-2xl font-semibold mb-3 text-black hover:underline cursor-pointer font-montserrat line-clamp-2"
                    title={blog.node.title}
                  >
                    {blog.node.title}
                  </h2>
                </a>

                {/* Blog subtitle */}
                <p className="text-gray-500 mb-6 flex-grow font-normal line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
                  {blog.node.subtitle}
                </p>

                {/* Blog footer */}
                <div className="flex justify-between items-end mt-auto">
                  <a
                    href={`https://jaluiovilashblogs.hashnode.dev/${blog.node.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-white hover:text-white bg-orange-600 hover:bg-orange-400 rounded-md text-sm"
                  >
                    Read
                  </a>
                  <div className="text-gray-500 text-sm text-right">
                    <p>
                      <strong>Author:</strong> {blog.node.author.name}
                    </p>
                    <p>{convertInDDMMYYYY(blog.node.publishedAt)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load more button */}
      {hasNextPage && !loading && (
        <button
          onClick={() => fetchBlogs(endCursor)}
          className="flex items-center px-6 py-3 border-0 text-white hover:text-white bg-orange-600 hover:bg-orange-400 rounded-md mx-auto mt-8"
        >
          {loading ? "Loading..." : "Show More"}
        </button>
      )}
    </div>
  );
}

export default LatestBlogs;
