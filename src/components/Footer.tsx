import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 pb-8 pt-16 md:px-10 md:pt-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-12 md:flex-row md:items-end md:justify-between md:pb-14">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Have a project in mind?
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Let's create something
              <span className="text-blue-700"> meaningful.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              Whether it's technical writing, web development, or an interesting
              collaboration, I'd love to hear from you.
            </p>
          </div>

          <a
            href="mailto:agoryejessica1@gmail.com"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="Email Jessica"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Jessica Agorye. All rights reserved.
          </p>

          <span className="font-semibold tracking-widest text-slate-900">
            J.A
          </span>

          <p>Built with curiosity and purpose.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
