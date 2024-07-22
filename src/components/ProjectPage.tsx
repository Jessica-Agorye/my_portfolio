const ProjectPage = () => {
  return (
    <>
      <section className=" mb-14 mt-10 lg:mx-36 lg:mt-20 lg:mb-24  ">
        <p className="ml-24 font-bold pt-7 lg:text-2xl lg:fontbold">
          My Latest Projects
        </p>
        <div className="mx-14 mt-10  mb-10 md:grid md:grid-cols-3 md:gap-4 md:mx-14 lg:mx-0 lg:gap-0 ">
          <div className="s lg:flex lg:justify-center lg:items-center">
            <img
              src="/img/skilledpalshot.png"
              alt="skilled pal"
              className=" w-64 h-48 md:w-48 md:h-48  "
            />
            <a className="lg:absolute lg:-bottom-40 lg:bg-black lg:text-white lg:bg-opacity-75 lg:px-6 lg:font-semibold">
              Skilled Pal
            </a>
          </div>

          <div className=" border border-stone-200 lg:flex lg:justify-center lg:items-center">
            <img
              src="/img/quotegenerator.png"
              alt="quote generator"
              className="w-64 h-48 md:w-48 md:h-48  "
            />
            <a className="lg:absolute lg:-bottom-40 lg:bg-black lg:text-white lg:bg-opacity-75 lg:px-6 lg:font-semibold">
              Quote Generator
            </a>
          </div>

          <div className=" lg:flex lg:justify-center lg:items-center">
            <img
              src="/img/img4.png"
              alt="calculator image"
              className="w-64 h-48  md:w-48 md:h-48"
            />
            <a className="lg:absolute lg:-bottom-40 lg:bg-black lg:text-white lg:bg-opacity-75 lg:px-6 lg:font-semibold">
              Calculator
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
