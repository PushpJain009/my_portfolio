import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
// import contactImg from "../../assets/contact.png"; // NOTE: change contactImg
// import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      {/* <div className="logoText">Pushp Jain</div> */}
      {/* <div className="logoText">
        <span className="firstLetter">P</span>USHP{" "}
        <span className="firstLetter" style={{ marginLeft: "10px" }}>
          J
        </span>
        AIN
      </div> */}
      {/* <img
        className="logoText"
        src={Logo}
        alt="Logo"
        width={200}
        height="auto"
      /> */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-99}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-95}
          duration={500}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="statistics"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Statistics
        </Link>
        <Link
          activeClass="active"
          to="contactMain"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
        {/* <button className="themeMode">Change Mode</button> */}
      </div>
      {/* <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src="" alt="" className="desktopMenuImg" />
        Contact Me
      </button> */}

      <img
        src=""
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          onClick={() => setShowMenu(false)}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          onClick={() => setShowMenu(false)}
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          onClick={() => setShowMenu(false)}
          to="exprience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          onClick={() => setShowMenu(false)}
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          onClick={() => setShowMenu(false)}
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
