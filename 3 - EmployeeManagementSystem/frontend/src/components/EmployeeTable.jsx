import { Link } from "react-router-dom";

function EmployeeTable({ employees, onDelete }) {
  return (
    <table>

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Joining Date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {employees.length === 0 ? (
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              No Employees Found
            </td>
          </tr>
        ) : (
          employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>₹ {employee.salary}</td>
              <td>{employee.joiningDate}</td>

              <td>

                <Link to={`/edit/${employee.id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))
        )}

      </tbody>

    </table>
  );
}

export default EmployeeTable;