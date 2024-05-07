import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-300">© 2024 Your Company</p>
          <div className="flex space-x-4">
            <a
              href="#about"
              className="text-gray-300 hover:text-white hover:underline"
            >
              About Us
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white hover:underline"
            >
              Contact Us
            </a>
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
      </div>
    </footer>
  );
};

export default Footer;
