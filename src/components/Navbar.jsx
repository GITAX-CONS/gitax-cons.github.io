import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="GI-TAX TAX CONSULTANTS"
            className="navbar-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#resources">Resources</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <span
              className="me-4 fw-semibold text-success"
              style={{fontSize:"17px"}}
            >
              📞 +91 9074018257
            </span>

            <a
  href="#contact"
  className="btn btn-success"
>
  Get Consultation
</a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;