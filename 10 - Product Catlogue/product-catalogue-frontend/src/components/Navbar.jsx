import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Product Catalogue
                </Link>

                <div className="ms-auto">
                    <Link className="btn btn-light" to="/add">
                        Add Product
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;