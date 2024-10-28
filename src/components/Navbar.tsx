import React from "react";
import Logo from "../../public/Logo.png"; // Ensure the path to your logo is correct

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-around items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>
     
      <div className="flex gap-7">
      <div className="flex items-center space-x-8">
        <button className="text-gray-600 hover:text-purple-800">Find Suppliers</button>
        <button className="text-gray-600 hover:text-purple-800">Find Service Tags</button>
      </div>
        <button className="bg-white border font-bold border-green-600 text-green-600 py-2 px-4 rounded hover:bg-green-600 hover:text-white transition duration-200">
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
