import React from "react";
import HeroBg from "../../public/Herobg.png"; // Ensure the path to your image is correct

const Hero: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen text-white"
      style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 font-roboto">Are You a Supplier?</h1>
        <h2 className="text-3xl mb-8 font-roboto">Explore Matching Opportunities.</h2>
        <div className="flex justify-center space-x-4 mb-4 flex-wrap gap-6">
          <input
            type="text"
            placeholder="Search your required service here"
            className="p-4 rounded-md border border-gray-300 w-64"
            style={{ fontFamily: 'Roboto' }}
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="p-4 rounded-md border border-gray-300 w-64"
            style={{ fontFamily: 'Roboto' }}
          />
          <button className="bg-green-600 text-white p-4 rounded-md hover:bg-green-700 transition duration-200 font-roboto">
            Search
          </button>
        </div>
        <p className="text-lg font-roboto">
          Are you a buyer? <a href="#" className="text-green-400 hover:underline">Click here if you are looking to post a requirement</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
