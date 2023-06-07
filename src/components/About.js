/* eslint-disable react/style-prop-object */
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          <h1 className="text-2xl font-bold inline border-b-4 border-gray-500"> Skills and Expertise:</h1>
          <ol>
            <li>Programming Languages: Python, Java, JavaScript, HTML, CSS</li>
            <li>Tools and Frameworks: TensorFlow, React, Node.js, Git</li>
            <li>Data Analysis: SQL, Pandas, NumPy</li>
            <li>Problem Solving and Algorithm Design</li>
            <li>Effective Communication and Team Collaboration</li>
          </ol>

        </p>

        <br />

        <p className="text-xl">
          <ol>
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">Certifications:</p>
            <br></br>
            <li>● Active participation in BeingZero.</li>
            <li>● Active participation in online contests (CodeChef, Vjudge, HackerRank, Codeforces,
              Leetcode).</li>
            <li>● Participated in the Skill Development Program on Web Development.</li>
            <li>● Qualified to SnackDown 2021 CodeChef global programming competition.</li>
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">Extracircular Activities:</p>
            • Played for Telangana State Kabbadi Team as a captain under 18 Category.
            • Member of AKRITI Club(Cultural Club) in CMR Technical campus.
            • Member of Sports Club in CMR Technical campus.
          </ol>

        </p>
      </div>
    </div>
  );
};

export default About;