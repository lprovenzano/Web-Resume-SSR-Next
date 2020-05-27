const Skill = ({ title, skills }) => {
  return (
    <li className="mb-2">
      <div className="resume-skill-name">{skills.language}</div>
      <div className="progress resume-progress">
        <div
          className="progress-bar theme-progress-bar-dark"
          role="progressbar"
          style={{ width: skills.percentaje + "%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </li>
  );
};

export default Skill;
