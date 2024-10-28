import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa"; // Import React Icons
import Logo from "../../public/Path 0.png"; // Ensure the path to your logo is correct

const Footer: React.FC = () => {
  return (
    <>
      <div className=" flex items-center justify-around text-gray-400 bg-[#123557] flex-wrap gap-6">
        <div  className="flex gap-6 p-6 flex-wrap ">
          <div className="flex flex-col gap-4 items-center justify-center mx-auto">
            <img src={Logo} />
            <p>© R Singhania hgak</p>
          </div>
          <div className="flex flex-col gap-4 w-[10rem] mx-auto">
            <h1 className="font-bold ">Company</h1>
            <p>About</p>
            <p>FAQ</p>
          </div>
          <div className="flex flex-col gap-4 w-[10rem] mx-auto">
            <h1 className="font-bold ">Terms</h1>
            <p>Data privacy</p>
            <p>Terms</p>
            <p>Accessibility</p>
          </div>
          <div className="flex flex-col gap-4 w-[10rem] mx-auto">
            <h1 className="font-bold ">Related</h1>
            <p>Find Buyer</p>
            <p>Feedback</p>
          </div>
        </div>

        <div className="flex gap-5 flex-wrap">
            <FaLinkedin className=" h-12 w-12 border border-gray-100 rounded-full p-2"/>
            <FaTwitter className=" h-12 w-12 border border-gray-100 rounded-full p-2"/>
            <FaFacebookF className="  h-12 w-12 border border-gray-100 rounded-full p-2"/>
            <FaInstagram className=" h-12 w-12 border-1 rounded-full p-2"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
