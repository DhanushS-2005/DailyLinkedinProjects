import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          📚 BookStore
        </Link>

        <div>

          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-warning" to="/cart">
            🛒 Cart
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;