import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


interface BlogImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface BlogPost {
  id: string;
  title: string;
  blogAuthur: string;
  createdDate: string;
  blogSummary: string;
  blogImageUrl: string;
  postContent: string;
}

// Create Contentful client outside the component

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<string>();

  useEffect(() => {
    const getEntryById = async () => {
      if (!id) {
        setError("No blog post ID provided.");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const entry = await client.getEntry(id);

        const fields = entry.fields as {
          title?: string;
          blogAuthur?: string;
          createdDate?: string;
          blogSummary?: string;
          postContent?: string;
          blogImage?: BlogImage;
        };

        const blogImageUrl = fields.blogImage?.fields.file.url || "";

        const formattedPost: BlogPost = {
          id: entry.sys.id,
          title: fields.title || "Untitled",
          blogAuthur: fields.blogAuthur || "Unknown Author",
          createdDate: fields.createdDate || "Unknown Date",
          blogSummary: fields.blogSummary || "No summary available.",
          postContent: fields.postContent || "No content available.",
          blogImageUrl,
        };

        setSingleBlogPost(formattedPost);
      } catch (error) {
        console.error("Error fetching entry:", error);
        setError("Unable to load this blog post. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    getEntryById();
  }, [id]);

  return (
    <div className="px-4 md:px-8 py-12 bg-gray-50 min-h-screen">
      <Link
        to="/"
        className="inline-block text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md mb-6 font-semibold transition-colors duration-300"
      >
        ← Back to Blog Posts
      </Link>

      {isLoading ? (
        <p className="text-center text-gray-500 mt-20">Loading blog post...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-20">{error}</p>
      ) : singleBlogPost ? (
        <>
          {/* Blog Article */}
          <article className="bg-white rounded-xl shadow-lg max-w-3xl mx-auto p-8 md:p-12 space-y-8">
            {singleBlogPost.blogImageUrl && (
              <img
                src={`https:${singleBlogPost.blogImageUrl}`}
                alt={singleBlogPost.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
            )}

            <header className="space-y-3 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {singleBlogPost.title}
              </h1>

              <p className="text-gray-600 text-sm md:text-base">
                {singleBlogPost.blogAuthur} &bull;{" "}
                {singleBlogPost.createdDate !== "Unknown Date"
                  ? new Date(singleBlogPost.createdDate).toLocaleDateString()
                  : "Unknown Date"}
              </p>
            </header>

            <section className="space-y-6 text-gray-800 text-lg leading-8">
              {singleBlogPost.postContent
                .split(/\n+/)
                .filter((para) => para.trim())
                .map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
            </section>
          </article>

        
        </>
      ) : (
        <p className="text-center text-gray-500 mt-20">
          No blog post available.
        </p>
      )}
    </div>
  );
};

export default BlogDetails;
