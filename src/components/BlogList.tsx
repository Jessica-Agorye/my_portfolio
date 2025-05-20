import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogPost {
  id: string;
  title: string;
  blogAuthur: string;
  createdDate: string;
  blogSummary: string;
  blogImageUrl: string;
}

const BlogList = () => {
  const [blogPosts, setBlogPost] = useState<BlogPost[]>([]);

  const client = createClient({
    space: "bt2yilzssp9b",
    accessToken: "zNXP81qloAXT-pLLX8gpZda775EcmjWffOfTWKpoNa8",
  });

  useEffect(() => {
    AOS.init();
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedPosts = entries.items.map((entry: any) => ({
          id: entry.sys.id,
          title: entry.fields.title || "Untitled",
          blogAuthur: entry.fields.blogAuthur || "Unknown Author",
          createdDate: entry.fields.createdDate || "Unknown Date",
          blogSummary: entry.fields.blogSummary || "No summary available.",
          blogImageUrl: entry.fields.blogImage?.fields.file.url || "",
        }));

        setBlogPost(formattedPosts);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="mb-10 px-4 max-w-7xl mx-auto"
    >
      {/* Intro Section */}
      <header className="text-center max-w-3xl mx-auto mt-20 mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Blog
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Explore in-depth articles, insightful stories, and the latest trends
          that inspire creativity and knowledge in tech and beyond.
        </p>
      </header>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <motion.section
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow max-w-sm mx-auto"
            >
              <header>
                <img
                  src={`https:${post.blogImageUrl}`}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-2">
                  {post.blogAuthur} &middot; {post.createdDate}
                </p>
              </header>
              <p className="text-sm mb-4">{post.blogSummary}</p>
              <Link
                to={`/blogDetails/${post.id}`}
                className="inline-block bg-blue-600 text-yellow-50 text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </motion.section>
          ))
        ) : (
          <p className="text-center text-gray-700 col-span-full">
            No blog posts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
