import React from "react";
import Profile from "../component/profile";
import Summary from "../component/summary";
import Experience from "../component/experience";
import Skill from "../component/skill";
import BadgeSkill from "../component/badgeskill";
import Education from "../component/education";

const experiences = [
  {
    role: "Senior .NET Developer",
    company: {
      name: "invertirOnline.com",
      url: "https://invertironline.com",
    },
    date: {
      from: "MAY 2019",
      to: "PRESENT",
    },
    duties: [
      "Creation of financial products for more than 100K clients.",
      "Cash (IN/OUT) movements automation.",
      "Third-Party API Integration.",
      "Development by iterations, agile methodologies.",
    ],
    technologiesUsed: [
      "C#",
      "ASP.NET MVC",
      "Web API",
      ".NET Core",
      "AWS",
      "Microsoft SQL Server",
      "MySQL",
      "MongoDB",
      "Redis",
      "Message Queues",
      "Worker Services",
    ],
  },
  {
    role: "Junior .NET Developer",
    company: {
      name: "IT Resources S.A.",
      url: "https://www.itrsa.com.ar/",
    },
    date: {
      from: "AUG 2017",
      to: "MAY 2019 • 1yr 9mo",
    },
    duties: [
      "Development and maintenance of CRM / ERP for clients of the software factory.",
    ],
    technologiesUsed: [
      "C#",
      "ASP.NET MVC",
      "ASP Web Forms",
      "JavaScript",
      "SAP Integrations",
      "Entity Framework",
      "Microsoft SQL Server",
      "Azure Cloud",
    ],
  },
  {
    role: "Systems Auditor",
    company: {
      name: "Bertora & Asociados",
      url: "https://www.crowe.com/ar/about-us/nuestras-oficinas",
    },
    date: {
      from: "NOV 2016",
      to: "AUG 2017 • 9mo",
    },
    duties: [
      "Internal and External Systems Audit.",
      "Protection of IT assets.",
      "Analysis of cycles corresponding to the Entity's business framework, detection and evaluation of automatic and manual controls.",
      'Compliance review of Communications "A" 4609 and 5374 of the Central Bank of Argentina.',
      "Computer Assisted Audit Techniques (CAATs).",
    ],
    technologiesUsed: ["ACL", "Excel"],
  },
];

const mySkills = {
  backend: [
    {
      language: "C#",
      percentaje: "90",
    },
    {
      language: "ASP.NET Framework",
      percentaje: "80",
    },
    {
      language: "ASP.NET Core",
      percentaje: "85",
    },
  ],

  frontend: [
    {
      language: "Javascript",
      percentaje: "75",
    },
    {
      language: "React",
      percentaje: "15",
    },
    {
      language: "Angular",
      percentaje: "20",
    },
    {
      language: "HTML/CSS",
      percentaje: "95",
    },
  ],
};

const otherSkills = [
  "Docker",
  "Bash",
  "Git",
  "SCRUM",
  "REST Api",
  "Distributed systems",
];

const Index = () => {
  return (
    <>
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <Profile />
          <div className="resume-body p-5">
            <Summary />
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Work Experience
                  </h2>
                  <div className="resume-section-content">
                    {experiences.map((value, index) => {
                      return <Experience key={index} job={value} />;
                    })}
                  </div>
                </section>
              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Skills &amp; Tools
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Backend
                      </h4>
                      <ul className="list-unstyled mb-4">
                        {mySkills.backend.map((value, index) => {
                          return <Skill key={index} skills={value} />;
                        })}
                      </ul>
                      <h4 className="resume-skills-cat font-weight-bold">
                        Frontend
                      </h4>
                      <ul className="list-unstyled mb-4">
                        {mySkills.frontend.map((value, index) => {
                          return <Skill key={index} skills={value} />;
                        })}
                      </ul>
                    </div>
                    <div className="resume-skill-item">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Others
                      </h4>
                      <ul className="list-inline">
                        {otherSkills.map((value, index) => {
                          return <BadgeSkill key={index} skill={value} />;
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Education
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <Education />
                    </ul>
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Language
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      <li className="mb-2">
                        <span className="resume-lang-name font-weight-bold">
                          English
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          (Intermediate)
                        </small>
                      </li>
                      <li>
                        <span className="resume-lang-name font-weight-bold">
                          Spanish
                        </span>{" "}
                        <small className="text-muted font-weight-normal">
                          (Native)
                        </small>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Interests
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">Rugby</li>
                      <li className="mb-1">CS GO</li>
                      <li className="mb-1">Cook</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
      <footer className="footer text-center pt-2 pb-5">
        <small>Crafted in Buenos Aires, Argentina.</small>
    </footer>
    </>
  );
};

export default Index;
