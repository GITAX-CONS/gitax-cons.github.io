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
            Your trusted partner for tax, accounting and business compliance.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <FaHandshake size={40} className="text-success mb-3" />
              <h4>Who We Are</h4>
              <p>
                GI-TAX Tax Consultants provides professional tax,
                accounting and compliance services for individuals,
                businesses and startups.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <FaBullseye size={40} className="text-success mb-3" />
              <h4>Our Mission</h4>
              <p>
                To simplify taxation and compliance through reliable,
                timely and client-focused professional services.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <FaEye size={40} className="text-success mb-3" />
              <h4>Our Vision</h4>
              <p>
                To become a trusted and accessible tax consultancy
                supporting the growth of individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;