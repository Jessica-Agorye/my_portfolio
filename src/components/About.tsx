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
            strong backgound in content development and building dynamic
            websites.
          </p>

          <ul className="list-disc pl-6 text-xs leading-8 mt-2 md:mt-6 md:text-lg  ">
            <li>Web Developer </li>
            <li>Creative & Technical Writer </li>
          </ul>

          <div className="flex gap-2 text-xs mt-4 md:text-lg md:mt-6 ">
            <p>Social: </p>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faX} />
                <FontAwesomeIcon icon={faHashtag} />
              </li>
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 ">
            {/* <button className="text-fuchsia-400 border border-black text-xs font-bold py-2 px-2 ">
              Schedule Call
            </button> */}

            <Button className=" text-xs font-bold py-2 px-2 bg-blue-600 text-yellow-50 rounded-md">
              {" "}
              Schedule Call
            </Button>

            <Button className=" text-xs font-bold py-2 px-2 bg-blue-600 text-yellow-50 rounded-md">
              {" "}
              WhatsApp{" "}
            </Button>
          </div>
        </div>
        <div className=" flex item-center justify-center mt-4">
          <img
            src="img/jess2.png"
            alt="my-picture"
            className=" border-b-2 rounded-full w-6/12 h-60 object-contain md:w-10/12 md:h-72 lg:h-80 "
          />
        </div>
      </div>
    </>
  );
};

export default About;
