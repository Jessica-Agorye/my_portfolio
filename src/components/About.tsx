import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faHashtag } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className=" grid grid-cols-1 leading-10 ml-4 md:grid-cols-2 lg:mx-36 lg:mt-8 ">
        <div className=" md:ml-16 lg:ml-24">
          <p className=" text-4xl pt-4 font-bold">Jessica Agorye </p>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            aspernatur?
          </p>

          <ul className="list-disc pl-6">
            <li>Technical Writer lorem lorem ipsum</li>
            <li>Web Developer Writer lorem lorem ipsum </li>
          </ul>

          <div className="flex gap-2 ">
            <p>Social: </p>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faX} />
                <FontAwesomeIcon icon={faHashtag} />
              </li>
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-center md:block">
            <button className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
              Schedule Call
            </button>
            <button className="text-black  border-b bg-white hover:bg-blue-800  hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              WhatsApp
            </button>
          </div>
        </div>
        <div className=" flex item-center justify-center mt-4 ">
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
