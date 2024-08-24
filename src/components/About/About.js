import React, { useState } from "react";
import "./about.css";
import SelfImage from "../../assets/self.png";

const About = () => {
  const [activeSection, setActiveSection] = useState("selfIntro");

  const certifications = [
    "Cascading Style Sheets (CSS) - HackerRank",
    "Java - HackerRank",
    "JavaScript - HackerRank",
    "Java Programming - Udemy",
    "SQL - HackerRank",
    "Oracle SQL - Udemy",
  ];

  const sportsAchievements = [
    "Inter School Basketball Championship - NIR Group of Institutions, Bhopal",
    "Inter School Basketball Tournament - Bhopal Sahodaya Complex of C.B.S.E. Schools",
    "Inter College Basketball Tournament - Oriental Group Of Institutes",
    "4th All India Invitation Basketball Tournament 2013-14 - Saral India Infra Limited",
    "4th Public School All India Basketball Tournament - Sports Conglomerate of Public Schools, Maharashtra",
    "3rd District Inter School Karate Championship 2012 - World Funakoshi Shotokan Karate Organisation, Bhopal",
  ];

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="about">
      <div className="aboutHeading">
        <h1 className="heading">About</h1>
      </div>
      <div className="grid">
        <div className="img">
          <img src={SelfImage} alt="self" width={350} />
        </div>
        <div className="content">
          <div className="contentDetails">
            <div className="toggleButtons">
              <button
                onClick={() => handleToggle("selfIntro")}
                className={activeSection === "selfIntro" ? "active" : ""}
              >
                Self Intro
              </button>
              <button
                onClick={() => handleToggle("myAim")}
                className={activeSection === "myAim" ? "active" : ""}
              >
                My Aim
              </button>
              <button
                onClick={() => handleToggle("achievements")}
                className={activeSection === "achievements" ? "active" : ""}
              >
                Achievements
              </button>
            </div>
            {activeSection === "selfIntro" && (
              <div className="selfIntro">
                {/* <h2 className="subHeading">Self Intro</h2> */}
                <p className="introContentDetails">
                  I'm a dedicated React.js developer with a passion for crafting
                  seamless user experiences. With 2.5+ years of hands-on
                  experience, I specialize in leveraging React.js to build
                  interactive and scalable web applications. Proficient in
                  creating reusable components, optimizing performance, and
                  integrating third-party libraries, I thrive in collaborative
                  environments where innovation meets functionality. My
                  portfolio showcases projects that highlight my expertise in
                  front-end development and commitment to delivering robust,
                  user-centric solutions.
                </p>
              </div>
            )}

            {activeSection === "myAim" && (
              <div className="myAim">
                {/* <h2 className="subHeading">My Aim</h2> */}
                <p className="introContentDetails">
                  My aim is to craft web applications that seamlessly blend
                  functionality with exceptional user experiences. By leveraging
                  React’s ecosystem, I focus on building dynamic, interactive,
                  and scalable solutions. My expertise in creating reusable
                  components, optimizing performance, and integrating
                  third-party libraries ensures that each project I undertake is
                  both robust and innovative. I am excited by the opportunity to
                  collaborate and contribute to environments where creativity
                  and practicality intersect, delivering user-centric solutions
                  that stand out.
                </p>
              </div>
            )}

            {activeSection === "achievements" && (
              <div className="achievements">
                {/* <h2 className="subHeading">Achievements</h2> */}
                <div className="achievementsMainDiv">
                  <div className="certificationsDiv">
                    <h3>Certifications</h3>
                    <ul>
                      {certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="sportsAchievementsDiv">
                    <h3>Sports Achievements</h3>
                    <ul>
                      {sportsAchievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
