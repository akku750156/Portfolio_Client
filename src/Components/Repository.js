import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Repository() {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-primary min-h-screen">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-bgheading relative">
          &#xa0;&#x3c;STORE&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-6 lg:mt-10 bg-transparent md:text-7xl lg:text-9xl font-bold">
          REPOSITORY
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28">
        <Link to="/DSAData">
          <div className="my-8 border-2 p-3 rounded-xl shadow-2xl bg-modal text-white font-sans">
            <div className="flex flex-col m-auto bg-modal">
              <div className="flex justify-between bg-modal mb-2">
                <div className="flex justify-center items-center bg-modal">
                  <div className="h-4 w-4 bg-red-600 rounded-full mr-1 drop-shadow-2xl"></div>
                  <div className="h-4 w-4 bg-yellow-300  rounded-full mr-1 drop-shadow-2xl"></div>
                  <div className="h-4 w-4 bg-green-500 rounded-full drop-shadow-2xl"></div>
                </div>
                <div className="bg-modal"></div>
              </div>
              <hr className="bg-modal" />
              <div className="bg-modal">
                <div className="text-xl text-left sm:text-2xl md:text-3xl lg:text-5xl bg-modal my-2">
                  DSA-90-DAYS
                </div>
                <div className="bg-modal flex items-start flex-wrap">
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">Arrays</div>
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">String</div>
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">
                    LinkedList
                  </div>
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">DP</div>
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">Greedy</div>
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">Stack</div>
                  <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">Graph</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Repository;
