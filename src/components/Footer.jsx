import logo from "../assets/images/logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
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
              <FaPhoneAlt /> +91 9074018257
            </p>

            <p>
              <FaEnvelope /> midhilsuresh@gmail.com
            </p>

            <p>
              <FaMapMarkerAlt />
              {" "}
              14th Mile, Melood P.O, Adoor
            </p>

            <div className="mt-4">

              <FaWhatsapp
                size={30}
                className="me-3"
              />

              <FaFacebook
                size={30}
                className="me-3"
              />

              <FaInstagram size={30} />

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          © 2026 GI-TAX Tax Consultants

        </div>

      </div>

    </footer>
  );
}

export default Footer;