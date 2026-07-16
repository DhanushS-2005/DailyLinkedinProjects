import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Notes App
        </Link>

        <Link
          to="/add"
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          + Add Note
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;