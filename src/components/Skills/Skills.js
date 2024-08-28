import React from "react";
import "./skills.css";

const Skills = () => {
  const techItems = [
    {
      href: "https://reactjs.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
      category: "frontend",
    },
    {
      href: "https://postman.com",
      src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      alt: "postman",
      category: "other",
    },
    {
      href: "https://getbootstrap.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "bootstrap",
      category: "frontend",
    },
    {
      href: "https://www.w3schools.com/css/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
      category: "frontend",
    },
    {
      href: "https://www.docker.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      alt: "docker",
      category: "backend",
    },
    {
      href: "https://expressjs.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      alt: "express",
      category: "backend",
    },
    {
      href: "https://www.figma.com/",
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: "figma",
      category: "frontend",
    },
    {
      href: "https://babeljs.io/",
      src: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
      alt: "babel",
      category: "frontend",
    },
    {
      href: "https://firebase.google.com/",
      src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "firebase",
      category: "backend",
    },
    {
      href: "https://git-scm.com/",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
      category: "other",
    },
    {
      href: "https://www.w3.org/html/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
      category: "frontend",
    },
    {
      href: "https://www.java.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      alt: "java",
      category: "backend",
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
      category: "frontend",
    },
    {
      href: "https://jestjs.io",
      src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
      alt: "jest",
      category: "other",
    },
    {
      href: "https://www.mongodb.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "mongodb",
      category: "backend",
    },
    {
      href: "https://nextjs.org/",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      alt: "nextjs",
      category: "frontend",
    },
    {
      href: "https://nodejs.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "nodejs",
      category: "backend",
    },
    {
      href: "https://www.postgresql.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      alt: "postgresql",
      category: "backend",
    },
    {
      href: "https://reactnative.dev/",
      src: "https://reactnative.dev/img/header_logo.svg",
      alt: "reactnative",
      category: "frontend",
    },
    {
      href: "https://redux.js.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      alt: "redux",
      category: "frontend",
    },
    {
      href: "https://sass-lang.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      alt: "sass",
      category: "frontend",
    },
    {
      href: "https://webpack.js.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
      alt: "webpack",
      category: "frontend",
    },
    {
      href: "https://mui.com/material-ui/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      alt: "materialui",
      category: "frontend",
    },
    {
      href: "https://github.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "github",
      category: "other",
    },
    {
      href: "https://www.prisma.io/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
      alt: "prisma",
      category: "backend",
    },
  ];

  return (
    <div className="skills">
      <div className="contactHeading">
        <h1 className="heading" style={{ textAlign: "center" }}>
          Skills
        </h1>
      </div>

      {/* <div className="mySkills">
        <h2 style={{ textAlign: "center", width: "100%", marginTop: "-3%" }}>
          Frontend
        </h2>
        {techItems
          .filter((item) => item.category === "frontend")
          .map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
      </div> */}
      <div className="mySkills">
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            marginTop: "-3%",
          }}
        >
          <span
            style={{
              flex: "1 1",
              borderBottom: "2px solid #000",
              margin: "0 10px",
            }}
          ></span>
          Frontend
          <span
            style={{
              flex: "1 1",
              borderBottom: "2px solid #000",
              margin: "0 10px",
            }}
          ></span>
        </h2>
        {techItems
          .filter((item) => item.category === "frontend")
          .map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
      </div>

      <div className="mySkills">
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              flex: "1 1",
              borderBottom: "2px solid #000",
              margin: "0 10px",
            }}
          ></span>
          Backend
          <span
            style={{
              flex: "1 1",
              borderBottom: "2px solid #000",
              margin: "0 10px",
            }}
          ></span>
        </h2>
        {techItems
          .filter((item) => item.category === "backend")
          .map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
      </div>

      <div className="mySkills">
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              flex: "1 1",
              borderBottom: "2px solid #000",
              margin: "0 10px",
            }}
          ></span>
          Miscellaneous
          <span
            style={{
              flex: "1 1",
              borderBottom: "2px solid #000",
              margin: "0 10px",
            }}
          ></span>
        </h2>
        {techItems
          .filter((item) => item.category === "other")
          .map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Skills;
