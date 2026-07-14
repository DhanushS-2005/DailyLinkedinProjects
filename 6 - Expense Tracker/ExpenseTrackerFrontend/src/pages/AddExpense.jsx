import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../services/expenseService";
import { toast } from "react-toastify";

function AddExpense() {

    const navigate = useNavigate();

    const [expense, setExpense] = useState({
        title: "",
        category: "",
        amount: "",
        date: "",
        description: ""
    });

    const handleChange = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        });
    };

    const saveExpense = async (e) => {

        e.preventDefault();

        try {

            await addExpense(expense);

            toast.success("Expense Added Successfully");

            navigate("/expenses");

        } catch (error) {

            console.log(error);

            toast.error("Failed to Add Expense");

        }

    };

    return (

        <div className="container">

            <div className="card shadow">

                <div className="card-header">

                    <h3>Add Expense</h3>

                </div>

                <div className="card-body">

                    <form onSubmit={saveExpense}>

                        <div className="mb-3">

                            <label className="form-label">
                                Title
                            </label>

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

                            <label className="form-label">
                                Category
                            </label>

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

                            <label className="form-label">
                                Amount
                            </label>

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

                            <label className="form-label">
                                Date
                            </label>

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

                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                value={expense.description}
                                onChange={handleChange}
                            />

                        </div>

                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Save Expense
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddExpense;