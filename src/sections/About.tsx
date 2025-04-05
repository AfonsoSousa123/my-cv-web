const About = () => {
  return (
    <>
      <section className="about section-padding" id="section_about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                    {/*<img*/}
                    {/*    src="/Logos/AS-Logo-NoBG.png"*/}
                    {/*    className="avatar-image img-fluid logo"*/}
                    {/*    alt=""*/}
                    {/*/>*/}

                    <h2 className="text-white mx-3 mb-0">My Story</h2>
                  </div>
                </div>

                <h3 className="pt-2 mb-3">A little bit about me</h3>

                <p>
                  Holding a {" "}
                  <strong>Level 5 professional certification</strong>
                  {" "}
                  in Information Systems
                  Technologies and Programming from the{" "}
                  <a
                      className={"pe-1"}
                      href="https://www.uma.pt/en"
                      target={"_blank"}
                  >
                    <strong>Universidade da Madeira,</strong>
                  </a>
                  obtained through the{" "}
                  <a
                      className={"pe-1"}
                      href="https://www.uma.pt/en/ensino/ctesp/ctesp-em-tecnologias-e-programacao-de-sistemas-de-informacao/"
                      target={"_blank"}
                  >
                    <strong>Higher Polytechnic Technician Course (HPTC),</strong>
                  </a>
                  I am a front-end developer pursuing a{" "}
                  <a
                      className={"pe-1"}
                      href="https://www.uma.pt/en/ensino/1o-ciclo/licenciatura-em-engenharia-informatica/"
                      target={"_blank"}
                  >
                    <strong>Undergraduate Degree in Computer Science & Engineering.</strong>
                  </a>
                  also at{" "}
                  <a
                      className={"pe-1"}
                      href="https://www.uma.pt/en"
                      target={"_blank"}
                  >
                    <strong>Universidade da Madeira,</strong>
                  </a>
                </p>


                <p>
                  My five internships with diverse organizations have provided comprehensive
                  preparation for a front-end or mobile developer role within a leading company,
                  enabling me to contribute to the creation of exceptional websites.
                </p>

                <p>
                  I am a highly motivated, passionate and results-oriented individual dedicated to
                  continuous professional growth and development.
                </p>

                <p>To know more about me, check my CV below</p>

                <a
                  className="custom-btn btn custom-link btn-hover-scale"
                  href={
                    "https://drive.google.com/file/d/1wF0RFaP4cGwSUAK5Oq89_xlPH4FKiq32/view?usp=sharing"
                  }
                  target="_blank"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Link to my CV in PDF"
                >
                  Curriculum Vitae <i className={"bi-book p-1"}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
