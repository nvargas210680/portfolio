import React from "react";
import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  const siguenosRef = useRef(null);
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/nicolas-vargas-2b75a6221/", "_blank");
  };
  const handleGithubClick = () => {
    window.open("https://github.com/nvargas210680", "_blank");
  };
  const foregoClick = () => {
    window.open("https://www.foregoforeclosure.ca/", "_blank");
  };
  return (
    <footer className="flex flex-col bg-[#001b5e] text-gray-100 rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white-500 sm:text-center text-white">
          © 2023{" "}
          <a href="https://nickvargas.dev/" className="hover:underline">
            nickvargas™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex  pt-6 max-w-[200px] w-full">
          <FaLinkedinIn icon={FaLinkedinIn} onClick={handleLinkedinClick} className="cursor-pointer" size={20} />
        </div>
        <div className="flex  pt-6 max-w-[200px] w-full">
          <GoMarkGithub icon={GoMarkGithub} onClick={handleGithubClick} className="cursor-pointer" size={20} />
        </div>
        <a className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 " href="resumeInceptionU.pdf">
          Download CV
        </a>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a href="mailto:nvargas210680@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
