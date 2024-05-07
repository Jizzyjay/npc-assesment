import Logo from "../../assets/nasa.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 pl-12">
      <div className="max-w-7xl flex items-center">
          <a href="/" >
            <img src={Logo} alt="Logo" className="w-16 h-16" />
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
