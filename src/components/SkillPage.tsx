import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className=" mt-24 mx-10 md:mx-26 lg:mx-36 grid grid-cols-1 md:grid-cols-2 border border-black text-sm md:text-base rounded-tr-lg"
    >
      <div className="leading-8 ">
        <p className=" font-bold pl-2 md:pl-4">Stack: MERN</p>
        <div className="pl-6 md:pl-10">
          <ul className="list-disc">
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>

      <div className="leading-8 mt-2 md:mt-0">
        <div className="bg-black rounded-r-lg ">
          <p className=" text-white pl-2 md:pl-4">Technologies</p>
        </div>
        <div className="pl-6 md:pl-10">
          <ul className="list-disc ">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TailwindCSS</li>
            <li>Git|GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
