import {
  FaFileInvoiceDollar,
  FaBuilding,
  FaCalculator,
  FaFileSignature,
  FaUsers,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Income Tax Return Filing",
    icon: <FaFileInvoiceDollar size={40} color="#0B6E4F" />,
    desc: "Accurate and timely ITR filing.",
  },
  {
    title: "GST Registration",
    icon: <FaCalculator size={40} color="#0B6E4F" />,
    desc: "GST registration & compliance.",
  },
  {
    title: "Accounting",
    icon: <FaMoneyCheckAlt size={40} color="#0B6E4F" />,
    desc: "Bookkeeping & accounting.",
  },
  {
    title: "Company Registration",
    icon: <FaBuilding size={40} color="#0B6E4F" />,
    desc: "Company & LLP incorporation.",
  },
  {
    title: "Digital Signature",
    icon: <FaFileSignature size={40} color="#0B6E4F" />,
    desc: "DSC issuance & renewal.",
  },
  {
    title: "Payroll",
    icon: <FaUsers size={40} color="#0B6E4F" />,
    desc: "Payroll processing services.",
  },
];

function Services() {
  return (
    <section id="services" className="container py-5">
      <h2 className="text-center fw-bold mb-5">Our Services</h2>

      <div className="row">
        {services.map((service, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4"
          data-aos="fade-up"
           key={index}>
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              {service.icon}
              <h5 className="mt-3">{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;