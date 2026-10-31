import { motion } from "framer-motion";

const SkillPage = () => {
  const stack = ["MongoDB", "Express.js", "React", "Node.js"];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16"
    >
      {/* Section heading */}
      <div className="mx-auto mb-14 max-w-2xl">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          My Technical Toolkit
        </p>

        <h2 className="text-center text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          Technologies & Tools
          <span className="text-blue-700">.</span>
        </h2>

        <p className="mt-5 text-center text-base leading-8 text-slate-600 md:text-lg">
          The technologies and tools I use to build, develop, and maintain web
          applications.
        </p>
      </div>

      {/* Skills cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* MERN Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 md:p-9"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                01 / Development Stack
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                MERN Stack
              </h3>
            </div>

            <span className="text-3xl font-light text-slate-300">01</span>
          </div>

          <p className="mb-7 text-sm leading-7 text-slate-500">
            Technologies used in full-stack JavaScript application development.
          </p>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 transition-colors hover:border-blue-300 hover:bg-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Other Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 md:p-9"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                02 / Core Technologies
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Development Tools
              </h3>
            </div>

            <span className="text-3xl font-light text-slate-300">02</span>
          </div>

          <p className="mb-7 text-sm leading-7 text-slate-500">
            Languages, styling tools, and version control technologies used in
            my development work.
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillPage;
