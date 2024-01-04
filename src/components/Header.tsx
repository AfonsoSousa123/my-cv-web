const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a href="/" className="navbar-brand mx-auto mx-lg-0">
            CV Portfolio
          </a>

          <div className="d-flex align-items-center d-lg-none">
            <i className="navbar-icon bi-telephone-plus me-3"></i>
            <a className="custom-btn btn" href="#section_contact">
              +351 938 932 012
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_companies">
                  Companies
                </a>
              </li>

              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link click-scroll" href="#section_services">*/}
              {/*    Services*/}
              {/*  </a>*/}
              {/*</li>*/}

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-lg-flex align-items-center d-none ms-auto">
              <i className="navbar-icon bi-telephone-plus me-3"></i>
              <a className="custom-btn btn" href="#section_contact">
                +351 938 932 012
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
