import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "../../assets/nasa.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <a href="/">
              <img src={Logo} alt="Logo" className="w-16 h-16" />
            </a>
            <p className="text-sm text-gray-300 hover:text-white">Lagos Nigeria</p>
            <p className="text-sm text-gray-300 hover:text-white">+2348141153727</p>
          </div>
          <div className="flex space-x-2">
            <a href="/" className="text-gray-300 hover:text-white">
              <IoMdMail />
            </a>

            <a
              href="https://github.com/Jizzyjay"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ekunolajohn/"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
