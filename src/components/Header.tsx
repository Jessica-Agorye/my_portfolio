import Logo from "./Logo";
import Nav from "./Nav";


const Header = () => {
  return (
   
      <div className="App">
        <header className=" bg-black text-white sticky top-0 z-[20] flex flex-wrap w-full items-center justify-between border-b p-8">
          <Logo />
          <Nav />
        </header>
      </div>
   
  );
};

export default Header;
