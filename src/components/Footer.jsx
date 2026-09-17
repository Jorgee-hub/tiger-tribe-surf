import { colores } from "../styles/theme";

function Footer() {
  return (
    <footer
      className="py-4 text-center text-white-50"
      style={{
        backgroundColor: colores.oceano,
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Tiger Tribe Surf School — Tamarindo,
          Costa Rica.
        </p>
      </div>
    </footer>
  );
}

export default Footer;