function Stats() {
  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "5000+", label: "ITR Filed" },
    { number: "99%", label: "On-Time Compliance" },
    { number: "15+", label: "Professional Services" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">

          {stats.map((item, index) => (

            <div className="col-md-3 mb-4" key={index}>

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body">

                  <h2 className="text-success fw-bold">
                    {item.number}
                  </h2>

                  <p className="mb-0">
                    {item.label}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;