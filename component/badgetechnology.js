const BadgeTechnology = ({technology}) => {
  return (
    <li className="list-inline-item">
      <span className="badge badge-primary badge-pill">{technology}</span>
    </li>
  );
};

export default BadgeTechnology;
