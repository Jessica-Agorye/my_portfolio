import { useEffect } from "react";
import Button from "./atoms/Button";
import { portfolioData } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" bg-zinc-800 h-auto pb-10 mt-20 overflow-hidden "
      >
        <p className="text-white text-center pt-8 text-2xl font-semibold md:text-4xl ">
          Projects
        </p>
        <img src="img/swirl2.png" alt="swirl" className=" h-14 block mx-auto" />
        <p className="text-white text-center pt-8 text-base md:text-lg">
          Wanna view my projects? Just swipe and click the button!
        </p>
        <div className="overflow-hidden mt-4">
          <Slider {...settings}>
            {portfolioData.map((project) => (
              <div
                key={project.id}
                className="p-4 flex justify-center items-center"
              >
                <div className="text-white  p-4 flex flex-col cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.description}
                    className="   w-full h-32 object-cover "
                  />
                  <Button
                    target="blank_"
                    href={project.link}
                    className=" text-xs text-center font-bold py-2 px-2 bg-zinc-500  text-white rounded-r-lg opacity-35 w-  md:w-36 md:h-8 border"
                  >
                    {project.description}
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
