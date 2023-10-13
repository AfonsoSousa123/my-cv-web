const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  {/*<span className="copyright-text">*/}
                  {/*  Copyright © 2036 <a href="/">First Portfolio</a> Company.*/}
                  {/*  All rights reserved.*/}
                  {/*</span>*/}
                  Designed and Developed by:
                  <a
                    rel="sponsored"
                    href="https://github.com/AfonsoSousa123"
                    target="_blank"
                  >
                    Afonso Sousa
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
