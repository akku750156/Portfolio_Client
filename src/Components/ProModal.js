import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import useCollapse from "react-collapsed";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

function ProModal(props) {
  const classes = useStyles();
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="my-8 border-2 p-3 rounded-xl shadow-2xl bg-modal text-white font-sans">
      <div className="flex flex-col m-auto bg-modal">
        <div className="flex justify-between bg-modal mb-2">
          <div className="flex justify-center items-center bg-modal">
            <div className="h-4 w-4 bg-red-600 rounded-full mr-1 drop-shadow-2xl"></div>
            <div className="h-4 w-4 bg-yellow-300  rounded-full mr-1 drop-shadow-2xl"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full drop-shadow-2xl"></div>
          </div>
          <div className="bg-modal">
            <a href={props.gitLink} className="mb-2 bg-transparent">
              <GitHubIcon
                className={classes.root}
                style={{ backgroundColor: "transparent" }}
              />
            </a>
          </div>
        </div>
        <hr className="bg-modal" />
        <div>
          <button {...getToggleProps()} className="w-full">
            {isExpanded ? (
              <div className="bg-modal">
                <div className="text-3xl  sm:text-5xl md:text-7xl lg:text-9xl bg-modal my-2">
                  {props.name}
                </div>
              </div>
            ) : (
              <div className="bg-modal ">
                <div className="text-xl text-left sm:text-2xl md:text-3xl lg:text-5xl bg-modal my-2">
                  {props.name}
                </div>

                <div className="bg-modal flex items-start flex-wrap">
                  {props.techs.map((tech) => (
                    <div className="mr-2 md:mr-4 lg:mr-6 bg-modal">
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </button>
          <section {...getCollapseProps()} className="font-mono text-left px-8">
            {/* <div>
              <img src="" alt="images" />
            </div> */}
            <div className="my-8">
              <div className="text-heading text-xl sm:text-2xl md:text-4xl font-bold mb-4">
                ABOUT
              </div>
              <div className="font-semibold  text-lg sm:text-xl md:text-2xl text-lgtext">
                {props.desc}
              </div>
            </div>
            <div>
              <div className="text-heading text-xl sm:text-2xl md:text-4xl font-bold">
                TECHS
              </div>
              <div className="flex flex-wrap  items-center my-2 md:my-4 lg:my-8">
                {props.techs.map((tech) => (
                  <div className="flex justify-center items-center px-2 sm:px-3 md:px-4 lg:px-6 border-2 m-3 border-yellow-300 rounded-xl bg-secondary shadow-3xl">
                    <div className="h-16 w-16 m-2 sm:m-3 md:m-4 lg:m-5 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 border-0 border-yellow-600 hover:bg-transparent bg-secondary transition-all p-5 lg:p-6 rounded-xl flex flex-col justify-center items-center ">
                      <img src={tech.link} alt="" className="bg-secondary" />
                      <div className="text-xs sm:text-base md:text-xl lg:text-2xl bg-transparent text-lgtext font-bold">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-heading text-xl sm:text-2xl md:text-4xl font-bold">
                LINKS
              </div>
              <div className="flex flex-wrap  items-center my-2 md:my-4 lg:my-8">
                {props.links.map((link) => (
                  <a href={link.url}>
                    <div className="flex justify-center items-center px-2 sm:px-3 md:px-4 lg:px-6 border-2 m-3 border-yellow-300 rounded-xl bg-secondary shadow-3xl">
                      <div className="h-16 w-16 m-2 sm:m-3 md:m-4 lg:m-5 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 border-0 border-yellow-600 hover:bg-transparent bg-secondary transition-all p-5 lg:p-6 rounded-xl flex flex-col justify-center items-center ">
                        <img src={link.image} alt="" className="bg-secondary" />
                        <div className="text-xs sm:text-base md:text-xl lg:text-2xl bg-transparent text-lgtext font-bold">
                          {link.name}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProModal;
