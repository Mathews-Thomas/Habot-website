import React from "react";

const SupplierFinder: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-blue-50">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">Let Suppliers Find You</h1>
        <hr className="border-t-2 border-orange-500 w-1/4 mb-4" />
      </div>
      <button className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-200">
        Get Verified
      </button>
    </div>
  );
};

export default SupplierFinder;
