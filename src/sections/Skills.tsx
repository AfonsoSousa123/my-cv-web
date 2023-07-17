const Skills = () => {
  return (
    <>
      <section className="skills section-padding">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
            <img
              src="/images/white-desk-work-study-aesthetics.jpg"
              className="avatar-image img-fluid"
              alt=""
            />

            <h2 className="text-white ms-4 mb-0">Skills</h2>
          </div>

          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="profile-thumb">
                <div className="profile-title text-center">
                  <h4 className="mb-0">Languages and Frameworks</h4>
                </div>

                <div className="profile-body">
                  <p>
                    <span className="profile-small-title">Languages</span>
                    <span className={"text-truncate"}>
                      PHP, JavaScript, Python, C++, SQL, HTML, CSS
                    </span>
                  </p>

                  <p>
                    <span className="profile-small-title">Frameworks</span>
                    <span className={"text-truncate"}>
                      Laravel, Django, Bootstrap
                    </span>
                  </p>

                  <p>
                    <span className="profile-small-title">Libraries</span>
                    <span>
                      <a className={"text-truncate"} href="#">
                        React.js
                      </a>
                    </span>
                  </p>

                  <p>
                    <span className="profile-small-title">Tools</span>
                    <span>
                      <a
                        className={"text-end"}
                        href="mailto:afonsosousa10@gmail.com"
                      >
                        Render.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
