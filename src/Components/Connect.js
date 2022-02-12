import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
    // backgroundColor: "yellow",
  },
});

function Connect() {
  const classes = useStyles();

  return (
    <div className="flex flex-col fixed bottom-5 right-5 sm:bottom-10 sm:right-10 md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 bg-transparent">
      <a
        href="https://www.facebook.com/profile.php?id=100037184014722"
        className="mb-2 bg-transparent"
      >
        <FacebookIcon
          className={classes.root}
          // fontSize="large"
          style={{ backgroundColor: "transparent" }}
        />
      </a>
      <a href="https://github.com/akku750156" className="mb-2 bg-transparent">
        <GitHubIcon
          className={classes.root}
          // fontSize="large"
          style={{ backgroundColor: "transparent" }}
        />
      </a>
      <a
        href="https://www.instagram.com/__s.k.yyy__/"
        className="mb-2 bg-transparent"
      >
        <InstagramIcon
          className={classes.root}
          // fontSize="large"
          style={{ backgroundColor: "transparent" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/akash-tiwari-03b3621b7/"
        className="mb-2 bg-transparent"
      >
        <LinkedInIcon
          className={classes.root}
          // fontSize="large"
          style={{ backgroundColor: "transparent" }}
        />
      </a>
    </div>
  );
}

export default Connect;
