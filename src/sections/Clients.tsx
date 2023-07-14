const Clients = () => {
  return (
    <>
      <section className="clients section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-12">
              <h3 className="text-center text-white mb-5">
                Institutions and Companies I've had worked
              </h3>
            </div>

            <div className="col-lg-4 col-sm-2 col-4 ms-auto clients-item-height">
              <a href="https://funchal.pt" target={"_blank"}>
                <img
                  src="/images/clients/Brasao2021_Logotipo_Funchal_negativo.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-4 col-sm-2 col-4 clients-item-height">
              <a href="https://nearsoft.pt/" target={"_blank"}>
                <img
                  src="/images/clients/nearsoft.pt_our-company_about-us.png"
                  className="clients-image img-fluid"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-4 col-sm-2 col-4 clients-item-height">
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
export default Clients;
