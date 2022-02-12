import React from "react";
import ExpModal from "../Components/ExpModal";

function Experience() {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-primary min-h-screen">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-bgheading">
          &#xa0;&#x3c;Experience&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl md:text-7xl absolute mt-4 sm:mt-5 md:mt-6 lg:mt-10 bg-transparent lg:text-9xl  font-bold">
          HUSTLE
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28">
        <ExpModal
          company="HEALINGS"
          job="React Front-End Developer"
          point1="● I worked in HEALINGS as a React FrontEnd Developer"
          point2="● Working on the front-end part of their application using REACT, MATERIAL UI"
          date="May 2021 - Present"
        />
        <ExpModal
          company="MYNERVA"
          job="Front-End Developer"
          point1="● Building entire UI of Web Application of an ED-TECH
platform"
          point2="● Using REACT, REDUX ,TAILWIND"
          date="Sep 2021 - Present"
        />
      </div>
    </div>
  );
}

export default Experience;
