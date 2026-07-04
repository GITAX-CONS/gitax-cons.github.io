import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Experienced Tax Professionals",
  "Timely GST & Income Tax Filing",
  "Transparent Pricing",
  "Personalized Client Support",
  "Digital & Paperless Process",
  "Affordable Service Charges",
];

function WhyChoose() {
  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">

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
                  className="text-success me-3"
                  size={22}
                />
                <span className="fs-5">{feature}</span>
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
              <h3>Need Expert Tax Assistance?</h3>

              <p className="mt-3">
                We help individuals, businesses and startups with
                Income Tax, GST, Accounting and Compliance Services.
              </p>

              <a
  href="tel:+919074018257"
  className="btn btn-light"
>
  Call Now
</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;