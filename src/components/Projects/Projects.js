import React, { useState } from "react";
import "./project.css";
import personalWork from "../../api/self-work.json";
import professionalWork from "../../api/office-work.json";

const Projects = () => {
  const [openPersonalIndex, setOpenPersonalIndex] = useState(null);
  const [openProfessionalIndex, setOpenProfessionalIndex] = useState(null);

  const handleTogglePersonal = (index) => {
    setOpenPersonalIndex(openPersonalIndex === index ? null : index);
  };

  const handleToggleProfessional = (index) => {
    setOpenProfessionalIndex(openProfessionalIndex === index ? null : index);
  };

  return (
    <section className="projects">
      <div>
        <h1 className="heading">Projects</h1>
      </div>
      <div className="projects_content_div">
        <div className="personalProject">
          <div>
            <h2>Personal Project</h2>
            {personalWork?.map((proj, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleTogglePersonal(index)}
                  className="projectDiv"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      placeContent: "center",
                    }}
                  >
                    {proj?.logo && (
                      <img
                        src={require(`../../assets/Projects/personal/Logo/${proj.logo}`)}
                        alt={proj?.title}
                        width={50}
                        height="auto"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                    <h3 style={{ cursor: "pointer" }}>{proj?.title}</h3>
                  </div>
                  {openPersonalIndex === index && (
                    <>
                      <p>{proj?.desc}</p>
                      {proj?.sample && (
                        <img
                          src={require(`../../assets/Projects/personal/${proj?.sample}`)}
                          alt={proj?.title}
                          width={400}
                          height="auto"
                        />
                      )}
                      <p>
                        <b>Tech Stack</b> - {proj?.tech_stack}
                      </p>
                      {proj?.link && (
                        <a
                          href={proj?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          id="projectLink"
                        >
                          Visit Project
                        </a>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="professionalProject">
          <div>
            <h2>Professional Project</h2>
            {professionalWork?.map((proj, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleToggleProfessional(index)}
                  className="projectDiv"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      placeContent: "center",
                    }}
                  >
                    {proj?.logo && (
                      <img
                        src={require(`../../assets/Projects/professional/Logo/${proj.logo}`)}
                        alt={proj?.title}
                        width={50}
                        height="auto"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                    <h3 style={{ cursor: "pointer" }}>{proj?.title}</h3>
                  </div>
                  {openProfessionalIndex === index && (
                    <>
                      {proj?.client && (
                        <p>
                          <b>Client</b> - {proj?.client}
                        </p>
                      )}
                      <p>{proj?.desc}</p>
                      {proj?.sample && (
                        <img
                          src={require(`../../assets/Projects/professional/${proj.sample}`)}
                          alt={proj?.title}
                          width={400}
                          height="auto"
                        />
                      )}
                      <p>
                        <b>Tech Stack</b> - {proj?.tech_stack}
                      </p>
                      {proj?.link && (
                        <a
                          href={proj?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          id="projectLink"
                        >
                          Visit Project
                        </a>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
