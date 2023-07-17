const Skills = () => {
  return (
    <>
      <section className="skills section-padding">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
            <h2 className="text-white ms-4 py-5 mb-0">
              Technologies that i've used
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-12 col">
              <table className="table-skills table-responsive">
                <tbody>
                  <tr>
                    <th className={"profile-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Languages
                    </th>
                    <td>
                      PHP, JavaScript, TypeScript, Python, C++, Java, SQL, HTML,
                      CSS
                    </td>
                  </tr>
                  <tr>
                    <th className={"profile-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Frameworks
                    </th>
                    <td>Laravel, Next.js, Express.js, Django, Bootstrap</td>
                  </tr>
                  <tr>
                    <th className={"profile-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Libraries
                    </th>
                    <td>React.js, JQuery</td>
                  </tr>
                  <tr>
                    <th className={"profile-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Tools
                    </th>
                    <td>Node.js, Postman, MongoDB, MySQL, PostgreSQL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/*<div className="col-lg-12 col-12">*/}
            {/*  <div className="profile-thumb">*/}
            {/*    <div className="profile-body">*/}
            {/*      <p>*/}
            {/*        <span className="profile-small-title">*/}
            {/*          <i className={"bi-check2-circle me-2"}></i>*/}
            {/*          Languages*/}
            {/*        </span>*/}
            {/*        <span className={"text-truncate"}>*/}
            {/*          PHP, JavaScript, TypeScript, Python, C++, Java, SQL, HTML,*/}
            {/*          CSS*/}
            {/*        </span>*/}
            {/*      </p>*/}

            {/*      <p>*/}
            {/*        <span className="profile-small-title">*/}
            {/*          <i className={"bi-check2-circle me-2"}></i>*/}
            {/*          Frameworks*/}
            {/*        </span>*/}
            {/*        <span className={"text-truncate"}>*/}
            {/*          Laravel, Next.js, Express.js, Django, Bootstrap*/}
            {/*        </span>*/}
            {/*      </p>*/}

            {/*      <p>*/}
            {/*        <span className="profile-small-title">*/}
            {/*          <i className={"bi-check2-circle me-2"}></i>*/}
            {/*          Libraries*/}
            {/*        </span>*/}
            {/*        <span>*/}
            {/*          <a className={"text-truncate"} href="#">*/}
            {/*            React.js, JQuery*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*      </p>*/}

            {/*      <p>*/}
            {/*        <span className="profile-small-title">*/}
            {/*          <i className={"bi-check2-circle me-2"}></i>*/}
            {/*          Tools*/}
            {/*        </span>*/}
            {/*        <span>*/}
            {/*          <a className={"text-end"} href="">*/}
            {/*            Node.js, Postman, MongoDB, MySQL, PostgreSQL*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
