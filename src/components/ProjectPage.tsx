import Button from "./atoms/Button";
import { portfolioData } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectPage = () => {
  const settings = {
    dots: true,
    infinite: portfolioData.length > 3,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: portfolioData.length > 3,
    autoplaySpeed: 4500,
    pauseOnHover: true,
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
      className="bg-slate-50 px-6 py-20 md:px-10 md:py-28 lg:px-16"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Projects & <span className="text-blue-700">More Projects!</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              A collection of projects that reflect my development journey,
              problem-solving approach, and interest in creating useful digital
              experiences.
            </p>
          </div>

          <p className="hidden text-sm font-medium text-slate-400 md:block">
            Explore my work <span className="ml-2">↘</span>
          </p>
        </div>

        <div className="projects-slider -mx-3">
          <Slider {...settings}>
            {portfolioData.map(({ id, image, link, description }, index) => (
              <div key={id} className="px-3 pb-10">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70">
                  <div className="relative h-56 overflow-hidden bg-slate-100 md:h-52">
                    <img
                      src={image}
                      alt={`Project ${index + 1}: ${description}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">
                      {description}
                    </p>

                    <div className="mt-auto border-t border-slate-100 pt-5">
                      <Button
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:text-blue-700"
                      >
                        View Project
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          ↗
                        </span>
                      </Button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
