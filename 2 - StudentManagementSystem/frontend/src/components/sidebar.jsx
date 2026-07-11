import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">
        Student Management
      </h1>

      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="hover:bg-blue-600 p-2 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/students"
          className="hover:bg-blue-600 p-2 rounded"
        >
          Students
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;