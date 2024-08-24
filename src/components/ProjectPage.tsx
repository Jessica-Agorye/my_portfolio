const ProjectPage = () => {
  return (
    <>
      <div className=" bg-black h-auto w-full mt-28 overflow-hidden mb-10">
        <p className="text-fuchsia-300 text-center pt-8 text-lg">Projects</p>
        <div className="mt-10 grid place-items-center md:grid-cols-3">
          <div className=" text-fuchsia-300 w-56 h-48 ">
            <img
              src="/img/img4.png"
              alt=""
              className="w-full h-32 object-contain border border-fuchsia-200"
            />
            <button className=" border border-black text-xs font-bold py-2 px-2 bg-gray-100 mt-2">
              Go to Page
            </button>
          </div>{" "}
          <div className="text-fuchsia-300 w-56 h-48 ">
            <img
              src="/img/quotegenerator.png"
              alt=""
              className="w-full h-32 object-contain border border-fuchsia-200"
            />
            <button className=" border border-black text-xs font-bold py-2 px-2 bg-gray-100 mt-2 ">
              Go to Page
            </button>
          </div>
          <div className="text-fuchsia-300 w-56 h-48">
            <img
              src="/img/skilledpalshot.png"
              alt=""
              className="w-full h-32 object-contain border border-fuchsia-200"
            />
            <button className=" border border-black text-xs font-bold py-2 px-2 bg-gray-100 mt-2 ">
              Go to Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
