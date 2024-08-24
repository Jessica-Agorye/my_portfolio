import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <a href="#about">About</a>
      <a href="/blogList">Blog</a>
      <a href="#projects">Projects</a>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // track open and close state

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end lg:w-1/6 lg:text-lg">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className=" flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
