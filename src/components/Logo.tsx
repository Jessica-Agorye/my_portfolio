import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 lg:text-2xl cursor-pointer">
      <a href="mailto:agoryejessica1@gmail.com">
        {" "}
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <p>J.A</p>
    </div>
  );
};

export default Logo;
