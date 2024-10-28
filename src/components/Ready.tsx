import React from "react";

const Ready: React.FC = () => {
  return (
    <div>
      {/* Section for Introduction and Region Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-white gap-4">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Ready to dive into <span className="text-purple-800">HABOT?</span>
          </h1>
          <p className="text-lg mb-6">
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
            Sign up Today! →
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-around">
          {["Abu Dhabi", "Dubai", "Sharjah & Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"].map((region) => (
            <button key={region} className="border border-orange-600 text-gray-800 py-2 px-4 rounded-md m-2 hover:bg-orange-600 hover:text-white transition duration-200">
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Section for Video and Buyer/Supplier Information */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-blue-900 text-white p-8 gap-7">
        <div className="flex flex-col items-center md:w-1/2 mb-6 md:mb-0">
          <div className="relative">
            <div className="bg-white p-4 rounded-md relative">
              <iframe 
                 
                src="https://www.youtube.com/embed/IvABnZcymUc?si=JVU7iAX0fYic1lWG" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-md"
              ></iframe>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full p-2">
                <span className="text-white">▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* Buyer Information */}
        <div className="md:w-1/2 ">
          <h3 className="text-xl font-bold mb-2">Buyer</h3>
          <hr className="border-t-2 border-orange-500 mb-4" />
          <ul className="list-disc ml-5">
            <li>✔ Post your requirements.</li>
            <li>✔ Sit back for multiple suppliers to contact you.</li>
            <li>✔ Choose among the suppliers based on the ratings and reviews.</li>
          </ul>
        </div>

        {/* Supplier Information */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-2">Supplier</h3>
          <hr className="border-t-2 border-orange-500 mb-4" />
          <ul className="list-disc ml-5">
            <li>✔ Respond to buyers’ requirements.</li>
            <li>✔ Showcase your products and services.</li>
            <li>✔ Build lasting business relationships.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ready;
