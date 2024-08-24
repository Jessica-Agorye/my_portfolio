import { createClient } from "contentful";

import { useEffect, useState } from "react";

// Define types based on your data structure
interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    blogImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title: string;
    blogAuthur: string;
    createdDate: string;
    postContent: string;
    blogSummary: string;
  };
}

const BlogList = () => {
  // Define state with correct type
  const [blogPosts, setBlogPost] = useState<BlogPost[]>([]);

  const client = createClient({
    space: "bt2yilzssp9b",
    accessToken: "zNXP81qloAXT-pLLX8gpZda775EcmjWffOfTWKpoNa8",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries<BlogPost>();
        console.log(entries); // Debug entries structure
        setBlogPost(entries.items); // Update state with the items array
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="mb-5 px-1">
      <h1 className="text-black text-center text-base font-bold mt-20 mb-2 md:text-xl">
        Blog Posts
      </h1>
      <div className="grid gap-4 grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <section
              className="text-white bg-black p-2 rounded-lg max-w-xs mx-auto"
              key={post.sys.id}
            >
              <header>
                <img
                  src={`https:${post.fields.blogImage.fields.file.url}`}
                  alt={post.fields.title || "Blog Title"}
                  width="150"
                  height="90"
                  className="mx-auto mb-2 object-cover"
                />
                <h2 className="post-title text-sm font-semibold">
                  {post.fields.title || "Untitled"}
                </h2>
                <p className="post-meta mt-1 text-xs">
                  <span className="post-author mr-1">
                    {post.fields.blogAuthur || "Unknown Author"}
                  </span>
                  <span className="date">
                    {post.fields.createdDate || "Unknown Date"}
                  </span>
                </p>
              </header>
              <div className="mt-2">
                <p className="mb-2 text-xs">
                  {post.fields.blogSummary || "No content available."}
                </p>
                <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs">
                  Read More
                </button>
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
