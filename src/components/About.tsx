import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Button from "./atoms/Button";
import LottiePlayer from "./LottiePlayer";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 lg:gap-20">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Technical Writing · Web Development
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Jessica
            <br />
            Agorye<span className="text-blue-700">.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
            I'm a writer and web developer who enjoys making complex ideas
            easier to understand and building useful digital experiences. I
            bring together clear communication, technical knowledge, and
            thoughtful problem-solving.
          </p>

          {/* Current focus */}
          <div className="mt-8 space-y-4 border-l-2 border-blue-200 pl-5">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Currently learning
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Backend development, performance optimization, and animations.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">Building</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                A backend application using Node.js, Express, and MongoDB.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Let's connect <span aria-hidden="true">↗</span>
            </Button>

            <a
              href="#projects"
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700"
            >
              Explore my work →
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-4 text-slate-500">
            <span className="text-xs uppercase tracking-wider">Find me on</span>

            <a
              href="https://x.com/jessy_jua"
              target="_blank"
              rel="noreferrer"
              aria-label="Jessica on X"
              className="transition-colors hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faX} />
            </a>

            <a
              href="https://www.instagram.com/agoryejessica/"
              target="_blank"
              rel="noreferrer"
              aria-label="Jessica on Instagram"
              className="transition-colors hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faHashtag} />
            </a>
            <a
              href="https://www.linkedin.com/in/agorye-jessica-156717198/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jessica on LinkedIn"
              className="transition-colors hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl"
            />

            <div className="relative mx-auto max-w-md">
              <LottiePlayer />
            </div>

            <div className="relative mt-4 border-t border-slate-200 pt-5">
              <p className="text-sm font-medium text-slate-800">
                Turning ideas into clear, useful experiences.
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Through writing, code, and continuous learning.
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-xs tracking-wide text-slate-400">
            WRITING · BUILDING · LEARNING
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
