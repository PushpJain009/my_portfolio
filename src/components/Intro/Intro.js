import React from "react";
import "./intro.css";
// import { Link } from "react-scroll";
import FileDownload from "../../assets/system-regular-50-file.gif";
import ResumePdf from "../../assets/resume.pdf";
import Typing from "./Typing";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Pushp Jain,</span>
          <br />
          <div style={{ fontSize: "65%", marginBottom: "-5.5rem" }}>
            <Typing />
          </div>
          <h1>
            <span class="typewriter"></span>
          </h1>
        </span>
        <p className="introPara">
          I am skilled react web developer adept at crafting robust and
          responsive web applications, proficient in leveraging react's
          ecosystem for dynamic UIs and scalable solutions, passionate about
          delivering seamless user experiences.
        </p>
        <a
          className="resumeLink"
          href={ResumePdf}
          download="Pushp Jain Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="resumeBtn">
            <img src={FileDownload} alt="Resume" className="btnImg" />
            <span className="btnImgText">Resume</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
