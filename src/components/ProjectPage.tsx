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
    AOS.init({ once: true });
  }, []);

  // eslint-disable-next-line prefer-const
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-24 px-6 md:px-20"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2 className="text-gray-900 text-center text-3xl md:text-5xl font-extrabold mb-6">
        Projects
      </h2>
      <p className="text-gray-600 text-center mb-16 text-lg md:text-xl max-w-xl mx-auto">
        Swipe through and explore some of my recent work.
      </p>

      <Slider {...settings}>
        {portfolioData.map(({ id, image, link, description }) => (
          <div key={id} className="px-4">
            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg
                transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl
                flex flex-col cursor-pointer"
              tabIndex={0} // for keyboard focus
            >
              <div className="relative w-full h-56 md:h-48 overflow-hidden">
                <img
                  src={image}
                  alt={description}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional overlay for text on image or effect */}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-700 text-sm flex-grow mb-4 leading-relaxed">
                  {description}
                </p>

                <Button
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-6 rounded-md transition-colors duration-300"
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectPage;
