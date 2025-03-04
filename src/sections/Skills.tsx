const Skills = () => {
  return (
    <>
      <section className="skills section-padding" id="section_skills">
        <div className="container">
          <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
            <h2 className="text-white py-5 mb-0">Technologies i've used</h2>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <table className="table-skills">
                <tbody>
                  <tr>
                    <th className={"table-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Languages
                    </th>
                    <td className={"table-td-skills"}>
                      PHP, JavaScript, TypeScript, Python, C++, Java, SQL, HTML,
                      CSS
                    </td>
                  </tr>
                  <tr>
                    <th className={"table-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Frameworks
                    </th>
                    <td className={"table-td-skills"}>
                      Laravel, Bootstrap, Next.js, Express.js, Django
                    </td>
                  </tr>
                  <tr>
                    <th className={"table-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Libraries
                    </th>
                    <td className={"table-td-skills"}>React.js, JQuery</td>
                  </tr>
                  <tr>
                    <th className={"table-small-title"}>
                      <i className={"bi-check2-circle me-2"}></i>Tools
                    </th>
                    <td className={"table-td-skills"}>
                      Node.js, Vite.js, Postman, MongoDB, MySQL, PostgreSQL, Joomla
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
