const Featured = () => {
  return (
    <>
      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="profile-thumb">
                <div className="profile-title">
                  <h4 className="mb-0">Information</h4>
                </div>

                <div className="profile-body">
                  <p>
                    <span className="profile-small-title">Name</span>
                    <span>Afonso Sousa</span>
                  </p>

                  <p>
                    <span className="profile-small-title">Birthday</span>
                    <span>April 10, 2000</span>
                  </p>

                  <p>
                    <span className="profile-small-title">Phone</span>
                    <span>
                      <a href="tel: 305-240-9671">+351 938 932 012</a>
                    </span>
                  </p>

                  <p>
                    <span className="profile-small-title">Email</span>
                    <span>
                      <a href="mailto:hello@josh.design">
                        afonsosousa10@gmail.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="row">
                  <div className="col-lg-6 col-6 featured-border-bottom py-2">
                    <strong className="featured-numbers">3+</strong>

                    <p className="featured-text">Years of Experiences</p>
                  </div>

                  <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                    <strong className="featured-numbers">5</strong>

                    <p className="featured-text">Happy Customers</p>
                  </div>

                  <div className="col-lg-6 col-6 pt-4">
                    <strong className="featured-numbers">10</strong>

                    <p className="featured-text">Project Finished</p>
                  </div>

                  <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                    <strong className="featured-numbers mb-1">
                      none yet :)
                    </strong>

                    <p className="featured-text">Digital Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Featured;
