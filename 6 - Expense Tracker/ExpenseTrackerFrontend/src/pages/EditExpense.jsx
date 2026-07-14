import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getExpense, updateExpense } from "../services/expenseService";
import { toast } from "react-toastify";

function EditExpense() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [expense, setExpense] = useState({
        title: "",
        category: "",
        amount: "",
        date: "",
        description: ""
    });

    useEffect(() => {
        loadExpense();
    }, []);

    const loadExpense = async () => {

        try {

            const response = await getExpense(id);
            setExpense(response.data);

        } catch (error) {

            console.log(error);
            toast.error("Unable to load expense");

        }

    };

    const handleChange = (e) => {

        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        });

    };

    const updateData = async (e) => {

        e.preventDefault();

        try {

            await updateExpense(id, expense);

            toast.success("Expense Updated Successfully");

            navigate("/expenses");

        } catch (error) {

            console.log(error);

            toast.error("Update Failed");

        }

    };

    return (

        <div className="container">

            <div className="card shadow">

                <div className="card-header">

                    <h3>Edit Expense</h3>

                </div>

                <div className="card-body">

                    <form onSubmit={updateData}>

                        <div className="mb-3">

                            <label>Title</label>

                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={expense.title}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label>Category</label>

                            <select
                                className="form-select"
                                name="category"
                                value={expense.category}
                                onChange={handleChange}
                                required
                            >

                                <option value="">Select Category</option>
                                <option>Food</option>
                                <option>Travel</option>
                                <option>Shopping</option>
                                <option>Bills</option>
                                <option>Entertainment</option>

                            </select>

                        </div>

                        <div className="mb-3">

                            <label>Amount</label>

                            <input
                                type="number"
                                className="form-control"
                                name="amount"
                                value={expense.amount}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label>Date</label>

                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={expense.date}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label>Description</label>

                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                value={expense.description}
                                onChange={handleChange}
                            />

                        </div>

                        <button
                            className="btn btn-success"
                            type="submit"
                        >
                            Update Expense
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditExpense;