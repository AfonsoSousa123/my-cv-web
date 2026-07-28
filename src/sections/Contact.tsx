import ContactForm from "../components/ContactForm.tsx";

const Contact = () => {
  return (
      <>
        <section className="contact section-padding" id="section_contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                      src="/images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                      className="avatar-image img-fluid"
                      alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                <div className="contact-info contact-info-border-start d-flex flex-column">
                  {/*<strong className="site-footer-title d-block mb-3">*/}
                  {/*  Services*/}
                  {/*</strong>*/}

                  {/*<ul className="footer-menu">*/}
                  {/*  <li className="footer-menu-item">*/}
                  {/*    <a href="#section_services" className="footer-menu-link">*/}
                  {/*      Websites*/}
                  {/*    </a>*/}
                  {/*  </li>*/}

                  {/*  <li className="footer-menu-item">*/}
                  {/*    <a href="#section_services" className="footer-menu-link">*/}
                  {/*      APIs*/}
                  {/*    </a>*/}
                  {/*  </li>*/}

                  {/*  <li className="footer-menu-item">*/}
                  {/*    <a href="#section_services" className="footer-menu-link">*/}
                  {/*      Ecommerce*/}
                  {/*    </a>*/}
                  {/*  </li>*/}

                  {/*  <li className="footer-menu-item">*/}
                  {/*    <a href="#section_services" className="footer-menu-link">*/}
                  {/*      SEO*/}
                  {/*    </a>*/}
                  {/*  </li>*/}
                  {/*</ul>*/}

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Stay connected
                  </strong>

                  <ul className="social-icon">
                    {/*<li className="social-icon-item">*/}
                    {/*  <a*/}
                    {/*    href="https://twitter.com/minthu"*/}
                    {/*    className="social-icon-link bi-twitter"*/}
                    {/*  ></a>*/}
                    {/*</li>*/}

                    <li className="social-icon-item">
                      <a
                          href="https://github.com/AfonsoSousa123"
                          target={"_blank"}
                          className="social-icon-link bi-github"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                          href="https://www.linkedin.com/in/afonso-he-sousa/"
                          target={"_blank"}
                          className="social-icon-link bi-linkedin"
                      ></a>
                    </li>

                    {/*<li className="social-icon-item">*/}
                    {/*  <a*/}
                    {/*      href="#"*/}
                    {/*      target={"_blank"}*/}
                    {/*      className="social-icon-link bi-instagram"*/}
                    {/*  ></a>*/}
                    {/*</li>*/}

                    {/*<li className="social-icon-item">*/}
                    {/*  <a*/}
                    {/*      href="#"*/}
                    {/*      target={"_blank"}*/}
                    {/*      className="social-icon-link bi-youtube"*/}
                    {/*  ></a>*/}
                    {/*</li>*/}
                  </ul>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Start a project
                  </strong>

                  <p className="mb-0">I’m available for freelance projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                <div className="contact-info d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">
                    About
                  </strong>

                  <p className="mb-2">
                    Afonso is a junior web developer. Feel free to get in touch
                    with him.
                  </p>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Email
                  </strong>

                  <p>
                    <a href="mailto:afonso.he.sousa@gmail.com">
                      afonso.he.sousa@gmail.com
                    </a>
                  </p>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Call
                  </strong>

                  <p className="mb-0">
                    <a href="tel: +351938932012">+351 938 932 012</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </>
  );
};
export default Contact;
