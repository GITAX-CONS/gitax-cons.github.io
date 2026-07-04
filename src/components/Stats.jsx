import {
  FaUsers,
  FaFileInvoiceDollar,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={40} className="text-success" />,
    number: "1000+",
    label: "Happy Clients",
  },
  {
    icon: <FaFileInvoiceDollar size={40} className="text-primary" />,
    number: "2500+",
    label: "Returns Filed",
  },
  {
    icon: <FaClock size={40} className="text-warning" />,
    number: "99%",
    label: "On-Time Compliance",
  },
  {
    icon: <FaBriefcase size={40} className="text-success" />,
    number: "15+",
    label: "Professional Services",
  },
];

function Stats() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">

          {stats.map((item, index) => (
            <div className="col-6 col-md-3 mb-4" 
            data-aos="zoom-in"
            key={index}>

              <div className="card stat-card border-0 rounded-4 h-100 text-center p-4">

                <div className="mb-3">
                  {item.icon}
                </div>

                <h2 className="fw-bold text-success">
                  {item.number}
                </h2>

                <p className="mb-0">
                  {item.label}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;