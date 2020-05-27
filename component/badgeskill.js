const BadgeSkill = ({ skill }) => {
  return (
    <li className="list-inline-item">
      <span className="badge badge-light">{skill}</span>
    </li>
  );
};

export default BadgeSkill;
