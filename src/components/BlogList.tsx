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
      data-aos-duration="2000"
      className="mb-20 px-4 max-w-7xl mx-auto"
    >
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto mt-20 mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
          My Blog
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Find stories about web development, growth and fresh perspectives
          about of tech, innovation, and life in general.
        </p>
      </header>

      {/* Grid of Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <motion.section
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              <div className="relative group">
                <img
                  src={`https:${post.blogImageUrl}`}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-200 hover:text-blue-400 transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1 font-medium">
                  ✒️ {post.blogAuthur} ·{" "}
                  <span className="italic text-gray-500">
                    {post.createdDate}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed line-clamp-3">
                  {post.blogSummary}
                </p>
                <Link
                  to={`/blogDetails/${post.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.section>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No blog posts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
