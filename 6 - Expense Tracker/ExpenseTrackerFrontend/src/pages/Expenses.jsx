import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getExpenses,
    deleteExpense,
    searchExpense
} from "../services/expenseService";
import { toast } from "react-toastify";

function Expenses() {

    const [expenses, setExpenses] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadExpenses();
    }, []);

    const loadExpenses = async () => {

        try {

            const response = await getExpenses();
            setExpenses(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const removeExpense = async (id) => {

        if (!window.confirm("Are you sure?")) return;

        try {

            await deleteExpense(id);

            toast.success("Expense Deleted");

            loadExpenses();

        } catch (error) {

            console.log(error);

            toast.error("Delete Failed");

        }

    };

    const handleSearch = async (value) => {

        setSearch(value);

        if (value === "") {

            loadExpenses();
            return;

        }

        try {

            const response = await searchExpense(value);
            setExpenses(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2>Expenses</h2>

                <Link
                    to="/add-expense"
                    className="btn btn-primary"
                >
                    Add Expense
                </Link>

            </div>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search Expense..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Actions</th>

                </tr>

                </thead>

                <tbody>

                {

                    expenses.map((expense) => (

                        <tr key={expense.id}>

                            <td>{expense.id}</td>

                            <td>{expense.title}</td>

                            <td>{expense.category}</td>

                            <td>₹ {expense.amount}</td>

                            <td>{expense.date}</td>

                            <td>

                                <Link
                                    to={`/edit-expense/${expense.id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeExpense(expense.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

    );

}

export default Expenses;