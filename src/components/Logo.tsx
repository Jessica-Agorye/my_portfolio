import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="mailto:agoryejessica1@gmail.com"
        aria-label="Email Jessica"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
      </a>

      <a
        href="#about"
        className="text-lg font-bold tracking-tight text-slate-950 transition-colors hover:text-blue-700"
      >
        J<span className="text-blue-700">.</span>A
      </a>
    </div>
  );
};

export default Logo;
