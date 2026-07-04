import logo from "../assets/images/logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-3 mt-5"
      style={{ background: "#0B6E4F" }}
    >
      <div className="container">

        <div className="row">

          {/* Company */}

          <div className="col-lg-4 mb-4">

            <img
              src={logo}
              height="70"
              alt="GI-TAX"
              className="mb-3"
            />

            <p>

              Simplifying Tax.
              <br />
              Empowering Growth.

            </p>

          </div>

          {/* Services */}

          <div className="col-lg-3">

            <h5>Services</h5>

            <p>Income Tax</p>

            <p>GST</p>

            <p>Accounting</p>

            <p>Payroll</p>

          </div>

          {/* Contact */}

          <div className="col-lg-5">

            <h5>Contact</h5>

           <p>
  <FaPhoneAlt className="me-2" />
  <a
    href="tel:+919074018257"
    className="text-white text-decoration-none"
  >
    +91 9074018257
  </a>
</p>

           <p>
  <FaEnvelope className="me-2" />
  <a
    href="mailto:gitaxconsultants@gmail.com"
    className="text-white text-decoration-none"
  >
    gitaxconsultants@gmail.com
  </a>
</p>

            <p>
              <FaMapMarkerAlt />
              {" "}
              14th Mile, Melood P.O, Adoor
            </p>

            <div className="mt-4">

              <a
  href="https://wa.me/919074018257?text=Hello%20GI-TAX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noreferrer"
  className="text-white me-3"
>
  <FaWhatsapp size={30} />
</a>
            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

         © {new Date().getFullYear()} GI-TAX Tax Consultants. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;