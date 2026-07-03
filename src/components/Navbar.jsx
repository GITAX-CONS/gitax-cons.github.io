import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="GI-TAX"
            height="55"
            className="me-2"
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
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <span
              className="me-4 fw-semibold text-success"
              style={{fontSize:"17px"}}
            >
              📞 +91 9074018257
            </span>

            <button className="btn btn-success px-4">
              Get Consultation
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;