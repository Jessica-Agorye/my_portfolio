import Logo from "./Logo";
import Navbar from "./Nav";
import Button from "./atoms/Button";

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-[20] border-b p-4 md:p-8 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Center: Nav */}
      <div className="flex-1 md:flex md:justify-center">
        <Navbar />
      </div>

      {/* Right: Contact (hidden on mobile) */}
      <div className="flex-shrink-0 hidden md:block">
        <Button
          className="
    text-xs font-bold py-2 px-3 bg-blue-600 text-white rounded-md cursor-pointer
     transition-colors duration-300 ease-in-out
    hover:text-teal-400 hover:bg-blue-700
    hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50
  "
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Call
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
