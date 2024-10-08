import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div data-aos="fade-up" data-aos-duration="3000" className="mb-5">
      <h1 className="text-black text-center text-2xl font-bold mt-20 mb-2 md:text-xl">
        Blog Posts
      </h1>
      <img src="img/swirl2.png" alt="swirl" className=" h-14 block mx-auto" />
      <div className="grid gap-4 grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <section
              className="text-white bg-zinc-800  p-2 rounded-lg max-w-xs mx-auto"
              key={post.id}
            >
              <header>
                <img
                  src={`https:${post.blogImageUrl}`}
                  alt={post.title}
                  width="150"
                  height="90"
                  className="mx-auto mb-2 object-cover"
                />
                <h2 className="post-title text-sm font-semibold">
                  {post.title}
                </h2>
                <p className="post-meta mt-1 text-xs">
                  <span className="post-author mr-1">{post.blogAuthur}</span>
                  <span className="date">{post.createdDate}</span>
                </p>
              </header>
              <div className="mt-2">
                <p className="mb-2 text-xs">{post.blogSummary}</p>
                <Link
                  to={`/blogDetails/${post.id}`}
                  className=" text-xs font-bold py-2 px-2 bg-blue-600 text-yellow-50 rounded-md"
                >
                  Read More
                </Link>
              </div>
            </section>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
