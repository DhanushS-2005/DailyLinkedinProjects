import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Recipe Manager
                </Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/categories">
                        Categories
                    </Link>

                    <Link className="nav-link" to="/recipes">
                        Recipes
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;