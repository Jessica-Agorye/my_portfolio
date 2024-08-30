import Button from "./atoms/Button";
import { portfolioData } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectPage = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-black h-auto w-full mt-28 overflow-hidden mb-10">
      <p className="text-white text-center pt-8 text-2xl">Projects</p>
      <p className="text-white text-center pt-8 text-lg">
        Wanna view my projects? Just Click!
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
                  className="w-full h-32 object-cover border border-fuchsia-200 "
                />
                <Button
                  target="blank_"
                  href={project.link}
                  className="border border-black text-xs font-bold py-2 px-2 text-yellow-50 "
                >
                  {project.description}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectPage;
