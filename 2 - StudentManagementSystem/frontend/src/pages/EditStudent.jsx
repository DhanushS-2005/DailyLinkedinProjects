import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent, updateStudent } from "../services/studentService";
import { toast } from "react-toastify";

function EditStudent() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        course: "",
        year: ""
    });

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const response = await getStudent(id);
        setStudent(response.data);
    };

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateStudent(id, student);

        toast.success("Student Updated Successfully");

        navigate("/students");
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8">

            <h1 className="text-3xl font-bold mb-6">
                Edit Student
            </h1>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4"
            >

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={student.firstName}
                    onChange={handleChange}
                    className="border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={student.lastName}
                    onChange={handleChange}
                    className="border p-3 rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    className="border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={student.phone}
                    onChange={handleChange}
                    className="border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={student.department}
                    onChange={handleChange}
                    className="border p-3 rounded"
                    required
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                    className="border p-3 rounded"
                    required
                />

                <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={student.year}
                    onChange={handleChange}
                    className="border p-3 rounded col-span-2"
                    required
                />

                <button
                    type="submit"
                    className="bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 col-span-2"
                >
                    Update Student
                </button>

            </form>

        </div>
    );
}

export default EditStudent;