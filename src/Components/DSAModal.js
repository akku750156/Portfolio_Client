import React from "react";

function DSAModal({ day, tags, content }) {
  return (
    <div className="p-2 text-white border-2 rounded-xl m-4 w-96  overflow-y-scroll relative shadow-2xl bg-modal font-mono ">
      <div className="flex justify-start items-center bg-modal pb-2">
        <div className="h-4 w-4 bg-red-600 rounded-full mr-1 drop-shadow-2xl"></div>
        <div className="h-4 w-4 bg-yellow-300  rounded-full mr-1 drop-shadow-2xl"></div>
        <div className="h-4 w-4 bg-green-500 rounded-full drop-shadow-2xl"></div>
      </div>
      <hr className="bg-modal" />
      <div className="font-sans py-2 sm:py-4 px-8 text-md sm:text-lg md:text-xl lg:text-2xl">
        DAY : {day}
      </div>
      <div className="bg-modal flex items-start flex-wrap font-sans px-8 text-sm sm:text-sm md:text-md lg:text-lg">
        {tags.map((element) => (
          <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">{element}</div>
        ))}
      </div>
      <div className="py-2 sm:py-4 px-8  text-sm sm:text-md md:text-lg lg:text-xl">
        {content}
      </div>
    </div>
  );
}

export default DSAModal;
