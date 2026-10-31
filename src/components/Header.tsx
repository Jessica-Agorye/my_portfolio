import Logo from "./Logo";
import Navbar from "./Nav";
import Button from "./atoms/Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-slate-900 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 md:px-10 lg:px-16">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="flex flex-1 justify-end md:justify-center">
          <Navbar />
        </div>

        <div className="hidden shrink-0 md:block">
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiXrInrU4VwdSANPi2qHGHIxkOn_PNShwlVeg0msbQDpPHTA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Let's connect
            <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
