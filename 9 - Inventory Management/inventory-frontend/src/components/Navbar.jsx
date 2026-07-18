import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Inventory Management
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add">
                                Add Product
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/low-stock">
                                Low Stock
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;