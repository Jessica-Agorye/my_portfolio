import { useState } from "react";
import { navItems } from "../utils/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-end md:justify-center">
      <button
        type="button"
        className="rounded-lg p-2 text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="portfolio-navigation"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M4 7h16M4 12h16M4 17h16"
            />
          )}
        </svg>
      </button>

      <ul
        id="portfolio-navigation"
        className={`
          absolute left-0 top-full z-50 mt-4 w-screen flex-col gap-1
          border-y border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-200/40
          md:static md:mt-0 md:flex md:w-auto md:flex-row md:items-center
          md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none
          ${isOpen ? "flex" : "hidden"}
        `}
      >
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              onClick={() => setIsOpen(false)}
              className="group relative block rounded-md px-3 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700 md:px-0 md:py-2"
            >
              {label}
              <span className="absolute bottom-0 left-0 hidden h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full md:block" />
            </a>
          </li>
        ))}

        <li className="mt-2 border-t border-slate-100 pt-3 md:hidden">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Let's connect ↗
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
