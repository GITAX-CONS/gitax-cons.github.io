import {
  FaFileAlt,
  FaReceipt,
  FaBuilding,
} from "react-icons/fa";

const resources = [
  {
    icon: <FaFileAlt size={40} className="text-success" />,
    title: "ITR Document Checklist",
    description:
      "Know the common documents required for Income Tax Return filing.",
  },
  {
    icon: <FaReceipt size={40} className="text-success" />,
    title: "GST Registration Checklist",
    description:
      "Prepare the essential documents required for GST registration.",
  },
  {
    icon: <FaBuilding size={40} className="text-success" />,
    title: "Company Registration Checklist",
    description:
      "Understand the basic documents needed to register a company.",
  },
];

function Resources() {
  return (
    <section id="resources" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Helpful Resources</h2>
          <p className="text-muted">
            Useful checklists to help you prepare your documents.
          </p>
        </div>

        <div className="row g-4">
          {resources.map((resource, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">{resource.icon}</div>

                <h4>{resource.title}</h4>

                <p className="text-muted">
                  {resource.description}
                </p>

                <a
                  href="#contact"
                  className="btn btn-outline-success mt-auto"
                >
                  Request Checklist
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;