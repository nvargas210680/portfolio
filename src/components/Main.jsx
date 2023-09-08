import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";



function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://media.discordapp.net/attachments/1093339975724044403/1096862457760321736/iStock-1350271924.jpg?width=993&height=662"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Nicolas Vargas
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                1000,
                "Data Analyst",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithubAlt className="cursor-pointer" size={20} />
          </div>
          <a
            className="btn content-download button-main button-scheme"
            href="Nicolas Vargas Talentify.pdf"
            download="Nicolas Vargas Resume InceptionU.docx August 1st.pdf"
          >
            Download CV 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
