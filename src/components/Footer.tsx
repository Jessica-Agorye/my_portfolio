import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-lg md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-0">
          Web Development & Content Writing Services.
        </p>

        <div className="flex items-center space-x-6 text-2xl md:text-3xl lg:text-4xl">
          <a
            href="mailto:agoryejessica1@gmail.com"
            className="hover:text-yellow-400 transition-colors duration-300"
            aria-label="Send Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <span className="font-bold text-xl md:text-2xl cursor-default select-none">
            J.A
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
