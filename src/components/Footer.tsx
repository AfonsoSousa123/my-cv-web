
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

                  <img className="mx-2" width={50} src={"/Logos/AS-Logo-Dark.png"} alt="logo" />
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
