import React from "react";
import ProModal from "../Components/ProModal";
import Footer from "../Components/Footer";
function Projects() {
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-7 bg-primary min-h-screen">
      <div className="flex flex-col items-center">
        <div className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-bgheading">
          &#xa0;&#x3c;PROJECTS&#x2f;&#x3e;&#xa0;
        </div>
        <div className="text-heading font-sans text-5xl sm:text-6xl absolute mt-4 md:mt-6 lg:mt-10 bg-transparent md:text-7xl lg:text-9xl font-bold">
          APPLICATION
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28">
        {projects.map((project) => (
          <ProModal
            name={project.name}
            gitLink={project.gitLink}
            techs={project.techs}
            desc={project.desc}
            links={project.links}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

const projects = [
  {
    name: "Instagram-Complete",
    gitLink: "https://github.com/akku750156/Instagram-Complete.git",
    techs: [
      { name: "ReactJS", link: "../images/react.png" },
      { name: "Firebase", link: "../images/firebase.png" },
      { name: "MaterialUI", link: "../images/matrerialUI.png" },
    ],
    desc: "Firebase authenticated Instagram clone. Features like comments , uploading images, Liking the images.",
    links: [
      {
        name: "Github",
        image: "../images/GitHub.png",
        url: "https://github.com/akku750156/Instagram-Complete.git",
      },
      { name: "Website", image: "../images/website.png", url: "" },
    ],
  },
  {
    name: "Portfolio",
    gitLink: "https://github.com/akku750156/Portfolio.git",
    techs: [
      { name: "ReactJS", link: "../images/react.png" },
      { name: "TailwindCSS", link: "../images/tailwind.png" },
      { name: "NodeJS", link: "../images/node.png" },
      { name: "ExpressJS", link: "../images/express.png" },
      { name: "MongoDB", link: "../images/mongo.png" },
    ],
    desc: "Basically a Portfolio website, used some of the small animation libraries like Gsap",
    links: [
      {
        name: "Github",
        image: "../images/GitHub.png",
        url: "https://github.com/akku750156/Portfolio.git",
      },
      { name: "Website", image: "../images/website.png", url: "" },
    ],
  },
  {
    name: "Tesla-Front-End",
    gitLink: "https://github.com/akku750156/Tesla-Front-End.git",
    techs: [
      { name: "ReactJS", link: "../images/react.png" },
      { name: "Redux", link: "../images/redux.png" },
      { name: "MaterialUI", link: "../images/matrerialUI.png" },
    ],
    desc: "A tesla clone to test some skills related gto Redux and Material UI and added some cool animations",
    links: [
      {
        name: "Github",
        image: "../images/GitHub.png",
        url: "https://github.com/akku750156/Tesla-Front-End.git",
      },
      { name: "Website", image: "../images/website.png", url: "" },
    ],
  },
  {
    name: "Mausam",
    gitLink: "https://github.com/akku750156/Mausam.git",
    techs: [
      { name: "ReactJS", link: "../images/react.png" },
      { name: "MaterialUI", link: "../images/matrerialUI.png" },
    ],
    desc: "A weather app used extracting the weather conditions of the perticulart searched places and results with the temperature of that place along with the weather related image",
    links: [
      {
        name: "Github",
        image: "../images/GitHub.png",
        url: "https://github.com/akku750156/Mausam.git",
      },
      { name: "Website", image: "../images/website.png", url: "" },
    ],
  },
  {
    name: "Cart",
    gitLink: "https://github.com/akku750156/Cart.git",
    techs: [
      { name: "ReactJS", link: "../images/react.png" },
      { name: "MaterialUI", link: "../images/matrerialUI.png" },
    ],
    desc: "Just a simple cart used to learn some of the props skills related to ReactJS",
    links: [
      {
        name: "Github",
        image: "../images/GitHub.png",
        url: "https://github.com/akku750156/Cart.git",
      },
      { name: "Website", image: "../images/website.png", url: "" },
    ],
  },
];

export default Projects;
