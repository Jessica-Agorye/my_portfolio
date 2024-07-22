import { createClient } from "contentful";
import { Key, useEffect, useState } from "react";

const BlogList = () => {
  const [blogPost, setBlogPost] = useState([] as any);

  const client = createClient({
    space: "bt2yilzssp9b",
    accessToken: "zNXP81qloAXT-pLLX8gpZda775EcmjWffOfTWKpoNa8",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogPost(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="">
      <div className=" ">
        <div>
          <div className="posts">
            <h1 className=" text-center pt-7 text-2xl font-semibold">
              Jessica's Blog
            </h1>
            <h2 className=" text-center pt-2">
              <a href="">Go Back Home</a>
            </h2>
            {blogPost?.items?.map(
              (post: { sys: { id: Key | null | undefined } }) => (
                <section
                  className=" text-white bg-black mt-20 pb-10 pt-10 pl-80 "
                  key={post.sys.id}
                >
                  <header className="">
                    <img
                      src="/img/quotegenerator.png"
                      title=""
                      alt=""
                      width="578"
                      height="291"
                      className=""
                    />
                    <h2 className="post-title pt-3"></h2>
                    <p className="post-meta">
                      <a href="" className="post-author"></a>
                      Date <span></span>
                      <small>Date</small>
                    </p>
                  </header>
                  <div className="">
                    <p></p>
                    <button className="">Read More</button>
                  </div>
                </section>
              )
            )}
          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a
                  href="http://twitter.com/thecodeangle"
                  className="pure-menu-link"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
