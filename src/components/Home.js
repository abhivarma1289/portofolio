import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
          Welcome to Abhilash varma's Student Portfolio!
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
         <p>
          I am a passionate and dedicated student pursuing a Bachelor's degree in Computer Science at CMR TECHICAL CAMPUS , Hyderabad. With a strong foundation in programming and a curiosity for exploring new technologies, I strive to make a positive impact through innovative projects and continuous learning.
        </p>
        </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className=" mx-auto w-2/3 md:w-full h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;