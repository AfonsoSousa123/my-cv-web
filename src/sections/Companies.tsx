const Companies = () => {
  return (
    <>
      <section className="clients section-padding" id="section_companies">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-12">
              <h3 className="text-center text-white mb-5">
                Institutions and Companies i've worked with
              </h3>
            </div>

            <div className="col-lg-4 col-sm-4 col-12 mt-5 ms-auto clients-item-height">
              <a href="https://funchal.pt" target={"_blank"}>
                <img
                  src="/images/clients/Brasao2021_Logotipo_Funchal_negativo.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-4 col-sm-4 col-12 mt-5 clients-item-height">
              <a href="https://nearsoft.pt/" target={"_blank"}>
                <img
                  src="https://nearsoft-website.s3.eu-west-1.amazonaws.com/images/logo.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-4 col-sm-4 col-12 mt-5 clients-item-height">
              <a href="https://www.acin.pt" target={"_blank"}>
                <img
                  src="/images/clients/acinlogo.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Companies;
