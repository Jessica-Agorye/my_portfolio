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
    <div className="mb-5 px-4 md:px-8">
      <Link to="/" className="text-black text-xl font-bold mb-2 md:text-2xl">
        Blog Posts
      </Link>
      <div className="mt-10">
        {singleBlogPost ? (
          <section
            className="text-white bg-zinc-600 p-4 rounded-lg mx-auto max-w-full overflow-hidden"
            key={singleBlogPost.id}
          >
            <header>
              <img
                src={`https:${singleBlogPost.blogImageUrl}`}
                alt={singleBlogPost.title}
                className="w-full h-auto max-w-full mx-auto mb-4 object-cover"
              />
              <h2 className="post-title text-center text-lg md:text-2xl font-semibold">
                {singleBlogPost.title}
              </h2>
              <p className="post-meta text-center mt-4 text-sm md:text-base">
                <span className="post-author">{singleBlogPost.blogAuthur}</span>
                <span className="date text-xs md:text-base ml-2">
                  {singleBlogPost.createdDate}
                </span>
              </p>
            </header>
            <div className="mt-4">
              <p className="mb-2 text-sm md:text-base leading-relaxed p-2">
                {singleBlogPost.postContent}
              </p>
            </div>
          </section>
        ) : (
          <p>No blog post available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
