const faqs = [
  {
    question: "Who should file an Income Tax Return?",
    answer:
      "Individuals and businesses meeting the applicable income or filing conditions should file an Income Tax Return.",
  },
  {
    question: "How long does GST registration take?",
    answer:
      "Processing time depends on document verification and approval by the GST authorities.",
  },
  {
    question: "What documents are required for ITR filing?",
    answer:
      "Common documents include PAN, Aadhaar, Form 16, bank details, income statements and deduction proofs.",
  },
  {
    question: "Can GI-TAX help with accounting and bookkeeping?",
    answer:
      "Yes. We provide accounting and bookkeeping support for businesses and professionals.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <p className="text-muted">
            Quick answers to common tax and compliance questions.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                id={`faq-${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;