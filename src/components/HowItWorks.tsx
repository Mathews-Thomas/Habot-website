import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-center">How it works?</h1>
      <p className="text-lg mb-8 text-center">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-md shadow-md">
          <div className="text-4xl mb-2">
            <i className="fas fa-user-plus"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2">Select Your Role and Sign Up</h3>
        </div>
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-md shadow-md">
          <div className="text-4xl mb-2">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2">Buyers Post Your Requirements</h3>
        </div>
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-md shadow-md">
          <div className="text-4xl mb-2">
            <i className="fas fa-search"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2">Review, Select, and Contact the Best Suppliers</h3>
        </div>
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-md shadow-md">
          <div className="text-4xl mb-2">
            <i className="fas fa-comment-dots"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2">Contact to Buyers and Share your Quote for the service</h3>
        </div>
        <div className="flex flex-col items-center bg-blue-100 p-6 rounded-md shadow-md">
          <div className="text-4xl mb-2">
            <i className="fas fa-handshake"></i>
          </div>
          <h3 className="text-lg font-semibold mb-2">Both the Parties can Connect and Make Business Leave a Feedback</h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
