import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
// import styled from "styled-components";
// import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="px-4 py-2 text-white bg-primary min-h-screen">
        <div className="flex flex-col items-center">
          <div className="font-serif text-4xl md:text-7xl lg:text-9xl text-bgheading">
            &#xa0;&#x3c;ABOUT&#x2f;&#x3e;&#xa0;
          </div>
          <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-8 lg:mt-16 bg-transparent md:text-7xl lg:text-9xl font-bold">
            AKASH TIWARI
          </div>
        </div>
        <div className="flex sm:items-start sm:mt-10">
          <div className="flex flex-col mt-12 sm:w-1/2 sm:mt-16 md:mt-20 font-mono text-xs sm:text-base md:text-lg lg:text-2xl ">
            <div>I am currently a</div>
            <div className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
              Front-End Web Developer
            </div>
            <div>
              living in Ayodhya , India. An undergrad of BMS College of
              Engineering. I make Websites usually with{" "}
              <span className="text-smtext font-bold">REACTJS</span> or
              <span className="text-smtext font-bold"> NEXTJS.</span> I'm also
              learning Back-End Development and looking forward to ba a
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
              Full Stack Web Developer
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col sm:items-end mt-12 sm:w-1/2 sm:mt-16 md:mt-20 font-mono text-xs sm:text-base md:text-lg lg:text-2xl">
            <div>
              Dont want to
              <span className="text-smtext font-bold"> ENTANGLE</span> in the
              coding part, Just relax and plan the project and let me do the
              <span className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
                CODE SECTION.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col sm:items-end mt-12 sm:w-1/2 sm:mt-16 md:mt-20 font-mono text-xs sm:text-base md:text-lg lg:text-2xl">
            <div>
              If you have something in{" "}
              <span className="text-smtext font-bold">MIND</span> and want to
              put it on the front, you can reach me, we will get{" "}
              <span className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
                STRAIGHT TO WORK.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex flex-col mt-12 sm:w-1/2 sm:mt-16 md:mt-20 font-mono text-xs sm:text-base md:text-lg lg:text-2xl">
            <div>
              You can <span className="text-smtext font-bold">REACH</span> me on{" "}
              <span className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
                <a
                  href="https://www.linkedin.com/in/akash-tiwari-03b3621b7/"
                  className="text-lgtext"
                >
                  LINKEDIN
                </a>
              </span>{" "}
              ,{" "}
              <span className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
                <a
                  href="https://www.instagram.com/__s.k.yyy__/"
                  className="text-lgtext"
                >
                  INSTAGRAM
                </a>
              </span>{" "}
              and on{" "}
              <span className="text-2xl sm:text-4xl md:text-5xl text-lgtext font-bold my-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100037184014722"
                  className="text-lgtext"
                >
                  FACEBOOK
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
