const Social = ({ iconclass, link, text }) => {
  return (
    <li className="mb-3">
      <a href={link} target="_blank">
        <span className="fa-container text-center mr-2">
          <i className={iconclass}></i>
        </span>
        {text}
      </a>
    </li>
  );
};

export default Social;
