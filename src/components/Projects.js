import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
//import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
////import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
//import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
   
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div> */}
        Projects
 Title: Dish Detective.
 Technologies used: NodeJs, Vue , ExpressJs, MongoDB.
 Description:
▪ Dish Detective is a restaurant dish finder application built using Node.js
(Express.js) and MongoDB as its database management system.
▪ It has a user-friendly interface that enables users to discover dishes matching
their dietary preferences and restrictions, restaurant type, or location from a
database of restaurants and menus.
▪ The app utilizes Mongoose for data modeling and ODM to interact with
MongoDB, ensuring efficient data storage and retrieval.
▪ Dish Detective also uses Node.js and Express.js for scalable web app
development, allowing the app to handle high user traffic and requests.
      </div>
    </div>
  );
};

export default Projects;