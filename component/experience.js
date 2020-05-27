const Experience = ({ job }) => {
  const duties = [];
  const technologiesUsed = [];

  for (const [index, value] of job.duties.entries()) {
    duties.push(<li key={index}>{value}</li>);
  }

  for (const [index, value] of job.technologiesUsed.entries()) {
    technologiesUsed.push(
      <li key={index} className="list-inline-item">
        <span className="badge badge-primary badge-pill">{value}</span>
      </li>
    );
  }

  return (
    <div className="resume-timeline position-relative">
      <article className="resume-timeline-item position-relative pb-5">
        <div className="resume-timeline-item-header mb-2">
          <div className="d-flex flex-column flex-md-row">
            <h3 className="resume-position-title font-weight-bold mb-1">
              {job.role}
            </h3>
          </div>
          <p>
            <a href={job.company.url} target="_blank">
              {job.company.name}
            </a>
          </p>
          <div className="resume-position-time">
            {job.date.from} - {job.date.to}
          </div>
        </div>
        <div className="resume-timeline-item-desc">
          <ul>{duties}</ul>
          <ul className="list-inline">
            {technologiesUsed}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Experience;
