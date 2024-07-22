import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 lg:text-2xl ">
      <FontAwesomeIcon icon={faEnvelope} />

      <p>J.A</p>
    </div>
  );
};

export default Logo;
