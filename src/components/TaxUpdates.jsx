const updates = [
  {
    date: "03 Jul",
    title: "ITR Filing for AY 2026-27 Open",
    description: "File your Income Tax Return before the due date to avoid penalties."
  },
  {
    date: "01 Jul",
    title: "GST Return Due Reminder",
    description: "Remember to file your monthly GST returns on time."
  },
  {
    date: "28 Jun",
    title: "MSME Registration Benefits",
    description: "Explore the latest benefits available for MSME registered businesses."
  }
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

            <div className="col-md-4 mb-4" key={index}>

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