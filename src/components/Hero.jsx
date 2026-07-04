function Hero() {
  return (
    <section id="home"
      className="hero d-flex align-items-center"
      style={{
        minHeight: "540px",
        background: "linear-gradient(135deg,#eef8f3,#ffffff)"
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT SIDE */}

          <div className="col-lg-6">

            <span
              className="badge bg-success mb-3 px-3 py-2"
              style={{ fontSize: "14px" }}
            >
              GST • Income Tax • Accounting
            </span>

            <h1
              style={{
                fontSize: "72px",
                fontWeight: "700",
                lineHeight: "1.1",
                color: "#0B6E4F"
              }}
            >
              Simplifying Tax.

              <br />

              <span style={{ color: "#163C74" }}>
                Empowering Growth.
              </span>

            </h1>

            <p
              className="mt-4"
              style={{
                fontSize: "22px",
                color: "#666"
              }}
            >
              Professional Tax, GST and Business Compliance
              Services for Individuals, Businesses &
              Startups.
            </p>

            <div className="mt-5">

              <a
  href="#contact"
  className="btn btn-success btn-lg me-3 px-4"
>
  Book Consultation
</a>

              <a
  href="https://wa.me/919074018257?text=Hello%20GI-TAX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noreferrer"
  className="btn btn-outline-success btn-lg px-4"
>
  WhatsApp
</a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-6 pe-lg-5"
            data-aos="fade-right">

            <img
              src="/images/hero.jpg"
              className="img-fluid rounded-4 shadow"
              alt="GI-TAX"
              data-aos="fade-left"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;