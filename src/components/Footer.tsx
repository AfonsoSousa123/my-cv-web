const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  Designed and Developed by:
                  <a
                    rel="sponsored"
                    href="https://github.com/AfonsoSousa123"
                    target="_blank"
                    className={"ms-1"}
                  >
                    Afonso Sousa
                  </a>
                  {/*<span className="copyright-text">*/}
                  {/*  Copyright © 2036 . All rights reserved.*/}
                  {/*</span>*/}
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
