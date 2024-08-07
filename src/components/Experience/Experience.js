import React from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LakeBrainsLogo from "../../assets/lakebrains-logo.png";
import BitBeastLogo from "../../assets/bitbeast.png";
import WebangelLogo from "../../assets/webangel_technologies_llp.png";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experienceHeading">
        <h1 className="heading">Experience</h1>
      </div>
      <VerticalTimeline lineColor="rgb(92, 181, 236)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#000", color: "#fff" }}
          contentArrowStyle={{ borderRight: "15px solid  rgb(33, 150, 243)" }}
          date="Feb 2024 - Present"
          iconStyle={{
            background: "#000",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={LakeBrainsLogo}
              alt="LakeBrains Logo"
              width={60}
              height={"auto"}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Udaipur, Rajasthan
          </h4>
          <div className="exp_projects">
            <p>
              Jain Community Application (S2S Connect)
              <br />
              Created a backend for implementing the required APIs such as
              Authentication, User Data, etc
            </p>
            <p>
              OVO - LinkedIn Extension: <br /> Developed and implemented a
              Chrome extension to generate comments and messages for LinkedIn
              posts and direct messages using open AI technology.
            </p>
            <p>
              Alpine AI Extension:
              <br /> Developed and implemented a visually appealing UI/UX
              interface with the functionalities.
              <br />
              Created and implemented the backend to integrate third-party APIs
              provided by the client in the backend.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "15px solid  rgb(33, 150, 243)" }}
          date="Feb 2023 - Feb 2024"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={BitBeastLogo}
              alt="Bit Beast Logo"
              width={60}
              height={"auto"}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            MERN Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ahmedabad, Gujarat
          </h4>
          <div className="exp_projects">
            <p>
              E-commerce:
              <br />
              Crafting an Admin Panel for an E-commerce project to facilitate
              effortless management of products, categories, users, payment
              gateways and more, ensuring streamlined operations. Spearheaded
              the design and implementation of an intuitive, visually engaging
              User Interface, enhancing user experience and accessibility across
              devices. Engineered robust APIs to optimize data flow between
              front-end and back-end systems, thereby boosting website
              performance and efficiency. Implemented comprehensive user
              management functionalities, empowering administrators to oversee
              varied user access levels, thereby bolstering website security and
              resource control.
            </p>
            <p>
              Extensions: <br /> Played a pivotal role in enhancing Google and
              Microsoft extensions by contributing to bug fixes, testing
              procedures, and streamlining the publishing process for multiple
              extensions such as IndiaMart, 2gis, JustDail, Zomato, Yellow
              Pages, Social, and Google Map.
            </p>
            <p>
              ePass Auto 2003 Token:
              <br /> Engineered automated email capabilities for contact forms,
              tailoring content based on user information and ensuring
              error-free processing with robust validation and error handling
              mechanisms. Strengthened website security protocols, mitigating
              spam mail incidents and ensuring a secure and reliable user
              experience.
            </p>
            <p>
              Radhe Solution:
              <br /> Optimized website UI forms and implemented SEO enhancements
              for expedited page loading times and an enriched user journey.
              Enhanced back-end functionalities to ensure seamless transmission
              of billing details, thereby elevating overall website
              functionality and enhancing user interaction.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(195, 33, 243)", color: "#fff" }}
          contentStyle={{ background: "#000", color: "#fff" }}
          // contentArrowStyle={{ borderRight: "15px solid  rgb(195, 33, 243)" }}
          contentArrowStyle={{ borderRight: "15px solid  #000" }}
          date="Jan 2022 - Feb 2023"
          iconStyle={{
            // background: "rgb(33, 150, 243)",
            background: "#000",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <img
              src={WebangelLogo}
              alt="Bit Beast Logo"
              width={60}
              height={"auto"}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer | Data Analyst
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhopal, Madhya Pradesh
          </h4>
          <div className="exp_projects">
            <p>
              Implemented HTML, CSS, and JavaScript skills to craft responsive
              web interfaces that adhere to design concepts, prioritizing
              cross-device functionality for optimal user experience. <br />{" "}
              Collaborated closely with designers to address front-end
              challenges, ensuring a smooth and seamless user interface. <br />{" "}
              Leveraged proficiency in Tableau and Power BI for comprehensive
              data analysis, generating insightful visualizations that
              effectively connect front-end and backend systems, enhancing
              overall performance and functionality.
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
