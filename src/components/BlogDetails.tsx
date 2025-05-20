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

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState<BlogPost | null>(null);
  const { id } = useParams<string>();

  const client = createClient({
    space: "bt2yilzssp9b",
    accessToken: "zNXP81qloAXT-pLLX8gpZda775EcmjWffOfTWKpoNa8",
  });

  useEffect(() => {
    if (id) {
      const getEntryById = async () => {
        try {
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
            blogImageUrl: blogImageUrl,
          };

          setSingleBlogPost(formattedPost);
        } catch (error) {
          console.error("Error fetching entry:", error);
        }
      };

      getEntryById();
    } else {
      console.error("No ID provided in URL");
    }
  }, [id]);

  return (
    <div className="px-4 md:px-8 py-12 bg-gray-50 min-h-screen">
      <Link
        to="/"
        className="inline-block text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md mb-6 font-semibold transition-colors duration-300"
      >
        ← Back to Blog Posts
      </Link>

      {singleBlogPost ? (
        <article className="bg-white rounded-xl shadow-lg max-w-3xl mx-auto p-8 md:p-12 space-y-8">
          <img
            src={`https:${singleBlogPost.blogImageUrl}`}
            alt={singleBlogPost.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
          />

          <header className="space-y-3 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {singleBlogPost.title}
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              {singleBlogPost.blogAuthur} &bull;{" "}
              {new Date(singleBlogPost.createdDate).toLocaleDateString()}
            </p>
          </header>

          <section className="prose prose-gray max-w-none mx-auto leading-relaxed text-gray-800">
            {singleBlogPost.postContent.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </section>
        </article>
      ) : (
        <p className="text-center text-gray-500 mt-20">No blog post available.</p>
      )}
    </div>
  );
};

export default BlogDetails;
