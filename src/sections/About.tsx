const About = () => {
  return (
    <>
      <section className="about section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img
                src="/images/couple-working-from-home-together-sofa.jpg"
                className="about-image img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                  <h2 className="text-white me-4 mb-0">My Story</h2>

                  <img
                    src="/images/AfonsoPic.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />
                </div>

                <h3 className="pt-2 mb-3">a little bit about Afonso</h3>

                <p>
                  I am a Full-Stack Developer, currently undertaking a{" "}
                  <a
                    className={"pe-1"}
                    href="https://www.uma.pt/en/ensino/1o-ciclo/licenciatura-em-engenharia-informatica/"
                    target={"_blank"}
                  >
                    undergraduate degree in Computer Science & Engineering
                  </a>
                  , I've taken a{" "}
                  <a
                    className={"pe-1"}
                    href="https://www.uma.pt/en/ensino/ctesp/ctesp-em-tecnologias-e-programacao-de-sistemas-de-informacao/"
                    target={"_blank"}
                  >
                    HPTC in technologies and programming of information systems
                  </a>
                  ,in{" "}
                  <a
                    className={"pe-1"}
                    href="https://www.uma.pt/en"
                    target={"_blank"}
                  >
                    Universidade da Madeira
                  </a>
                  , providing a level 5 professional profile.
                </p>

                <p>
                  So far i have done 5 internships in many institutions and
                  companies, my career goal is to be hired as a front-end or
                  fullstack developer at a reputable company, creating wonderful
                  websites.
                </p>

                <a
                  className="custom-btn btn custom-link btn-hover-scale"
                  href={
                    "https://drive.google.com/file/d/1_FwEJ4Ou-zIURTG2uNaLPKTJ18qAE3UW/view?usp=sharing"
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
