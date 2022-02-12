import React from "react";

function FeedModal({ content }) {
  return (
    <div className="text-blue border-2 rounded-xl m-4 w-96  overflow-y-scroll relative shadow-2xl bg-modal font-mono ">
      <div className="py-4 px-8 text-white text-sm sm:text-md md:text-lg lg:text-xl">
        {content}
      </div>
    </div>
  );
}

export default FeedModal;
