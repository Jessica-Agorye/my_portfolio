import { useState } from "react";
import { navItems } from "../utils/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative md:static flex justify-between items-center p-2 md:p-0">
      {/* Left placeholder (e.g., logo or empty space) */}
      <div className="flex-shrink-0">
        {/* You can add a logo here if needed, or leave empty */}
      </div>

      {/* Hamburger button - visible on small screens */}
      <button
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`
          md:flex md:flex-row md:items-center gap-4
          absolute md:static bg-black md:bg-transparent
          w-screen md:w-auto left-0 top-full md:top-auto
          transition-all duration-300 ease-in-out
          ${isOpen ? "block py-4" : "hidden md:block"}
          z-10
        `}
      >
        {navItems.map(({ label, href }) => (
          <li
            key={label}
            className="text-white px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent md:px-4"
          >
            <a
              href={href}
              onClick={() => setIsOpen(false)} // close menu on link click (mobile)
              className="block"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
