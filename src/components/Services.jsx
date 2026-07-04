import { useState } from "react";

import {
  FaFileInvoiceDollar,
  FaBuilding,
  FaCalculator,
  FaFileSignature,
  FaUsers,
  FaMoneyCheckAlt,
  FaReceipt,
  FaHandshake,
  FaStore,
  FaRocket,
  FaClipboardCheck,
  FaChartLine,
  FaSearchDollar,
  FaIdCard,
  FaFileContract,
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
    desc: "GST registration and compliance support.",
  },
  {
    title: "Accounting & Bookkeeping",
    icon: <FaMoneyCheckAlt size={40} color="#0B6E4F" />,
    desc: "Professional bookkeeping and accounting.",
  },
  {
    title: "Company Registration",
    icon: <FaBuilding size={40} color="#0B6E4F" />,
    desc: "Support for company incorporation.",
  },
  {
    title: "Digital Signature (DSC)",
    icon: <FaFileSignature size={40} color="#0B6E4F" />,
    desc: "DSC issuance and renewal support.",
  },
  {
    title: "Payroll",
    icon: <FaUsers size={40} color="#0B6E4F" />,
    desc: "Reliable payroll processing services.",
  },
  {
    title: "GST Return Filing",
    icon: <FaReceipt size={40} color="#0B6E4F" />,
    desc: "Timely GST return filing and compliance.",
  },
  {
    title: "TDS Returns",
    icon: <FaFileContract size={40} color="#0B6E4F" />,
    desc: "Preparation and filing of TDS returns.",
  },
  {
    title: "LLP Registration",
    icon: <FaHandshake size={40} color="#0B6E4F" />,
    desc: "Professional support for LLP registration.",
  },
  {
    title: "MSME Registration",
    icon: <FaStore size={40} color="#0B6E4F" />,
    desc: "Assistance with MSME and Udyam registration.",
  },
  {
    title: "Startup Registration",
    icon: <FaRocket size={40} color="#0B6E4F" />,
    desc: "Registration support for new startups.",
  },
  {
    title: "ROC Compliance",
    icon: <FaClipboardCheck size={40} color="#0B6E4F" />,
    desc: "Support for regular ROC compliance requirements.",
  },
  {
    title: "Tax Planning",
    icon: <FaChartLine size={40} color="#0B6E4F" />,
    desc: "Practical tax planning for individuals and businesses.",
  },
  {
    title: "Audit Support",
    icon: <FaSearchDollar size={40} color="#0B6E4F" />,
    desc: "Professional assistance for audit requirements.",
  },
  {
    title: "PAN / TAN Services",
    icon: <FaIdCard size={40} color="#0B6E4F" />,
    desc: "Assistance with PAN and TAN applications.",
  },
];

function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        Our Services
      </h2>

      <div className="row">
        {visibleServices.map((service, index) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            key={index}
          >
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <div>{service.icon}</div>

              <h5 className="mt-3">
                {service.title}
              </h5>

              <p>{service.desc}</p>

              <a
                href={`https://wa.me/919074018257?text=${encodeURIComponent(
                  `Hello GI-TAX, I would like to enquire about ${service.title}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success mt-auto"
              >
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-success btn-lg px-5"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Services"}
        </button>
      </div>
    </section>
  );
}

export default Services;