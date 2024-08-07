import React from "react";
import "./skills.css";

const Skills = () => {
  const techItems = [
    {
      href: "https://reactjs.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      href: "https://postman.com",
      src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      alt: "postman",
    },
    {
      href: "https://getbootstrap.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "bootstrap",
    },
    {
      href: "https://www.w3schools.com/css/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
    },
    {
      href: "https://www.docker.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      alt: "docker",
    },
    {
      href: "https://expressjs.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      alt: "express",
    },
    {
      href: "https://www.figma.com/",
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: "figma",
    },
    {
      href: "https://babeljs.io/",
      src: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
      alt: "babel",
    },
    {
      href: "https://firebase.google.com/",
      src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "firebase",
    },
    {
      href: "https://git-scm.com/",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
    },
    {
      href: "https://www.w3.org/html/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
    },
    {
      href: "https://www.java.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      alt: "java",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      href: "https://jestjs.io",
      src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      alt: "jest",
    },
    {
      href: "https://www.mongodb.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "mongodb",
    },
    {
      href: "https://nextjs.org/",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      alt: "nextjs",
    },
    {
      href: "https://nodejs.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "nodejs",
    },
    {
      href: "https://www.postgresql.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      alt: "postgresql",
    },
    {
      href: "https://reactnative.dev/",
      src: "https://reactnative.dev/img/header_logo.svg",
      alt: "reactnative",
    },
    {
      href: "https://redux.js.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      alt: "redux",
    },
    {
      href: "https://sass-lang.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      alt: "sass",
    },
    {
      href: "https://webpack.js.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
      alt: "webpack",
    },
    {
      href: "https://mui.com/material-ui/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      alt: "materialui",
    },
    {
      href: "https://github.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "github",
    },
    {
      href: "https://www.prisma.io/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
      alt: "prisma",
    },
  ];

  return (
    <div className="skills">
      <div className="contactHeading">
        <h1 className="heading" style={{ textAlign: "center" }}>
          Skills
        </h1>
      </div>
      <div className="mySkills">
        {/*
             Emotion JS, SQL Plus, Hostinger, CPanel, Tableau, MS Excel, Power BI
          */}
        {techItems.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noreferrer">
            <img src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
