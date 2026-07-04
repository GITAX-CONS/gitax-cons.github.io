import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  return (
    <a
      href="#home"
      className="btn btn-primary rounded-circle shadow"
      title="Back to Top"
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </a>
  );
}

export default BackToTop;