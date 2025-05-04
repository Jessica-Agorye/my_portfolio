import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mt-20  bg-black text-white h-56">
      <p className="text-center text-lg pt-10 md:text-2xl lg:text-4xl p-2">
        Web Development, and Content Writing Services.
      </p>
      <div className="flex justify-center items-center mt-10 gap-4 text-xl md:text-2xl lg:text-4xl cursor-pointer ">
        <a href="mailto:agoryejessica1@gmail.com">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <p>J.A</p>
      </div>
    </div>
  );
};

export default Footer;
