import React from "react";
import Icon from "../common/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-gray px-40 border-t font-Montserrat">
      <div className="max-w-screen-xl mx-auto px-4 pt-10 pb-5">
        <div className="flex items-center justify-center space-x-4 text-black font-medium text-lg">
          <a href="#about" className="hover:text-gray-900">
            About
          </a>
          <a href="#features" className="hover:text-gray-900">
            Features
          </a>
          <a href="#faq" className="hover:text-gray-900">
            FAQ
          </a>
          <a href="#terms" className="hover:text-gray-900">
            Terms & Conditions
          </a>
          <a href="#privacy" className="hover:text-gray-900">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-row justify-center items-center md:items-end text-black font-medium text-lg  py-6 gap-6">
        <span className="flex items-center space-x-2">
          <Icon name="phone" />
          <span className="text-sm">9313834815</span>
         </span>
          <span className="flex items-center space-x-2">
          <Icon name='mail' />
            <span className="text-sm">sales@lormite.com</span>
          </span>
                 </div>
      </div>

        <Icon name='line-hr' />

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 py-9 text-black font-medium text-base">
        <div className="">
          Powered by <span className="font-medium">Lormite Technologies LLP</span>
        </div>
        <div className="">
          © Logo 2023. All Rights Reserved
        </div>
        <div className="flex gap-2">
          <Icon name='linkedin' />
          <Icon name='facebook' />
          <Icon name='instagram' />
          <Icon name='twitter' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
