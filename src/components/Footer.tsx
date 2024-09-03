import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mt-20  bg-zinc-800  text-white h-56">
      <p className="text-center text-2xl pt-10 md:text-4xl p-2">
        Web Development, and Content Writing Services.
      </p>
      <div className="flex justify-center items-center mt-10 gap-4 lg:text-4xl cursor-pointer ">
        <FontAwesomeIcon icon={faEnvelope} />

        <p>J.A</p>
      </div>
    </div>
  );
};

export default Footer;
