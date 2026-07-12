import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee,
  searchEmployee,
  sortEmployee,
} from "../services/employeeService";
import EmployeeTable from "../components/EmployeeTable";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sortField, setSortField] = useState("name");
  const [direction, setDirection] = useState("asc");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      await deleteEmployee(id);
      loadEmployees();
    }
  };

  const handleSearch = async () => {
    if (keyword.trim() === "") {
      loadEmployees();
      return;
    }

    const response = await searchEmployee(keyword);
    setEmployees(response.data);
  };

  const handleSort = async (field, dir) => {
    const response = await sortEmployee(field, dir);
    setEmployees(response.data);
  };

  return (
    <div className="container">

      <div className="top-bar">

        <input
          type="text"
          placeholder="Search Employee..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>

        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="salary">Salary</option>
          <option value="joiningDate">Joining Date</option>
        </select>

        <select
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button
          onClick={() => handleSort(sortField, direction)}
        >
          Sort
        </button>

      </div>

      <EmployeeTable
        employees={employees}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default Home;