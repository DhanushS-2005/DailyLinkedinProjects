import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

import {
    getEmployee,
    updateEmployee
} from "../services/employeeService";

function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const response = await getEmployee(id);
        setEmployee(response.data);
    };

    const editEmployee = async (updatedEmployee) => {
        await updateEmployee(id, updatedEmployee);
        navigate("/");
    };

    if (!employee) {
        return <h2>Loading...</h2>;
    }

    return (
        <EmployeeForm
            initialData={employee}
            onSubmit={editEmployee}
            buttonText="Update"
        />
    );
}

export default EditEmployee;