import React from "react";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

function ExpModal(props) {
  return (
    <div className="my-8 border-2 p-3 rounded-xl shadow-2xl bg-modal text-white font-sans">
      <div className="flex flex-col m-auto bg-modal">
        <div className="flex justify-between bg-modal mb-2">
          <div className="flex justify-center items-center bg-modal">
            <div className="h-4 w-4 bg-red-600 rounded-full mr-1"></div>
            <div className="h-4 w-4 bg-yellow-300  rounded-full mr-1"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-modal">{props.date}</div>
        </div>
        <hr className="bg-modal" />
        <div className="bg-modal">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-modal my-2">
            {props.company}
          </div>
          <div className="flex items-center bg-modal my-4">
            <WorkOutlineIcon className="bg-modal" />
            <div className="ml-2 bg-modal">{props.job}</div>
          </div>
          <div className="bg-modal">{props.point1}</div>
          <div className="bg-modal">{props.point2}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpModal;
