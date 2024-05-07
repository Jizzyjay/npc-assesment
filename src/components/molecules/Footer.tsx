import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "../../assets/nasa.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 px-4 md:px-8 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" title="Home">
            <img src={Logo} alt="Logo" className="w-16 h-16" />
          </a>
          <div className="flex space-x-2">
            <a
              href="mailto:ekunolajohn@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <IoMdMail className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://github.com/Jizzyjay"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/ekunolajohn/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
