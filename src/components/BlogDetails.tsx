import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  blogAuthur: string;
  createdDate: string;
  blogSummary: string;
  postContent: string;
  blogImageUrl: string;
}

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState<BlogPost | null>(null);

  const client = createClient({
    space: "bt2yilzssp9b",
    accessToken: "zNXP81qloAXT-pLLX8gpZda775EcmjWffOfTWKpoNa8",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        const entry = await client.getEntry(id as string);

        const formattedPost: BlogPost = {
          id: entry.sys.id,
          title: entry.fields.title as string,
          blogAuthur: entry.fields.blogAuthur as string,
          createdDate: entry.fields.createdDate as string,
          blogSummary: entry.fields.blogSummary as string,
          postContent: entry.fields.postContent as string,
          blogImageUrl: (entry.fields.blogImage?.fields.file.url || "") as any,
        };

        setSingleBlogPost(formattedPost);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    };
    getEntryById();
  }, [id]);

  return (
    <div className="mb-5 px-1">
      <Link
        to="/"
        className="text-black text-center text-2xl font-bold mt-20 mb-2 md:text-xl"
      >
        Blog Posts
      </Link>
      <div className="mt-10 ">
        {singleBlogPost ? (
          <section
            className="text-white bg-zinc-800  p-2 rounded-lg  mx-auto"
            key={singleBlogPost.id}
          >
            <header>
              <img
                src={`https:${singleBlogPost.blogImageUrl}`}
                alt={singleBlogPost.title}
                className="mx-auto mb-2 object-cover w-96 h-56 "
              />
              <h2 className="post-title text-2xl text-center font-semibold">
                {singleBlogPost.title}
              </h2>
              <p className="post-meta mt-10 text-xs md:text-base">
                <span className="post-author ml-20">
                  {singleBlogPost.blogAuthur}
                </span>
                <span className="date ml-8">{singleBlogPost.createdDate}</span>
              </p>
            </header>
            <div className="mt-12 ">
              <p className="mb-2 text-xs md:text-base px-20 leading-8">
                {singleBlogPost.postContent}
              </p>
            </div>
          </section>
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
