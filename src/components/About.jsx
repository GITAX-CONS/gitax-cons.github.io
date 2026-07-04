import {
  FaBullseye,
  FaEye,
  FaHandshake,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">About GI-TAX</h2>

          <p className="text-muted">
            Practical tax, accounting and business compliance support
            for individuals, professionals, businesses and startups.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <FaHandshake
                size={40}
                className="text-success mb-3"
              />

              <h4>Who We Help</h4>

              <p>
                We support individuals, professionals, businesses and
                startups with Income Tax, GST, accounting, registrations
                and ongoing compliance requirements.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <FaBullseye
                size={40}
                className="text-success mb-3"
              />

              <h4>Our Approach</h4>

              <p>
                We focus on clear guidance, timely service and practical
                solutions to make tax and compliance easier for every
                client.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <FaEye
                size={40}
                className="text-success mb-3"
              />

              <h4>Our Commitment</h4>

              <p>
                We aim to build long-term client relationships through
                responsive support and reliable professional service.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a
            href="#contact"
            className="btn btn-success btn-lg px-4"
          >
            Talk to GI-TAX
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;