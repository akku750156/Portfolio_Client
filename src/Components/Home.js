import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import MenuroundedIcon from "@material-ui/icons/MenuRounded";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";

function Home() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 bg-primary h-screen flex flex-col ">
      <div className="p-2 flex flex-col justify-between h-screen">
        <div className="bg-transparent flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="" onClick={() => setSidebar(true)}>
              <MenuroundedIcon className="text-white" />
            </div>
            <div className="ml-2 text-white">Menu</div>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/Projects" className="flex justify-center items-center">
              <div className="mr-2 text-white">Projects</div>
              <BlurOnRoundedIcon fontSize="large" className="text-white" />
            </Link>
          </div>
        </div>

        <Fade bottom>
          <Link
            to="/feedbacks"
            className="bg-secondary text-green-800 px-8 py-2 absolute bottom-20 right-12 font-bold uppercase font-sans hover:text-green-900"
          >
            Feedbacks
          </Link>
          <div className="flex flex-col justify-center items-center relative">
            <div className="font-serif absolute bg-transparent mb-12 sm:mb-12 md:mb-20 lg:mb-28 text-5xl md:text-7xl lg:text-8xl text-bgheading">
              &#xa0;&#x3c;HELLO&#x2f;&#x3e;&#xa0;
            </div>
            <div className="text-heading font-sans text-6xl bg-transparent md:text-8xl lg:text-9xl font-bold">
              &#xa0;&#x3c;WORLD&#x2f;&#x3e;&#xa0;
            </div>
          </div>
        </Fade>
        <div className="flex justify-center bg-primary text-smtext font-bold">
          DEVELOPED while eating 🍕 with ❤
        </div>
      </div>
      {sidebar && (
        <div className="font-mono absolute top-0 left-0 w-screen h-screen bg-secondary flex justify-center items-center overflow-hidden">
          <Fade left>
            <div
              className="absolute top-2 left-2 bg-secondary"
              onClick={() => setSidebar(false)}
            >
              <CloseRoundedIcon className="bg-secondary" color="primary" />
            </div>
            <div className="flex flex-col justify-content text-left text-4xl bg-secondary tracking-widest  sm:text-5xl md:text-7xl lg:text-8xl">
              <div className="bg-secondary">
                <Link
                  to="/About"
                  className="bg-secondary px-6 hover:bg-primary rounded-xl transition-all text-lgtext"
                >
                  About
                </Link>
              </div>
              <div className="bg-secondary mt-10">
                <Link
                  to="/Experience"
                  className="bg-secondary px-6 hover:bg-primary rounded-xl transition-all text-lgtext"
                >
                  Experience
                </Link>
              </div>
              <div className="bg-secondary mt-10">
                <Link
                  to="/Techs"
                  className="bg-secondary px-6 hover:bg-primary rounded-xl transition-all text-lgtext"
                >
                  Techs
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </div>
  );
}

export default Home;
