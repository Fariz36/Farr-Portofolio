import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://i.ibb.co.com/LnjKq1Q/image-2024-08-07-234753771.png"
                  alt="image-2024-08-07-234753771"
                  className="transition-transform duration-300 hover:scale-150"
                  border="0"
                  width="70"
                  height="70">
                </img>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="#Home" className="text-black hover:bg-custom-red hover:text-white rounded-lg p-1 font-mono">
                  Home
                </a>

                <a href="#About" className="text-black hover:bg-custom-red hover:text-white rounded-lg  p-1 font-mono">
                  About
                </a>

                <a href="#Skill" className="text-black hover:bg-custom-red hover:text-white rounded-lg  p-1 font-mono">
                  Skill
                </a>

                <a href="#Achievement" className="text-black hover:bg-custom-red hover:text-white rounded-lg  p-1 font-mono">
                  Achievement
                </a>

                <a href="#Project" className="text-black hover:bg-custom-red hover:text-white rounded-lg  p-1 font-mono">
                  Project
                </a>  

                <a href="#Contact" className="text-black hover:bg-custom-red hover:text-white rounded-lg  p-1 font-mono">
                  Contact
                </a>  
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
