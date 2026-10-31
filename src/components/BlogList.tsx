import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { publishedArticles } from "../data/publishedData";

interface BlogPost {
  id: string;
  title: string;
  blogAuthur: string;
  createdDate: string;
  blogSummary: string;
  blogImageUrl: string;
}

const client = createClient({
  space: "bt2yilzssp9b",
  accessToken: "zNXP81qloAXT-pLLX8gpZda775EcmjWffOfTWKpoNa8",
});

const BlogList = () => {
  const [blogPosts, setBlogPost] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();

        const formattedPosts: BlogPost[] = entries.items.map((entry) => {
          const fields = entry.fields as {
            title?: string;
            blogAuthur?: string;
            createdDate?: string;
            blogSummary?: string;
            blogImage?: {
              fields?: {
                file?: {
                  url?: string;
                };
              };
            };
          };

          return {
            id: entry.sys.id,
            title: fields.title || "Untitled",
            blogAuthur: fields.blogAuthur || "Jessica Agorye",
            createdDate: fields.createdDate || "",
            blogSummary:
              fields.blogSummary || "Read the article to learn more.",
            blogImageUrl: fields.blogImage?.fields?.file?.url || "",
          };
        });

        setBlogPost(formattedPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getAllEntries();
  }, []);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16"
    >
      <header className="mx-auto mb-14 max-w-2xl">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          Notes & Insights
        </p>

        <h2
          id="blog-heading"
          className="text-center text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl"
        >
          Articles & Insights<span className="text-blue-700">.</span>
        </h2>

        <p className="mt-5 text-center text-base leading-8 text-slate-600 md:text-lg">
          Exploring web development, technical concepts, and the ideas that
          shape how we build and understand technology.
        </p>
      </header>

      {/* External Published Articles */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Published On</h2>

        <p className="text-gray-600 mb-6">Explore articles by the author.</p>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {publishedArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 py-5 group"
            >
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {article.publication}
                </p>
              </div>

              <span className="text-gray-400 group-hover:text-blue-600">↗</span>
            </a>
          ))}
        </div>
      </section>

      {isLoading && (
        <p role="status" className="py-12 text-center text-sm text-slate-500">
          Loading articles...
        </p>
      )}

      {!isLoading && error && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center">
          <p className="font-medium text-slate-800">
            We couldn't load the articles.
          </p>
          <p className="mt-2 text-sm text-slate-500">Please try again later.</p>
        </div>
      )}

      {!isLoading && !error && blogPosts.length > 0 && (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.1,
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <Link
                to={`/blogDetails/${post.id}`}
                aria-label={`Read ${post.title}`}
                className="block overflow-hidden bg-slate-100"
              >
                {post.blogImageUrl ? (
                  <img
                    src={
                      post.blogImageUrl.startsWith("//")
                        ? `https:${post.blogImageUrl}`
                        : post.blogImageUrl.startsWith("http")
                          ? post.blogImageUrl
                          : `https:${post.blogImageUrl}`
                    }
                    alt=""
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-56 items-center justify-center bg-slate-100">
                    <span className="text-sm font-medium text-slate-400">
                      Article
                    </span>
                  </div>
                )}
              </Link>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {post.blogAuthur}
                  {post.createdDate && (
                    <>
                      <span aria-hidden="true" className="mx-2">
                        ·
                      </span>
                      <time>{post.createdDate}</time>
                    </>
                  )}
                </p>

                <h3 className="text-xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
                  <Link to={`/blogDetails/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">
                  {post.blogSummary}
                </p>

                <Link
                  to={`/blogDetails/${post.id}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                >
                  Read article
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {!isLoading && !error && blogPosts.length === 0 && (
        <p className="py-12 text-center text-sm text-slate-500">
          No articles are available yet. Please check back soon.
        </p>
      )}
    </section>
  );
};

export default BlogList;
