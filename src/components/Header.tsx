import { useState, useEffect } from "react";
import Logo from "./Branding/Logo.tsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
                aria-controls="navbarNav"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a href="/" className="navbar-brand mx-auto mx-lg-0">
              <Logo />
            </a>

            <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
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
                <a className="navbar-icon bi-telephone-plus icon-link-hover me-3" href="#section_contact"></a>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
};

export default Header;