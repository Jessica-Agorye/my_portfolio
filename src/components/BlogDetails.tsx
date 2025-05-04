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
    <div className="px-4 md:px-8 py-10">
      <Link
        to="/"
        className="text-blue-700 hover:underline text-lg font-semibold"
      >
        ← Back to Blog Posts
      </Link>

      <div className="mt-8">
        {singleBlogPost ? (
          <section className="bg-zinc-100 text-black rounded-lg p-6 md:p-10 mx-auto max-w-3xl shadow-md space-y-6">
            <img
              src={`https:${singleBlogPost.blogImageUrl}`}
              alt={singleBlogPost.title}
              className="w-full h-auto rounded-md object-cover"
            />

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                {singleBlogPost.title}
              </h2>
              <p className="text-center text-sm text-gray-600">
                {singleBlogPost.blogAuthur} • {singleBlogPost.createdDate}
              </p>
            </div>

            <div className="text-base leading-relaxed space-y-4">
              {singleBlogPost.postContent.split("\n").map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </section>
        ) : (
          <p className="text-center text-gray-600">No blog post available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
