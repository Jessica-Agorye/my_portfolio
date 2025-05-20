import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const stack = ["MongoDB", "Express.js", "React", "Node.js"];
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "Git | GitHub",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base rounded-tr-lg px-4"
    >
      {/* Stack Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-gray-100 p-4 rounded-md shadow-md"
      >
        <p className="font-bold text-gray-800 mb-2">Stack: MERN</p>
        <ul className="flex flex-wrap gap-3 pl-2">
          {stack.map((tech, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="bg-gray-100 p-4 rounded-md shadow-md"
      >
        <div className="bg-black text-white px-3 py-1 rounded-md inline-block mb-2">
          <p className="text-sm md:text-base">Technologies</p>
        </div>
        <ul className="flex flex-wrap gap-3 pl-2">
          {technologies.map((tech, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={350 + index * 100}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SkillPage;
