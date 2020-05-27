import Social from "./social";

const Profile = () => {

  const SocialProfile = [
    {
      iconclass: "fab fa-linkedin-in fa-fw",
      link:  "https://www.linkedin.com/in/provenzanoluca",
      text:  "provenzanoluca"
    },
    {
      iconclass: "fab fa-github-alt fa-fw",
      link: "http://github.com/lprovenzano",
      text: "lprovenzano"
    }
  
  ];

  return (
    <header className="resume-header pt-4 pt-md-0">
      <div className="media flex-column flex-md-row">
        <img
          className="mr-3 img-fluid picture mx-auto"
          src={require("../assets/images/profile.jpg")}
          alt="Luca Provenzano profile photo"
        />
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
              Luca Provenzano
            </h1>
            <div className="title mb-3">.NET Developer</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="far fa-envelope fa-fw mr-2"></i>
                <a href="mailto:lucaeprov@gmail.com">
                  lucaeprov[at]gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              {SocialProfile.map((value, key)=> {
                  return <Social key = {key}
                          iconclass={value.iconclass}
                          link={value.link}
                          text={value.text}
                        />
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Profile;
