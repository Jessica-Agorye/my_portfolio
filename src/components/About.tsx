import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faHashtag } from "@fortawesome/free-solid-svg-icons";
import Button from "./atoms/Button";
const About = () => {
  return (
    <>
      <div className=" grid grid-cols-1 leading-10 md:grid md:grid-cols-2 lg:mx-36 lg:mt-8 ">
        <div className="mx-2 md:ml-10  lg:ml-24">
          <p className=" text-4xl pt-4 font-bold">Jessica Agorye </p>
          <p className="pt-4 text-xs mt-4 md:mt-6 md:text-lg">
            Jessica Agorye is a passionate writer and web developer with a
            strong background in content development and building dynamic
            websites.
          </p>

          <ul className="list-disc pl-6 text-xs leading-8 mt-2 md:mt-6 md:text-lg  ">
            <li>Web Developer </li>
            <li>Creative & Technical Writer </li>
          </ul>

          <div className="text-xs mt-4 flex md:text-lg md:mt-6 ">
            <p>Social: </p>
            <ul className=" ml-2 flex gap-2 ">
              <li>
                <a href="https://x.com/jessy_jua" target="_blank">
                  {" "}
                  <FontAwesomeIcon icon={faX} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/agoryejessica/"
                  target="_blank"
                >
                  {" "}
                  <FontAwesomeIcon icon={faHashtag} />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex  gap-2 ">
            <Button className=" text-xs font-bold py-2 px-2 bg-blue-600 text-yellow-50 rounded-md">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
                target="_blank"
              >
                {" "}
                Schedule Call
              </a>
            </Button>

            <Button className=" text-xs font-bold py-2 px-2 bg-blue-600 text-yellow-50 rounded-md">
              WhatsApp
            </Button>
          </div>
        </div>
        <div className=" flex item-center justify-center mt-4">
          <img
            src="img/jess2.png"
            alt="my-picture"
            className=" w-6/12 h-60 object-contain md:w-10/12 md:h-72 lg:h-80 "
          />
        </div>
      </div>
    </>
  );
};

export default About;
