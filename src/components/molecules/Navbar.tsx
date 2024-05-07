// import Logo from "../../assets/nasa.svg";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4 pl-12">
//       <div className="max-w-7xl flex items-center">
//           <a href="/" >
//             <img src={Logo} alt="Logo" className="w-16 h-16" />
//           </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState } from "react";
import { useState } from 'react';
import Logo from '../../assets/nasa.svg'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-lg font-semibold">
            <img src={Logo} alt="Logo" className="w-16 h-16" />
          </a>
          <div className="flex items-center">
            <div className="ml-4 space-x-4 hidden md:flex">
                <a
                  href='/search'
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                 Search Events
                </a>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-2 space-y-2">
                <a
                  href='/search'
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Search Events
                </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;