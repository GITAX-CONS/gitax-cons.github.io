import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/919074018257"
      target="_blank"
      rel="noreferrer"
      className="btn btn-success rounded-circle shadow"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default Whatsapp;