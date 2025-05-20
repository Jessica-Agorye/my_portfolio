import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Button from "./atoms/Button";
import LottiePlayer from "./LottiePlayer"; // Component from earlier

const About = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-10 lg:px-24">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="leading-8"
      >
        <h1 className="text-4xl font-bold text-blue-900">Jessica Agorye</h1>

        <p className="pt-4 text-sm md:text-lg text-gray-700">
          I’m a writer and web developer with a love for turning ideas into
          impactful digital experiences. I simplify complex topics for better
          understanding and create websites that are functional and visually
          engaging.
        </p>

        <div className="mt-4 space-y-2 text-sm md:text-base">
          <p>
            <strong> Currently learning:</strong> Performance optimization,
            animations, Backend and Server Development.
          </p>
          <p>
            <strong> Working on:</strong> Building a server using Node.js,
            Express, and MongoDB (a NoSQL database).
          </p>
          <p>
            <strong> Goal:</strong> Combine creativity and logic to solve
            real-world problems using web technologies.
          </p>
        </div>

        <div className="mt-6 text-sm flex items-center">
          <p>Social:</p>
          <ul className="ml-3 flex gap-3 text-xl">
            <li>
              <a
                href="https://x.com/jessy_jua"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faX} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agoryejessica/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faHashtag} />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <Button className="text-xs font-bold py-2 px-3 bg-blue-600 text-white rounded-md">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Schedule Call
            </a>
          </Button>

          <Button className="text-xs font-bold py-2 px-3 bg-green-600 text-white rounded-md">
            WhatsApp
          </Button>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <div className="w-[300px] md:w-[400px]">
          <LottiePlayer />
        </div>

        <blockquote className="mt-6 italic text-gray-600 border-l-4 border-blue-500 pl-4 text-sm md:text-base">
          "Building experiences that matter — one line of code at a time."
        </blockquote>
      </motion.div>
    </div>
  );
};

export default About;
