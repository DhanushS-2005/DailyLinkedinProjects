import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import { addEmployee } from "../services/employeeService";

function AddEmployee() {

    const navigate = useNavigate();

    const saveEmployee = async (employee) => {
        await addEmployee(employee);
        navigate("/");
    };

    return (
        <EmployeeForm
            onSubmit={saveEmployee}
            buttonText="Add"
        />
    );
}

export default AddEmployee;