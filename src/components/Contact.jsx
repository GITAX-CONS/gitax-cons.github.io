import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello GI-TAX,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`;

    const whatsappUrl =
      "https://wa.me/919074018257?text=" +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">
            We'd love to help with your tax and compliance needs.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h4 className="mb-4">Contact Information</h4>

                <p>
                  <FaPhoneAlt className="text-success me-2" />
<a
  href="tel:+919074018257"
  className="text-decoration-none text-dark"
>
  +91 9074018257
</a>
                </p>

                <p>
                 <FaEnvelope className="text-success me-2" />
<a
  href="mailto:gitaxconsultants@gmail.com"
  className="text-decoration-none text-dark"
>
  gitaxconsultants@gmail.com
</a>
                </p>

                <p>
  <FaWhatsapp className="text-success me-2" />
  <a
    href="https://wa.me/919074018257?text=Hello%20GI-TAX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none text-dark"
  >
    WhatsApp Available
  </a>
</p>

                <p>
  <FaMapMarkerAlt className="text-success me-2" />
  <a
    href="https://www.google.com/maps/search/?api=1&query=14th+Mile+Melood+Adoor+Kerala"
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none text-dark"
  >
    14th Mile, Melood P.O, Adoor
  </a>
</p>
                <hr />

<h5 className="mt-4 mb-3">
  <FaClock className="text-success me-2" />
  Office Hours
</h5>

<p className="mb-2">
  Monday – Saturday: 9:00 AM – 6:00 PM
</p>

<p className="mb-0">
  Sunday: By Appointment
</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h4 className="mb-4">Send Us a Message</h4>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    className="form-control mb-3"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <textarea
                    name="message"
                    className="form-control mb-3"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-success btn-lg"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
                  </div>
        </div>

        <div className="mt-4">
          <div className="card shadow-sm border-0 overflow-hidden">
            <iframe
              title="GI-TAX Office Location"
              src="https://www.google.com/maps?q=14th%20Mile%20Melood%20Adoor%20Kerala&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

          </section>
  );
}

export default Contact;