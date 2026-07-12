import { useState, useEffect } from "react";

function EmployeeForm({ initialData, onSubmit, buttonText }) {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        salary: "",
        joiningDate: ""
    });

    useEffect(() => {
        if (initialData) {
            setEmployee(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(employee);
    };

    return (
        <div className="form-container">

            <h2>{buttonText} Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={employee.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={employee.salary}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="joiningDate"
                    value={employee.joiningDate}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {buttonText}
                </button>

            </form>

        </div>
    );
}

export default EmployeeForm;