import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import DSAModal from "../Components/DSAModal";

function DSAData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://server-portfolio750156.herokuapp.com/getdsa")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        alert("Error");
      });
  });

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-primary min-h-screen">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-bgheading relative">
          &#xa0;&#x3c;DSA&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-6 lg:mt-10 bg-transparent md:text-7xl lg:text-9xl font-bold">
          90-DAYS
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center my-16 sm:my-20 md:my-24 lg:my-28 ">
        {data.map((element) => (
          <DSAModal
            day={element.day}
            tags={element.tags}
            content={element.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DSAData;
