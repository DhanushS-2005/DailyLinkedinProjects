import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-dark bg-dark">

            <div className="container">

                <Link to="/" className="navbar-brand">
                    Contact Manager
                </Link>

                <Link to="/add" className="btn btn-success">
                    Add Contact
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;