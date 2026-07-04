const updates = [
  {
    date: "03 Jul",
    title: "ITR Filing for AY 2026–27 Is Live",
    description:
      "ITR filing facilities are now available. Start early and avoid last-minute filing issues.",
  },
  {
    date: "Jul 2026",
    title: "GST Return Filing Reminder",
    description:
      "July includes important GST compliance dates. Check the return applicable to your business and file on time.",
  },
  {
    date: "FY 2026–27",
    title: "MSME / Udyam Registration Support",
    description:
      "Eligible businesses can register under Udyam and access applicable MSME schemes and benefits.",
  },
];

function TaxUpdates() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Latest Tax Updates
        </h2>

        <div className="row">
          {updates.map((item, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
            >
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <span className="badge bg-success mb-3">
                    {item.date}
                  </span>

                  <h5>{item.title}</h5>

                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaxUpdates;