import Logo from "./Logo";
import Navbar from "./Nav";

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
        <p className="cursor-pointer hover:text-yellow-400 transition">
          Contact Me
        </p>
      </div>
    </header>
  );
};

export default Header;
