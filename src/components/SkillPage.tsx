import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      className="mt-16  grid grid-cols-1 md:grid-cols-2 gap-4  text-sm md:text-base rounded-tr-lg"
    >
      <div className="  ">
        <p className=" font-bold pl-2 md:pl-4 lg:pl-48">Stack: MERN</p>
        <div className=" ml-2 md:ml-4 lg:pl-44 ">
          <ul className=" flex gap-2">
            <li className="pr-2 md:pr-3">MongoDB</li>
            <li className="pr-2 md:pr-3">Express.js</li>
            <li className="pr-2 md:pr-3">React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>

      <div className=" mt-2  md:mt-0 ">
        <div className="bg-black rounded-r-lg text-white">
          <p className=" text-white pl-2 md:pl-4">Technologies</p>
        </div>
        <div className="">
          <ul className="pl-2  flex flex-wrap md:gap-2">
            <li className="pr-2 md:pr-3">HTML</li>
            <li className="pr-2 md:pr-3">CSS</li>
            <li className="pr-2 md:pr-3">JavaScript</li>
            <li className="pr-2 md:pr-3">TailwindCSS</li>
            <li>Git|GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
