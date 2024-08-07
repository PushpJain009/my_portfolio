import React from "react";
import "./contact.css";
import Phone from "../../assets/phone-call.png";
import GitHub from "../../assets/github-logo.png";
import Gmail from "../../assets/gmail.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Tableau from "../../assets/tableau.png";

const Contact = () => {
  return (
    <section className="contactMain">
      <div className="contactHeading">
        <h1 className="heading">Contact Details</h1>
      </div>
      <div className="contactLinks">
        <a href="mailto:jain09pushp@gmail.com">
          <img
            src={Gmail}
            alt="email"
            width={70}
            height={70}
            className="email"
          />
        </a>
        <a href="tel:+91 8770166409">
          <img
            src={Phone}
            alt="phone"
            width={70}
            height={70}
            className="phone"
          />
        </a>
        <a
          href="https://github.com/PushpJain009"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={GitHub}
            alt="github"
            width={70}
            height={70}
            className="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pushp09/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedIn}
            alt="linkedIn"
            width={70}
            height={70}
            className="linkedIn"
          />
        </a>
        <a
          href="https://twitter.com/Pushp_Jain_"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Twitter}
            alt="twitter"
            width={70}
            height={70}
            className="twitter"
          />
        </a>
        <a
          href="https://public.tableau.com/app/profile/pushp.jain/vizzes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Tableau}
            alt="tableau"
            width={70}
            height={70}
            className="tableau"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
