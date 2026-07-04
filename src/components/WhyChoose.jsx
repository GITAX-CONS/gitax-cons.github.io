import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Practical Tax & Compliance Guidance",
  "Timely GST & Income Tax Support",
  "Clear and Transparent Communication",
  "Personalized Client Assistance",
  "Convenient Digital Document Process",
  "Support for Individuals & Businesses",
];

function WhyChoose() {
  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">
              Why Choose GI-TAX?
            </h2>

            {features.map((feature, index) => (
              <div
                key={index}
                className="d-flex align-items-center mb-3"
              >
                <FaCheckCircle
                  className="text-success me-3 flex-shrink-0"
                  size={22}
                />

                <span className="fs-5">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            <div
              className="p-5 rounded shadow"
              style={{
                background: "#0B6E4F",
                color: "white",
              }}
            >
              <h3 className="fw-bold">
                Need Tax or Compliance Assistance?
              </h3>

              <p className="mt-3 mb-4">
                Contact GI-TAX for support with Income Tax,
                GST, accounting, registrations and business
                compliance services.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="tel:+919074018257"
                  className="btn btn-light"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/919074018257?text=Hello%20GI-TAX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;